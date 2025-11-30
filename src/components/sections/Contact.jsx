import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Send error:", error);
                alert("An error occurred, please try again.");
            });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-[350px] md:w-[450px]">

                    {/* TITLE */}
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00A19B] to-[#1dd6ce] bg-clip-text text-transparent text-center">
                        Contact Me
                    </h2>

                    <form ref={form} className="space-y-6" onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                placeholder="Your Name..."
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                                           focus:outline-none focus:border-[#00A19B] focus:bg-[#00A19B]/10"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                placeholder="example@gmail.com"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                                           focus:outline-none focus:border-[#00A19B] focus:bg-[#00A19B]/10"
                            />
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                placeholder="Your Message..."
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                                           focus:outline-none focus:border-[#00A19B] focus:bg-[#00A19B]/10"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#00A19B] text-white py-3 px-6 rounded font-medium transition
                                       hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,161,155,0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
