import './RecipeCard.css';

const RecipeCard = ({data}) => {
    return (
        <div className="recipe-card-container">
            <img src={data.image} className='recipe-img'  />
            <h2 className='recipe-p'>{data.title}</h2>
            <div className="recipe-gradient"></div>
        </div>
    )
}

export default RecipeCard;