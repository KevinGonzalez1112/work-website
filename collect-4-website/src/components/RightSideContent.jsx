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
                <p>{ props.description }</p>
                <div className = "details-box">
                    <details>
                        <summary>{ props.summaryOne }</summary>
                        <p>{ props.pointOne }</p>
                    </details>
                    <details>
                        <summary>{ props.summaryTwo }</summary>
                        <p>{ props.pointTwo }</p>
                    </details>
                    <details>
                        <summary>{ props.summaryThree }</summary>
                        <p>{ props.pointThree }</p>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default RightSideContent;


