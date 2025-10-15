import Footer from "../components/Footer2";
import PageHeader from "../components/PageHeader2";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import CompanyOverview from "../components/CompanyOverview";
import SectionHeading from "../components/SectionHeading2";
import Heading1 from "../components/assets/Heading1";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function About() {

  const reduce = useReducedMotion()

  return (
    <>
    <Helmet>
        <title>
          About Us - Alauwndy Engineering Solutions
        </title>
      </Helmet>
    <PageHeader />
    <SectionHeading title="ABOUT US" bg=""/>
    <CompanyOverview />
    <section className="bg-white px-8 py-12 px-6 sm:px-8 md:px-16 lg:px-40">
      <motion.div
        initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut"}}}
            viewport={{ once: true, amount: 0.15 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.4 }} 
      className="mx-auto w-fit md:mb-10">
      <Heading1 width="max-sm:w-10 w-24" className="md:text-4xl text-2xl text-indigo-950 bg-indigo-950 font-semibold mb-10 mt-4 md:mt-8" title="Who We Are"/>
      </motion.div>
      <motion.section
       initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut"}}}
            viewport={{ once: true, amount: 0.15 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.4 }} 
      className="grid md:grid-cols-2 cols-1 gap-x-4 gap-y-6 justify-between">
        <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">ALAUWNDY ENGINEERING SOLUTION, is the local dominant
player in engineering consultancy, manufacturing, construction
and structural steel industry. It was established in 2020 to
facilitate the directors' vision, mission and a dream. <br/>
Alauwndy Engineering Solutions continues to stay on course in
realising its vision to position itself as the region's leading
specialist of civil, mechanical, electrical & telecommunication
engineering solutions providers.</p>
<p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
  In addition, we stay “tuned in” throughout the process to assure
the Owner that the nal product is and has been completed per
the specications and in the most cost-effective manner
available. In today's economic climate, our keen knowledge of
costs along with our ability to utilize effective cost-control means
and methods provides our clients with a level of condence in the
work at hand.</p>
<p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">To optimize efficiency, AE Solutions has been adopting
industrialized building system (IBS) & precast concrete works. It
has a better control on quality as all elements are nished in
factory and hence directly reduces reliance on manpower and
construction timelines. With continuous improvement,
professionalism and commitment to stay focused to customer
needs, AE Solutions has taken necessary innovative steps and has
achieved the desired success.
</p>
      </motion.section>
    </section>

     {/* Vision */}
   <section
  className="relative h-[400px] max-[1220px]:h-[500px] mb-6 md:mb-10 text-neutral-800 overflow-hidden"
  style={{
    backgroundImage: 'url(/our_vision.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute bottom-0 max-[1220px]:w-full h-full max-[1220px]:h-1/2 w-1/2 bg-black/70 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-40 py-6 text-left text-white">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut"}}}
      transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto w-fit">
        <Heading1
          width="max-sm:w-10 w-24"
          className="md:text-4xl bg-white text-2xl text-white font-semibold mb-6 mt-2 md:mt-4"
          title="Our Vision"
        />
      </div>
      <p className="text-sm md:text-lg leading-relaxed">
        AE Solutions will be recognized worldwide as the preferred partner to build innovative
        engineering and heavy construction solutions. The character and expertise of our
        employees, and focus on being a high-quality, ethical, community-minded company, will
        drive superior financial returns.
      </p>
    </motion.div>
  </div>
</section>

 {/* Mission */}
<section
  className="relative h-[580px] max-[1220px]:h-[740px] mb-6 md:mb-10 text-neutral-800 overflow-hidden"
  style={{
    backgroundImage: 'url(/our_mission.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute bottom-0 right-0 max-[1220px]:w-full h-full max-[1220px]:h-1/2 w-1/2 bg-black/70 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-40 py-6 text-left text-white">
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut"}}}
      transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto w-fit">
        <Heading1
          width="max-sm:w-10 w-24"
          className="md:text-4xl bg-white text-2xl text-white font-semibold mb-6 mt-2 md:mt-4"
          title="Our Mission"
        />
      </div>
      <p className="text-sm md:text-lg leading-relaxed">
        AE Solutions is the innovative leader of engineering solutions and heavy civil construction
products and services that connect and improve the world's communities. We are guided by
our values-based culture and the dedication of the AES employee family that has helped us
succeed. We consistently deliver superior customer satisfaction and are committed to a safe
and rewarding work environment that is essential to long-term success for our owners,
partners, and employees.
“Our tradition is based on Integrity and a Commitment to Excellence.”
      </p>
    </motion.div>
  </div>
</section>

{/* Values */}
<section
  className="relative h-[400px] max-[1220px]:h-[580px] mb-6 md:mb-10 text-neutral-800 overflow-hidden"
  style={{
    backgroundImage: 'url(/teamwork.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute bottom-0 max-[1220px]:w-full h-full max-[1220px]:h-1/2 w-1/2 bg-black/70 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-40 py-6 text-left text-white">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut"}}}
      transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto w-fit">
        <Heading1
          width="max-sm:w-10 w-24"
          className="md:text-4xl bg-white text-2xl text-white font-semibold mb-6 mt-2 md:mt-4"
          title="Our Values"
        />
      </div>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-lg leading-relaxed">
          <li>Integrity</li>
          <li>Honesty and Openness</li>
          <li>Care for People</li>
          <li>Trust</li>
          <li>Safety</li>
          <li>Teamwork</li>
        </ul>
    </motion.div>
  </div>
</section>
    <Footer />
    </>
  );
}

export default About;