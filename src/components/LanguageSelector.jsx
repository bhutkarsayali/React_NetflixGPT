import React, { useState, useRef, useEffect } from "react";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/redux-store/configSlice";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.config.lang);
  console.log("selectedLanguage : ", selectedLanguage);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang) => {
    console.log("lang================", lang);
    dispatch(changeLanguage(lang));
  };
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        {/* Globe Icon */}
        <svg
          className="w-5 h-5 text-gray-600 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
        </svg>
        <span className="text-sm text-gray-700">{selectedLanguage}</span>
        <svg
          className={`w-4 h-4 ml-2 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.identifier}
              onClick={() => {
                handleLanguageChange(lang.identifier);
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
            >
              {lang.name} ({lang.identifier})
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
