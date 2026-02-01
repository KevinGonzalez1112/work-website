// Importing React Components 

import { useEffect, useState } from "react";

// Importing Styling Files

import "../assets/styles/MeetTheTeamPage.scss";

// Importing Custom Components 

import TeamMemberProfile from "../components/TeamMemberProfile.jsx";

// Importing Data Object Arrays

import { teamData } from "../data/TeamMembers.jsx";

const MeetTheTeamPage = () => 
{
    // Setting Page Title 
    
    useEffect(() => {
        document.title = "Collect 4 - Meet The Team";
    })

    const [ selectedMember, setSelectedMember ] = useState(null);

    return (
        <div className = "meet-the-team-container">

            <h2>Introducing Our Team</h2>

            <div className = "team-profiles">
                {
                    teamData.slice(0, 4).map((member) => (
                        <TeamMemberProfile
                            key = { member.id }
                            name = { member.name }
                            image = { member.image }
                            role = { member.role }
                            onClick = {() => setSelectedMember(member)}
                        />
                    ))
                }
            </div>

            { /* Set up to ensure expansion appears below row */ }

            {
                selectedMember?.id < 4 && (
                    <div className = "team-member-expansion-area">
                        <div className = "expansion-box">
                            <div className = "expansion-box-image-box">
                                <img 
                                    className = "expansion-box-image"
                                    src = { selectedMember.image }
                                />
                            </div>
                            <div className = "expansion-box-content">
                                <h2>{ selectedMember.name }</h2>
                                <h3>{ selectedMember.role }</h3>
                                <p>{ selectedMember.intro }</p>
                                <button 
                                    onClick = {() => setSelectedMember(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            <div className = "team-profiles">
                {
                    teamData.slice(4, 7).map((member) => (
                        <TeamMemberProfile
                            key = { member.id }
                            name = { member.name }
                            image = { member.image }
                            role = { member.role }
                            onClick = {() => setSelectedMember(member)}
                        />
                    ))
                }
            </div>

            { /* Same set up for second row */ }

            {
                selectedMember?.id > 3 && (
                    <div className = "team-member-expansion-area">
                        <div className = "expansion-box">
                            <div className = "expansion-box-image-box">
                                <img 
                                    className = "expansion-box-image"
                                    src = { selectedMember.image }
                                />
                            </div>
                            <div className = "expansion-box-content">
                                <h2>{ selectedMember.name }</h2>
                                <h3>{ selectedMember.role }</h3>
                                <p>{ selectedMember.intro }</p>
                                <button 
                                    onClick = {() => setSelectedMember(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            <div className = "section-break" />

            <div className = "footer-section">
                <p>© 2026 by Collect 4 Reuse. All rights reserved.</p>
            </div>
        </div>

        
    )
}

export default MeetTheTeamPage;