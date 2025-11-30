import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>

        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-8 
                         bg-gradient-to-r from-[#00A19B] to-cyan-400 
                         bg-clip-text text-transparent text-center">
            Projects Future
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-[#00A19B]/30 
                            hover:shadow-[0_2px_8px_rgba(0,161,155,0.1)] transition-all">
              
              <h3 className="text-xl font-bold mv-2">Cloud Platform</h3>

              <p className="text-gray-400 mb-4">
                Developing a cloud platform to host web applications, providing scalable and reliable infrastructure for seamless deployment and management.
              </p>

              <div>
                {["React", "Node.js", "AWS", "Docker"].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#00A19B]/10 text-[#00A19B] px-3 py-1 rounded-full text-sm 
                               hover:bg-[#00A19B]/20 
                               hover:shadow-[0_2_8px_rgba(0,161,155,0.1)] 
                               transition-all">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="#"
                   className="text-[#00A19B] hover:text-[#00A19B]/80 transition-colors my-4">
                  View Project ➜
                </a>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-[#00A19B]/30 
                            hover:shadow-[0_2px_8px_rgba(0,161,155,0.1)] transition-all">
              
              <h3 className="text-xl font-bold mv-2">Cloud Platform</h3>

              <p className="text-gray-400 mb-4">
                Developing a cloud platform to host web applications, providing scalable and reliable infrastructure for seamless deployment and management.
              </p>

              <div>
                {["React", "Node.js", "AWS", "Docker"].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#00A19B]/10 text-[#00A19B] px-3 py-1 rounded-full text-sm 
                               hover:bg-[#00A19B]/20 
                               hover:shadow-[0_2_8px_rgba(0,161,155,0.1)] 
                               transition-all">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="#"
                   className="text-[#00A19B] hover:text-[#00A19B]/80 transition-colors my-4">
                  View Project ➜
                </a>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-[#00A19B]/30 
                            hover:shadow-[0_2px_8px_rgba(0,161,155,0.1)] transition-all">
              
              <h3 className="text-xl font-bold mv-2">Cloud Platform</h3>

              <p className="text-gray-400 mb-4">
                Developing a cloud platform to host web applications, providing scalable and reliable infrastructure for seamless deployment and management.
              </p>

              <div>
                {["React", "Node.js", "AWS", "Docker"].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#00A19B]/10 text-[#00A19B] px-3 py-1 rounded-full text-sm 
                               hover:bg-[#00A19B]/20 
                               hover:shadow-[0_2_8px_rgba(0,161,155,0.1)] 
                               transition-all">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="#"
                   className="text-[#00A19B] hover:text-[#00A19B]/80 transition-colors my-4">
                  View Project ➜
                </a>
              </div>
            </div>

          </div>
        </div>

      </RevealOnScroll>
    </section>
  );
}
