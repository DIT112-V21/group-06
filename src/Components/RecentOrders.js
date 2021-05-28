 

//resources: https://www.valentinog.com/blog/html-table/ https://javascript.plainenglish.io/how-to-create-a-custom-table-component-in-react-7c37ad7a6518

import React, { useEffect, useState } from "react"




function RecentOrders(){
useEffect(() => {
    getOrders()
}, )
const [items, setItems] = useState([])

async function getOrders(){
    var email = localStorage.getItem('email')

    let response = await fetch(`http://localhost:4000/recentOrders?email=${email}`) 
   let json = await response.json()
   let array = await json.data.rows
   let array2 = Array.from(array)
   console.log(array2)
   setItems(array2)
   }


    
    
    
    return (
        <div>
            <h3>Recent Orders</h3>
            <table className={RecentOrders}>
        
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Delivery Address</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
            <tbody>
                {items.map((item) => {
                    let orderStatus =' ';
                    let orderDelivered = (item.order_pending && item.order_delivered && item.order_opened)  
                    let destinationReached =(item.order_pending && item.order_delivered && !item.order_opened)
                    let orderPending = (item.order_pending && !item.order_delivered && !item.order_opened)
        
                    if (orderDelivered){
                        orderStatus = 'Delivered'
                    } else if(destinationReached){
                        orderStatus = 'Destination reached, awaiting confirmation'
                    } else if (orderPending){
                        orderStatus = 'Pending'
                    } 
                return <tr>
                    <td>{item.orderid}</td>
                    <td>{item.address_to}</td>
                    <td>{orderStatus}</td>
                </tr>;
                })}
            </tbody>
    </table>
    </div>
    )}

export default RecentOrders;
