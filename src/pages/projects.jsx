import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader2";
import Footer from "../components/Footer2";
import SectionHeading from "../components/SectionHeading2";
import Section from "../components/Section";
import Heading1 from "../components/assets/Heading1";
import ScrollTop from "../components/assets/ScrollTop";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function Projects() {
    const reduce = useReducedMotion();
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        // detect small screens (mobile)
        const m = window.matchMedia('(max-width: 767px)');
        setIsSmall(m.matches);
        const onChange = (e) => setIsSmall(e.matches);
        if (m.addEventListener) m.addEventListener('change', onChange);
        else m.addListener(onChange);
        return () => {
            if (m.removeEventListener) m.removeEventListener('change', onChange);
            else m.removeListener(onChange);
        };
    }, []);
    const [expandedProject, setExpandedProject] = useState(null);

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const projects = [
        {
            id: 1,
            title: "Modern Residential Complex",
            category: "Residential",
            image: "/services/residential_project.jpg",
            shortDescription: "A contemporary residential development featuring sustainable design and modern amenities.",
            fullDescription: "This comprehensive residential project showcases our expertise in modern construction techniques. The development includes 150 luxury units with energy-efficient systems, smart home technology, and green building certifications. The project features sustainable materials, solar panel integration, and advanced waste management systems.",
            location: "Downtown District",
            duration: "18 months",
            status: "Completed",
            features: ["Energy Efficient Design", "Smart Home Technology", "Green Building Certification", "Solar Panel Integration"],
            client: "Metro Development Group"
        },
        {
            id: 2,
            title: "Industrial Manufacturing Facility",
            category: "Industrial",
            image: "/services/industrial_project.jpg",
            shortDescription: "State-of-the-art manufacturing facility with advanced automation systems and safety protocols.",
            fullDescription: "This cutting-edge industrial facility represents the future of manufacturing. Spanning 50,000 square meters, it includes automated production lines, advanced robotics integration, and comprehensive safety systems. The facility features specialized ventilation, waste treatment systems, and energy-efficient lighting throughout.",
            location: "Industrial Zone",
            duration: "24 months",
            status: "In Progress",
            features: ["Automated Production Lines", "Advanced Robotics", "Specialized Ventilation", "Waste Treatment Systems"],
            client: "Tech Manufacturing Corp"
        },
        {
            id: 3,
            title: "Commercial Office Complex",
            category: "Commercial",
            image: "/services/commercial_project.jpg",
            shortDescription: "Premium office space designed for modern businesses with flexible layouts and advanced technology.",
            fullDescription: "This premium commercial development offers 75,000 square feet of flexible office space designed for modern businesses. The complex features open-plan layouts, advanced HVAC systems, high-speed connectivity, and sustainable building practices. It includes a fitness center, conference facilities, and premium amenities.",
            location: "Business District",
            duration: "20 months",
            status: "Completed",
            features: ["Flexible Office Layouts", "Advanced HVAC Systems", "High-Speed Connectivity", "Premium Amenities"],
            client: "Corporate Real Estate Ltd"
        },
        {
            id: 4,
            title: "Highway Infrastructure Upgrade",
            category: "Civil Engineering",
            image: "/services/civil_project.jpg",
            shortDescription: "Major highway expansion project improving connectivity and traffic flow across the region.",
            fullDescription: "This critical infrastructure project involved expanding a major highway corridor by 15 kilometers, including new bridges, overpasses, and intelligent traffic management systems. The project improved regional connectivity, reduced travel times by 30%, and implemented sustainable drainage solutions.",
            location: "Regional Highway Network",
            duration: "36 months",
            status: "Completed",
            features: ["Bridge Construction", "Intelligent Traffic Systems", "Sustainable Drainage", "Regional Connectivity"],
            client: "Department of Transportation"
        },
        {
            id: 5,
            title: "Road Surfacing & Rehabilitation",
            category: "Road Surfacing",
            image: "/services/road_surfacing.jpg",
            shortDescription: "Comprehensive road rehabilitation project using advanced paving techniques and durable materials.",
            fullDescription: "This extensive road rehabilitation project covered 25 kilometers of major arterial roads using advanced paving techniques and high-quality materials. The project included surface preparation, drainage improvements, and the application of durable asphalt mixes designed for heavy traffic conditions.",
            location: "City Arterial Roads",
            duration: "12 months",
            status: "Completed",
            features: ["Advanced Paving Techniques", "Drainage Improvements", "Heavy Traffic Design", "Quality Materials"],
            client: "City Infrastructure Authority"
        },
        {
            id: 6,
            title: "Facilities Maintenance Program",
            category: "Maintenance",
            image: "/services/maintenance_image.jpg",
            shortDescription: "Comprehensive maintenance program for multiple commercial facilities with 24/7 support.",
            fullDescription: "Our ongoing facilities maintenance program provides comprehensive support for 15 commercial buildings across the city. The program includes preventive maintenance, emergency repairs, system upgrades, and 24/7 technical support. We've achieved 99.5% uptime across all facilities while reducing maintenance costs by 25%.",
            location: "Multiple Locations",
            duration: "Ongoing",
            status: "Active",
            features: ["Preventive Maintenance", "24/7 Support", "System Upgrades", "Cost Optimization"],
            client: "Multi-Site Property Management"
        }
    ];

    const categories = ["All", "Residential", "Industrial", "Commercial", "Civil Engineering", "Road Surfacing", "Maintenance"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return(
        <>
            <Helmet>
                <title>
                    Alauwndy Engineering Solutions - Projects
                </title>
                <link rel="preload" as="image" href="/services/residential_project.jpg" />
                <link rel="preload" as="image" href="/services/industrial_project.jpg" />
            </Helmet>
            <PageHeader/>
            <SectionHeading title="PROJECTS" bg=""/>

            {/* Projects Section */}
            <Section className="bg-white">
                <motion.div
                    variants={sectionVariants}
                    initial={isSmall ? 'visible' : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: true, amount: isSmall ? 0.01 : 0.15 }}
                    transition={reduce ? { duration: 0 } : (isSmall ? { duration: 0.3 } : undefined)}
                    className="max-w-7xl mx-auto"
                >
                    <div className="mx-auto w-fit mb-8">
                        <Heading1
                            width="max-sm:w-0 md:w-6 lg:w-24"
                            className="lg:text-4xl md:text-3xl text-2xl bg-indigo-950 text-indigo-950 font-semibold mb-10"
                            title="Featured Projects"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-red-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
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
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                {project.category}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                                {project.status}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                                            {project.shortDescription}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
                                            <span>📍 {project.location}</span>
                                            <span>⏱️ {project.duration}</span>
                                        </div>
                                        <button
                                            onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                                            className="mt-4 inline-flex items-center text-red-600 font-semibold text-sm group-hover:text-red-700 transition-colors self-start"
                                        >
                                            {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                                            <svg className={`w-4 h-4 ml-1 transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Expanded Project Details */}
            <AnimatePresence>
                {expandedProject && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50"
                    >
                        <Section>
                            <div className="max-w-7xl mx-auto">
                                {(() => {
                                    const project = projects.find(p => p.id === expandedProject);
                                    if (!project) return null;
                                    
                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="bg-white shadow-lg p-8"
                                        >
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                                                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{project.fullDescription}</p>
                                                    
                                                    <div className="space-y-4">
                                                        <div className="flex items-center">
                                                            <span className="font-semibold text-gray-900 w-24">Client:</span>
                                                            <span className="text-gray-700">{project.client}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span className="font-semibold text-gray-900 w-24">Location:</span>
                                                            <span className="text-gray-700">{project.location}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span className="font-semibold text-gray-900 w-24">Duration:</span>
                                                            <span className="text-gray-700">{project.duration}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span className="font-semibold text-gray-900 w-24">Status:</span>
                                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                                project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                                project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                                'bg-orange-100 text-orange-800'
                                                            }`}>
                                                                {project.status}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                                                    <div className="grid grid-cols-1 gap-3">
                                                        {project.features.map((feature, index) => (
                                                            <div key={index} className="flex items-center">
                                                                <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                                                                <span className="text-gray-700">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })()}
                            </div>
                        </Section>
                    </motion.div>
                )}
            </AnimatePresence>

            <ScrollTop />
            <Footer/>
        </>
    );
}

export default Projects;
