
import { useState } from 'react';
import "./contactform.scss";
function Contactform() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        document.getElementById('question').innerHTML = 'Sended message: <br>Name: ' + name + '<br>E-mail: ' + email + '<br>Message: ' + message;
        alert('Thank you ' + name + '. Is your e-mail: ' + email + '? We will son response on your message: ' + message);
        console.log('Name: ' + name + ' email: ' + email + ' text: ' + message);
        console.log("success");
    }

    return (
        <> 
            <section className="contactform">
                <h2>Contact Form</h2>
                <label>Name:</label>
                <input type="text" onChange={(event) => {
                    setName(event.target.value)
                }} />
                <label>e-mail:</label>
                <input type="email" onChange={(event) => {
                    setEmail(event.target.value)
                }} />
                <textarea rows="4" onChange={(event) => {
                    setMessage(event.target.value)
                }} />
                <button onClick={sendMessage}>Send message</button>
                <p id="question">Sended Message</p>
            </section>
        </>
    );
}

export default Contactform;