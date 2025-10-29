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
            id: 7,
            title: "SiSombe Plot — Subdivision Road",
            category: "Road Surfacing",
            image: "/projects/sisombe_project_truck.jpg",
            images: [
                "/projects/sisombe_project_truck.jpg",
                "/projects/sisombe_project_truck2.jpg",
                "/projects/sisombe_project.jpg"
            ],
            shortDescription: "Full-service subdivision road construction: clearance, formation, and culvert installation for an all‑weather road.",
            fullDescription: `At SiSombe Plot we handled every step of the road‑building process, turning a raw site into a fully‑formed, all‑weather subdivision road.

1. Site Clearance & Grading
   - Cleared vegetation, removed topsoil and leveled the alignment to the required camber.
   - Established proper drainage slopes to keep water away from the future pavement.

2. Gravel Road Formation
   - Imported and compacted high‑quality base material in 150 mm lifts, meeting Zimbabwe's CBR ≥ 30 standard.
   - Finished the surface to a smooth, cambered profile that sheds rainwater efficiently.

3. Culvert Design & Installation
   - Designed a 0.5 m ⌀ × 1.2 m high concrete culvert to sit under the 7.5 m road crossing.
   - Constructed two reinforced‑concrete headwalls, one at each end, to protect the pipe and guide flow.
   - Laid the culvert with a 1 % fall for self‑cleaning, ensuring no blockages during heavy rains.`,
            location: "SiSombe Plot",
            status: "Completed",
            endDate: "2021-12",
            features: [
                "Site clearance & grading to camber",
                "Gravel base compacted in 150mm lifts (CBR ≥ 30)",
                "Smooth cambered running surface",
                "0.5m ⌀ × 1.2m concrete culvert with RC headwalls",
                "Culvert laid with 1% fall for self‑cleaning"
            ],
            client: "SiSombe Plot Development"
        },
        {
            id: 8,
            title: "Locks and Luxe Saloon — Bulawayo",
            category: "Commercial",
            image: "/projects/locks_and_luxe_saloon.jpg",
            images: [
                "/projects/locks_and_luxe_saloon.jpg",
                "/projects/locks_and_luxe_saloon2.jpg",
                "/projects/locks_and_luxe_saloon3.jpg"
            ],
            shortDescription: "Modern, luxurious saloon fit-out featuring marble flooring, LED-accented arched mirrors, and premium leather furniture.",
            fullDescription: `Design Overview
Locks and Luxe Saloon is a modern saloon designed with a sleek and luxurious aesthetic. The space features a combination of high-end materials and cutting-edge design elements to create a sophisticated ambiance for clients in Bulawayo.

Material Selection
- Flooring: White marble tiles with gray veins for a clean, luxurious look.
- Wall Decor: Vertical slate panels with LED lighting accents behind arched mirrors.
- Furniture: Brown leather cushioned chairs with silver metal frames for a modern touch.
- Mirrors: Five arched mirrors with 5-colour LED backlighting for a futuristic vibe.
- Tables: Gray tables paired with the brown leather chairs for styling and service stations.

Design Elements
- Lighting: LED lights outline the arched mirrors and run along the top of the vertical slat wall panels, creating a modern glow.
- Layout: Stations are arranged linearly along the wall with mirrors, allowing for efficient service delivery and client comfort.
- Aesthetics: The combination of brown leather, silver metal, white marble, and LED lights creates a luxe, modern saloon experience.

Final Job
As of 15 October 2025, Locks and Luxe Saloon in Bulawayo is completed with:
- 26 styling stations with arched mirrors and LED lighting.
- Brown leather and silver metal furniture.
- White marble flooring.
- Modern LED accents enhancing the vertical slat wall panels.
`,
            location: "Bulawayo",
            status: "Completed",
            endDate: "15 October 2025",
            features: [
                "26 styling stations with arched mirrors and LED lighting",
                "White marble flooring",
                "Brown leather & silver metal furniture",
                "LED-accented vertical slat wall panels",
                "Five arched mirrors with 5-colour LED backlighting"
            ],
            client: "Locks and Luxe Saloon"
        }
                ,
                {
                        id: 9,
                        title: "Charcoal‑Grey Revamp — 9th Avenue & Five Street",
                        category: "Refurbishment",
                        image: "/projects/charcoal_grey_revamp.jpg",
                        images: [
                                "/projects/charcoal_grey_revamp.jpg",
                                "/projects/charcoal_grey_revamp2.jpg",
                                "/projects/charcoal_grey_revamp3.jpg"
                        ],
                        shortDescription: "Exterior repaint and masonry repair for a Bulawayo mixed‑use property — charcoal grey finish with accent trims.",
                        fullDescription: `Project Overview – “Charcoal‑Grey Revamp”
Contractor: Alauwndy Engineering Solutions
Property Managers: Rananga Properties
Location: 9th Avenue and Five Street, Bulawayo
Duration: 28 days (record time)

Step‑by‑Step Execution (Painting Scope)
Phase	Activities	Key Details
1. Site Preparation	- Erect full‑height steel scaffolding (right‑side façade)
    • Secure work zone, install safety netting & signage	Scaffolding allowed safe, full‑height access for all trades.
2. Surface Cleaning	- Power‑wash exterior walls to remove dust, algae, old flaking paint
    • Spot‑scrape loose render & sand‑blast high‑traffic areas	Ensured a clean, contaminant‑free substrate for paint adhesion.
3. Brick Dressing (Repair)	- Inspect mortar joints; repoint any cracks > 2 mm
    • Patch damaged brick faces with matching mortar mix
    • Allow 48 h cure before priming	Restored structural integrity and uniform appearance.
4. Priming	- Apply alkali‑resistant, low‑VOC primer (2 coats)
    • Primer color: tinted to mid‑grey to aid even top‑coat coverage	Improves durability and reduces top‑coat usage.
5. Base Coat (Charcoal Grey)	- Roller‑apply first charcoal‑grey coat (2 hrs dry)
    • Follow with second coat after 4 hrs for full opacity	Achieved deep, uniform charcoal finish.
6. Accent/Secondary Color	- Apply accent color on window trims & decorative bands using a fine‑nap roller
    • Touch‑up any bleed‑through with a small brush	Provides visual contrast and architectural definition.
7. Clear Protective Coat	- Spray low‑sheen, UV‑resistant clear sealer (optional) for long‑term weather protection	Extends lifespan of paintwork.
8. Scaffolding Dismantle & Clean‑up	- Remove scaffolding, clear debris, perform final inspection	Site left tidy, no safety hazards.
`,
                        location: "9th Avenue & Five Street, Bulawayo",
                        status: "Completed",
                        features: [
                                "Full‑height steel scaffolding and secure work zone",
                                "Power‑wash, spot‑scrape and sand‑blast surface cleaning",
                                "Mortar repointing and brick face repairs",
                                "Alkali‑resistant low‑VOC primer (tinted mid‑grey)",
                                "Charcoal‑grey base coats and accent trims",
                                "Optional UV‑resistant clear protective sealer"
                        ],
                        client: "Rananga Properties"
                }
    ];
    const categories = ["All", "Residential", "Industrial", "Commercial", "Civil Engineering", "Road Surfacing", "Maintenance"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    // determine current grid columns so we can insert the expanded detail after the
    // row that contains the expanded card (prevents pushing other items in the row)
    const getCols = () => {
        if (typeof window === 'undefined') return 1;
        const w = window.innerWidth;
        if (w >= 1024) return 3; // lg
        if (w >= 640) return 2;  // sm
        return 1;
    };
    const [cols, setCols] = useState(getCols());

    useEffect(() => {
        const onResize = () => setCols(getCols());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // index of the expanded project within the filtered list and the index of the
    // last item in that row (we'll render the detail after that row)
    const expandedIndex = expandedProject ? filteredProjects.findIndex(p => p.id === expandedProject) : -1;
    const expandedRowEnd = expandedIndex === -1 ? -1 : Math.min(filteredProjects.length - 1, Math.floor(expandedIndex / cols) * cols + (cols - 1));
    const expandedProj = expandedIndex !== -1 ? filteredProjects[expandedIndex] : null;
    const expandedPercent = expandedProj ? (expandedProj.status === 'Completed' ? 100 : expandedProj.status === 'In Progress' ? 60 : expandedProj.status === 'Active' ? 75 : 40) : 0;

    return(
        <>
            <Helmet>
                <title>
                    Alauwndy Engineering Solutions - Projects
                </title>
                <link rel="preload" as="image" href="/services/residential_project.webp" />
                <link rel="preload" as="image" href="/services/industrial_project.webp" />
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
                    <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${expandedProject ? 'sm:auto-rows-auto' : 'sm:auto-rows-fr'}`}>
                        {filteredProjects.map((project, index) => (
                            <div key={project.id} className="contents">
                                <motion.div
                                    key={`card-${project.id}`}
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
                                                {(project.startDate || project.endDate) && (
                                                    <span>
                                                        📅 {project.startDate
                                                            ? `${project.startDate}${project.startDate && project.endDate ? ' — ' : ''}${project.endDate ? project.endDate : ''}`
                                                            : `Completed: ${project.endDate}`}
                                                    </span>
                                                )}
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

                                {/* Render the expanded detail after the end of the row that contains the expanded card */}
                                {index === expandedRowEnd && expandedProj && (
                                    <AnimatePresence>
                                        <motion.div
                                            key={`detail-${expandedProj.id}`}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="col-span-full"
                                        >
                                            <div className="bg-gray-50 p-6 rounded-lg mt-2">
                                                <div className="max-w-7xl mx-auto">
                                                    <div className="bg-white border-l-4 border-indigo-700 shadow-md p-6 rounded-md">
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div>
                                                                <h3 className="text-2xl font-semibold text-gray-900 leading-tight">{expandedProj.title}</h3>
                                                                <div className="text-xs text-gray-500 mt-1">Project ID: <span className="font-mono text-gray-700 ml-2">#{expandedProj.id}</span></div>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${expandedProj.status === 'Completed' ? 'bg-green-50 text-green-800 border border-green-100' : expandedProj.status === 'In Progress' ? 'bg-blue-50 text-blue-800 border border-blue-100' : 'bg-yellow-50 text-yellow-800 border border-yellow-100'}`}>
                                                                    {expandedProj.status}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="grid md:grid-cols-2 gap-6">
                                                            <div>
                                                                <p className="text-sm text-gray-700 leading-relaxed mb-4">{expandedProj.fullDescription}</p>

                                                                {/* Image Gallery (if images exist) */}
                                                                {expandedProj.images && expandedProj.images.length > 0 && (
                                                                    <div className="mb-4">
                                                                        <h5 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Project Images</h5>
                                                                        <div className="grid grid-cols-3 gap-2">
                                                                            {expandedProj.images.map((img, idx) => (
                                                                                <div key={idx} className="aspect-square overflow-hidden rounded border border-gray-200">
                                                                                    <img
                                                                                        src={img}
                                                                                        alt={`${expandedProj.title} - Image ${idx + 1}`}
                                                                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                                                                                        loading="lazy"
                                                                                    />
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                <div className="grid grid-cols-2 gap-3 text-sm">
                                                                    <div>
                                                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Client</div>
                                                                        <div className="font-mono text-gray-800 bg-gray-100 inline-block px-2 py-1 rounded mt-1">{expandedProj.client}</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                                                                        <div className="text-gray-800 mt-1">{expandedProj.location}</div>
                                                                    </div>
                                                                    {(expandedProj.startDate || expandedProj.endDate) && (
                                                                        <div>
                                                                            <div className="text-xs text-gray-500 uppercase tracking-wider">
                                                                                {expandedProj.startDate ? 'Dates' : 'Completion Date'}
                                                                            </div>
                                                                            <div className="text-gray-800 mt-1">
                                                                                {expandedProj.startDate
                                                                                    ? `${expandedProj.startDate}${expandedProj.startDate && expandedProj.endDate ? ' — ' : ''}${expandedProj.endDate ? expandedProj.endDate : ''}`
                                                                                    : expandedProj.endDate}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    <div>
                                                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Category</div>
                                                                        <div className="text-gray-800 mt-1">{expandedProj.category}</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                                                                <div className="grid grid-cols-1 gap-3">
                                                                    {expandedProj.features.map((feature, idx) => (
                                                                        <div key={idx} className="flex items-start gap-3">
                                                                            <div className="mt-1 text-indigo-600 font-bold">▸</div>
                                                                            <div className="text-sm text-gray-800 font-medium">{feature}</div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            

            <ScrollTop />
            <Footer/>
        </>
    );
}

export default Projects;
