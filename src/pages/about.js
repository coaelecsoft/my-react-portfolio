import AboutList from "../components/aboutlist";
import Footer from "../components/footer";
import Hero from "../components/hero";
//import Maps from "../components/maps";
import Menu from "../components/menu";


function About() {
    return (
        <>
            <Menu />
            <main>
                <Hero bgimg={require('../components/back.jpg')}
                title='Example React.js Website'
                    description='Click on the arrow to scroll to the lists with description of every components in this website.'
                />
                <AboutList />
                
            </main>
            <Footer />
         </>
        );
}
export default About;