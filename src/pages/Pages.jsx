import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cuisine from "./Cuisine";
import Category from "../components/Category";
import Search from "../components/Search";
import Searched from "./Searched";
import Recipe from "./Recipe";

const Pages = () => {
    return (
        <Router>
            <div className="pages-container">
                <Search />
                <Category />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/cuisine/:type" element={<Cuisine />}></Route>
                    <Route path="/searched/:search" element={<Searched />}></Route>
                    <Route path="/searched/:search/recipe/:name" element={<Recipe />}></Route>
                    <Route path="/cuisine/:type/recipe/:name" element={<Recipe />}></Route>

                </Routes>
            </div>
        </Router>
    )
}

export default Pages;