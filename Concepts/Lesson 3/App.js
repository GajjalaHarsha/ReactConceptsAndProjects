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
import {HiOutlineBuildingOffice2} from "react-icons/hi2";

 const reactElement = <div>Hi Harsha</div>;

 const Logo = (<div className="image">
                    <img alt="Shield s logo design vector Premium Vector | Free Vector #Freepik #vector #freelogo #freebusiness #freeabstract #freedesign S Logo Design, Logo Design Services, Lettering Design, Vector Design, Design Art, Sg Logo, Logo Abstrait, S Letter Logo, Security Logo"
                    className="hCL kVc L4E MIw" fetchpriority="auto" loading="auto" 
                    src="https://i.pinimg.com/originals/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" width={100} height={100}></img>
                 </div>);

 const FunctionComponent = () => {
    return (
        <div> 
            {reactElement} {/* Using react Element inside the functional component */}
            <h1>Harsha</h1>
        </div>
    );
 }

 const FunctionComponent2 = () => {
    return (
        <div> 
            {FunctionComponent()} {/*  Using the functional component inside this functional component */}
            <h1>Harsha</h1>
        </div>
    );
 }

 const FunctionComponent3 = () => {
    return (
        <div> 
            <FunctionComponent2/> {/* Using the functional component inside this functional component*/}
            <h1>Harsha</h1>
        </div>
    );
 }

 const HeaderComponent = ()=> (
    <div className="header">
        {Logo}
        <SearchBar/>
        <ReactIcon/>
    </div>
 );

 const SearchBar =()=>{
    return (
        <div className="search">
            <input className="search"/>
        </div>
    );
 }

 const ReactIcon = () =>{
    return (
        <div className="userIcon">
            <HiOutlineBuildingOffice2 size={50}/>
        </div>
    );
 }

 

 const root = ReactDOM.createRoot(document.getElementById("hi"));

root.render(<HeaderComponent/>);