import { useEffect, useState } from 'react';
import './Recipe.css';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../assets/API_KEY';
import { Button } from '@mui/material';

const Recipe = () => {

    const [details, setDetails] = useState();
    const [active, setActive] = useState('summary')
    const params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`);
        const detailsData = await data.json();
        console.log(detailsData);
        setDetails(detailsData);
    }

    useEffect(() => {
        fetchDetails();
    },[params.name])

    const handleClick = (status) => {
        setActive(status)
    }

    if(details === undefined) return <h1>Shimmer</h1>

    return (
        <div className="recipe-container-main">
            <h1>{details.title}</h1>
            <div className="recipe-container">
                <div className="recipe-container-left">
                    <img src={details.image} className='recipe-imgs' />
                </div>
                <div className="recipe-container-right">
                    <div className="btn-container">
                        <Button 
                            variant='contained' 
                            onClick={() => handleClick('summary')}
                            disabled={active === 'summary' ? true : false}>
                            Summary
                        </Button>
                        <Button 
                            variant='contained'
                            onClick={() => handleClick('ingredients')}
                            disabled={active === 'ingredients' ? true : false}>
                            ingredients
                        </Button>
                    </div>
                    {active === 'summary' && 
                        <div className="recipe-right-main">
                            <div className="summary">
                               <h2>Summary</h2>
                               <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                             </div>
                            <div className="instructions">
                               <h2>Instructions</h2>
                               <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                            </div>
                        </div>
                    }
                    {
                        active === 'ingredients' && (
                            details.analyzedInstructions[0].steps[0].ingredients.map((data) => (
                                <li>{data.name}</li>
                            ))
                        )   
                    }
                </div>
            </div>
        </div>
    )
}

export default Recipe;