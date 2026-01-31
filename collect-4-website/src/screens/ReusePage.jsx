// Importing Styling Files

import "../assets/styles/ReusePage.scss";

// Importing Custom Components 

import ScrollToTop from '../components/ScrollToTop';
import RightSideContent from "../components/RightSideContent";
import LeftSideContent from "../components/LeftSideContent";

// Importing Required Images

import Furniture from "../assets/images/furniture.jpg";
import Electronics from "../assets/images/electronics.jpg";
import Sports from "../assets/images/sports-equipment.jpg";
import Clothing from "../assets/images/furniture.jpg";
import Charity from "../assets/images/charity.jpg";

const ReusePage = () => 
{
    document.title = "Collect 4 - Reuse";

    return (
        <>
            <ScrollToTop />
        
        <div className = "reusepage-container">
            <LeftSideContent 
                title = "Refurbished Furniture"
                image = { Furniture }
                alt = "Furniture Showroom Image" 
            >
                <p>
                    We extend our mission of sustainability to the home by rescuing and restoring quality furniture pieces. Our goal 
                    is to prevent well-made items from entering landfills while providing unique, affordable options for your living 
                    space.
                </p>
                <ul>
                    <li>
                        Expert Restoration: Every piece is carefully cleaned, repaired, and refinished to bring out its original character 
                        and ensure structural integrity.
                    </li>
                    <li>
                        Eco-Friendly Materials: We prioritize the use of sustainable paints, waxes, and oils during the restoration process 
                        to keep your home healthy.
                    </li>
                    <li>
                        Unique Selection: Our inventory constantly changes, offering everything from vintage wooden tables and chairs to modern 
                        storage solutions.
                    </li>
                    <li>
                        Community Impact: By choosing refurbished furniture, you are supporting local circular economy initiatives and reducing 
                        the carbon footprint of your home.
                    </li>
                </ul>
            </LeftSideContent>
            
            <div className = "section-break" />
            
            <RightSideContent 
                title = "Refurbished Electronics"
                image = { Electronics }
                alt = "Showroom Electronics Image" 
            >
                <p>
                    We provide a sustainable alternative to the rapid cycle of electronic waste by refurbishing high-quality devices. Our team 
                    ensures that pre-owned technology is restored to peak performance, offering affordable and eco-friendly solutions for the 
                    community.
                </p>
                <ul>
                    <li>
                        Comprehensive Testing: Rigorous multi-point diagnostics ensure all hardware/software functions perfectly.
                    </li>
                    <li>
                        Data Security: Professional-grade data wiping on donated devices protects your complete privacy.
                    </li>
                    <li>
                        Performance Restoration: Battery replacements, internal cleaning, and software updates restore modern speeds.
                    </li>
                    <li>
                        Environmental Impact: Refurbished tech reduces e-waste and raw material mining demand.
                    </li>
                </ul>
            </RightSideContent>

            <div className = "section-break" />

            <LeftSideContent 
                title = "Sports Equipment"
                image = { Sports }
                alt = "Sports Equipment Image" 
            >
                <p>
                    We believe that staying active shouldn't come at a high environmental or financial cost. By collecting and restoring quality gear, 
                    we make sports more accessible to the Kingston community while extending the life of specialized equipment.
                </p>
                <ul>
                    <li>
                        Quality Inspection: Every item is checked for safety, structural integrity, and performance.
                    </li>
                    <li>
                        Professional Sanitization: All gear undergoes deep cleaning to ensure it is hygienic and ready for use.
                    </li>
                    <li>
                        Functional Maintenance: We handle some specialized repairs like regripping and mechanical adjustments.
                    </li>
                    <li>
                        Waste Reduction: Repurposing gear prevents bulky composite materials from entering landfills.
                    </li>
                </ul>
            </LeftSideContent>

            <div className = "section-break" />

            <RightSideContent 
                title = "Clothing"
                image = { Clothing }
                alt = "Clothing Image" 
            >
                <p>
                    We promote sustainable fashion by rescuing and revitalizing quality garments. Our curation process ensures that pre-loved clothing 
                    is refreshed and ready for a new life in your wardrobe.
                </p>
                <ul>
                    <li>
                        Quality Selection: Each garment is inspected for fabric integrity and timeless style.
                    </li>
                    <li>
                        Professional Laundering: All items are deep-cleaned using eco-friendly methods for immediate wear.
                    </li>
                    <li>
                        Minor Repairs: We handle essential mending like replacing buttons or fixing loose seams.
                    </li>
                    <li>
                        Circular Fashion: Choosing used apparel reduces the water and carbon footprint of your wardrobe.
                    </li>
                </ul>
            </RightSideContent>

            <div className = "section-break" />

            <LeftSideContent 
                title = "Charity"
                image = { Charity }
                alt = "Sports Equipment Image" 
            >
                <p>
                    We promote sustainable fashion by rescuing and revitalizing quality garments. Our curation process ensures that pre-loved clothing 
                    is refreshed and ready for a new life in your wardrobe.
                </p>
                <ul>
                    <li>
                        Quality Selection: Each garment is inspected for fabric integrity and timeless style.
                    </li>
                    <li>
                        Professional Laundering: All items are deep-cleaned using eco-friendly methods for immediate wear.
                    </li>
                    <li>
                        Minor Repairs: We handle essential mending like replacing buttons or fixing loose seams.
                    </li>
                    <li>
                        Circular Fashion: Choosing used apparel reduces the water and carbon footprint of your wardrobe.
                    </li>
                </ul>
            </LeftSideContent>

            <div className = "section-break" />

            <div className = "footer-section">
                <p>© 2026 by Collect 4 Reuse. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default ReusePage;