
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
import "./AppStyle.scss";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/galery" element={<Galery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>  
  );
}
export default App;
