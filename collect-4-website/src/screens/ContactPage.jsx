// Importing React Components 

import { useEffect } from "react";

// Importing Custom Components 

import ScrollToTop from '../components/custom-components/ScrollToTop';
import ContactForm from "../components/ContactForm";

// Importing Styling Files

import "../assets/styles/ContactPage.scss";

const ContactPage = () => 
{
    // Setting Page Title 
        
    useEffect(() => {
        document.title = "Collect 4 - Contact";
    }, []);

    return (
        <>
            <ScrollToTop />

            <div className = "contact-page">
                <ContactForm />
                <div className = "footer-section">
                    <p>© 2026 by Collect 4 Reuse. All rights reserved.</p>
                </div>
            </div>
        </>
        
    )
}

export default ContactPage;