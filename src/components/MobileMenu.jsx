import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 flex flex-col items-center justify-center
        backdrop-blur-xl 
        bg-[rgba(5,15,15,0.75)]
        border-b border-[#00A19B22]
        shadow-[0_0_20px_rgba(0,161,155,0.15)]
        transition-all duration-500 ease-in-out 

        ${menuOpen 
          ? "h-screen opacity-100 pointer-events-auto" 
          : "h-0 opacity-0 pointer-events-none"}
      `}
    >

      {/* Close Button */}
      <button 
        onClick={() => setMenuOpen(false)} 
        className="absolute top-6 right-6 text-[#00A19B] text-6xl font-light 
                   hover:scale-110 transition-transform duration-300"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Items */}
      {["Home", "About", "Projects", "Contact"].map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          style={{ transitionDelay: `${index * 120}ms` }}
          className={`
            text-3xl font-semibold my-4 
            transition-all duration-500 
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
            text-white hover:text-[#00A19B]
          `}
        >
          {item}
        </a>
      ))}

    </div>
  );
};
