import React from "react";
import MenuIcon from "../../../tools/icons/MenuIcon";
import OutlineButton from "../../../tools/buttons/OutlineButton";

const Header = ({ navItems }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <label htmlFor="mainDrawer" className="btn btn-circle lg:hidden">
          <MenuIcon className={"w-6 h-6"} />
        </label>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <OutlineButton>Get Started</OutlineButton>
      </div>
    </div>
  );
};

export default Header;
