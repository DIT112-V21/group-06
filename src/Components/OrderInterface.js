import React, { useEffect, useState } from "react"
import '../Css/OrderInterface.css'


const OrderInterface = () => {

	const APP_ID = '6fa68a69'
	const APP_KEY = '761aa985f178a745368429f58f681626'

	const [items, setItems] = useState([])
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('pizza')

	useEffect(async () => {
		getItems()
	}, [query])

	const getItems = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
		const data = await response.json()
		setItems(data.hits)

	}

	const updateSearch = e => {
		setSearch(e.target.value)
	}

	const getSearch = e => {
		e.preventDefault()
		setQuery(search)
		setSearch('')
	} 

	const updateBasket = (title) => {
		var newOrders = []
		var prevOrders = localStorage.getItem('orders')

		if (prevOrders !== null) {
			let a = JSON.parse(prevOrders)
			a.forEach(element => {
				newOrders.push(element)
			});
		}
		newOrders.push(title)

		localStorage.setItem('orders', JSON.stringify(newOrders))
		setBasket(newOrders)

	}

	const checkout = () => {
		alert('Thanks for your order! \n We will send a car for your order and you will be nofified when it has arrived')
		localStorage.clear()
		setBasket([])

	}

	const [basket, setBasket] = useState([])

	useEffect( () => {
		let getData = localStorage.getItem('orders')
		let basketItems = JSON.parse(getData)

		setBasket(basketItems)
	}, [])


	var retriveData = localStorage.getItem('orders')
		var orders = JSON.parse(retriveData)

	
	return (
		<div className="OrderInterface">
			<form onSubmit={getSearch} className="search-form">
				<input className="search-bar" type="text" value={search} onChange={updateSearch} />
				<button className="search-button" type="submit">Search</button>
			</form>


			{items.map(r => (
				<div className="Food">
				<h1>{r.recipe.label}</h1>
				<img src={r.recipe.image} alt="" />
				<br></br>
				<button onClick={() => updateBasket(r.recipe.label)}>Add Item</button>
			</div>
				// <Food
				// 	key={r.recipe.label}
				// 	title={r.recipe.label}
				// 	image={r.recipe.image}
				// />

			))}
			
			<div className="Basket"> {/*Todo: 1.Add button to remove item from Basket 
											  2. Find more suiting api with price on food items	*/}
				<h1>Basket:</h1>
				
				{orders === null ? <p>Currenlty empty</p> : <p></p>}
				{ }
				{orders === null ? '' : basket.map(r => (
					<h3>{r}</h3>
				))}

				<button onClick={checkout}>Checkout</button>
			</div>


		</div>
	)
}

export default OrderInterface