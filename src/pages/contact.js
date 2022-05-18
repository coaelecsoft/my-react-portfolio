import Contactform from "../components/contactform";
import React from "react";

import Footer from "../components/footer";
import Menu from "../components/menu";
import "../components/contact.scss";
import Mycomponent from "../components/mycomponent";

function Contact() {
    return (
        <>
            <Menu />
            <main className="contact-page">
                <Contactform />
                <header style={{ padding:'5px' }}>
                    <h1>Contact Page</h1>
                    
                    <React.StrictMode >
                        <Mycomponent />
                    </React.StrictMode>
                </header>               
            </main>
            <Footer />
        </>
        );
}

export default Contact;