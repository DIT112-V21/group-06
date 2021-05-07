import React from "react"
import '../Css/OrderInterface.css'

const addItem = () =>{

}


const Food = ({title, image}) => {
    return(
        <div className="Food">
            <h1>{title}</h1>
            <h2>100 :kr</h2>
            <img src={image} alt=""/>
            <br></br>
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}

export default Food