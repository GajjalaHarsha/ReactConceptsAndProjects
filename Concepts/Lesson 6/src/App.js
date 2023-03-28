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
import  ReactDOM  from "react-dom/client";

import Header from "./components/Header"; {/* Default Import */}
import {Body} from './components/Body.js'; {/* Named Import*/}
import *  as Foot from './components/Footer'; {/* Importing all from the components */}


 const AppLayout =() => {
    return (
        <React.Fragment>
            <Header/>
  
            <Body />
            <Foot.Footer/>
        </React.Fragment>
    );
 }


 const root = ReactDOM.createRoot(document.getElementById("hi"));
 root.render(<AppLayout/>)