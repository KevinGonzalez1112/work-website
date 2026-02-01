// Importing Required Images

import StoreImg from "../../assets/images/home-page/store.jpeg";

const LandingSection = () =>
{
    return (
        <div className = "landing-section">
            <div className = "landing-text-area">
                <h1>
                    Designing a future where <span className = "highlight">nothing is wasted.</span>
                </h1>
                <p>
                    We started clearing waste and saw tons of reusable goods heading 
                    to landfill. Now we restore them for our community — building a 
                    true circular economy.
                </p>
                <p>
                    We've diverted tonnes from waste, created jobs, and empowered local people.
                </p>
                <div className = "landing-buttons-area">
                    <a 
                        href = "https://maps.apple.com/place?place-id=I247E02E2C050BEE2&address=23-25+Cambridge+Road%2C+Kingston+Upon+Thames%2C+KT1+3NG%2C+England&coordinate=51.4100063%2C-0.2895845&name=Collect+4+Clearances&_provider=9902"
                        target = "_blank"
                        rel = "noreferrer"
                        className = "landing-button"
                    >
                        Find us on Apple Maps
                    </a>
                    <a 
                        href = "https://www.google.com/maps/place/Collect+4+Bikes/@51.4100063,-0.2921648,17z/data=!3m1!4b1!4m6!3m5!1s0x48760baa5b7dce29:0xfd1aab96a95dd44e!8m2!3d51.4100063!4d-0.2895845!16s%2Fg%2F11lzs7_x8f?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                        target = "_blank"
                        rel = "noreferrer"
                        className = "landing-button"
                    >
                        Find us on Google Maps
                    </a>
                </div>
            </div>
            <div className = "landing-image-area">
                <img 
                    src = { StoreImg }
                    alt = "Collect 4 storefront exterior with signage"
                    className = "landing-image"
                />
            </div>
        </div>
    )
}

export default LandingSection;