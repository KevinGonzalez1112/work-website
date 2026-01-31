// Importing Styling Files

import "../assets/styles/FlipCard.scss";

const FlipCard = (props) =>
{
    return (
        <div className = "flip-card">

            <div className = "flip-card-inner">

                { /* Front Side of Flip Card */ }

                <div 
                    className = "flip-card-front"
                    style = {{ 
                        backgroundImage: `linear-gradient(135deg, rgba(76, 153, 76, 0.7), rgba(102, 184, 102, 0.6)), url(${props.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        minHeight: "27.5vh",
                        borderRadius: "20px"
                    }}
                >
                    <div className = "flip-card-front-overlay">
                        <h2>{ props.title }</h2>
                    </div>
                </div>

                { /* Back Side of Flip Card */ }

                <div className = "flip-card-back">
                    <h2>{ props.title }</h2>
                    <p>{ props.description }</p>
                </div>

            </div>

        </div>
    )
}

export default FlipCard;