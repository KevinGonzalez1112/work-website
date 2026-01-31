// Importing Styling Files

import "../assets/styles/StoreInfoSection.scss";

const StoreInfoSection = (props) => 
{
    return (
        <div class = "store-info-section">
            <div class = "logo-container">
                { props.icon }
            </div>
            <h2>{ props.title }</h2>
            { props.children }
        </div>
    )
}

export default StoreInfoSection;