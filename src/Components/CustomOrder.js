const CustomOrders = () => {

    const submitBtn = () => {
        var pickUp = document.getElementById("pickUp").value 
        var endPoint = document.getElementById("endPoint").value 
        
        if(pickUp === ""){
            return false
        }else if(endPoint === ""){
            return false
        }else{
            customOrder(pickUp, endPoint)
            alert("Thank you, a car will be sent ASAP to deliver your items");
        }
    }

    function customOrder(resturantAdress,adress){
		var email = localStorage.getItem('email')
		fetch(`http://localhost:4000/orders/add?customer_email=${email}&address_from=${resturantAdress}&address_to=${adress}`)
		.then()
		.catch(err => {
		
	   })
	   }

    return(
        <div className="CustomOrders">
            <form >
                <label>Enter pickup adress:</label>
                <input  required id="pickUp" type="text"></input>
                <label>Enter endpoint adress:</label>
                <input  required id="endPoint" type="text"></input>
                <button onClick={submitBtn} type="submit" > Submit Order</button>
            </form>
        </div>
    )
} 

export default CustomOrders