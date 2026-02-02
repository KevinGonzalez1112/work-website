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
