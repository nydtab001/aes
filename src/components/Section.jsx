const Section = ({ children, className = "" }) => {
    return (
        <section className={` md:px-16 max-w-7xl mx-auto px-8 py-12 pt-12 ${className}`}>
            {children}
        </section>
    )
}

export default Section;
