import { useState } from "react";
import foodvilla from '../assets/foodvilla.jpg';
import { Link } from "react-router-dom";

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
  const [isLogin, setIsLogin] = useState(false);
  console.log("use state is "+useState())
  return (
    <div className="header">
      {Logo} {/* React Element */}
      <ul className="list">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>About Us</li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
      </ul>
      {isLogin === true ? (
        <Link to="/">
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
