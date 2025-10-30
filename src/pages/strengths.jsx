import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader2";
import Footer from "../components/Footer2";
import SectionHeading from "../components/SectionHeading2";
import Section from "../components/Section";
import Heading1 from "../components/assets/Heading1";
import ScrollTop from "../components/assets/ScrollTop";
import { motion, useReducedMotion } from "framer-motion";

function Strengths() {
    const reduce = useReducedMotion();

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const strengths = [
        {
            icon: "⭐",
            title: "Differentiators",
            description: "A unique value proposition with our global experience outlook and excellence proven by extraordinary results, we build value in the infrastructure sector to improve life for current and future generations.",
            details: [
                "Global experience outlook",
                "Excellence proven by extraordinary results",
                "Building value in infrastructure sector",
                "Improving life for current and future generations"
            ]
        },
        {
            icon: "📈",
            title: "Strong Performance",
            description: "An upcoming market leading company in the Zimbabwean infrastructure sector with strong know-how of the local market. Competence, track record, and delivery capacity are key success factors.",
            details: [
                "Upcoming market leading company in Zimbabwean infrastructure",
                "Strong know-how of the Zimbabwean market",
                "Successfully completed all contracts throughout company history",
                "Many projects completed ahead of schedule",
                "Always delivering quality products and services"
            ]
        },
        {
            icon: "🌐",
            title: "Diversification",
            description: "Ability to compete in a vast array of sectors with growing geographic footprint and solid operational performance in different sectors.",
            details: [
                "Ability to compete in a vast array of sectors",
                "Growing geographic footprint",
                "Solid operational performance in different sectors",
                "Including highways, civil and industrial buildings and airports",
                "Significant geographical diversification in and around the country"
            ]
        },
        {
            icon: "👔",
            title: "Leadership",
            description: "Relatable balance between caution and kindness with proven track record. Vast experience to tap from and the desire, passion to succeed.",
            details: [
                "Relatable balance between caution and kindness",
                "Proven track record",
                "Vast experience to tap from",
                "Strong desire and passion to succeed"
            ]
        },
        {
            icon: "🛡️",
            title: "Health & Safety",
            description: "AE Solutions recognises that health and safety is at the core of its responsibilities. All fabrication, manufacturing and structural activities shall be performed to meet client requirements, contract specifications, and applicable regulations.",
            details: [
                "Prevention",
                "Compliance",
                "Communication",
                "Improvement",
                "Effective actions ensure policy statements are endorsed by all employees",
                "Adhered to and constantly improved upon"
            ]
        },
        {
            icon: "✨",
            title: "Quality Objectives",
            description: "To exceed the client's expectations in all aspects – every time. The Company's quality objectives ensure that business development, procurement, fabrication, testing and inspection activities are undertaken on any given project with excellence.",
            details: [
                "Planned and performed to achieve required quality within budget and schedule",
                "In accordance with contractual and regulatory requirements",
                "Performed correctly the first time to ensure cost effectiveness and efficiency",
                "Exceeding client expectations in all aspects"
            ]
        }
    ];

    const achievements = [
        { number: "25+", label: "Projects Completed", icon: "📊" },
        { number: "5+", label: "Years Experience", icon: "⏰" },
        { number: "100%", label: "Client Satisfaction", icon: "😊" },
        { number: "50+", label: "Team Members", icon: "👥" }
    ];

    return (
        <>
            <Helmet>
                <title>
                    Our Strengths - Alauwndy Engineering Solutions
                </title>
            </Helmet>
            <PageHeader />
            <SectionHeading title="OUR STRENGTHS" bg="" />

            {/* Achievements Section */}
            <Section className="bg-red-600 text-white">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-7xl mx-auto"
                >
                    <div className="mx-auto w-fit mb-12">
                        <Heading1
                            width="max-sm:w-0 md:w-6 lg:w-24"
                            className="lg:text-4xl md:text-3xl text-2xl bg-white text-white font-semibold"
                            title="Our Achievements"
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl mb-4">{achievement.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                                <div className="text-lg font-semibold">{achievement.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Strengths Grid */}
            <Section className="bg-white">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-7xl mx-auto"
                >
                    <div className="mx-auto w-fit mb-12">
                        <Heading1
                            width="max-sm:w-0 md:w-6 lg:w-24"
                            className="lg:text-4xl md:text-3xl text-2xl bg-indigo-950 text-indigo-950 font-semibold"
                            title="Core Strengths"
                        />
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {strengths.map((strength, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 p-6 h-full">
                                    <div className="text-center mb-6">
                                        <div className="text-6xl mb-4">{strength.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                                            {strength.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {strength.description}
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        {strength.details.map((detail, detailIndex) => (
                                            <div key={detailIndex} className="flex items-start">
                                                <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 text-sm">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Call to Action */}
            <Section className="bg-gray-50">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Ready to Experience Our Strengths?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Let us bring our expertise, technology, and commitment to quality to your next project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-red-600 text-white px-8 py-4 font-bold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="/projects"
                            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 font-bold rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            View Our Work
                        </a>
                    </div>
                </motion.div>
            </Section>

            <ScrollTop />
            <Footer />
        </>
    );
}

export default Strengths;
