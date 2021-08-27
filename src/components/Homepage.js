import React from "react";
import Header from "./Header";
import fire from "../fire";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
function Homepage(props) {
	const [madeSearch, setMadeSearch] = useState(false);
	const [recipeData, setRecipeData] = useState([]);
	const [querry, setQuerry] = useState("");
	const [dishType, setDishType] = useState("Main Course");
	let userName = "Guest";
	const { user } = props;
	const handleLogout = () => {
		fire.auth().signOut();
	};
	if (user) {
		userName = localStorage.getItem("name");
	}

	const getRecipes = async (e) => {
		e.preventDefault();
		const rawRecipe = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${querry}&app_id=8afd87aa&app_key=72cfa3fc7d6fa6ab53a7d76ee0291b57&dishType=${dishType}`
		);
		const recipes = await rawRecipe.json();
		const data = await recipes.hits;
		setRecipeData(data);
		setMadeSearch(true);
	};

	return (
		<React.Fragment>
			<Header user={user} handleLogout={handleLogout} />
			{madeSearch === false ? (
				<div className='home-container'>
					<div className='welcome-section'>
						<p className='welcome-text'>
							Welcome <span>{userName}</span> ! <br /> What will you cook today,
							<br /> have anything in mind? <br />
							Or want some ideas?
						</p>
						<form className='search-form'>
							<div className='searchbar-wrapper'>
								<input
									value={querry}
									placeholder='Check some recipes'
									type='text'
									className='search-bar card  '
									onChange={(e) => setQuerry(e.target.value)}
								/>
								<button onClick={getRecipes} className='search-icon'>
									<IoIosSearch />
								</button>
							</div>
						</form>
					</div>
				</div>
			) : (
				<React.Fragment>
					<div className='results-page-container'>
						<form className='search-form'>
							<div className='searchbar-wrapper result-search-bar-wrapper'>
								<input
									value={querry}
									placeholder='Check some recipes'
									type='text'
									className=' search-bar card   '
									onChange={(e) => setQuerry(e.target.value)}
								/>
								<button onClick={getRecipes} className='search-icon'>
									<IoIosSearch />
								</button>
							</div>
							<select
								className='card dish-type-selector'
								onChange={(e) => setDishType(e.target.value)}
							>
								<option value='Main course'>Main Course</option>

								<option value='Biscuits and cookies'>
									Biscuits and Cookies
								</option>
								<option value='Bread'>Bread</option>
								<option value='Cereals'>Cereals</option>
								<option value='Condiments and sauces'>
									Condiments and Sauces
								</option>
								<option value='Desserts'>Desserts</option>
								<option value='Drinks'>Drinks</option>
								<option value='Pancake'>Pancake</option>
								<option value='Preps'>Preps</option>
								<option value='Preserve'>Preserve</option>
								<option value='Salad'>Salad</option>
								<option value='Sandwiches'>Sandwiches</option>
								<option value='Side dish'>Side Dish</option>
								<option value='Soup'>Soup</option>
								<option value='Starter'>Starter</option>
								<option value='Sweets'>Sweets</option>
							</select>
						</form>
					</div>
					<div className='results-container'>
						{recipeData.map((recipe) => (
							<RecipeCard
								recipe={recipe}
								key={recipe.recipe.uri}
								image={recipe.recipe.image}
								name={recipe.recipe.label}
								cuisine={recipe.recipe.cuisineType}
								ingredientCount={recipe.recipe.ingredients.length}
							/>
						))}
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default Homepage;
