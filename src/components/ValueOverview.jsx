export default function OverviewWithValues() {
  const values = [
    { title: 'Integrity & Professionalism', desc: 'We uphold the highest standards in every project and interaction.' },
    { title: 'Interdisciplinary Collaboration', desc: 'Teams work across disciplines to deliver holistic solutions.' },
    { title: 'Knowledge Transfer', desc: 'We mentor younger engineers to build lasting expertise.' },
    { title: 'Client-Centered Design', desc: 'Solutions are tailored to meet demanding expectations and public interest.' },
  ];

  return (
    <section className="bg-blue-50 max-[1270px]:w-full w-1/2">
      {/* <div className="w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8"> */}

        {/* Value Grid Sidebar */}
        {/* <div className="flex flex-col justify-start space-y-6">
          {values.map((v, i) => (
            <div key={i} className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{v.title}</h3>
              <p className="text-gray-700 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div> */}
      <img src="/Managing_director.jpg" alt="Managing Director" />
    </section>
  );
}