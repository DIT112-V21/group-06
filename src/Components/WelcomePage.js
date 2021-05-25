// import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Button from './Button' 
import '../Css/Welcome.css'; 
// import Popup from 'reactjs-popup';



const WelcomePage = () => {

    let placeOrderBtn = 'Place new order'
    var destinationReached = true; //call method here to know if car has reached destination

    function deliveryConfirmation() {
        if(destinationReached){
            /*var cargoDelivered =*/ window.confirm("Click 'OK' to confirm that the cargo has reached its destination and to open the lock");


            destinationReached=false;
            
            //send cargoDelivered to operator
        };
    }

    // const recentOrders = () => {

    // }
    
    return (
        
		<div className="WelcomePage">


            
           


            <header className='Welcome-header'>
                <p>Welcome!</p>
                
                

                <Link to="/OrderInterface">
                <Button text={placeOrderBtn} id='placeOrderBtn'/>
                </Link> 
                
                

            </header>

        {deliveryConfirmation()}

		</div>
	)
}

export default WelcomePage;