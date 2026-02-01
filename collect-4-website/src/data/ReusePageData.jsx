// Importing Required Images

import Furniture from "../assets/images/reuse-page/furniture.jpg";
import Electronics from "../assets/images/reuse-page/electronics.jpg";
import Sports from "../assets/images/reuse-page/sports.jpg";
import Clothing from "../assets/images/reuse-page/clothing.jpg";
import Charity from "../assets/images/reuse-page/charity.jpg";

// Reuse Page Data Array

const reusePageData = [
    {
        id: 0,
        title: "Refurbished Furniture",
        image: Furniture,
        alt: "Store furniture display",
        description: 
            `We extend our mission of sustainability to the home by rescuing and restoring quality furniture pieces. 
            Our goal is to prevent well-made items from entering landfills while providing unique, affordable options 
            for your living space.`,
        pointOne:
            `Expert Restoration: Every piece is carefully cleaned, repaired, and refinished to bring out its original 
            character and ensure structural integrity.`,
        pointTwo:
            `Eco-Friendly Materials: We prioritize sustainable paints, waxes, and oils during restoration to keep 
            your home healthy.`,
        pointThree: 
            `Unique & Impactful: Our constantly changing inventory offers vintage/modern pieces while supporting 
            local circular economy initiatives and reducing carbon footprints.`
    },
    {
        id: 1,
        title: "Refurbished Electronics",
        image: Electronics,
        alt: "Showroom Electronics Image",
        description: 
            `We provide a sustainable alternative to the rapid cycle of electronic waste by refurbishing high-quality devices. 
            Our team ensures that pre-owned technology is restored to peak performance, offering affordable and eco-friendly 
            solutions for the community.`,
        pointOne:
            `Comprehensive Testing: Rigorous multi-point diagnostics ensure all hardware/software functions perfectly.`,
        pointTwo:
            `Data Security: Professional-grade data wiping on donated devices protects your complete privacy.`,
        pointThree: 
            `Performance Restoration: Battery replacements, internal cleaning, and software updates restore modern speeds 
            while reducing e-waste.`
    },
    {
        id: 2,
        title: "Sports Equipment",
        image: Sports,
        alt: "Sports Equipment Image",
        description: 
            `We believe that staying active shouldn't come at a high environmental or financial cost. By collecting and 
            restoring quality gear, we make sports more accessible to the Kingston community while extending the life 
            of specialized equipment.`,
        pointOne:
            `Quality Inspection: Every item is checked for safety, structural integrity, and performance.`,
        pointTwo:
            `Professional Sanitization: All gear undergoes deep cleaning to ensure it is hygienic and ready for use.`,
        pointThree: 
            `Functional Maintenance: We handle specialized repairs like regripping and mechanical adjustments while 
            preventing landfill waste.`
    },
    {
        id: 3,
        title: "Clothing",
        image: Clothing,
        alt: "Clothing Image",
        description: 
            `We promote sustainable fashion by rescuing and revitalizing quality garments. Our curation process ensures that 
            pre-loved clothing is refreshed and ready for a new life in your wardrobe.`,
        pointOne:
            `Quality Selection: Each garment is inspected for fabric integrity and timeless style.`,
        pointTwo:
            `Professional Laundering: All items are deep-cleaned using eco-friendly methods for immediate wear.`,
        pointThree: 
            `Minor Repairs: We handle essential mending like replacing buttons or fixing seams to support circular fashion.`
    },
    {
        id: 4,
        title: "Charity",
        image: Charity,
        alt: "Charity Image",
        description: 
            `We partner with local charities to maximize community impact through sustainable refurbishment programs that 
            benefit those in need.`,
        pointOne:
            `Quality Selection: Each donated item is carefully inspected for quality and suitability for redistribution.`,
        pointTwo:
            `Professional Processing: Items receive thorough cleaning and minor repairs to ensure they meet distribution 
            standards.`,
        pointThree: 
            `Community Impact: Every refurbished item sold directly supports local charitable causes and sustainability 
            initiatives.`
    }
]

export { reusePageData };
