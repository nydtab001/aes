
const SectionHeading = ({ title, subtitle, bg="bg-slate-800", bgimg="/about_hero.jpg", colour="text-white" }) => {
  return (
    <div className={`mt-[73px] md:mt-[105px] ${bg} border-b-[8px] border-red-600`}
    style={bgimg ? { backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
      <div className={`bg-indigo-950 bg-opacity-50 w-full h-full pb-8 max-md:pt-6 pt-14`}>
    <div className="py-6 md:py-[100px] max-w-7xl mx-auto md:px-16 px-8">
      <h1 className={`text-3xl md:text-7xl font-bold text-left ${colour}`}>{title}</h1>
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
    </div>
    </div>
  );
};

export default SectionHeading;
