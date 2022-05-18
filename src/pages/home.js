import Articles from "../components/articles";
import Footer from "../components/footer";
//import Header from "../components/header";
import Hero from "../components/hero";
import Menu from "../components/menu";
import Pets from "../components/pets";


function Home() {
    return (
        <>  
            <Menu />
            <main>
                <Hero bgimg={require('../components/back.jpg')}
                    title='My React Portfolio'
                    description='This website created with javaScript used React.js libery. For layouts website and components I use combinig flex and grid css technicks with SASS tool.' />
            </main>
            <Articles />
            <Footer />
        </>
            );
}
export default Home;