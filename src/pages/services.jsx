import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader2";
import Footer from "../components/Footer2";
import SectionHeading from "../components/SectionHeading2";
import Section from "../components/Section";
import Heading1 from "../components/assets/Heading1";
import ScrollTop from "../components/assets/ScrollTop";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, useLayoutEffect } from 'react';

function Services() {
    const reduce = useReducedMotion();

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const services = [
        {
            title: "Facilities Maintenance",
            image: "/services/maintenance_image.jpg",
            description:
                "Responsive, after‑hours repairs and proactive maintenance services to keep your facilities safe, attractive and operational.",
        },
        {
            title: "Residential Construction",
            image: "/services/residential_project.jpg",
            description:
                "Complex residential projects handled with exceptional organizational skills and dedicated project teams for personalized service and remarkable results.",
        },
        {
            title: "Commercial Construction",
            image: "/services/commercial_project.jpg",
            description:
                "From high-end retail to public buildings and office space, we combine construction expertise with sensitivity to facility programming and operations.",
        },
        {
            title: "Industrial Projects",
            image: "/services/industrial_project.jpg",
            description:
                "Facilities designed to support your operations with dedicated listening, custom design, and support for manufacturing, logistics, and distribution systems.",
        },
        {
            title: "Civil Engineering",
            image: "/services/civil_project.jpg",
            description:
                "Complete civil and site development engineering services with feasibility assessments, conceptual design, and construction administration for all project types.",
        },
        {
            title: "APS Road Surfacing",
            image: "/services/road_surfacing.jpg",
            description:
                "Multifaceted company specializing in seals, asphalting and road rehabilitation with highly skilled teams delivering quality work on time and within specification.",
        },
    ];

    // helper to scroll to an element ID, accounting for fixed header height
    const scrollToSection = (id) => {
        if (!id) return;
        const el = document.getElementById(id);
        if (!el) return;
        // estimate header height (keeps in sync with header CSS which is ~72px)
        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 72;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16; // extra offset
        window.scrollTo({ top, behavior: 'smooth' });
    }

        // detect if the "What We Do" block is already visible on mount so we can animate immediately
        const whatRef = useRef(null);
        const [animateNow, setAnimateNow] = useState(false);
            useLayoutEffect(() => {
                const el = whatRef.current;
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) setAnimateNow(true);
            }, []);

    return (
        <>
            <Helmet>
            <title>
                Alauwndy Engineering Solutions - Services
            </title>
                <link rel="preload" as="image" href="/services/residential_project.jpg" />
                <link rel="preload" as="image" href="/services/maintenance_image.jpg" />
                <link rel="preload" as="image" href="/services/industrial_project.jpg" />
                <link rel="preload" as="image" href="/services/civil_project.jpg" />
                <link rel="preload" as="image" href="/services/road_surfacing.jpg" />
            </Helmet>
            <PageHeader />
            <SectionHeading title="SERVICES" bg="" />

                        <Section className="bg-white">
                                {/* animate immediately if the element is already visible on mount */}
                                                <motion.div
                                                        ref={whatRef}
                                                        variants={sectionVariants}
                                                        initial="hidden"
                                                        {...(animateNow ? { animate: 'visible' } : { whileInView: 'visible', viewport: { once: true, amount: 0.15 } })}
                                                        transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                                                        className="max-w-7xl mx-auto"
                                                >
                    <div className="mx-auto w-fit">
                        <Heading1
                            width="max-sm:w-0 md:w-6 lg:w-24"
                            className="lg:text-4xl md:text-3xl text-2xl bg-indigo-950 text-indigo-950 font-semibold mb-10"
                            title="What We Do"
                        />
                    </div>
                    <p className="text-gray-700 md:text-lg text-base text-center max-w-3xl mx-auto">
                        We provide end‑to‑end engineering, construction and maintenance services across residential,
                        industrial and civil sectors, delivering safe, efficient and reliable outcomes.
                    </p>

                    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                        {services.map((svc, index) => {
                            const icons = ['🏠', '🏢', '🏭', '🛣️', '🔧', '🚧'];
                            const colors = ['from-blue-500 to-blue-700', 'from-green-500 to-green-700', 'from-purple-500 to-purple-700', 'from-orange-500 to-orange-700', 'from-red-500 to-red-700', 'from-indigo-500 to-indigo-700'];
                            
                            return (
                                <motion.div
                                    key={svc.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                                        <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative flex-shrink-0">
                                            <img
                                                src={svc.image}
                                                alt={svc.title}
                                                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute top-4 right-4 text-4xl">{icons[index]}</div>
                                            <div className="absolute bottom-4 left-4">
                                                <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${colors[index]}`}>
                                                    {svc.title.split(' ')[0]}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                                {svc.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                                                {svc.description}
                                            </p>
                                            <a
                                                href={`#${{
                                                    'Residential Construction': 'residential-construction',
                                                    'Commercial Construction': 'commercial-construction', 
                                                    'Industrial Projects': 'industrial-projects',
                                                    'Civil Engineering': 'civil-engineering',
                                                    'APS Road Surfacing': 'aps-road-surfacing',
                                                    'Facilities Maintenance': 'facilities-maintenance'
                                                }[svc.title]}`}
                                                onClick={(e) => {
                                                    const serviceIdMap = {
                                                        'Residential Construction': 'residential-construction',
                                                        'Commercial Construction': 'commercial-construction', 
                                                        'Industrial Projects': 'industrial-projects',
                                                        'Civil Engineering': 'civil-engineering',
                                                        'APS Road Surfacing': 'aps-road-surfacing',
                                                        'Facilities Maintenance': 'facilities-maintenance'
                                                    };
                                                    const elementId = serviceIdMap[svc.title];
                                                    if (elementId) {
                                                        e.preventDefault();
                                                        // smooth scroll then update hash without default jump
                                                        scrollToSection(elementId);
                                                        // update URL hash without scrolling jump
                                                        history.replaceState(null, '', `#${elementId}`);
                                                    }
                                                }}
                                                className="mt-4 inline-flex items-center text-red-600 font-semibold text-sm group-hover:text-red-700 transition-colors self-start"
                                            >
                                                Learn More
                                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative inline-block"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-30"></div>
                            <a
                                href="/contact"
                                className="relative inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 font-bold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Request a Quote
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </Section>

            {/* Detailed: Facilities Maintenance */}
            <Section id="facilities-maintenance" className="bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-600 opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-5xl mx-auto relative z-10"
                >
                    <div className="mx-auto w-fit mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <Heading1
                                width="max-sm:w-0 md:w-6 lg:w-24"
                                className="lg:text-4xl md:text-3xl text-2xl bg-red-600 text-red-600 font-semibold"
                                title="Facilities Maintenance"
                            />
                        </div>
                    </div>
                    <div className="prose max-w-none prose-p:leading-relaxed">
                        <p className="text-gray-800 md:text-lg text-base">
                            At AE Solutions we understand that our clients need to maintain a sharp public image. Our wide array of maintenance services helps your business look and function as intended.
                        </p>
                        <p className="text-gray-800 md:text-lg text-base">
                            The Maintenance Division of AES specializes in after‑hour repairs in order to minimize the disruption to your business. All of our technicians carry digital cameras to document before and after job completion. These cameras can also act as an extra set of eyes at your facility.
                        </p>
                        <p className="text-gray-800 md:text-lg text-base">
                            Due to our technicians’ breadth of knowledge, they can report back, complete with pictures, on any other areas of concern—helping you manage maintenance issues before they become emergency repair situations.
                        </p>
                    </div>
                </motion.div>
            </Section>

            {/* Detailed: Residential Construction */}
            <Section id="residential-construction" className="bg-white">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-5xl mx-auto"
                >
                    <div className="mx-auto w-fit">
                        <Heading1
                            width="max-sm:w-0 md:w-6 lg:w-24"
                            className="lg:text-4xl md:text-3xl text-2xl bg-indigo-950 text-indigo-950 font-semibold mb-8"
                            title="Residential Construction"
                        />
                    </div>
                    <div className="prose max-w-none prose-p:leading-relaxed">
                        <p className="text-gray-800 md:text-lg text-base">
                            Due to our outstanding organizational skills and exceptional management support, AE Solutions easily takes on the most complex projects without losing sight of professional nuances. Each individual project, regardless of its size, is coordinated by our team of committed professionals.
                        </p>
                        <p className="text-gray-800 md:text-lg text-base">
                            Our specialized team actively engages clients to schedule, operate, and assemble all phases of the intricate new build or renovations process. Our clients know that they can depend on our coordinated team of caring experts, each of whom is dedicated to the highest standards of workmanship and customer satisfaction.
                        </p>
                        <p className="text-gray-800 md:text-lg text-base">
                            All project teams include a principal, project manager, field supervisor, estimator, and administrative staff organized to provide each job with personalized service and remarkable results. We procure finest quality raw materials for construction purposes, which ensure high strength and long-lasting effect to these buildings.
                        </p>
                    </div>
                </motion.div>
            </Section>

            {/* Detailed: Commercial Construction */}
            <Section id="commercial-construction" className="bg-gray-50">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-5xl mx-auto"
                >
                    <div className="mx-auto w-fit">
                        <Heading1
                            width="max-sm:w-0 md:w-6 lg:w-24"
                            className="lg:text-4xl md:text-3xl text-2xl bg-red-600 text-red-600 font-semibold mb-8"
                            title="Commercial Construction"
                        />
                    </div>
                    <div className="prose max-w-none prose-p:leading-relaxed">
                        <p className="text-gray-800 md:text-lg text-base">
                            From high-end retail construction to public buildings and office space, we have the experienced construction teams and techniques to help you meet your goals. We combine an in-depth knowledge of all aspects of construction with a unique sensitivity to the programming and function of your facility while minimizing the effects of construction so your operations stay on track.
                        </p>
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Commercial Services Include:</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-800 md:text-lg text-base">
                                <li>Hotels, lodges & apartments</li>
                                <li>Supermarkets & development projects</li>
                                <li>Education, healthcare & recreational facilities</li>
                                <li>Office, restaurant & shop fit-outs</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* Detailed: Industrial Projects */}
            <Section id="industrial-projects" className="bg-white">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-5xl mx-auto"
                >
                    <div className="mx-auto w-fit">
                        <Heading1
                            width="max-sm:w-0 md:w-6 lg:w-24"
                            className="lg:text-4xl md:text-3xl text-2xl bg-indigo-950 text-indigo-950 font-semibold mb-8"
                            title="Industrial Projects"
                        />
                    </div>
                    <div className="prose max-w-none prose-p:leading-relaxed">
                        <p className="text-gray-800 md:text-lg text-base">
                            Your industrial facility should support your operations, helping direct the flow of materials and machinery while maximizing your productive space. At AE Solutions, our process starts with a keen set of ears and dedicated listening to best understand just how you want to use your facility.
                        </p>
                        <p className="text-gray-800 md:text-lg text-base">
                            We then design and build your facility specifically to support your operation. From production and manufacturing to logistics and distribution, we're seasoned in building facilities that support a range of systems and processes, including:
                        </p>
                        <div className="mt-6">
                            <ol className="list-decimal list-inside space-y-2 text-gray-800 md:text-lg text-base">
                                <li>Full-scale manufacturing lines</li>
                                <li>Heavy machinery</li>
                                <li>Raw materials processing</li>
                                <li>Automated Storage and Retrieval Systems</li>
                                <li>Wall and roof-supported conveyor systems with pick pods</li>
                            </ol>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* Detailed: Civil Engineering */}
            <Section id="civil-engineering" className="bg-gray-50">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-5xl mx-auto"
                >
                    <div className="mx-auto w-fit">
                        <Heading1
                            width="max-sm:w-0 md:w-6 lg:w-24"
                            className="lg:text-4xl md:text-3xl text-2xl bg-red-600 text-red-600 font-semibold mb-8"
                            title="Civil Engineering"
                        />
                    </div>
                    <div className="prose max-w-none prose-p:leading-relaxed">
                        <p className="text-gray-800 md:text-lg text-base">
                            AE Solutions provides all aspects of civil and site development engineering services for commercial, residential, institutional and industrial projects. AE Solutions provides the experience and capabilities to make your next project a success.
                        </p>
                        <p className="text-gray-800 md:text-lg text-base">
                            Our site feasibility assessment and conceptual design capabilities allow our clients to make informed decisions regarding a project's viability. Once a project has been deemed a viable option, our engineers begin focusing on designing a project that maximizes the site's development potential while incorporating the site's natural attributes into the project master plan and construction design.
                        </p>
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Project Experience Includes:</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-800 md:text-lg text-base">
                                <li>Site Feasibility Assessments</li>
                                <li>Conceptual and Schematic Designs</li>
                                <li>Road building</li>
                                <li>Sewerage</li>
                                <li>Construction Administration</li>
                                <li>Stormwater Concrete Works</li>
                                <li>Earthworks</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* Detailed: APS Road Surfacing */}
            <Section id="aps-road-surfacing" className="bg-white">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-5xl mx-auto"
                >
                    <div className="mx-auto w-fit">
                        <Heading1
                            width="max-sm:w-0 md:w-6 lg:w-24"
                            className="lg:text-4xl md:text-3xl text-2xl bg-indigo-950 text-indigo-950 font-semibold mb-8"
                            title="APS Road Surfacing"
                        />
                    </div>
                    <div className="prose max-w-none prose-p:leading-relaxed">
                        <p className="text-gray-800 md:text-lg text-base">
                            APS is a multifaceted company in the field of seals, asphalting and road rehabilitation. We regard ourselves as an efficient division striving to be the leader in our field.
                        </p>
                        <p className="text-gray-800 md:text-lg text-base">
                            We deliver quality work on time and within specification. Our teams are highly skilled and see no task as too difficult or impossible to complete at the highest standards. We pride ourselves on this and this reflects in our work ethics.
                        </p>
                    </div>
                </motion.div>
            </Section>

            <ScrollTop />
            <Footer />
        </>
    );
}

export default Services;
