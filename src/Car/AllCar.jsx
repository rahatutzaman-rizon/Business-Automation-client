import axios from "axios";
import { useEffect, useState } from "react";
import Allcars from "./Allcars";


const AllCar = () => {
const [car,setCar]=useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/car');
      
            setCar(result.data);
          
          };
          
          
          fetchData();
    },[]);
    return (
        <div>
          

            <div className="grid grid-cols-3 gap-4 mt-4">
 {
    car.map(cars=>(<Allcars
    cars={cars}
    key={cars.id}
    ></Allcars>))
 }
            </div>
        </div>
    );
};

export default AllCar;