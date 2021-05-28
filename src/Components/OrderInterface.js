import React, { useEffect, useState } from "react"
import '../Css/OrderInterface.css'
import './AddressForm'
import Nav from './Nav'

const OrderInterface = () => {

	const APP_ID = '6fa68a69'
	const APP_KEY = '761aa985f178a745368429f58f681626'

	const [items, setItems] = useState([])
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('pizza')

	useEffect(() => {
		getItems()
		// eslint-disable-next-line
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
		let a = JSON.parse(prevOrders)
		
		if (a !== null) {
			a.forEach(element => {
				newOrders.push(element)
			});
		}

		newOrders.push(title)
		localStorage.setItem('orders', JSON.stringify(newOrders))
		setBasket(newOrders)

		if (basket !== null) {
			if (basket.length > 8) {
				alert('You are a probably fat, so stop ordering more because I have developed a bad component that will go off screen if you continue and then you cant checkout')
			}
		}

	}

	function userCreate(resturantAdress,adress){
		var email = localStorage.getItem('email')
		fetch(`http://localhost:4000/orders/add?customer_email=${email}&address_from=${resturantAdress}&address_to=${adress}`)
		.then()
		.catch(err => {
		
	   })
	   }
	   	const checkout = async () => {
		if (basket !== null) {
			if (basket.length < 1) {
				alert('Your basket is empty')

			} else {
				// alert('Thanks for your order! \n We will send a car for your order and you will be notified when it has arrived')
				let email = localStorage.getItem("email")
				let customerAddress = ""
				let response = await fetch(`http://localhost:4000/customers/getAddress?customer_email=${email}`)
				let json = await response.json()
        		let array = await json.data.rows
				if( array.length > 0 ){
					customerAddress = array[0].address
			}
				let address = prompt("Please enter your adress", customerAddress )

				if (address === null || address === "") {
					console.log("User cancelled the prompt.")
				} else {

					// localStorage.clear()
					let id = localStorage.getItem('id')
					localStorage.setItem('orders', null)
					localStorage.setItem('order'+ id, orders+ ';'  +address)
					
					let newId = Number(id) + 1
					localStorage.setItem('id', newId)
					

					// let old = localStorage.getItem('address');
					// if (old === null) old = "";
					// localStorage.setItem('address', old + address + ',');


					setBasket([])

					let resturantAddress = 'resturant' + Math.floor(Math.random() * 100)
					userCreate(resturantAddress,address)
				}
			}
		} else {
			alert('Your basket is empty')
		}
	}



	useEffect(() => {
		let getData = localStorage.getItem('orders')
		let basketItems = JSON.parse(getData)

		setBasket(basketItems)
	}, [])




	const deleteItem = (title) => {

		for (let index = 0; index < basket.length; index++) {
			if (basket[index] === title) {
				basket.splice(index, 1)
				break
			}
		}

		localStorage.setItem('orders', JSON.stringify(basket))
		var retriveData = localStorage.getItem('orders')
		var orders = JSON.parse(retriveData)

		setBasket(orders)

	}
	const [basket, setBasket] = useState([])
	var retriveData = localStorage.getItem('orders')
	var orders = JSON.parse(retriveData)

	let checkId = localStorage.getItem('id')
	if(checkId === null){
		localStorage.setItem('id',0)		
	}else if(Number(checkId) > 20){
		localStorage.setItem('id',1)
	}

	


	return (
		<div className="OrderInterface">
			<Nav />
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


			))}

			<div className="Basket">

				<h1>Basket:</h1>

				{orders === null ? <p>Currenlty empty</p> : <p></p>}
				{ }
				{orders === null ? '' : basket.map(r => (
					<div>
						<h3>{r}</h3>
						<button onClick={() => deleteItem(r)}>X</button>
					</div>
				))}
				<br></br>
				<button onClick={checkout}>Checkout</button>
			</div>


		</div>
	)
}

export default OrderInterface