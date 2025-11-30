import { RevealOnScroll } from "../RevealOnScroll";
import profilePhoto from "../../assets/photo.png";

export const Home = () => {
    return (
        <section 
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden
                       bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${profilePhoto})`,
            }}
        >

            {/* GRADIENT AGAR TEKS LEBIH JELAS */}
            <div className="
                absolute inset-0 
                bg-gradient-to-b
                from-black/20 
                via-black/40 
                to-black/80
                pointer-events-none
            "></div>

            {/* TEKS DI ATAS BACKGROUND */}
            <RevealOnScroll>
                <div className="relative z-10 text-center max-w-2xl pt-90">

                    <h1 className="
                        text-5xl md:text-7xl font-bold mb-6 
                        bg-gradient-to-r from-[#00A19B] to-cyan-400 
                        bg-clip-text text-transparent leading-snug
                    ">
                        Hi I'm Rangga
                    </h1>

                    <p className="text-lg md:text-xl mb-8 text-gray-300">
                        Mechanical Engineer | Automotive Enthusiast | Aspiring Formula 1 Engineer 
                    </p>

                    <div className="flex justify-center space-x-4">

                        <a 
                            href="#projects"
                            className="
                                bg-[#00A19B] text-white py-3 px-6 rounded font-medium 
                                transition hover:-translate-y-0.5 
                                hover:shadow-[0_0_15px_rgba(0,161,155,0.4)]
                            "
                        >
                            View Project
                        </a>

                        <a 
                            href="#contact"
                            className="
                                border border-[#00A19B]/50 text-[#00A19B] py-3 px-6 rounded font-medium
                                transition hover:-translate-y-0.5 
                                hover:shadow-[0_0_15px_rgba(0,161,155,0.2)]
                                hover:bg-[#00A19B]/10
                            "
                        >
                            Contact Me
                        </a>

                    </div>
                </div>
            </RevealOnScroll>

        </section>
    );
};
