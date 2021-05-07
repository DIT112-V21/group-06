import React,{useEffect, useState} from "react" 
import Food from "./Food"
import '../Css/OrderInterface.css'

const OrderInterface = () => {

	const APP_ID = '6fa68a69'
	const APP_KEY = '761aa985f178a745368429f58f681626'

	const [recipes, setRecipes] = useState([])
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('pizza')

	useEffect(async () => {
		getRecepies()
	},[query])

	const getRecepies = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}` )
		const data = await response.json()
		setRecipes(data.hits)
        console.log(data.hits)

	}


	const updateSearch = e => {
		setSearch(e.target.value)
	}

	const getSearch = e => {
		e.preventDefault()
		setQuery(search)
		setSearch('')
	}


	return(
		<div className="OrderInterface">
			<form onSubmit={getSearch} className="search-form">
				<input className="search-bar" type="text" value={search} onChange={updateSearch}/>
				<button className="search-button" type="submit">Search</button>
			</form>
			{recipes.map(r => (
				<Food 
				key={r.recipe.label}
				title={r.recipe.label} 
				image={r.recipe.image}
                
				/>
			))}
		</div>
	)
}

export default OrderInterface