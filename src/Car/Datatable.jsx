import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Datatable = () => {

    const [table,setTable]=useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios.get('https://business-server11.onrender.com/car');
      
            setTable(result.data);
          
          };
          
          
          fetchData();
    },[]);
    return (
        <div>
        <div>
      <div className="overflow-x-auto bg-red-200">
      <Link className="btn btn-info" to="/">Home</Link>
  <h1 className="text-center font-bold text-2xl">Show data table:</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Model</th>
              <th>Year</th>
              {/* Add additional headers based on your data structure */}
            </tr>
          </thead>
          <tbody>
            {/* Map over the data to dynamically render rows */}
            {table.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.carName}</td>
                <td>{item.carModel}</td>
                <td>{item.year}</td>
                {/* Add additional cells based on your data structure */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};



export default Datatable;





       