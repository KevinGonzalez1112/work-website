// Importing React Components

import { useEffect } from "react";

// Importing Custom Components 

import ScrollToTop from '../components/custom-components/ScrollToTop';
import BikesPageIntro from "../components/page-sections/BikesPageIntro";
import RightSideContent from "../components/RightSideContent";
import LeftSideContent from "../components/LeftSideContent";

// Importing Required Data

import { bikePageData } from "../data/BikesPageData";

// Importing Styling Files

import "../assets/styles/BikesPage.scss";

const BikesPage = () => 
{
    // Setting Page Title 
    
    useEffect(() => {
        document.title = "Collect 4 - Bikes";
    })

    return (
        <>
            <ScrollToTop />

            <div className = "bikespage-container">

                <BikesPageIntro />

                <div className = "section-break" />

                {
                    bikePageData.map((feature) => (
                        feature.id % 2 === 0 ? (
                            <>
                                <LeftSideContent
                                    title = { feature.title }
                                    image = { feature.image }
                                    alt = { feature.alt }
                                >
                                    <p>{ feature.description }</p>
                                    <ul>
                                        <li>{ feature.pointOne }</li>
                                        <li>{ feature.pointTwo }</li>
                                        <li>{ feature.pointThree }</li>
                                    </ul>
                                </LeftSideContent>
                                <div className = "section-break" />
                            </>
                        ) : (
                            <>
                                <RightSideContent
                                    title = { feature.title }
                                    image = { feature.image }
                                    alt = { feature.alt }
                                >
                                    <p>{ feature.description }</p>
                                    <ul>
                                        <li>{ feature.pointOne }</li>
                                        <li>{ feature.pointTwo }</li>
                                        <li>{ feature.pointThree }</li>
                                    </ul>
                                </RightSideContent>
                                <div className = "section-break" />
                            </>
                        )
                    ))
                }
                <div className = "footer-section">
                    <p>© 2026 by Collect 4 Reuse. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default BikesPage;