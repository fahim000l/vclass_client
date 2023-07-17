import React from "react";
import Header from "./components/Header";
import { NavLink } from "react-router-dom";
import Button from "../../tools/buttons/Button";
import OutlineButton from "../../tools/buttons/OutlineButton";
import IconButton from "../../tools/buttons/IconButton";
import MenuIcon from "../../tools/icons/MenuIcon";
import IconOutlineButton from "../../tools/buttons/IconOutlineButton";
import HomeIcon from "../../tools/icons/HomeIcon";
import MailIcon from "../../tools/icons/MailIcon";
import DocumentIcon from "../../tools/icons/DocumentIcon";

const Main = () => {
  const navItems = (
    <>
      <NavLink className={"mx-5"}>
        <IconButton>
          <HomeIcon />
          Home
        </IconButton>
      </NavLink>
      <NavLink className={"mx-5"}>
        <IconButton>
          <MailIcon />
          Contact Us
        </IconButton>
      </NavLink>
      <NavLink className={"mx-5"}>
        <IconButton>
          <DocumentIcon />
          Documentation
        </IconButton>
      </NavLink>
    </>
  );

  return (
    <div>
      <Header navItems={navItems}></Header>
      <div className="drawer">
        <input id="mainDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label htmlFor="mainDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
