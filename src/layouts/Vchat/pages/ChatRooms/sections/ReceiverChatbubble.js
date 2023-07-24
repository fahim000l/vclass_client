import React from "react";
import useGetDBUser from "../../../../../hooks/useGetDBUser";
import BasicButton from "../../../../../tools/buttons/BasicButton";

const ReceiverChatbubble = ({ message }) => {
  const { author, date, messageContent, room, time } = message;

  const { dbUser } = useGetDBUser(author);

  return (
    <div className="chat chat-start ml-2">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={dbUser?.profilePic} alt="" />
        </div>
      </div>
      <div className="chat-header">
        {dbUser?.userName}
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <BasicButton className="chat-bubble break-all font-bold">
        {messageContent}
      </BasicButton>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default ReceiverChatbubble;
