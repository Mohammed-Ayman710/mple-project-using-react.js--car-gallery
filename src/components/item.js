import React,{useState} from "react";
import './item.css'




function MyItem(props ){
    const [description,setDescription]=useState();
    const [price,setPrice]=useState();
    const [title,setTitle]=useState(props.nameOfCar)
    // const [removeTitle,setRemoveTitle]=useState();

    function showDescription(){
        setDescription(props.description)
    }
  function showPrice(){
    setPrice(props.price)
  }
  function add_to_Cart(){
    let message="Are you sure you want to buy this car?";
    let userRespone1=window.confirm(message)
    if(userRespone1)
    {
      let userRespone2=window.confirm("The price of the car is "+props.price)
      if(userRespone2){
        window.alert("Your order has been successfully stored. Thank you very much")
        setTitle("Your request has been stored") 
      }
    }
  }
  // function removeOfCart(){
  //      setRemoveTitle(props.nameOfCar)
  // }





    return(
        <div className="item">
   <h1>{title}</h1>
   <img src={props.imageOfCar}  alt="No_Photo"/>
   <p>{description}</p>
   <b>{price}</b>


   <div className="button">
   <button  onClick={showDescription}    id="Show_details">Show_details</button>
   <button  onClick={showPrice}   id="Show_price">Show_price</button>
   <button  onClick={add_to_Cart}  id="Add_To_Cart">Add_To_Cart</button>
   {/* <button  onClick={removeOfCart}  id="Add_To_Cart">Remove_Of_Cart</button> */}

   </div>
        </div>
    )
}
export default MyItem
