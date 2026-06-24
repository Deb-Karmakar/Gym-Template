import { useState } from 'react';
import { X } from 'lucide-react';
import train1 from '../../assets/train1.png';
import train2 from '../../assets/train2.png';
import train3 from '../../assets/train3.png';
import train4 from '../../assets/train4.png';
import train5 from '../../assets/train5.png';
import train6 from '../../assets/train6.png';

const trainers = [
    {
        id: 1,
        src: train1,
        name: "Rahul Singh",
        specializations: ["HIIT", "Strength"],
        bio: "Rahul specializes in functional training and high-intensity interval training. With over 6 years of experience, he helps clients build raw strength and extreme endurance."
    },
    {
        id: 2,
        src: train2,
        name: "Rohit Sharma",
        specializations: ["Flexibility", "Core"],
        bio: "Rohit emphasizes core stability, joint mobility, and injury prevention. His precise bodyweight routines guarantee a complete structural transformation."
    },
    {
        id: 3,
        src: train3,
        name: "Arjun Reddy",
        specializations: ["Powerlifting", "Nutrition"],
        bio: "A former competitive powerlifter, Arjun transforms physiques through disciplined heavy lifting and extremely precise, data-driven nutritional guidance."
    },
    {
        id: 4,
        src: train4,
        name: "Vikram Desai",
        specializations: ["Conditioning", "Mobility"],
        bio: "Vikram's dynamic calisthenics and conditioning routines build extraordinary physical control. He works with absolute beginners as well as elite athletes."
    },
    {
        id: 5,
        src: train5,
        name: "Divyansh Kaur",
        specializations: ["CrossFit", "Agility"],
        bio: "Divyansh is our leading cross-fit mentor. He brings relentless, infectious energy to every session, ensuring his clients push past their mental limits."
    },
    {
        id: 6,
        src: train6,
        name: "Aditya Verma",
        specializations: ["Sports Science", "Prep"],
        bio: "Backed by a master's in sports science, Aditya structures highly customized, progressive training plans designed out for maximum athletic output."
    }
];

const MeetOurTrainers = () => {
    const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);

    return (
        <section id="trainers" className="bg-white py-20 w-full border-t border-gray-100 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Meet Our Trainers</h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        Learn from the best certified experts across the nation. Our elite Indian mentors will aggressively push your boundaries and reshape your physique.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {trainers.map((trainer) => {
                        return (
                            <div
                                key={trainer.id}
                                onClick={() => setSelectedTrainer(trainer)}
                                className="rounded-lg overflow-hidden relative group aspect-square cursor-pointer"
                            >
                                <img
                                    src={trainer.src}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                                    <span className="text-white font-bold text-xl uppercase tracking-wide">{trainer.name}</span>
                                    <span className="text-brand-500 font-semibold text-sm">View Profile</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Trainer Profile Modal Overlay */}
            {selectedTrainer && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all"
                    onClick={() => setSelectedTrainer(null)}
                >
                    <div
                        className="bg-[#0a0a0a] rounded-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative shadow-2xl border border-white/10"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/50 text-white hover:bg-white hover:text-black rounded-full transition-colors"
                            onClick={() => setSelectedTrainer(null)}
                        >
                            <X size={20} />
                        </button>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto md:min-h-[400px]">
                            <img
                                src={selectedTrainer.src}
                                alt={selectedTrainer.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
                            <h3 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-tight">{selectedTrainer.name}</h3>
                            <div className="flex gap-2 mb-6 flex-wrap">
                                {selectedTrainer.specializations.map(spec => (
                                    <span key={spec} className="bg-white/10 text-gray-300 border border-white/5 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/10 pt-6">
                                {selectedTrainer.bio}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MeetOurTrainers;
