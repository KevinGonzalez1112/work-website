// Importing Custom Components 

import ContactForm from "../components/ContactForm";

// Importing Styling Files

import "../assets/styles/ContactPage.scss";

const ContactPage = () => 
{
    document.title = "Collect 4 - Contact";

    return (
        <div className = "contact-page">
            <ContactForm />
        </div>
    )
}

export default ContactPage;