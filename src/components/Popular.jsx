import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './Popular.css';

const Popular = () => {

    const API_KEY = '71ee729777aa439ba75c472c3bca40b4';
    
    const [popular, setPopular] = useState([]);

    const getPopular = async () => { 
    
        const check = localStorage.getItem('popular');

        if(check) {
            setPopular(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            console.log(data);
            setPopular(data?.recipes);  
        }
    }

    useEffect(() => {
        getPopular();
    },[])


    return (
        <div className="popular-container">
            <h1>Popular </h1>
            <Splide options={{
                perPage: 4,
                pagination: false,
                gap: '2rem',
            }}>
            {popular.map((recipe) => (
                <SplideSlide key={recipe.id}>
                    <RecipeCard data={recipe} />
                </SplideSlide>
            ))}
            </Splide>
        </div>
    )
}

export default Popular;