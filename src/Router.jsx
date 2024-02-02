
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "./App";
//import Home from "./Home/Home";
import Car from "./Car/Car";
import Datatable from "./Car/Datatable";

  const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children:[
          

      

        ]
      },

        
        {
          path: "/car",
          element: <Car></Car>,
        },
        {
          path: "/table",
          element:<Datatable></Datatable>,
        },
   
]
  );

export default router;