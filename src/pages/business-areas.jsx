import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader2";
import Footer from "../components/Footer2";
import SectionHeading from "../components/SectionHeading2";
import Section from "../components/Section";
import Heading1 from "../components/assets/Heading1";
import ScrollTop from "../components/assets/ScrollTop";
import { motion, useReducedMotion } from "framer-motion";

function BusinessAreas() {
    const reduce = useReducedMotion();

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const businessAreas = [
        {
            icon: "🏠",
            title: "Residential Development",
            description: "Comprehensive residential construction services from single-family homes to large-scale housing developments.",
            services: [
                "Single-family homes",
                "Multi-unit residential complexes",
                "Luxury residential projects",
                "Affordable housing developments",
                "Residential renovations and upgrades"
            ],
            image: "/services/residential_project.webp",
            market: "Private homeowners, real estate developers, housing authorities"
        },
        {
            icon: "🏢",
            title: "Commercial Construction",
            description: "Full-service commercial construction including offices, retail spaces, and mixed-use developments.",
            services: [
                "Office buildings and corporate headquarters",
                "Retail and shopping centers",
                "Restaurants and hospitality venues",
                "Educational facilities",
                "Healthcare and medical buildings"
            ],
            image: "/services/commercial_project.webp",
            market: "Corporate clients, retail chains, educational institutions, healthcare providers"
        },
        {
            icon: "🏭",
            title: "Industrial Projects",
            description: "Specialized industrial construction including manufacturing facilities, warehouses, and processing plants.",
            services: [
                "Manufacturing facilities",
                "Warehouses and distribution centers",
                "Food processing plants",
                "Chemical and pharmaceutical facilities",
                "Power generation facilities"
            ],
            image: "/services/industrial_project.webp",
            market: "Manufacturing companies, logistics providers, energy sector, pharmaceutical industry"
        },
        {
            icon: "🛣️",
            title: "Infrastructure & Civil Works",
            description: "Large-scale infrastructure projects including roads, bridges, utilities, and public works.",
            services: [
                "Highway and road construction",
                "Bridge and overpass construction",
                "Water and wastewater systems",
                "Public transportation infrastructure",
                "Municipal facilities"
            ],
            image: "/services/civil_project.webp",
            market: "Government agencies, municipalities, transportation authorities, utility companies"
        },
        {
            icon: "🔧",
            title: "Maintenance & Support",
            description: "Comprehensive maintenance services for all types of facilities and infrastructure.",
            services: [
                "Preventive maintenance programs",
                "Emergency repair services",
                "Facility management",
                "System upgrades and retrofits",
                "24/7 technical support"
            ],
            image: "/services/maintenance_image.webp",
            market: "Property management companies, facility owners, government agencies, private businesses"
        },
        {
            icon: "🚧",
            title: "Road Surfacing & Rehabilitation",
            description: "Specialized road construction and rehabilitation services using advanced paving techniques.",
            services: [
                "Asphalt paving and resurfacing",
                "Road rehabilitation and reconstruction",
                "Parking lot construction",
                "Airport runway construction",
                "Specialty surface treatments"
            ],
            image: "/services/road_surfacing.webp",
            market: "Municipalities, transportation departments, private property owners, airport authorities"
        }
    ];

    const geographicCoverage = [
        { region: "Greater Metropolitan Area", coverage: "Primary service area" },
        { region: "Surrounding Counties", coverage: "Extended service area" },
        { region: "Regional Projects", coverage: "Large-scale infrastructure" },
        { region: "National Contracts", coverage: "Specialized projects" }
    ];

    const industryPartnerships = [
        "Government Agencies",
        "Private Developers",
        "Architecture Firms",
        "Engineering Consultants",
        "Material Suppliers",
        "Equipment Manufacturers",
        "Financial Institutions",
        "Insurance Companies"
    ];

    return (
        <>
            <Helmet>
                <title>
                    Business Areas - Alauwndy Engineering Solutions
                </title>
            </Helmet>
            <PageHeader />
            <SectionHeading title="BUSINESS AREAS" bg="" />

            {/* Intro paragraph and Project Lifecycle Model from company collateral */}
            <Section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                        AES provides a broad spectrum of services relative to projects in both the public and private sectors. We approach each situation with a "team mentality", understanding that the ability to lend our expertise is an integral part of the success of your project. At AES solutions we have undertaken several projects including road construction, infrastructure development, parking area construction, road rehabilitation, bulk earthworks and surfacing. Our site management teams are dynamic, skilled and have very good experience in all facets of civil engineering construction. We take pride in delivering successful projects on time, within budget and to the highest quality standards. We have a large plant holding that ensures capacity for and continuity of all projects, from small to large. A rigorous company-wide training regime not only ensures quality at all levels, but effectively up-skills and uplifts our staff, local population and sub-contractors.
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-6">AE Solutions Project lifecycle Model</h3>

                    <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                        {/* Top-left panel */}
                        <motion.div className="order-1 md:order-1"
                            initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white border border-red-300 p-5 rounded-lg shadow-sm">
                                <h4 className="text-sm font-bold text-red-600 mb-2">CONSTRUCTION DELIVERY METHODS</h4>
                                <ul className="text-sm text-gray-700 list-inside space-y-1">
                                    <li>- Design/Bid/Build (General Contractor)</li>
                                    <li>- Construction Manager at Risk</li>
                                    <li>- Construction Manager Agency</li>
                                    <li>- Design-Build</li>
                                    <li>- Design-Assist</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Top-right panel */}
                        <motion.div className="order-2 md:order-2 md:ml-8"
                            initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white border border-red-300 p-5 rounded-lg shadow-sm text-right md:pr-16">
                                <h4 className="text-sm font-bold text-red-600 mb-2">PRE-CONSTRUCTION</h4>
                                <ul className="text-sm text-gray-700 list-inside space-y-1">
                                    <li>- value analysis</li>
                                    <li>- preliminary scheduling</li>
                                    <li>- constructability reviews</li>
                                    <li>- design-assist collaboration</li>
                                    <li>- cost estimates</li>
                                    <li>- trade contractor selection</li>
                                    <li>- analysis and coordination through project completion</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Center circle (spans rows) */}
                            <div className="absolute hidden md:block left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <motion.div
                                    className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-indigo-950 border-8 border-white shadow-lg flex items-center justify-center"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.8 }}
                                >
                                    <div className="grid grid-cols-2 gap-0 w-full h-full text-white text-3xl font-bold">
                                        <div className="flex items-center bg-red-600 rounded-tl-full justify-center">1</div>
                                        <div className="flex items-center justify-center">2</div>
                                        <div className="flex items-center justify-center rounded-bl-full bg-indigo-900">4</div>
                                        <div className="flex items-center justify-center bg-red-500 rounded-br-full">3</div>
                                    </div>
                                </motion.div>
                            </div>

                        {/* Bottom-left panel */}
                        <motion.div className="order-4 md:order-3 md:mt-8"
                            initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white border border-red-300 p-5 rounded-lg shadow-sm">
                                <h4 className="text-sm font-bold text-red-600 mb-2">Project Management</h4>
                                <ul className="text-sm text-gray-700 list-inside space-y-1">
                                    <li>- site supervision</li>
                                    <li>- cost control management</li>
                                    <li>- change management</li>
                                    <li>- quality control & testing</li>
                                    <li>- safety management</li>
                                    <li>- schedule development and updates</li>
                                    <li>- trade contractor management</li>
                                    <li>- progress monitoring</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Bottom-right panel */}
                        <motion.div className="order-3 md:order-4 md:mt-8 md:ml-8"
                            initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white border border-red-300 p-5 rounded-lg shadow-sm text-right md:pr-16">
                                <h4 className="text-sm font-bold text-red-600 mb-2">PRE-PROJECT CONSULTING</h4>
                                <ul className="text-sm text-gray-700 list-inside space-y-1">
                                    <li>- preliminary site assessments</li>
                                    <li>- determining best delivery method</li>
                                    <li>- conceptual cost estimating</li>
                                    <li>- preliminary schedule development & milestone establishment anticipated</li>
                                    <li>- cash flow projections</li>
                                    <li>- lifecycle cost analysis</li>
                                    <li>- multi-facility phasing evaluation</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>


            {/* Business Areas Grid */}
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
                            title="Structural Engineering"
                        />
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p className="text-lg">
                                With most of our experiences involved in Design and Build projects, a strong culture of creativity and 
                                innovation runs throughout the business and our emphasis on 'design for production' ensures the most 
                                efficient and cost-effective solutions in all our well managed projects. Our technical team uses the 
                                latest in 3D structural modelling software, together with fully capable detailers in steel fabrication 
                                modelling and detailing. This creates a seamless process all the way from concept through to 
                                manufacture and all of which is totally compatible with all the most advanced Building Information 
                                Modelling (BIM) systems in use today.
                            </p>
                            <p className="text-lg">
                                Our expertise everything you need under one roof, In addition to our fabrication professionals, our in-house 
                                design resources and capabilities allow us to provide complete and custom solutions. Furthermore, our 
                                strategic partnerships with vendors and suppliers allows us to successfully manage the unique needs of 
                                any project.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* Looking Into the Future */}
            <Section className="bg-gray-50">
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
                            title="Looking Into the Future"
                        />
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="space-y-8">
                            {/* AES Properties */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">AES Properties</h3>
                                <div className="text-gray-700 leading-relaxed text-lg">
                                    <p>
                                        AES Properties SBU will focus on commercial property development with a view to rent to tenants on 
                                        completion. It creates modern, affordable commercial developments with upmarket finishes and a 
                                        professional look and feel.
                                    </p>
                                </div>
                            </div>

                            {/* AES Tech */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">AES Tech</h3>
                                <div className="text-gray-700 leading-relaxed text-lg">
                                    <p>
                                        This will be the technology hub of the company and it will focus more on business development 
                                        through the use of technology, induction into telecoms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* Geographic Coverage */}
            <Section className="bg-gray-50">
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
                            className="lg:text-4xl md:text-3xl text-2xl bg-red-600 text-red-600 font-semibold"
                            title="Geographic Coverage"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {geographicCoverage.map((coverage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white shadow-lg p-6 text-center"
                            >
                                <div className="text-3xl mb-4">📍</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{coverage.region}</h3>
                                <p className="text-gray-600 text-sm">{coverage.coverage}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Industry Partnerships */}
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
                            title="Industry Partnerships"
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industryPartnerships.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-50 p-4 text-center hover:bg-gray-100 transition-colors"
                            >
                                <div className="text-gray-700 font-semibold">{partner}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Call to Action */}
            <Section className="bg-red-600 text-white">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={reduce ? { duration: 0 } : undefined}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Partner with Us?
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed">
                        Whether you need residential construction, industrial facilities, or infrastructure development, we have the expertise and resources to deliver exceptional results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-red-600 px-8 py-4 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Start Your Project
                        </a>
                        <a
                            href="/strengths"
                            className="inline-flex items-center bg-white text-red-600 px-8 py-4 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Our Strengths
                        </a>
                    </div>
                </motion.div>
            </Section>

            <ScrollTop />
            <Footer />
        </>
    );
}

export default BusinessAreas;
