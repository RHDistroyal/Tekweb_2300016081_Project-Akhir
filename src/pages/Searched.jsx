import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import './Searched.css';
import { API_KEY } from "../assets/API_KEY";

const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();

    const getSearched = async (name) => {
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