// Importing Styling Files

import "../assets/styles/HomePage.scss";

// Importing Custom Components

import ScrollToTop from '../components/ScrollToTop';
import FlipCard from "../components/FlipCard";

// Importing Required Images

import StoreImg from "../assets/images/collect-4-store.jpeg";
import BikeImg from "../assets/images/bicycles.jpg";
import FurnitureImg from "../assets/images/collect-4-furniture.jpg";
import ElectronicsImg from "../assets/images/collect-4-electronics.jpg";
import SportsImg from "../assets/images/collect-4-sports.jpg";
import ExtraImg from "../assets/images/collect-4-extra.jpg";

const HomePage = () =>
{
    document.title = "Collect 4 - Home";

    return (
        <>
        <ScrollToTop />
        <div className = "homepage-container">

            <div className = "landing-section">
                <div className = "landing-text-area">
                    <h1>
                        Designing a future where <span className = "highlight">nothing is wasted.</span>
                    </h1>
                    <p>
                       We started clearing waste and saw tons of reusable goods heading to landfill. Now we restore them for our community — building a true circular economy.
                    </p>
                    <p>
                        We've diverted tonnes from waste, created jobs, and empowered local people.
                    </p>
                    <div className = "landing-buttons-area">
                        <a 
                            className = "landing-button"
                            href = "https://maps.apple.com/place?place-id=I247E02E2C050BEE2&address=23-25+Cambridge+Road%2C+Kingston+Upon+Thames%2C+KT1+3NG%2C+England&coordinate=51.4100063%2C-0.2895845&name=Collect+4+Clearances&_provider=9902"
                        >
                            Find us on Apple Maps
                        </a>
                        <a 
                            className = "landing-button"
                            href = "https://www.google.com/maps/place/Collect+4+Bikes/@51.4100063,-0.2921648,17z/data=!3m1!4b1!4m6!3m5!1s0x48760baa5b7dce29:0xfd1aab96a95dd44e!8m2!3d51.4100063!4d-0.2895845!16s%2Fg%2F11lzs7_x8f?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                        >
                            Find us on Google Maps
                        </a>
                    </div>
                </div>
                <div className = "landing-image-area">
                    <img 
                        className = "landing-image" 
                        src = { StoreImg }
                        alt = "Collect 4 Storefront"
                    />
                </div>
            </div>

            <div className = "section-break" />

            <div className = "our-journey-section">
                
                <div className = "our-journey-text-area">
                    <h2>From Waste to Reuse...</h2>
                    <p>
                        We started life simply as a waste management company working with residential and business customers, including universities. 
                        As we grew, we quickly realised that waste levels in the UK were out of control. People simply weren't aware — or, bluntly, didn't 
                        care — what happened to their items once they were gone.
                    </p>
                    <p>
                        At this point, we realised we could make a difference. Collect 4 Reuse was born. We began networking with businesses and organisations 
                        to collaborate on different projects. We had previous charity partners before moving on to our own projects and working directly with 
                        organisations ourselves.
                    </p>
                    <p>
                        From there, we've grown to where we are now — saving tonnes of items from ending up as waste in the long run. We're continuing to grow and 
                        believe our model has disrupted the market in all the right ways. We want to grow as a company whilst remaining true to our ethos and values. 
                        Anything that can be reused should be reused.
                    </p>
                </div>
            </div>

            <div className = "section-break" />

            <div className = "our-services-section">
                <h2>Our Services</h2>
                <div className = "our-services-text-area">
                    <p>
                        We save quality goods from landfill by bulk buying reusable inventory, refurbishing to premium condition, and reselling as sustainable assets — or 
                        we manage your full reuse program end-to-end. Plus, we connect you to reuse networks for maximum community impact. Hover the over cards below to 
                        learn more about everything we do.
                    </p>
                </div>
                <div className = "our-services-content-area">
                    <FlipCard 
                        image = { BikeImg }
                        alt = "Collect 4 Bikes"
                        title = "Bicycles"
                        description = "We inspect, repair, and refurbish bicycles to give them a second life - reducing waste while making cycling more accessible and affordable for our community."
                    />
                    <FlipCard 
                        image = { FurnitureImg }
                        alt = "Collect 4 Furniture" 
                        title = "Furniture"
                        description = "We restore and upcycle quality furniture, diverting it from landfill and providing affordable, stylish options for our customers."
                    />
                    <FlipCard
                        image = { ElectronicsImg }
                        alt = "Collect 4 Electronics"
                        title = "Electronics"
                        description = "We test, repair, and refurbish electronics to extend their lifespan, reduce e-waste, and make technology more accessible."
                    />
                </div>
                <div className = "our-services-content-area-2">
                    <FlipCard
                        image = { SportsImg }
                        alt = "Collect 4 Sports Equipment"
                        title = "Sports Equipment"
                        description = "We refurbish and resell quality sports equipment, promoting active lifestyles while reducing waste and supporting our community."
                    />
                    <FlipCard
                        image = { SportsImg }
                        alt = "Collect 4 Clothing"
                        title = "Clothing"
                        description = "We rescue and resell quality clothing, promoting sustainable fashion while reducing waste and supporting our community."
                    />
                    <FlipCard
                        image = { ExtraImg }
                        alt = "Collect 4 Extra Items"
                        title = "Charity"
                        description = "We give a second life to a variety of quality preloved items, from home goods to outdoor gear, reducing waste and supporting sustainable consumption."
                    />
                </div>
            </div>

            <div className = "section-break" />

            <div className = "the-future-section">
                <div className = "the-future-text-area">
                    <h2>What Does the Future Hold?</h2>
                    <p>
                        Nobody can predict exactly what will come, but we know where we want to be. We want to push our models out across the country to show that there 
                        is a better way to do things. Many people see reuse as such a small part of the waste cycle when, in reality, it could be one of the biggest.
                    </p>
                    <p>
                        The public's mindset is changing for the better, and we should all be shifting to encourage this.
                    </p>
                    <p>
                        We're really keen to hear from organisations that are on their own reuse journey about how we can collaborate. We'd love to speak to councils and 
                        other waste management companies who deal with waste on a grand scale to see how we can fit into their own models. We truly believe we've found one 
                        of the answers to how reuse can be a key aspect of the waste industry, and we want to be at the forefront of this. Please do get in touch if you have 
                        any projects you'd like to collaborate on.
                    </p>
                </div>
            </div>
            
            <div className = "section-break" />

            <div className = "store-information-section">
                <div className = "store-information-content-area">
                    <div className = "store-information-item">
                        <h2>Opening Hours</h2>
                        <p>Monday - 10am to 6pm</p>
                        <p>Tuesday - 10am to 6pm</p>
                        <p>Wednesday - 10am to 6pm</p>
                        <p>Thursday - 10am to 6pm</p>
                        <p>Friday - 10am to 9pm</p>
                        <p>Saturday - 10am to 6pm</p>
                        <p>Sunday - 10am to 4pm</p>
                    </div>
                    <div className = "store-information-item">
                        <h2>Visit Our Store</h2>
                        <p>Collect 4 Reuse,</p>
                        <p>23-25 Cambridge Road,</p>
                        <p>Kingston Upon Thames,</p>
                        <p>KT1 3NG,</p>
                        <p>England</p>
                    </div>
                </div>
            </div>

            <div className = "section-break" />

            <div className = "footer-section">
                <p>© 2026 by Collect 4 Reuse. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default HomePage;