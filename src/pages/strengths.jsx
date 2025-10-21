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
            icon: "🏗️",
            title: "Proven Experience",
            description: "With over 15 years of experience in the construction and engineering industry, we bring deep expertise and proven methodologies to every project.",
            details: [
                "15+ years of industry experience",
                "Successfully completed 500+ projects",
                "Proven track record across all sectors",
                "Established relationships with suppliers and partners"
            ]
        },
        {
            icon: "👥",
            title: "Expert Team",
            description: "Our team consists of highly qualified professionals including engineers, architects, project managers, and skilled craftsmen.",
            details: [
                "Certified professional engineers",
                "Licensed architects and designers",
                "Experienced project managers",
                "Skilled tradespeople and craftsmen"
            ]
        },
        {
            icon: "⚡",
            title: "Advanced Technology",
            description: "We leverage cutting-edge technology and modern equipment to deliver efficient, high-quality results on every project.",
            details: [
                "State-of-the-art construction equipment",
                "Advanced project management software",
                "3D modeling and BIM technology",
                "Digital collaboration tools"
            ]
        },
        {
            icon: "🏆",
            title: "Quality Standards",
            description: "We maintain the highest quality standards through rigorous quality control processes and adherence to industry best practices.",
            details: [
                "ISO 9001:2015 Quality Management System",
                "Regular quality audits and inspections",
                "Compliance with all safety regulations",
                "Continuous improvement processes"
            ]
        },
        {
            icon: "💰",
            title: "Cost Efficiency",
            description: "Our efficient project management and procurement strategies ensure optimal cost control without compromising on quality.",
            details: [
                "Competitive pricing through bulk procurement",
                "Efficient project scheduling",
                "Waste reduction strategies",
                "Value engineering solutions"
            ]
        },
        {
            icon: "🌱",
            title: "Sustainability Focus",
            description: "We are committed to sustainable construction practices that minimize environmental impact while delivering long-term value.",
            details: [
                "Green building certifications",
                "Sustainable material sourcing",
                "Energy-efficient design solutions",
                "Waste reduction and recycling programs"
            ]
        }
    ];

    const achievements = [
        { number: "500+", label: "Projects Completed", icon: "📊" },
        { number: "15+", label: "Years Experience", icon: "⏰" },
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
