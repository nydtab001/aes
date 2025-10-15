import Heading1 from "./assets/Heading1";
import Section from "./Section";
import OverviewWithValues from "./ValueOverview";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function CompanyOverview() {

  const reduce = useReducedMotion()

  return (
      <div className="relative overflow-hidden w-full flex max-[1300px]:flex-col justify-between bg-indigo-950 px-6 sm:px-8 md:px-16 lg:px-40 text-left">
        <AnimatePresence c>
            <motion.div
            initial={{opacity: 0, x: -60}}
            whileInView={{opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut"}}}
            viewport={{ once: true, amount: 0.15 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="pt-20"
            >
        <Heading1 className="text-2xl md:text-4xl text-left mb-10 bg-white text-white" title="Overview"
        />
        <p className="text-base md:text-lg text-white leading-relaxed">
         In AE Solutions we see our mission as providing consulting,
design and engineering services in the areas of energy, industry,
infrastructure, public sector and environmental protection,
taking into account the highest quality standards in such matter
that demanding expectations of our clients are met, guaranteed
business success realized and motivational working conditions
for our employees created. The success of our company is based
on our staff's intellectual capital, experience and tradition.
Together we create common values which include a belief in
assuring high quality of our services and an acceptance of
personal responsibility for the realization of our commitments.
Work is organized into interdisciplinary groups, which
contributes to better results and ensures the knowledge transfer
onto younger co-workers.
        </p>
        <br />
        <p className="text-base md:text-lg text-white leading-relaxed">
            AE Solutions operates as an engineering and consulting
company, working for the interest of our clients, public interest
and in accordance with the professional criteria. AE Solutions has
always and will continue to strive for advantages which our
consulting and project solutions bring to our clients and through
their realization towards a creation of challenges for a better
future.
        </p>
        <br />
        <p className="text-base md:text-lg text-white leading-relaxed">
            Managing Director
        </p>
        <p className="text-base md:text-lg text-white leading-relaxed">
            Anthony Foya
            </p>
            </motion.div>
            <motion.img
            initial={{opacity: 0, x: 60}}
            whileInView={{opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut"}}}
            viewport={{ once: true, amount: 0.15 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.6 }} 
            src="/Managing_director.png" alt="Managing Director" className="w-auto h-full md:max-h-[750px] object-contain"/>
            </AnimatePresence>
      </div>
  );
}