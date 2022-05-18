
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Galery from "./pages/galery";
import Home from "./pages/home";
import Map from "./pages/map";
import "./AppStyle.scss";
import MakeUp from "./components/makeup";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/galery" element={<Galery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/map" element={<Map />} />
                <Route path="/makeup" element={<MakeUp />} />
            </Routes>
        </BrowserRouter>  
  );
}
export default App;
