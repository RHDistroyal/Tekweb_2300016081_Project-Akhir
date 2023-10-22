import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cuisine from "./Cuisine";
import Category from "../components/Category";

const Pages = () => {
    return (
        <Router>
            <div className="pages-container">
                <Category />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/cuisine/:type" element={<Cuisine />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Pages;