import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import RoomHeader from "./sections/RoomHeader";
import useGetRoom from "../../../../hooks/useGetRoom";
import RoomContent from "./sections/RoomContent";
import RoomFooter from "./sections/RoomFooter";
import RoomComponents from "./sections/RoomComponents";
import { SocketContext } from "../../../../contexts/SocketProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";
import useGetRooms from "../../../../hooks/useGetRooms";
import useGetMessages from "../../../../hooks/useGetMessages";

const ChatRooms = () => {
  const { id } = useParams();

  const { room, roomRefetch } = useGetRoom(id);
  const { socket } = useContext(SocketContext);
  const { authUser } = useContext(AuthContext);
  const [msgContent, setMsgContent] = useState("");
  const { roomsRefetch } = useGetRooms();
  const { messagesRefetch } = useGetMessages(id);

  useEffect(() => {
    socket.emit("join_room", id);
  }, [socket, id]);

  const handleSendMsg = () => {
    if (msgContent) {
      const messageInfo = {
        author: authUser?.email,
        date: `${new Date().getDate()}-${
          new Date().getMonth() + 1
        }-${new Date().getFullYear()}`,
        time:
          new Date(Date()).getMinutes() + ":" + new Date(Date()).getSeconds(),
        messageContent: msgContent,
        room: id,
      };

      socket.emit("send_message", messageInfo);
      sendMessageTodb(messageInfo);
      setMsgContent("");
    }
  };

  const sendMessageTodb = (msgInfo) => {
    fetch(`${process.env.REACT_APP_serverSiteLink}store-message`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(msgInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          data["room"] = id;
          socket.emit("send_db_confirmation", data);
          roomsRefetch();
          roomRefetch();
          messagesRefetch();
        }
      });
  };

  return (
    <div className="flex items-center w-full">
      <div
        className={`flex flex-col justify-between w-full h-[100vh] overflow-y-hidden`}
      >
        <RoomHeader room={room} />
        <RoomContent
          room={id}
          sendMessageTodb={sendMessageTodb}
          roomRefetch={roomRefetch}
        />
        <RoomFooter
          msgContent={msgContent}
          handleSendMsg={handleSendMsg}
          setMsgContent={setMsgContent}
        />
      </div>
      <RoomComponents room={room} />
    </div>
  );
};

export default ChatRooms;