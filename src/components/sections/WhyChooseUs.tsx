import { ShieldCheck, Dumbbell, Clock } from 'lucide-react';
import inf1 from '../../assets/inf1.png';
import inf2 from '../../assets/inf2.png';
import inf3 from '../../assets/inf3.png';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-black" />,
            title: 'World-Class Equipment',
            desc: 'Train with top-tier international standard machines tailored for absolute heavy lifting and functional strength.'
        },
        {
            icon: <Dumbbell className="w-6 h-6 text-black" />,
            title: 'Elite Indian Trainers',
            desc: 'Our professionally certified coaches have trained nationwide athletes and provide elite localized guidance.'
        },
        {
            icon: <Clock className="w-6 h-6 text-black" />,
            title: 'Flexible Hours',
            desc: 'Fit your workouts into any schedule with our 24/7 facility access, designed specifically for busy metropolitan lives.'
        }
    ];

    return (
        <section id="about" className="bg-white py-24 w-full">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Why Choose Us</h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        We represent the gold standard of fitness living across the country. Break your physical limits with our unmatched community.
                    </p>
                </div>

                {/* Content Split */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Features List */}
                    <div className="flex flex-col gap-8 md:gap-12">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="flex flex-col justify-end">
                            <img
                                src={inf1}
                                alt="Gym equipment"
                                className="rounded-lg object-cover w-full h-[60%] mb-4"
                            />
                            <img
                                src={inf2}
                                alt="Gym weights"
                                className="rounded-lg object-cover w-full h-[35%]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <img
                                src={inf3}
                                alt="Gym training"
                                className="rounded-lg object-cover w-full h-[98%]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
