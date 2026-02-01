// Importing Images Required for each Member

import Bikes from "../assets/images/flip-cards/bicycles.jpg";
import Furniture from "../assets/images/flip-cards/furniture.jpg";
import Electronics from "../assets/images/flip-cards/electronics.jpg";
import Sports from "../assets/images/flip-cards/sports.jpg";
import Charity from "../assets/images/flip-cards/charity.jpg";

// Flip Card Data Array

const flipCardData = [
    {
        id: 0,
        title: "Bicycles",
        image: Bikes,
        alt: "Store bicycle display",
        description:
            `We inspect, repair, and refurbish bicycles to give them a second life - 
            reducing waste while making cycling more accessible and affordable for our community.`
    },
    {
        id: 1,
        title: "Furniture",
        image: Furniture,
        alt: "Store furniture section",
        description: 
            `We restore and upcycle quality furniture, diverting it from landfill and providing 
            affordable, stylish options for our customers.`
    },
    {
        id: 2,
        title: "Electronics",
        image: Electronics,
        alt: "Store electronics section",
        description: 
            `We test, repair, and refurbish electronics to extend their lifespan, reduce 
            e-waste, and make technology more accessible.`
    },
    {
        id: 3,
        title: "Sports Equipment",
        image: Sports,
        alt: "Store sports equipment section",
        description: 
            `We refurbish and resell quality sports equipment, promoting active lifestyles 
            while reducing waste and supporting our community.`
    },
    {
        id: 4,
        title: "Clothing",
        image: Sports,
        alt: "Store clothing section",
        description: 
            `We rescue and resell quality clothing, promoting sustainable fashion while reducing 
            waste and supporting our community.`
    },
    {
        id: 5,
        title: "Charity",
        image: Charity,
        alt: "Store charity work",
        description: 
            `We give a second life to a variety of quality preloved items, from home goods to outdoor gear, 
            reducing waste and supporting sustainable consumption.`
    }
]

export { flipCardData };
