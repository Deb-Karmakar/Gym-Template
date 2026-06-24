import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Trainers', href: '#trainers' },
        { name: 'Price', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-4 md:py-6'}`}>
            <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-black tracking-tighter uppercase text-white leading-none">GY<span className="text-brand-500">M</span></span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Join Now Button & Mobile Toggle container */}
                <div className="flex items-center gap-4">
                    {/* Join Now - visible on desktop and mobile now */}
                    <a href="#contact" className="bg-white text-black font-semibold px-4 py-2 md:px-6 md:py-2.5 rounded-sm hover:bg-gray-200 transition-colors text-xs md:text-sm">
                        Join Now
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-gray-300 hover:text-white py-2 border-b border-white/5"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
