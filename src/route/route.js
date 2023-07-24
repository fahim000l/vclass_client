import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../layouts/Main/pages/HomePage/Home";
import SignIn from "../layouts/Main/pages/SignIn/SignIn";
import SignUp from "../layouts/Main/pages/SignUp/SignUp";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import Profile from "../layouts/Dashboard/pages/Profile/Profile";
import Friends from "../layouts/Dashboard/pages/Friends/Friends";
import PrivateRoute from "./PrivateRoute";
import Peoples from "../layouts/Dashboard/pages/Peoples/Peoples";
import FriendRequests from "../layouts/Dashboard/pages/FriendRequests/FriendRequests";
import Vchat from "../layouts/Vchat/Vchat";
import ChatRooms from "../layouts/Vchat/pages/ChatRooms/ChatRooms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/friends",
        element: (
          <PrivateRoute>
            <Friends></Friends>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/peoples",
        element: (
          <PrivateRoute>
            <Peoples></Peoples>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/friend-requests",
        element: (
          <PrivateRoute>
            <FriendRequests></FriendRequests>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/vchat",
    element: (
      <PrivateRoute>
        <Vchat></Vchat>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/vchat/chat-room/:id",
        element: <ChatRooms></ChatRooms>,
      },
    ],
  },
]);

export default router;
