// Importing Required Images

import RefurbishedBikes from "../assets/images/bikes-page/bicycles.jpg";
import PartsAndAcc from "../assets/images/bikes-page/parts-and-accessories.jpg";
import Repairs from "../assets/images/bikes-page/bike-repairs.jpg";

// Bike Page Data Array

const bikePageData = [
    {
        id: 0,
        title: "Refurbished Bikes",
        image: RefurbishedBikes,
        alt: "Store bicycle display",
        description: 
            `We gratefully accept bicycle donations from the local community and businesses 
            to give them a second life. Every refurbished bike represents saved resources and 
            renewed joy for riders of all ages.`,
        summaryOne: "Expert Restoration",
        pointOne: 
            `Each bike undergoes thorough cleaning, mechanical repairs, safety checks, and 
            cosmetic restoration.`,
        summaryTwo: "Premium Standards",
        pointTwo: 
            `From replacing worn parts and tuning gears to painting frames, no detail is overlooked 
            to ensure every bike meets our high standards.`,
        summaryThree: "Sustainable Impact",
        pointThree: 
            `Our approach keeps quality bikes out of landfills, making cycling affordable for 
            families, students, and commuters in the local area.`
    },
    {
        id: 1,
        title: "Bicycle Repairs & Servicing",
        image: Repairs,
        alt: "Mechanic working on a bike repair",
        description: 
            `Bring us your bike for professional repairs by our licensed mechanic on site. We ensure your bike 
            returns safer, smoother, and ready for the road with no nasty surprises.`,
        summaryOne: "Expert Restoration",
        pointOne: 
            `Our workshop uses professional tools and diagnostic equipment to accurately diagnose and fix issues 
            other shops might miss.`,
        summaryTwo: "Comprehensive Stock",
        pointTwo: 
            `We handle everything from quick fixes like punctures and brake adjustments to wheel building, suspension 
            servicing, and full restorations.`,
        summaryThree: "Fast Turnaround",
        pointThree: 
            `Most repairs are completed within 24–48 hours, with options to wait for minor fixes or 
            collect your bike later.`
    },
    {
        id: 2,
        title: "Bicycle Parts & Accessories",
        image: PartsAndAcc,
        alt: "Store bicycle parts display",
        description: 
            `We stock a wide range of quality bicycle parts and accessories to keep you riding smoothly. 
            All parts are sourced from trusted brands and thoroughly inspected for reliability.`,
        summaryOne: "Essential Components",
        pointOne:
            `We stock chains, brake pads, tyres, tubes, pedals, locks, lights, bells, pumps, and helmets for 
            everyday cyclists.`,
        summaryTwo: "Performance Upgrades",
        pointTwo: 
            `High-quality gears, cassettes, bottom brackets, and suspension components for major overhauls.`,
        summaryThree: "Rider Comfort",
        pointThree:
           `Enhance your journey with new saddles, grips, bar tape, and bottle racks.`
    } 
]

export { bikePageData };
