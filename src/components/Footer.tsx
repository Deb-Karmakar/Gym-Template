import instaIcon from '../assets/insta.png';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] pt-16 pb-8 w-full relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">

                    {/* Brand */}
                    <div className="flex flex-col gap-6 lg:col-span-4">
                        <span className="text-2xl font-black tracking-tighter uppercase text-white leading-none">GY<span className="text-brand-500">M</span></span>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            The foremost premium fitness network across Delhi, Mumbai, and Bangalore dedicated to building stronger and healthier lives.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#222] transition-colors border border-white/5">
                                <i className="devicon-facebook-plain text-xl text-white"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#222] transition-colors border border-white/5">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" className="w-5 h-5 brightness-0 invert" alt="TW" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#222] transition-colors border border-white/5">
                                <img src={instaIcon} className="w-5 h-5 brightness-0 invert" alt="IG" />
                            </a>
                        </div>
                    </div>

                    {/* Links Group (Two Columns on Mobile) */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-4">
                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-white mb-4 lg:mb-6 uppercase text-sm">Quick Links</h4>
                            <ul className="flex flex-col gap-3">
                                {['Home', 'About', 'Classes', 'Trainers', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="font-bold text-white mb-4 lg:mb-6 uppercase text-sm">Support</h4>
                            <ul className="flex flex-col gap-3">
                                {['FAQ', 'Help', 'Privacy', 'Terms'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h4 className="font-bold text-white mb-4 lg:mb-6 uppercase text-sm">Contact Information</h4>
                        <ul className="flex flex-col gap-3">
                            <li className="text-sm text-gray-400">
                                <span className="block text-white font-semibold mb-1">Address:</span>
                                45 Brigade Road, Central District, Bengaluru 560001
                            </li>
                            <li className="text-sm text-gray-400">
                                <span className="block text-white font-semibold mb-1">Email:</span>
                                namaste@gym.in
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Designed by Deb Karmakar.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
