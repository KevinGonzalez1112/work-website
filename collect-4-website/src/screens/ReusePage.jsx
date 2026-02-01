// Importing React Components

import { useEffect } from "react";

// Importing Custom Components 

import ScrollToTop from '../components/custom-components/ScrollToTop';
import RightSideContent from "../components/RightSideContent";
import LeftSideContent from "../components/LeftSideContent";

// Importing Required Data

import { reusePageData } from "../data/ReusePageData";

// Importing Styling Files

import "../assets/styles/ReusePage.scss";

const ReusePage = () => 
{
    // Setting Page Title 
    
    useEffect(() => {
        document.title = "Collect 4 - Reuse";
    })
    
    return (
        <>
            <ScrollToTop />

            <div className = "reusepage-container">
                {
                    reusePageData.map((feature) => (
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

export default ReusePage;
