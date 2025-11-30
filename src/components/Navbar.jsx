import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav
            className="
                fixed top-0 left-0 w-full z-50
                bg-[rgba(5,15,15,0.55)]
                backdrop-blur-xl
                border-b border-[#00A19B22]
                shadow-[0_2px_15px_rgba(0,161,155,0.12)]
                transition-all duration-300
            "
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    {/* LOGO */}
                    <a
                        href="#home"
                        className="font-mono text-xl font-bold tracking-wide text-white"
                    >
                        project<span className="text-[#00A19B]">.d1</span>
                    </a>

                    {/* MOBILE MENU BUTTON */}
                    <div
                        className="md:hidden w-8 h-6 flex flex-col justify-between cursor-pointer z-50"
                        onClick={() => setMenuOpen(prev => !prev)}
                    >
                        <span
                            className={`
                                block h-[2px] bg-[#00A19B] transition-all duration-300
                                ${menuOpen ? "rotate-45 translate-y-2" : ""}
                            `}
                        ></span>

                        <span
                            className={`
                                block h-[2px] bg-[#00A19B] transition-all duration-300
                                ${menuOpen ? "opacity-0" : ""}
                            `}
                        ></span>

                        <span
                            className={`
                                block h-[2px] bg-[#00A19B] transition-all duration-300
                                ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
                            `}
                        ></span>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center space-x-10">
                        {["Home", "About", "Projects", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="
                                    text-gray-300 
                                    hover:text-[#00A19B]
                                    transition-colors
                                    font-medium
                                "
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    );
};
