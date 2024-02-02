import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Allcars = ({cars}) => {
   const [type,setType]=useState('');

   useEffect(()=>{
    if(cars.carType==="electric"){
        setType("Battery Type :")
    }
    else if(cars.carType==="gas"){
        setType("Fuel Capacity")
    }
},[cars]);
   
    return (
        <div>


<div className="bg-gradient-to-r from-indigo-500 to-blue-400 p-6 rounded-md shadow-md">

<div>
 
  <Marquee>
  <h2 className="text-3xl font-bold text-white mt-2  bg-gradient-to-r from-teal-600 to-red-600">
     Brand Name : {cars.carName}
  </h2>

</Marquee>
  <h2 className="text-2xl font-bold text-gray btn btn-info mt-2  ">
   Model:   {cars.carModel}
  </h2>

  <h2 className="text-2xl font-bold text-white btn btn-success mt-4 mb-2">
     Car Type : {cars.carType}
  </h2>

 

  <p className="text-gray-100 text-xl text-center font-bold bg-gradient-to-r from-teal-500 to-blue-400 ">
  Cars Enter Marketplace:   {cars.year}
  </p>
</div>

<div className="border-gray-300 border-t-2 my-4 "></div>

<div>
  
  
  {type && (
    <div className="text-gray-100 mt-2 btn btn-warning">
      <span>{type}:</span>
      <span className="font-bold text-blue-700">
        {cars.batteryCapacity || cars.fuelCapacity}
      </span> 
    </div>
  )}
</div>

</div>


        </div>
    );
};

export default Allcars;