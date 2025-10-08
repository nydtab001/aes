import React from 'react';
import PageHeader from '../components/PageHeader2';
import BgCarousel from '../components/BgCarousel';
import backgrounds from '../data/backgrounds';
import { Helmet } from 'react-helmet';
import CompanyOverview from '../components/CompanyOverview';
import MissionGrid from '../components/MissionGrid';
import Section from '../components/Section';
import Heading1 from '../components/assets/Heading1';
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
  }

  const reduce = useReducedMotion()

  return (
    <>
    <Helmet>
        <title>
          Alauwndy Engineering Solutions
        </title>
        <link rel="preload" as="image" href="backgrounds/bg1.jpg" />
        <link rel="preload" as="image" href="backgrounds/bg2.jpg" />
        <link rel="preload" as="image" href="backgrounds/bg3.jpg" />
      </Helmet>
    <PageHeader />
    <section className="relative md:mt-[0px] mt-[0px] max-sm:h-[400px] h-screen text-center">
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-black to-gray-900 text-white">
        <BgCarousel slides={backgrounds} />
    </div>
    </section>
    <Section
      className=" md:px-16 max-w-full bg-red-600 md:mx-10 mx-4 px-8 py-12 pt-12 text-center"
    >
        <motion.section 
        className='md:px-16 max-w-7xl mx-auto px-0 py-0 m-0 text-center'
        variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
      <Heading1 className='md:text-4xl text-2xl text-white bg-white font-semibold mb-10 mt-4 md:mt-8' title='Engineering with Purpose'/>
      <p className="max-w-full mx-auto md:text-2xl text-lg text-white">
        AE Solutions is a multidisciplinary engineering and consulting firm delivering high-quality solutions across energy, infrastructure, and environmental sectors. Our work is rooted in integrity, collaboration, and a vision for a better future.
      </p>
      <button
        className="mt-8 bg-transparent text-white px-6 py-3 font-semibold border-2 rounded-md border-white drop-shadow-lg transition-colors duration-200 hover:bg-white hover:text-red-600"
        onClick={() => window.location.href = '/about'}
      >
        Learn More About Us
      </button>
      </motion.section>
    </Section>
    <MissionGrid/>
    </>
  );
}

export default Home;