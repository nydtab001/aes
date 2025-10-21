import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader2";
import Footer from "../components/Footer2";
import SectionHeading from "../components/SectionHeading2";

function Projects() {
    return(
        <>
            <Helmet>
            <title>
                Alauwndy Engineering Solutions - Services
            </title>
            </Helmet>
            <PageHeader/>
            <SectionHeading title="PROJECTS" bg=""/>
            <Footer/>
        </>
    );
}

export default Projects;
