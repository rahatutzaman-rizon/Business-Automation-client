
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "./App";
//import Home from "./Home/Home";
import Car from "./Car/Car";

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
   
]
  );

export default router;