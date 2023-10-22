import { useEffect, useState } from "react";

const Popular = () => {
    
    const [popular, setPopular] = useState([]);

    const getPopular = async () => { 
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=81bdc134fb73435fbb14311ed16cb557&number=10`);
        const data = await api.json();
        console.log(data);
        setPopular(data.recipes);
    }

    useEffect(() => {
        getPopular();
    },[])

    return (
        <div className="popular-container">
            {popular.map((recipe) => (
                <div className="recipe-container" key={recipe.id}>
                    <p>{recipe.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Popular;