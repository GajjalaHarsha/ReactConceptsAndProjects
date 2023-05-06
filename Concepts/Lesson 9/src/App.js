/* 
* created a server.
* HMR - Hot Module Reloading
* Bundling
* MINIFY
* Cleaning our code
* Dev(npx parcel index-react.html) and production build(npx parcel build index-react.html)
* Super Fast Build Algorithm
* Image Optimization
* Caching while development
* compression
* compatible with older version of browser
* Https on Dev (npx parcel index-react.hml --https)
* Parcel Manages port number(when running different project using parcel, it automatically runs port)
* consistent Hashing Algorithm
* Zero Config Bundler
* Transitive Dependencies 
*
*
*/

import React from "react"; 
import About from "./components/About";
import  ReactDOM  from "react-dom/client";
import { Login } from "./components/Login";
import Header from "./components/Header"; {/* Default Import */}
import {Body} from './components/Body.js'; {/* Named Import*/}
import *  as Foot from './components/Footer';import { BrowserRouter, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error } from "./components/Error";
import Contact from "./components/Contact";
import { RestaurantMenu } from "./components/RestaurantMenu";
import useLogin from "./components/utils/useLogin";
 {/* Importing all from the components */}


 const AppLayout =() => {
    
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Foot.Footer/>
        </React.Fragment>
    );
 }

 

 const routeConfig = createBrowserRouter([
    
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/home",
                element:<Body/>,
                action:(data)=>{
                    console.log(data);
                    return 1;
                }
            },
            {
                path:"/",
                element:<Login/>,                
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            }, 
            {
                path:"about-us",
                element:<About/>
            }
        ]   
    }
 ])

 const root = ReactDOM.createRoot(document.getElementById("hi"));
 root.render(<RouterProvider router={routeConfig}/>)