import './Cuisine.css';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { API_KEY } from '../assets/API_KEY';

const Cuisine = () => {
    
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();
    console.log(params);

    const getCuisine = async (name) => {
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