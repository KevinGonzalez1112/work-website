// Importing Styling Files

import "../assets/styles/BikesPage.scss";

// Importing Custom Components 

import ScrollToTop from '../components/ScrollToTop';
import RightSideContent from "../components/RightSideContent";
import LeftSideContent from "../components/LeftSideContent";

// Importing Required Images

//import RefurbishedBikes from "../assets/images/bicycles.jpg";
//import PartsAndAcc from "../assets/images/parts-and-accessories.jpg";
//import Repairs from "../assets/images/bike-repairs.jpg";

const BikesPage = () => 
{
    document.title = "Collect 4 - Bikes";

    return (
        <>
        <ScrollToTop />
        {/*
        <div className = "bikespage-container">

            <LeftSideContent 
                title = "Refurbished Bicycles"
                image = { RefurbishedBikes }
                alt = "Bicycle Showroom Image" 
            >
                <p>
                    We gratefully accept bicycle donations from the local community and businesses to give them a second life. Every refurbished 
                    bike represents saved resources and renewed joy for riders of all ages.
                </p>
                <ul>
                    <li>
                        Expert Restoration: Each bike undergoes thorough cleaning, mechanical repairs, safety checks, and cosmetic 
                        restoration.
                    </li>
                    <li>Premium Standards: From replacing worn parts and tuning gears to painting frames, no detail is overlooked to 
                        ensure every bike meets our high standards.
                    </li>
                    <li>Sustainable Impact: Our approach keeps quality bikes out of landfills, making cycling affordable for families, 
                        students, and commuters in the local area.
                    </li>
                </ul>
            </LeftSideContent>

            <div className = "section-break" />

            <RightSideContent 
                title = "Bicycle Parts and Accessories"
                image = { PartsAndAcc }     
                alt = "Bicycle Parts and Accessories Image"
            >
                <p>
                    We stock a wide range of quality bicycle parts and accessories to keep you riding smoothly. All parts are sourced from 
                    trusted brands and thoroughly inspected for reliability.
                </p>
                <ul>
                    <li>Essential Components: We stock chains, brake pads, tyres, tubes, and pedals to keep you riding smoothly.</li>
                    <li>Performance Upgrades: High-quality gears, cassettes, and bottom brackets for major overhauls.</li>
                    <li>Practical Essentials: A full selection of locks, lights, bells, pumps, and helmets for everyday cyclists.</li>
                    <li>Rider Comfort: Enhance your journey with new saddles, grips, bar tape, and bottle racks.</li>
                </ul>
            </RightSideContent>

            <div className = "section-break" />

            <LeftSideContent 
                title = "Bicycle Repairs and Servicing"
                image = { Repairs }
                alt = "Bicycles Repairs Image" 
            >
                <p>
                    Bring us your bike for professional repairs by our licensed mechanic on site. We ensure your bike returns safer, smoother,
                     and ready for the road with no nasty surprises.
                </p>
                <ul>
                    <li>
                        Expert Diagnosis: Our workshop uses professional tools and diagnostic equipment to accurately diagnose and fix issues 
                        other shops might miss.
                    </li>
                    <li>
                        Comprehensive Stock: We handle everything from quick fixes like punctures and brake adjustments to wheel building, 
                        suspension servicing, and full restorations.
                    </li>
                    <li>
                        Fast Turnaround: Most repairs are completed within 24–48 hours, with options to wait for minor fixes or collect your 
                        bike later.
                    </li>
                </ul>
            </LeftSideContent>
            
            <div className = "section-break" />

            <div className = "footer-section">
                <p>© 2026 by Collect 4 Reuse. All rights reserved.</p>
            </div>
        </div>
        */}
        </>
    )
}

export default BikesPage;