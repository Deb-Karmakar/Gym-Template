import heroImg from '../../assets/hero.png';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center pt-20 overflow-hidden bg-black">
            {/* Background Image Setup */}
            <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 100%), url(${heroImg})`,
                }}
            ></motion.div>

            {/* Subtle glow accent */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 blur-[140px] rounded-full pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="max-w-3xl flex flex-col gap-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">
                            Push Beyond Boundaries
                        </span>
                        <h1 className="text-6xl md:text-[5rem] lg:text-[6rem] font-black text-white leading-[0.95] tracking-tighter uppercase">
                            Elevate <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                Your Workout
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-gray-300 text-base md:text-lg max-w-md leading-relaxed mt-2"
                    >
                        Join India's premier fitness community. Build raw strength, enhance your flexibility, and completely transform your physical health with elite coaching right here.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="pt-6 grid grid-cols-2 sm:flex sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <a href="#contact" className="relative overflow-hidden group bg-white text-black font-black px-4 sm:px-10 py-4 transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest rounded-sm border border-white text-center">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Started</span>
                            <div className="absolute inset-0 bg-[#1a1a1a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        </a>
                        <a href="#pricing" className="bg-transparent border border-white/20 text-white font-bold px-4 sm:px-10 py-4 hover:bg-white/10 transition-colors text-xs sm:text-sm uppercase tracking-widest rounded-sm backdrop-blur-sm text-center">
                            View Plans
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Decorative vertical text */}
            <div className="hidden lg:block absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 pointer-events-none">
                <p
                    className="text-white/5 text-2xl xl:text-4xl font-black uppercase tracking-[0.4em] whitespace-nowrap select-none"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    Fitness Gym Community
                </p>
            </div>
        </section>
    );
};

export default Hero;
