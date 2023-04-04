import React from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between bg-[#1C2B35] py-3">
      <img className="pl-16" src={logo} alt="" />
      <div className="text-white pr-16">
        <Link className="ml-5" to="/">
          Shop
        </Link>
        <Link className="ml-5" to="/orders">
          Order
        </Link>
        <Link className="ml-5" to="/inventory">
          Inventory
        </Link>
        <Link className="ml-5" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
