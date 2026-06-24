import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: 'Basic Plan',
            price: isYearly ? 19990 : 1999,
            period: isYearly ? '/ year' : '/ month',
            desc: 'Start your fitness journey securely.',
            features: [
                'Access to gym floor',
                'General machines & weights',
                'Air-conditioned facility',
                'Basic locker access'
            ],
            highlighted: false
        },
        {
            name: 'Premium Plan',
            price: isYearly ? 39990 : 3999,
            period: isYearly ? '/ year' : '/ month',
            desc: 'Our most popular comprehensive package.',
            features: [
                'All Basic features',
                'Unlimited group classes',
                'Steam & Sauna access',
                '1 Diet plan per month',
                'Advanced app tracking'
            ],
            highlighted: true
        },
        {
            name: 'Pro Plan',
            price: isYearly ? 59990 : 5999,
            period: isYearly ? '/ year' : '/ month',
            desc: 'Elite training structure and guidance.',
            features: [
                'All Premium features',
                '4 Personal Training sessions / month',
                'Weekly nutritionist call',
                'Priority support',
                'Bring a guest on weekends',
                'Exclusive merchandise'
            ],
            highlighted: false
        }
    ];

    return (
        <section id="pricing" className="bg-gray-50 py-24 w-full">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
                    <div>
                        <span className="text-gray-400 font-medium uppercase tracking-wider text-sm block mb-2">
                            Pricing Plan
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-black">JOIN TODAY</h2>
                    </div>

                    {/* Toggle */}
                    <div className="flex items-center gap-2 bg-white p-1 rounded-sm border border-gray-200">
                        <button
                            className={`px-6 py-2 rounded-sm text-sm font-semibold transition-colors ${!isYearly ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-6 py-2 rounded-sm text-sm font-semibold transition-colors ${isYearly ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 lg:pb-0 lg:grid lg:grid-cols-3 gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`snap-center shrink-0 w-[85vw] md:w-[350px] lg:w-auto rounded-lg p-8 flex flex-col h-full ${plan.highlighted
                                ? 'bg-[#1a1a1a] text-white shadow-2xl lg:scale-105 z-10'
                                : 'bg-white text-black border border-gray-100 shadow-xl'
                                }`}
                        >
                            <h3 className={`text-sm font-bold mb-4 uppercase ${plan.highlighted ? 'text-brand-500' : 'text-gray-500'}`}>
                                {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-black">₹{plan.price}</span>
                                <span className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {plan.period}
                                </span>
                            </div>
                            <p className={`text-sm mb-8 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                                {plan.desc}
                            </p>

                            <ul className="flex flex-col gap-4 mb-8 flex-grow">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3">
                                        <CheckCircle2 size={16} className={plan.highlighted ? 'text-brand-500' : 'text-gray-400'} />
                                        <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-sm font-bold transition-colors text-sm uppercase tracking-wider ${plan.highlighted
                                    ? 'bg-white text-black hover:bg-gray-200'
                                    : 'bg-[#1a1a1a] text-white hover:bg-black'
                                    }`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
