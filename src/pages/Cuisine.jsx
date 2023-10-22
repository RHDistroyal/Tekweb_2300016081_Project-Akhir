import './Cuisine.css';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

const Cuisine = () => {
    
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();
    console.log(params);

    const getCuisine = async (name) => {
        const API_KEY = '77a43ba86d4645e4be6a185314732f24';
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`);
        const recipe = await data.json();
        setCuisine(recipe.results);
        console.log(cuisine);
    }

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <div className="cuisine-container">
            {cuisine.map((data) => (
                <RecipeCard data={data} key={data.id} />
            ))}
        </div>
    )
}

export default Cuisine;