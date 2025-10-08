import Section from "./Section";
import OverviewWithValues from "./ValueOverview";

export default function CompanyOverview() {
  return (
    <Section className="mt-8 flex max-[1270px]:flex-col">
      <div className="w-1/2 max-[1270px]:w-full bg-indigo-950 p-12 text-left">
        <h2 className="text-2xl md:text-2xl text-left font-bold mb-6 text-white">
          Overview
        </h2>
        <p className="text-md max-sm:text-sm md:text-base text-white leading-relaxed">
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
        <p className="text-md md:text-base text-white leading-relaxed">
            AE Solutions operates as an engineering and consulting
company, working for the interest of our clients, public interest
and in accordance with the professional criteria. AE Solutions has
always and will continue to strive for advantages which our
consulting and project solutions bring to our clients and through
their realization towards a creation of challenges for a better
future.
        </p>
        <br />
        <p className="text-md md:text-base text-white leading-relaxed">
            Managing Director
        </p>
        <p className="text-md md:text-base text-white leading-relaxed">
            Anthony Foya
            </p>
      </div>
      <OverviewWithValues/>
    </Section>
  );
}