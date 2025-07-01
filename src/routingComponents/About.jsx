import React from "react";
const historyContent = [
    {
        title: "Welcome Message",
        text: `Dear brothers and sisters in Jesus Christ. I am Fr. Jerome Gnana Prabu, Parish Priest of St. Joseph The Worker Church, Thuvakudi, near BHEL Township. I wish to share with you the journey and needs of our parish community.`,
    },
    {
        title: "Our Parish Community",
        text: `Our church serves about 1300 Catholic families in Thuvakudimalai, including the main parish and 11 substations. Since 1969, our church has been a spiritual home for many.`,
    },
    {
        title: "Challenges Faced",
        text: `Over the years, the church building has suffered damage, especially to the roof, making it unsafe for gatherings. Despite several repair attempts, the issues persist, affecting our ability to hold celebrations.`,
    },
    {
        title: "A New Beginning",
        text: `After much discussion, the Parish Council decided to construct a new church with better facilities. A committee was formed to plan and recommend the best way forward.`,
    },
    {
        title: "Planning & Approval",
        text: `The committee, after consulting engineers and architects, concluded that renovation was not feasible. Our Bishop has granted permission to build a new church, and preparations are underway.`,
    },
    {
        title: "Our Vision",
        text: `We aim to build a larger church to accommodate all devotees, especially during Sunday Mass. The estimated cost is about Rs. 4 Crores.`,
    },
    {
        title: "Appeal for Support",
        text: `We humbly request your prayers and generous contributions to help us realize this dream. Every donation, big or small, brings us closer to our goal. For more details, please contact the parish priest.`,
    },
    {
        title: "Thank You",
        text: `Thank you for your support and prayers. Yours in Christ Jesus, Fr. J. Jerome Gnana, Parish Priest, Kailasapuram, Trichy-14.`,
    },
];

const About = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center py-12 px-4 " 
        >
            <div className="w-full max-w-3xl bg-white/80 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-white/40">
                <h1 className="text-4xl font-extrabold text-center text-green mb-10 drop-shadow-lg">
                    History of Our Church
                </h1>
                <div className="relative border-l-4 border-green-100">
                    {historyContent.map((section, idx) => (
                        <div
                            key={idx}
                            className="mb-10 ml-6 group"
                            style={{ animation: `fadeInUp 0.6s ease ${idx * 0.15 + 0.2}s both` }}
                        >
                            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-4 ring-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="10" />
                                </svg>
                            </span>
                            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 group-hover:scale-105">
                                <h2 className="text-2xl font-semibold text-green-700 mb-2">{section.title}</h2>
                                <p className="text-gray-700 leading-relaxed">{section.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <style>
                    {`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    `}
                </style>
            </div>
        </div>
    );
};

// Updated to use Tailwind CSS for styling
export default About;
