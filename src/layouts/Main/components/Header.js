import React from "react";
import OutlineButton from "../../../tools/buttons/OutlineButton";
import IconCoverButton from "../../../tools/buttons/IconCoverButton";
import MenuIcon from "../../../tools/icons/MenuIcon";
import { Link } from "react-router-dom";

const Header = ({ navItems }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <label htmlFor="mainDrawer" className="lg:hidden">
          <IconCoverButton>
            <MenuIcon />
          </IconCoverButton>
        </label>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/signup"}>
          <OutlineButton>Get Started</OutlineButton>
        </Link>
      </div>
    </div>
  );
};

export default Header;
