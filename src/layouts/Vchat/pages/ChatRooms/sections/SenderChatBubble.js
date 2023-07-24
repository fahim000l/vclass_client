import React from "react";
import useGetDBUser from "../../../../../hooks/useGetDBUser";
import BasicOutlineButton from "../../../../../tools/buttons/BasicOutlineButton";

const SenderChatBubble = ({ message }) => {
  const { author, date, messageContent, room, time } = message;

  const { dbUser } = useGetDBUser(author);

  return (
    <div className="chat chat-end mr-2">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={dbUser?.profilePic} alt="" />
        </div>
      </div>
      <div className="chat-header">
        {dbUser?.userName}
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <BasicOutlineButton className="chat-bubble text-black break-all font-bold">
        {messageContent}
      </BasicOutlineButton>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
};

export default SenderChatBubble;
