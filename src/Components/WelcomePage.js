import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Button from './Button' 
import '../Css/Welcome.css'; 
import RecentOrders from './RecentOrders'
import Nav from './Nav'
  

const WelcomePage = () => {

    let addAddressBtn = 'Add delivery address'
    let placeOrderBtn = 'Place new order'
   
    useEffect(() => {
        getUnopenedOrders()
    }, )
    const [items, setItems] = useState([])
    
    async function getUnopenedOrders(){
        var email = localStorage.getItem('email')
        let response = await fetch(`http://localhost:4000/ordersReached?email=${email}`) 
        let json = await response.json()
        let array = await json.data.rows
        let array2 = Array.from(array)
        setItems(array2)
       }

     function deliveryConfirmation() {

        for (let i=0; i<items.length; i++){
            var orderid = items[i].orderid
            var cargoDelivered = window.confirm("Click 'OK' to confirm that the order with the order ID " + orderid + " has reached its destination and to open the lock");

            if (cargoDelivered){
                
                fetch(`http://localhost:4000/orders/opened?orderid=${orderid}`)
                getUnopenedOrders()
            } 
            
        }

    
    }

   
    return (
        
		<div className="WelcomePage">

        <Nav />
            
           


            <header className='Welcome-header'>
                <p>Welcome!</p>
                
                <RecentOrders></RecentOrders>

                
                <p>
                <Link to="/OrderInterface">
                <Button text={placeOrderBtn} id='placeOrderBtn'/>
                </Link> 
                <Link to="/AddressForm">
                <Button text={addAddressBtn} id='addAddressBtn'/>
                </Link> 
                </p>

            </header>

        {deliveryConfirmation()}

		</div>
	)
}

export default WelcomePage;