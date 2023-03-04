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
 // const div=document.getElementById("hi");
 const span=React.createElement("span", null, "Hi")
 const h1=React.createElement("h1", {
     id:"Greet"
 }, [span, " Harsha From Parcel"]);  // 1st Arg: Tag Name, 2nd Arg: you can add the id, class .. for that tag. 3rd Arg: we can add children for that tag
 const root=ReactDOM.createRoot(document.getElementById("hi")); // Selecting eleement where we want render the React
 root.render(h1);   //Renders the React in the page before rendering it removes the entire thing in the(root that is div tag in current example) and replaces it.