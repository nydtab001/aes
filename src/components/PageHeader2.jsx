// src/components/PageHeader.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/aeslogo.png"; // Update the path to your  logo
import { useState, useEffect } from 'react';
import MobileDropdown from "./MobileDropdown";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";


function renderDropDown(open,setopen, subopen, setsub, item, idx, dropdownContent){
  const isactive = open === item.label
  const subactive = subopen === dropdownContent[item.label].label
  const submenu = dropdownContent[item.label];
  const location = useLocation();

      return(
        <>
        <div
        className="relative text-align:center"
        onMouseEnter={() => setopen(item.label)}
        onMouseLeave={() => setopen(null)}
        >
          <Link 
              key={idx}
              to={item.href}
              className={item.className ?? `text-lg font-medium mx-auto transition-colors duration-300 ${location.pathname === item.href ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-700 hover:text-blue-900" }`}
          >
              {item.label}
          </Link>
              <div className={`absolute top-full flex flex-col z-50 ${
          isactive ? 'opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
            <div className="h-[43px] w-full">
              </div>
              {submenu?.map((sub,idx) => (
                <>
                <div
                onMouseEnter={() => setsub(sub.label)}
                onMouseLeave={() => setsub(null)}
                className="text-gray-700 hover:text-blue-900 relative bg-white shadow-md w-48"
                >
                <Link 
                key={idx}
                to={sub.href}
                target={sub.target}
                className=" block px-4 py-2 hover:bg-gray-100"
                >
                {sub.label}
              </Link>
              <div
                className={subopen === sub.label ? 'opacity-100 bg-slate-600 text-white':'max-h-0 opacity-0'}
              >
              {sub.children?.map((subm,idxs) => (
                  <Link 
                key={idxs}
                to={subm.href}
                target={subm.target}
                className="block px-4 py-2 hover:text-blue-700">
                  {subm.label}
                  </Link>
                ))}
                </div>
                </div>
                </>            
            ))}
              </div>
        </div>
        </>
      )
}

export default function PageHeader() {

  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
            { label: "HOME", href: "/" },
            { label: "ABOUT", href: "/about" },
            { label: "SERVICES", href: "/services" },
            { label: "PROJECTS", href: "/projects" },
            { label: "CONTACT", href: "/contact" },
            // { label: "Give", href: "/give", className: "bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition" }
        ];

  const [isOpen, setIsOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);
  const [subopen, setsub] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

//   const filteredResults = allItems.filter(item =>
//   item.title.toLowerCase().includes(searchQuery.toLowerCase())
// );

const handleSearch = (e) => {
  e.preventDefault();
  if (searchQuery.trim()) {
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  }
};



  const dropdownContent = {
  "About Us ▼": [
    { label: "Official beliefs", href: "https://www.adventist.org/beliefs/", target: "_blank" },
    { label: "Church Manual", href: "https://gc.adventist.org/wp-content/uploads/2025/07/2022-Seventh-day-Adventist-Church-Manual.pdf", target: "_blank" },
    { label: "Church Leaders ▼", href: "/about/#leaders", 
      children: [
        {label: "Pastor", href: "/about/#pastor"},
        {label: "Elders", href: "/about/#elders"},
        {label: "Deacons", href: "/about/#deacons"},
      ]
    },
  ],
  "Media ▼": [
    { label: "Sermons", href: "/media/sermons" },
    { label: "Events", href: "/media/events" },
  ],
};

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const threshold = window.innerHeight * 0.5; // 50% of viewport height
    setScrolled(window.scrollY > threshold); // adjust threshold as needed
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <>
    <AnimatePresence>
    <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }} 
    className={` z-[999] fixed top-0 w-full border-none border-gray-200 shadow-md transition-colors duration-500 ease-in-out ${(!mobileOpen && isHome && !scrolled ) ? 'hover:bg-white/60' : ''}
    ${
    (scrolled || mobileOpen || !isHome) ? "bg-white/100" : "bg-white/0"
  }`}>
      <div className="max-w-7xl mx-auto flex items-center md:px-2 px-8 justify-between py-3">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="AES logo" className="max-sm:h-12 h-20 w-auto" />
          <div className="text-left">
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-6">
         {/* <form onSubmit={handleSearch} className="flex items-center space-x-2">
  <input
    type="text"
    placeholder="Search..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
  />
  <button
    type="submit"
    className="text-blue-900 hover:text-blue-700"
  >
    🔍
  </button>
</form> */}

          {navItems.map((item, idx) => (
            item.label !== "About Us ▼" && 
            item.label !== "Ministries " &&
            item.label !== "Media ▼" ? (
            <Link
              key={idx}
              to={item.href}
              className={item.className ?? `text-base font-medium mx-auto transition-colors duration-300 ${location.pathname === item.href ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-900 hover:text-blue-900" }`}
            >
              {item.label}
            </Link>
           ) : (
              renderDropDown(isOpen, setIsOpen, subopen, setsub, item, idx, dropdownContent)
           )
          ))}
        </nav>
        
        {/* hamburger */}
        {!mobileOpen && (<button
          className="md:hidden border-none bg-transparent p-2 focus:outline-none focus:ring-0"
          onClick={() => setMobileOpen(true)}
        >
          <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>)}

        {/* cancel */}
        {mobileOpen && (<button
          className="md:hidden border-none bg-transparent p-2 focus:outline-none focus:ring-0"
          onClick={() => setMobileOpen(false)}
        >
          <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>)}
      </div>
    </motion.header>
    </AnimatePresence>
    <div
  className={`fixed top-[72px] left-0 shadow-md py-6 w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
    mobileOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className=" flex flex-col">

    {navItems.map((item, idx) => (
      item.label !== "About Us ▼" && 
      item.label !== "Media ▼" ? (
      <Link
        key={idx}
        to={item.href}
        className="text-xl py-4 px-8 text-left text-gray-800 hover:text-blue-900"
        // onClick={() => setMobileOpen(!mobileOpen)}
      >
        {item.label}
      </Link>) : (
        <MobileDropdown
          key={idx}
          item={item}
          activeLabel={mobileDrop}
          setActiveLabel={setMobileDrop}
          dropdownContent={dropdownContent}      
        >

        </MobileDropdown>
      )
    ))}
  </div>
</div>
</>
  );
}
