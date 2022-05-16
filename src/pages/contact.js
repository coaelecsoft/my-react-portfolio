import Contactform from "../components/contactform";
import Footer from "../components/footer";
import Menu from "../components/menu";


function Contact() {
    return (
        <>
            <Menu />
            <main>
                <h1>Contact Page</h1>
                <Contactform />
                <p id="question">Sended Message</p>
            </main>
            <Footer />
        </>
        );
}

export default Contact;