import Marquee from "../magicui/marquee";

const reviews = [
    {
        name: "Marcus Johnson",
        username: "@marcusj",
        body: "The trainers here completely transformed my approach to fitness. Highly recommend this gym!",
        gradient: "from-blue-600 to-indigo-600",
    },
    {
        name: "Sarah Williams",
        username: "@sarah_fit",
        body: "Incredible equipment and an amazing supportive community. I've never felt stronger.",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        name: "David Chen",
        username: "@davidc",
        body: "Best facility in the city. The pricing plans are extremely reasonable for what you get.",
        gradient: "from-green-400 to-emerald-600",
    },
    {
        name: "Elena Rodriguez",
        username: "@elenar",
        body: "I love the group classes. The energy is unmatched and the space is always spotless.",
        gradient: "from-orange-400 to-red-500",
    },
    {
        name: "Michael Smith",
        username: "@mikesmith",
        body: "From beginners to advanced athletes, this place has everything you need to succeed.",
        gradient: "from-teal-400 to-cyan-500",
    },
    {
        name: "Jessica Park",
        username: "@jpark_lifts",
        body: "Joining this gym was the best decision I made this year. Period.",
        gradient: "from-yellow-400 to-orange-500",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
};

const ReviewCard = ({
    name,
    username,
    body,
    gradient,
}: {
    name: string;
    username: string;
    body: string;
    gradient: string;
}) => {
    return (
        <figure
            className="border border-white/5 relative w-80 cursor-pointer overflow-hidden rounded-xl p-5 bg-[#1a1a1a] shrink-0 mx-3 transition-colors hover:bg-[#222]"
        >
            <div className="flex flex-row items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-bold text-white text-[10px] sm:text-xs shrink-0 shadow-inner`}>
                    {getInitials(name)}
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold text-white">
                        {name}
                    </figcaption>
                    <p className="text-[13px] text-gray-400">{username}</p>
                </div>
            </div>
            <blockquote className="mt-4 text-[14px] text-gray-300 leading-relaxed max-w-full truncate whitespace-normal line-clamp-3">
                {body}
            </blockquote>
        </figure>
    );
};

const Testimonials = () => {
    return (
        <section className="bg-[#0a0a0a] py-24 w-full relative overflow-hidden flex flex-col items-center justify-center border-t border-white/5">

            <div className="text-center max-w-2xl mx-auto mb-16 px-4">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">What Our Members Say</h2>
                <p className="text-gray-400 text-sm md:text-base">
                    Join hundreds of satisfied individuals who have reached their goals at GYM.
                </p>
            </div>

            <div className="w-full relative">
                <Marquee pauseOnHover className="[--duration:30s] mb-8">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Dark mode vignettes */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0a0a0a] to-transparent hidden md:block"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a0a0a] to-transparent hidden md:block"></div>
            </div>
        </section>
    );
};

export default Testimonials;
