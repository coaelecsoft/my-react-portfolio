import Footer from "../components/footer";
import Menu from "../components/menu";
import { useState } from 'react';
import MakeUp from "../components/makeup";

function Blog() {
    function openAlert() {
        alert('Respected ' + name + ' ' + surname + ' You clicked button!!');
    }
    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    return (
        <>
            <Menu />
            <main style={{ padding: "5px", paddingTop:'85px', lineHeight: "1.8" }} id="other">
                <h1>Make Up By Brand</h1>
              
                <MakeUp />
                
            </main>
            <Footer />
        </>

        );
}

export default Blog;