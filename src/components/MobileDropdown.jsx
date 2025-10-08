import { Link } from "react-router-dom";
import DropdownButton from "./assets/DropdownButton";

export default function MobileDropdown({ item, activeLabel, setActiveLabel, dropdownContent }) {
  const isOpen = activeLabel === item.label;
  const submenu = dropdownContent[item.label];

  return (
    <div className="flex flex-col  text-gray-800">
      <div className="flex justify-between text-left text-xl py-4 px-2 hover:text-blue-900">
        <Link className="px-6" to={item.href}>{item.label.slice(0, -2).trim()}</Link>
        <button
          className="hover:text-blue-900 border-none px-6"
          onClick={() =>
            setActiveLabel(isOpen ? null : item.label)
          }
        >
          <span className={isOpen ? "transition-transform transform rotate-180 inline-block" : "transition-transform"}>
            <DropdownButton/>
            </span>
        </button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col bg-slate-600">
          {submenu?.map((sub, idx) => (
            <a
              key={idx}
              href={sub.href}
              className="text-l text-left py-4 px-8 text-white hover:bg-blue-700"
            >
              {sub.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}