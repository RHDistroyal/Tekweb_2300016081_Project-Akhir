import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import './Searched.css'

const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();

    const getSearched = async (name) => {
        const API_KEY = '77a43ba86d4645e4be6a185314732f24';
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        console.log(searchedRecipes);
    }

    useEffect(() => {
        getSearched(params.search);
    },[params.search])

    return (
        <div className="searched-container">
            {searchedRecipes.map((data) => (
                <RecipeCard data={data} key={data.id} />
            ))}
        </div>
    )
}

export default Searched;