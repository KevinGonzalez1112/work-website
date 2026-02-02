// Importing React Components

import { useEffect } from "react";

// Importing Custom Components

import ScrollToTop from '../components/custom-components/ScrollToTop';
import LandingSection from "../components/page-sections/LandingSection";
import OurJourneySection from "../components/page-sections/OurJourneySection";
import OurServicesSection from "../components/page-sections/OurServicesSection";
import TheFutureSection from "../components/page-sections/TheFutureSection";
import StoreInformation from "../components/page-sections/StoreInformation";

// Importing Styling Files

import "../assets/styles/HomePage.scss";

const HomePage = () =>
{
    // Setting Page Title 

    useEffect(() => {
        document.title = "Collect 4 - Home";
    }, []);
    
    // Combining Sections that make up the Home Page content

    return (
        <>
            <ScrollToTop />

            <div className = "homepage-container">
                <LandingSection />
                <div className = "section-break" />
                <OurJourneySection />
                <div className = "section-break" />
                <OurServicesSection />
                <div className = "section-break" />
                <TheFutureSection />
                <div className = "section-break" />
                <StoreInformation />
                <div className = "section-break" />
                <div className = "footer-section">
                    <p>© 2026 by Collect 4 Reuse. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default HomePage;