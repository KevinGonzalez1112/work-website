// Importing React Libraries

import { useState } from "react";

// Importing Styling Files

import "../assets/styles/ContactForm.scss";

// Importing Libraries

import { useForm, ValidationError } from "@formspree/react";

// Start of ContactForm Component

const ContactForm = () => 
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const [state, handleFormSubmit] = useForm("mgokdpbk");

    const validateEmail = (email) =>
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);  
    }

    const validateForm = () =>
    {
        const newErrors = {};

        if (!name.trim())
        {
            newErrors.name = "Please enter your Name.";
        }

        if (!email.trim())
        {
            newErrors.email = "Please enter an Email address.";
        }

        else if (!validateEmail(email))
        {
            newErrors.email = "Please enter a valid Email address.";
        }

        if (!phoneNumber.trim())
        {
            newErrors.phoneNumber = "Please enter your Phone Number.";
        }

        if (!message.trim())
        {
            newErrors.message = "Please enter a Message.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => 
    {
        e.preventDefault();

        let isValid = validateForm();

        if (!isValid)
        {
            return;
        }

        handleFormSubmit(e);
    }

    if (state.succeeded)
    {
        return (
            <div className = "contact-form-container">
                <div 
                    style = {{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        width: "100%", 
                        textAlign: "center",
                        border: "2px solid #133409",
                        borderRadius: "12px"
                    }}
                >
                    <h1
                        style = {{ marginBottom: "5vh" }}
                    >
                        Thank You!
                    </h1>
                    <h2>Your message has been sent to our email.</h2>
                    <h2>We'll aim to get back to you within 24 hours.</h2>
                    <button 
                        style = {{ 
                            marginTop: "5vh",
                            padding: "1vh 2vw 1vh 2vw",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            color: "#133409",
                            backgroundColor: "#44BB21",
                            border: "none"
                        }}
                        onClick = { () => window.location.reload() }
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className = "contact-form-container">
            <div className = "contact-form-intro">
                <h1>Contact Us</h1>
                <h3>Whether you have a question, are interested in working with us, or just want to say hello, we'd love to hear from you!</h3>
                <h3>Feel free to reach out to us with any questions or concerns using the form on the right.</h3>
            </div>
            <div className = "contact-form-inputs">
                <form onSubmit = { handleSubmit }>

                    <div className = "form-field">
                        <input
                            id = "name"
                            type = "text"
                            name = "name"
                            placeholder = ""
                            value = { name }
                            onChange = { (e) => setName(e.target.value) }
                        />
                        <label>Full Name</label>
                        { errors.name && <p className = "error-message">{ errors.name }</p> }
                    </div>

                    <div className = "form-field">
                        <input
                            id = "email"
                            type = "text"
                            name = "email"
                            placeholder = ""
                            value = { email }
                            onChange = { (e) => setEmail(e.target.value) }
                        />
                        <label>Email Address</label>
                        { errors.email && <p className = "error-message">{ errors.email }</p> }
                    </div>  

                    <div className = "form-field">
                        <input
                            id = "phoneNumber"
                            type = "text"
                            name = "phoneNumber"
                            placeholder = ""
                            value = { phoneNumber }
                            onChange = { (e) => setPhoneNumber(e.target.value) }
                        />
                        <label>Phone Number</label>
                        { errors.phoneNumber && <p className = "error-message">{ errors.phoneNumber }</p> }
                    </div>

                    <div className = "form-field">
                        <textarea
                            id = "message"
                            rows = "6"
                            name = "message"
                            placeholder = ""
                            value = { message }
                            onChange = { (e) => setMessage(e.target.value) }
                        />
                        <label>Your Message</label>
                        { errors.message && <p className = "error-message">{ errors.message }</p> }
                    </div>

                    <button 
                        type = "submit"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </div>
    )
}

export default ContactForm;