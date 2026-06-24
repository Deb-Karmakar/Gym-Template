

const Coaches = () => {
    return (
        <section className="bg-white pb-24 w-full">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Images */}
                    <div className="flex gap-4">
                        <div className="w-[45%] translate-y-8">
                            <img
                                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1769&auto=format&fit=crop"
                                alt="Female Coach"
                                className="rounded-lg object-cover w-full aspect-[4/5] shadow-xl"
                            />
                        </div>
                        <div className="w-[55%]">
                            <img
                                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1770&auto=format&fit=crop"
                                alt="Male Coach"
                                className="rounded-lg object-cover w-full aspect-square shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-start gap-6 lg:pl-12">
                        <span className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                            Are you looking for a Mentor?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-black">
                            Coaches
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className="mt-4 bg-black text-white font-semibold px-8 py-3 rounded-sm hover:bg-gray-800 transition-colors text-sm">
                            Explore More
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Coaches;
