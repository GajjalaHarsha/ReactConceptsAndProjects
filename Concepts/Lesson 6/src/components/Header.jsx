import { useState } from "react";


const Logo = <a href="/"> 
                    <img alt="Logo" width={100} 
                    src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>
              </a>

const Header =()=>{
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div className="header">
            {Logo}     {/* React Element */}   
            <ul className="list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            <button onClick={()=> {setIsLogin(!isLogin)}}>{isLogin===true? "logout":"login"}</button>
        </div>
    );
 }

 export default Header;