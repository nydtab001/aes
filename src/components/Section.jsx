const Section = ({ children, className = "", id, ...rest }) => {
    // add a scroll-margin to ensure anchored sections are visible below a fixed header
    return (
        <section id={id} {...rest} className={`scroll-mt-20 md:px-16 max-w-7xl mx-auto px-8 py-12 pt-12 ${className}`}>
            {children}
        </section>
    )
}

export default Section;
