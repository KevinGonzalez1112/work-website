// Importing Images Required for each Member

import Darryl from "../assets/images/darryl.jpg";
import Harrison from "../assets/images/harrison.jpg"
import Jason from "../assets/images/jason.jpg";
import Kevin from "../assets/images/kevin.jpg";
import Leonardo from "../assets/images/leonardo.jpg";
import Rassam from "../assets/images/rassam.jpg";
import Lee from "../assets/images/lee.jpg";

// Team Members Data Array

const teamData = [
    { 
        id: 0, 
        name: "Darryl Garvey",
        role: "Co-Founder",
        image: Darryl
    },
    { 
        id: 1, 
        name: "Harrison Biddulph",
        role: "Co-Founder",
        image: Harrison
    },
    { 
        id: 2, 
        name: "Jason Man",
        role: "Manager / Graphic Designer",
        image: Jason
    },
    {
        id: 3,
        name: "Kevin Gonzalez",
        role: "Team Member / Tech Specialist",
        image: Kevin,
        intro: 
            `Kevin became a part of the Collect 4 team in 2026, mainly working on the shop floor 
            while also building and managing our website. He handles customer service and store operations 
            alongside creating responsive designs and features that showcase our sustainable retail mission 
            online, helping connect our in-store experience with our digital audience.`
    },
    {
        id: 4,
        name: "Leonardo Alvarez",
        role: "Team Member",
        image: Leonardo
    },
    {
        id: 5,
        name: "Rassam Miazi",
        role: "Team Member",
        image: Rassam
    },
    {
        id: 6,
        name: "Lee Pragnell",
        role: "Driver / Top 40 Single Holder",
        image: Lee,
        intro: 
            `Lee became a part of the Collect 4 team in 2025, serving as our van driver and local legend while 
            also doubling up as a DJ with a top 40 single under his belt. He handles deliveries and logistics with unmatched 
            reliability alongside bringing his infectious energy and musical flair to our sustainable retail mission, connecting 
            our store's vibrant community with customers across town.`
    }
]

export { teamData };