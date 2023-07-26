import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import StreamIcon from "../../../../tools/icons/StreamIcon";
import DocumentIcon from "../../../../tools/icons/DocumentIcon";
import PeopleIcon from "../../../../tools/icons/PeopleIcon";

const ClassDetails = () => {
  const { id } = useParams();

  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <div className="tabs tabs-boxed hidden lg:flex">
        <Link
          to={`/dashboard/class-details/${id}/stream`}
          className={`tab w-[33%] ${
            pathname.split("/")[pathname.split("/").length - 1] === "stream"
              ? "tab-active"
              : ""
          }`}
        >
          Stream
        </Link>
        <Link
          to={`/dashboard/class-details/${id}/assignments`}
          className={`tab w-[33%] ${
            pathname.split("/")[pathname.split("/").length - 1] ===
            "assignments"
              ? "tab-active"
              : ""
          }`}
        >
          Assignments
        </Link>
        <Link
          to={`/dashboard/class-details/${id}/members`}
          className={`tab w-[33%] ${
            pathname.split("/")[pathname.split("/").length - 1] === "members"
              ? "tab-active"
              : ""
          }`}
        >
          Members
        </Link>
      </div>
      <Outlet></Outlet>
      <div className="btm-nav lg:hidden">
        <Link
          to={`/dashboard/class-details/${id}/stream`}
          className={`text-primary ${
            pathname.split("/")[pathname.split("/").length - 1] === "stream"
              ? "active"
              : ""
          }`}
        >
          <StreamIcon className={"w-6 h-6"} />
          Stream
        </Link>
        <Link
          to={`/dashboard/class-details/${id}/assignments`}
          className={`text-primary ${
            pathname.split("/")[pathname.split("/").length - 1] ===
            "assignments"
              ? "active"
              : ""
          }`}
        >
          <DocumentIcon />
          Assignments
        </Link>
        <Link
          to={`/dashboard/class-details/${id}/members`}
          className={`text-primary ${
            pathname.split("/")[pathname.split("/").length - 1] === "members"
              ? "active"
              : ""
          }`}
        >
          <PeopleIcon />
          Members
        </Link>
      </div>
    </div>
  );
};

export default ClassDetails;
