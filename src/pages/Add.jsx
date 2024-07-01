import React, { useState } from 'react'

const Add = () => {


  const [restaurants, setRestaurants]= useState({
    title:"",
    type:"",
    img:""
  })
  const handleChan = (e) =>{
    const {name, value} = e.target;
    setRestaurants({...restaurants,[name]:value})
  }
  const handSubmit = async ()=>{
    try{
      const reponse = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurants),
      });
      if(reponse.ok){
        alert("Restaurant added successfully!!!");
        setRestaurants({
          title:"",
          type:"",
          img:"",
        });
      }
    }catch (error) {
      console.log (error);
    }
  }  
  return (
    <div className="container mx-auto">
      <h1 className=""></h1>
    </div> 
  ) 
}



export default Add