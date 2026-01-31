// Importing Styling Files

import "../assets/styles/TeamMemberProfile.scss";

const TeamMemberProfile = (props) =>
{
    return (
        <div className = "team-member-wrapper">
            <div
                className = "team-member-container"
                style = {{
                    backgroundImage: `url(${props.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
                onClick = { props.onClick }
            >
                <div className = "card-content">
                    <h2>{ props.name }</h2>
                    <p>{ props.role }</p>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberProfile;
