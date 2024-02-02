import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const Car = () => {
 

    const [showModal, setShowModal] = useState(false);
  const [carType, setCarType] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [year, setCarYear] = useState('');
  const [batteryCapacity, setBatteryCapacity] = useState('');
  const [fuelCapacity, setFuelCapacity] = useState('');

  const saveCar=async ()=>{
    try{
      const response=await axios.post('https://business-server11.onrender.com/car',{
      carType,
      carName,
      carModel,
      batteryCapacity,
      fuelCapacity,
      year,
    });

    // Handle the response as needed
    console.log('Car saved successfully', response.data);

    // Close the modal after successful save
    setShowModal(false);
  } catch (error) {
    // Handle errors
    console.error('Error saving car', error);
  }
    
  };

    return (
        <div>

<Link className="btn btn-primary mt-2" to="/">Home </Link>
<button 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2 text-center mt-6 font-bold mx-72 "
        onClick={() => setShowModal(true)}
      >
        Add Car  
      </button>

      {showModal ? (  
        <>
          <div
            className="fixed inset-0 bg-gray-300  bg-opacity-75 transition-opacity"
            onClick={() => setShowModal(false)} 
          ></div>

          <div className="fixed inset-10 bg-white p-6 rounded shadow-lg mb-24">
            <div className="mb-4">
              <label className="block text-gray-700">
                Type:
                <select
                  className="mt-2 form-select"
                  onChange={(e) => setCarType(e.target.value)} 
                >
                  <option>electric</option>
                  <option>gas</option>
                </select>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input 
                className="w-full p-2 border rounded"
                type="text"
                onChange={(e) => setCarName(e.target.value)}  
                
              />


              <label className="block text-gray-700">Year</label>
              <input 
                className="w-full p-2 border rounded"
                type="text"
                onChange={(e) => setCarYear(e.target.value)}  
                
              />


              <label className="block text-gray-700">Model</label>
              <input 
                className="w-full p-2 border rounded"
                type="text"
                onChange={(e) => setCarModel(e.target.value)}  
                
              />
              
            </div>

            <div className="">
              {carType === 'electric' && (
                <div>
                  <label className="block text-gray-700">Battery Power</label>
                  <input
                    className="w-full p-2 border rounded"
                    type="number"
                    onChange={(e) => setBatteryCapacity(e.target.value)}  
                  />
                </div>
              )}

              {carType === 'gas' && (
                <div>
                  <label className="block text-gray-700">Fuel Power</label>
                  <input
                    className="w-full p-2 border rounded"
                    type="text"
                    onChange={(e) => setFuelCapacity(e.target.value)}
                  />
                </div>
              )}
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-36 btn btn-warning"
              onClick={saveCar}
            >
              Save
            </button>
          </div>
        </>
      ) : null}
            
        </div>
     
        
    );
};

export default Car;