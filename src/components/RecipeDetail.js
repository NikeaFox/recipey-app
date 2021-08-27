import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router";

function RecipeDetail(props) {
	const location = useLocation();
	const recipeIdRaw = location.hash;
	const recipeId = recipeIdRaw.split("#")[1];

	const [details, setDetails] = useState([]);
	const [ingredientLine, setIngredientLine] = useState([]);

	const getRecipes = async () => {
		const recipeDetailRaw = await fetch(
			`https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=8afd87aa&app_key=72cfa3fc7d6fa6ab53a7d76ee0291b57`
		);
		const recipeDetail = await recipeDetailRaw.json();
		setDetails(recipeDetail.recipe);
		setIngredientLine(recipeDetail.recipe.ingredientLines);
	};

	useEffect(() => {
		getRecipes();
	}, []);

	return (
		<React.Fragment>
			<Header />
			<div className='recipe-detail-container'>
				<div className='card recipe-detail-card'>
					<img
						className='recipe-img recipe-img-detail'
						src={details.image}
						alt=''
					/>
					<p className='recipe-name recipe-name-detail'>{details.label}</p>
					<p className='country country-detail'>{details.cuisineType}</p>
					<p className='source-text'>Source: <span className="source-text-info">{details.source}</span></p>
				</div>
				<div className='card ingredient-container'>
					<h1 className='ingredient-header'>Ingredients</h1>
					<ul className='ingredients-list'>
						{ingredientLine.map((ingredient) => (
							<li key={Math.random()} className='ingredient-item'>{ingredient}</li>
						))}
					</ul>
					<a href={details.url} className="instructions-text">Click For Instructions</a>
				</div>
			</div>
		</React.Fragment>
	);
}

export default RecipeDetail;
