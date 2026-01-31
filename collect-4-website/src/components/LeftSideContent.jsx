// Importing Styling Files

import "../assets/styles/LeftSideContent.scss";

const LeftSideContent = (props) => 
{
    return (
        <div className = "left-side-content-container">
            <div className = "text-area">
                <h2>{ props.title }</h2>
                { props.children }
            </div>
            
            <div className = "image-area">
                <img 
                    className = "right-side-image"
                    src = { props.image }
                    alt = { props.alt }
                />
            </div>
        </div>
    )
}

export default LeftSideContent;

/*
<RightSideContent 
                title = "Parts and Accessories"
                descriptionA = "We stock a wide range of quality bicycle parts and accessories to keep you riding smoothly. From essential replacement components like chains, brake pads, tyres, tubes, and pedals to performance upgrades including gears, cassettes, and bottom brackets, we have everything needed for routine maintenance and major overhauls. All parts are sourced from trusted brands and thoroughly inspected for reliability."
                descriptionB = "Our accessories selection covers practical essentials for everyday cyclists—locks, lights, bells, pumps, bottles, and racks—plus comfort additions like saddles, grips, and bar tape. Whether you're commuting through Kingston, exploring the countryside, or maintaining your bike at home, you'll find competitively priced, high-quality items ready for immediate use or as perfect add-ons to our refurbished bicycles."
                image = { PartsAndAcc }
                alt = "Bicycle Parts and Accessories Image" 
            />
            <div className = "section-break" />
            <LeftSideContent 
                title = "Bicycle Repairs"
                descriptionA = "Bring us your bike for professional repairs by our licensed mechanic on site. We handle everything from quick fixes like punctures, brake adjustments, and gear tuning to comprehensive services including wheel building, headset overhauls, suspension servicing, and full bike restorations. With years of experience and proper certification, we ensure your bike returns safer, smoother, and ready for the road."
                descriptionB = "Our workshop uses professional tools and diagnostic equipment to accurately diagnose and fix issues other shops might miss. Whether it's a commuter bike needing regular maintenance, a mountain bike requiring drivetrain replacement, or a road bike due for its annual service, our licensed mechanic delivers reliable results with no nasty surprises. Most repairs are completed within 24-48 hours while you wait or collect later."
                image = { Repairs }
                alt = "Bicycles Repairs Image" 
            />
            descriptionA = "We gratefully accept bicycle donations from the local community and businesses. Each bike receives our expert refurbishment treatment—thorough cleaning, mechanical repairs, safety checks, and cosmetic restoration. Once complete, they're brought back to premium condition, ready for their next adventure. Every refurbished bike represents saved resources and renewed joy for riders of all ages."
                            descriptionB = "Our comprehensive refurbishment process ensures every donated bike meets our high standards before going back on the road. From replacing worn parts and tuning gears to painting frames and adding fresh accessories, no detail is overlooked. This sustainable approach keeps quality bikes out of landfills while making cycling accessible and affordable for families, students, and commuters in the Kingston area."
            */