import { useEffect, useState } from 'react';
import './Recipe.css';
import { useParams } from 'react-router-dom';

const Recipe = () => {

    const [details, setDetails] = useState();
    const params = useParams();
    const API_KEY = '77a43ba86d4645e4be6a185314732f24';

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`);
        const detailsData = await data.json();
        console.log(detailsData);
        setDetails(detailsData);
    }

    useEffect(() => {
        fetchDetails();
    },[params.name])

    return (
        <div className="recipe-container">
            <h1>RECIPE CONTAINER</h1>
            <p>{details.title}</p>
        </div>
    )
}

export default Recipe;