// Importing Custom Components

import FlipCard from "../custom-components/FlipCard";

// Importing Required Data

import { flipCardData } from "../../data/FlipCardData";

const OurServicesSection = () =>
{
    return (
        <div className = "our-services-section">
            <h2>Our Services</h2>
            <div className = "our-services-text-area">
                <p>
                    We save quality goods from landfill by bulk buying reusable inventory, 
                    refurbishing to premium condition, and reselling as sustainable assets — or 
                    we manage your full reuse program end-to-end. Plus, we connect you to reuse 
                    networks for maximum community impact. Hover the over cards below to 
                    learn more about everything we do.
                </p>
            </div>
            <div className = "our-services-content-area">
                {
                    flipCardData.slice(0, 3).map((service) => (
                        <FlipCard 
                            key = { service.id }
                            title = { service.title }
                            image = { service.image }
                            alt = { service.alt }
                            description = { service.description }
                        />
                    ))
                }
            </div>
            <div className = "our-services-content-area">
                {
                    flipCardData.slice(3, 6).map((service) => (
                        <FlipCard 
                            key = { service.id }
                            title = { service.title }
                            image = { service.image }
                            alt = { service.alt }
                            description = { service.description }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default OurServicesSection;