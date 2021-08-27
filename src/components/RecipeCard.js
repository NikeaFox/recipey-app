import React from "react";
import { Link } from "react-router-dom";
function RecipeCard(props) {
	const { image, name, cuisine, ingredientCount, recipe } = props;

	return (
		<div className='card recipe-card'>
			<Link to={`/home/${recipe.recipe.uri}`}>
				<img
					key={recipe.recipe.label}
					className='recipe-img'
					src={image}
					alt=''
				/>
			</Link>
			<p className='recipe-name'>{name}</p>
			<p className='country'>{cuisine}</p>
			<hr className='line' />
			<p className='ingredients'>
				<span>{ingredientCount}</span> Ingredients
			</p>
		</div>
	);
}

export default RecipeCard;
