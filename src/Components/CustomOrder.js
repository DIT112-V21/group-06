const CustomOrders = () => {

    const submitBtn = () => {
        var pickUp = document.getElementById("pickUp").value 
        var endPoint = document.getElementById("endPoint").value 
        
        if(pickUp === ""){
            return false
        }else if(endPoint === ""){
            return false
        }else{
            alert("Thank you, a car will be sent ASAP to deliver your items");
        }
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