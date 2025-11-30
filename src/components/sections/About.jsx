import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        'CAD (SolidWorks, CATIA, Fusion 360)',
        'Finite Element Analysis (FEA)',
        'Aerodynamics',
        'Thermodynamics',
        'Vehicle Dynamics',
        'Materials Science',
    ];

    const backendSkills = [
        'Suspension Design',
        'Brake System Optimization',
        'Power Unit Components',
        'Cooling Systems',
        'Telemetry & Data Analysis',
        'Wind Tunnel & CFD Simulation',
    ];

  return ( 
    <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>

        <div className="max-w-4xl mx-auto px-4">

            {/* TITLE */}
            <h2 className="text-4xl font-bold mb-8 
                           bg-gradient-to-r from-[#00A19B] to-cyan-400 
                           bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Hello! I'm a passionate mechanical engineer with a deep enthusiasm for high-performance automotive engineering, 
                    especially within the world of Formula 1. With a strong foundation in thermodynamics, aerodynamics, materials engineering, 
                    and advanced CAD simulation, I love designing and optimizing components that push the limits of speed, efficiency, and reliability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Frontend */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Mechanical Engineering</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((skill) => (
                                <span 
                                    key={skill}
                                    className="bg-[#00A19B]/10 text-[#00A19B] px-3 py-1 rounded-full text-sm 
                                               hover:bg-[#00A19B]/20 hover:shadow-[0_2_8px_rgba(0,161,155,0.2)] 
                                               transition-all">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Motorsport Engineering</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((skill) => (
                                <span 
                                    key={skill}
                                    className="bg-[#00A19B]/10 text-[#00A19B] px-3 py-1 rounded-full text-sm 
                                               hover:bg-[#00A19B]/20 hover:shadow-[0_2_8px_rgba(0,161,155,0.2)] 
                                               transition-all">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Education & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                
                {/* Education */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏦 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.S in Computer Science</strong> — Universitas Teknologi Yogyakarta (2021 - 2025)
                        </li>
                        <li>
                            <strong>Relevant Coursework</strong> — Data Structures, Algorithms, Web Development, Database Systems
                        </li>
                    </ul>
                </div>

                {/* Work Experience */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🛠 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">

                        <div>
                            <h4 className="font-semibold">
                                PTPS — Pengawas Tempat Pemungutan Suara (Jan 2024 – Mar 2024)
                            </h4>
                            <p>
                                Mengawasi jalannya pemilihan umum di tingkat kelurahan, memastikan proses berjalan lancar dan sesuai peraturan.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">
                                Freelance & Skill Development (Jul 2025 – Nov 2025)
                            </h4>
                            <p>
                                Fokus belajar teknologi baru, meningkatkan skill frontend–backend, dan membangun proyek portfolio 
                                untuk mempersiapkan karier profesional.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </RevealOnScroll>
    </section>
  )      
};
