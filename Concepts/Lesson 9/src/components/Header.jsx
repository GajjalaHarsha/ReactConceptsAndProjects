import { useState } from "react";
import foodvilla from '../assets/foodvilla.jpg';
import { Link } from "react-router-dom";
import useLogin from "./utils/useLogin";
import useOnline from "./utils/useOnline";

const Logo = (
  <a href="/">
    <img
      alt="Logo"
      width={100}
      src={foodvilla}
    />
  </a>
);

const Header = () => {
  const [isLogin, setIsLogin] = useLogin();
  const isOnline = useOnline();
  console.log("use state is "+useState())
  return (
    <div className="header">
      {Logo} {/* React Element */}
      <ul className="list">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li><Link to="/about-us">About Us</Link></li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
      </ul>
      {console.log(isOnline+" "+"dsbhkj")}
      {isOnline == true ? <h1>Online</h1> : <h1>Offline</h1>}
      {isLogin === true ? (
        <Link to="/home">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin === true ? "logout" : "login"}
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin === true ? "logout" : "login"}
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
