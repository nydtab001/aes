import Heading1 from './assets/Heading1';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { GiHouse } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { GiCrane } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";



// components/MissionGrid.tsx
const services = [
  { icon: <FaScrewdriverWrench />, title: 'Maintenance', desc: 'Our Maintenance Division offers after-hour repairs to minimize disruption, with technicians who document work and flag potential issues—helping you stay ahead of emergencies and maintain a sharp public image.', 
    img: '/services/maintenance_image.jpg', alt: 'Maintenance Service'
  },
  { icon: <GiHouse />, title: 'Residential', desc: 'Personalized builds, expertly managed. AE Solutions brings precision and care to every residential project, coordinating all phases with a dedicated team and premium materials—delivering homes that reflect craftsmanship, trust, and lasting quality.',
    img: '/services/residential_project.jpg', alt: 'Residential Service'
  },
  { icon: <LiaIndustrySolid />, title: 'Industrial', desc: 'Built for performance, designed around you. AE Solutions creates industrial facilities that optimize flow, space, and operations—custom-built to support your production, logistics, and distribution needs with precision and purpose.', 
    img: '/services/industrial_project.jpg', alt: 'Industrial Service'
  },
  { icon: <GiCrane />, title: 'Civil', desc: 'Smart sites, strong foundations. AE Solutions delivers expert civil engineering and site development for all project types—combining feasibility insight with thoughtful design to maximize potential and harmonize with the land.',
    img: '/services/civil_project.jpg', alt: 'Civil Service'
   },
  { icon: <FaRoad />, title: 'Road Surfacing', desc: 'Precision paving, proven results. APS leads in road surfacing and rehabilitation, delivering high-quality work on time and to spec—powered by skilled teams who take pride in tackling every challenge with excellence.',
    img: '/services/road_surfacing.jpg', alt: 'Road Surfacing Service'
   },
];

export default function MissionGrid() {

    const sectionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } }
  }

  const reduce = useReducedMotion()

  return (
    <section className="py-6 md:mx-10 md:mx-4">
      <div className="max-w-full mx-auto">
        <div className='mx-auto w-fit'>
        <Heading1 width='max-sm:w-0 sm:w-10 md:w-16 lg:w-24' className='lg:text-5xl md:text-4xl text-2xl text-indigo-950 bg-indigo-950 font-semibold md:mb-16 mb-8 mt-4 md:mt-16' title='Services'/>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
  {services.map((s, i) => (
    <div className={`flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} items-stretch w-full`}>
  {/* Image */}
  <img
    src={s.img}
    alt={s.alt}
    className="w-full md:w-1/2 h-auto md:h-[500px] max-md:max-h-[300px] object-cover"
  />

  {/* Card */}
  <div className={`relative overflow-hidden w-full md:w-1/2 ${i % 2 === 0 ? 'bg-indigo-950' : 'bg-red-600'} text-white p-8 flex flex-col justify-center text-center max-md:min-h-[300px] h-auto md:h-[500px]`}>
    <motion.div
        initial={i%2==0 ? { opacity: 0, x: -40 }: { opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } }}
        viewport={{ once: true, amount: 0.15 }}
        transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.6 }}
    >
    <div className={`md:text-4xl text-2xl bg-white w-fit p-4 rounded-full mx-auto mb-4 flex justify-center ${i % 2 === 0 ? 'text-indigo-950' : 'text-red-600'}`}>
        {s.icon}
        </div>
    <br/>
    <h2 className="md:text-5xl text-3xl mb-2">{s.title}</h2>
    <br/>
    <p className='md:text-2xl text-lg whitespace-normal break-words'>{s.desc}</p>
    </motion.div>
  </div>
</div>

  ))}
</div>
      </div>
    </section>
  );
}