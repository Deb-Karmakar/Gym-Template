import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const StatCounter = ({ endValue, suffix = '', label }: { endValue: number, suffix?: string, label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = endValue / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= endValue) {
                    setValue(endValue);
                    clearInterval(timer);
                } else {
                    setValue(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, endValue]);

    return (
        <div ref={ref} className="flex flex-col gap-2">
            <span className="text-3xl md:text-4xl font-black text-white">
                {value}{suffix}
            </span>
            <span className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
                {label}
            </span>
        </div>
    );
};

const Stats = () => {
    const statsData = [
        { endValue: 5, suffix: '+', label: 'Years Experience' },
        { endValue: 10, suffix: '+', label: 'Expert Trainers' },
        { endValue: 700, suffix: '+', label: 'Satisfied Clients' },
        { endValue: 99, suffix: '%', label: 'Premium Equipment' },
    ];

    return (
        <div className="bg-[#0a0a0a] border-y border-white/10 py-10 relative z-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x divide-white/10">
                    {statsData.map((stat, index) => (
                        <StatCounter key={index} endValue={stat.endValue} suffix={stat.suffix} label={stat.label} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
