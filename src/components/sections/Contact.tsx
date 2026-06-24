import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-[#0a0a0a] py-24 w-full relative border-t border-white/5">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Info */}
                    <div className="flex flex-col justify-center">
                        <span className="text-white/40 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                            Ready to <br className="hidden md:block" /> Transform?
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            Whether you're curious about features, a free trial, or even press, we're ready to answer any and all questions.
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white shrink-0 border border-white/5">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                                    <p className="text-gray-400">123 Fitness Ave, NY 10012</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white shrink-0 border border-white/5">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                                    <p className="text-gray-400">+1 (800) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white shrink-0 border border-white/5">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                                    <p className="text-gray-400">hello@gym.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-[#111] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-center relative overflow-hidden">
                        <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                        <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">First Name</label>
                                    <input type="text" className="bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="John" required />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Last Name</label>
                                    <input type="text" className="bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Email Address</label>
                                <input type="email" className="bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="john@example.com" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Message</label>
                                <textarea rows={4} className="bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="Tell us about your goals..." required></textarea>
                            </div>
                            <button className="bg-white text-black font-bold text-lg py-4 rounded-lg mt-4 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors uppercase tracking-widest group">
                                Submit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
