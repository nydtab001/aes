import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import logo from '/aeslogo.png';
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";


export default function Footer() {

  return (
    <footer className="bg-neutral-900 text-white mb-0 px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Mission */}
        <div>
          <img src={logo} alt="AES logo" className="max-sm:h-16 h-20 w-auto" />
          <p className="text-sm text-neutral-400 mt-6 leading-relaxed">
            We build with clarity, strength, and purpose — delivering scalable solutions for infrastructure, residential, and commercial projects across Southern Africa.
          </p>
          {/* <p className="mt-4 text-sm text-neutral-500 italic">
            “Built with purpose. Grounded in faith.”
          </p> */}
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-lg text-neutral-300">
            <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="/projects" className="hover:text-yellow-400 transition">Projects</a></li>
            <li><a href="/team" className="hover:text-yellow-400 transition">Our Team</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-lg text-neutral-300 hover:text-yellow-400 transition"><a href="tel:+263 77 220 0855" className="flex items-center gap-2"><BsTelephone /> +263 77 220 0855</a></p>
          <p className="text-lg text-neutral-300 hover:text-yellow-400 transition"><a href="mailTo:aes@aes.com" className="flex items-center gap-2"><MdOutlineEmail />aes@aes.com</a></p>
        </div>

        {/* Certifications & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Certifications</h3>
          <ul className="text-lg text-neutral-300 space-y-1">
            <li>ISO 9001: Quality Management</li>
            <li>Green Building Council Member</li>
            <li>Registered with CESA</li>
          </ul>
          {/* <h3 className="text-lg font-semibold mt-6 mb-3">Newsletter</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-neutral-800 text-sm px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black text-sm font-medium py-2 rounded hover:bg-yellow-400 transition"
            >
              Subscribe
            </button>
          </form> */}
        </div>
      </div>
      <div className="flex justify-center max-sm:space-x-4 sm:space-x-10 mt-12">
            <a href="#" className="hover:text-yellow-400 transition text-2xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400 transition text-2xl"><BsInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition text-2xl"><BsTwitterX /></a>
            <a href="#" className="hover:text-yellow-400 transition text-2xl"><FaTiktok /></a>
      </div>

      {/* Bottom Line */}
      <div className="mt-14 border-t border-neutral-700 pt-6 text-center text-md text-neutral-500">
        &copy; {new Date().getFullYear()} AE Solutions. Built with purpose. Built by <a href="https://www.linkedin.com/in/taboka-nyadza-2a1849161/" className="underline">Taboka Nyadza</a>.
      </div>
    </footer>
  );
}