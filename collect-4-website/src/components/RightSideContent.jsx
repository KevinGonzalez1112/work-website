// Importing Styling Files

import "../assets/styles/RightSideContent.scss";

const RightSideContent = (props) => 
{
    return (
        <div className = "right-side-content-container">
            <div className = "image-area">
                <img
                    className = "left-side-image"
                    src = { props.image }
                    alt = { props.alt }
                />
            </div>
            <div className = "text-area">
                <h2>{ props.title }</h2>
                { props.children }
            </div>
        </div>
    )
}

export default RightSideContent;


