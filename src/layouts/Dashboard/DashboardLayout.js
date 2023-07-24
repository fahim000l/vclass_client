import React, { useContext, useRef } from "react";
import DashboardHeader from "./components/DashboardHeader";
import BasicButton from "../../tools/buttons/BasicButton";
import BasicIconButton from "../../tools/buttons/BasicIconButton";
import ProfileIcon from "../../tools/icons/ProfileIcon";
import FriendsIcon from "../../tools/icons/FriendsIcon";
import AddFriendIcon from "../../tools/icons/AddFriendIcon";
import BasicOutlineButton from "../../tools/buttons/BasicOutlineButton";
import { AuthContext } from "../../contexts/AuthProvider";
import LogOutIcon from "../../tools/icons/LogOutIcon";
import { Link, Outlet } from "react-router-dom";
import PeopleIcon from "../../tools/icons/PeopleIcon";

const DashboardLayout = () => {
  const { logOut } = useContext(AuthContext);

  const drawerToggleRef = useRef();

  return (
    <div>
      <DashboardHeader />
      <div className="drawer lg:drawer-open">
        <input
          ref={drawerToggleRef}
          id="dashboardDrawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-auto h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Link
              onClick={() => drawerToggleRef.current.click()}
              to={"/dashboard"}
              className="my-2"
            >
              <BasicIconButton className={"w-full"}>
                <ProfileIcon />
                Profile
              </BasicIconButton>
            </Link>
            <Link
              onClick={() => drawerToggleRef.current.click()}
              to={"/dashboard/friends"}
              className="my-2"
            >
              <BasicIconButton className={"w-full"}>
                <FriendsIcon />
                Friends
              </BasicIconButton>
            </Link>
            <Link
              onClick={() => drawerToggleRef.current.click()}
              to={"/dashboard/friend-requests"}
              className="my-2"
            >
              <BasicIconButton className={"w-full"}>
                <AddFriendIcon className={"w-6 h-6"} />
                Friend Requests
              </BasicIconButton>
            </Link>
            <Link
              onClick={() => drawerToggleRef.current.click()}
              to={"/dashboard/peoples"}
              className="my-2"
            >
              <BasicIconButton className={"w-full"}>
                <PeopleIcon />
                Peoples
              </BasicIconButton>
            </Link>
            <li className="my-2">
              <BasicOutlineButton
                onClick={() => {
                  logOut()
                    .then(() => {})
                    .catch((err) => console.error(err));
                }}
              >
                <LogOutIcon />
                Log Out
              </BasicOutlineButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
