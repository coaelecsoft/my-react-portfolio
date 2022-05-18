import Dogs from "../components/dogs";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Menu from "../components/menu";
import Pets from "../components/pets";
//googel api: https://maps.googleapis.com/maps/api/geocode/json?&address=doboj&key=AIzaSyBoV4ehpbFW1wb5EvZC34F89VLlczsBjgU

function Galery() {
    return (
        <>
            <Menu />
            <main>
                <Hero  bgimg={require('../components/arsabela1.jpg')}
                    title='React.js Galery by free API'
                    description='In this example of galery I used api, https://dog.ceo/dog-api/ for generating random pictures of dogs. For layout and style I used SASS.' />
                <Pets id="other"/>
            </main>
            <Footer />
        </>
    );
}
export default Galery;