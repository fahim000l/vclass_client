import React, { useState } from "react";
import LikeIcon from "../../../../../tools/icons/LikeIcon";
import SendIcon from "../../../../../tools/icons/SendIcon";
import TextField from "../../../../../tools/inputs/TextField";
import AttachIcon from "../../../../../tools/icons/AttachIcon";
import SentiEmojiIcon from "../../../../../tools/icons/SentiEmojiIcon";
import IconCoverButton from "../../../../../tools/buttons/IconCoverButton";
import PlusIcon from "../../../../../tools/icons/PlusIcon";
// h-max
const RoomFooter = ({ setMsgContent, handleSendMsg, msgContent }) => {
  const [typing, setTyping] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t gap-3 h-[10vh]">
      <div>
        {msgContent && typing ? (
          <button onClick={() => setTyping(false)}>
            <PlusIcon className={"cursor-pointer w-6 h-6 mx-2"} />
          </button>
        ) : (
          <div className="flex">
            <label>
              <SentiEmojiIcon className={"cursor-pointer w-6 h-6 mx-2"} />
            </label>
            <AttachIcon className={"cursor-pointer w-6 h-6 mx-2"} />
          </div>
        )}
      </div>
      <TextField
        value={msgContent}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSendMsg();
          }
        }}
        onChange={(event) => {
          setTyping(true);
          setMsgContent(event.target.value);
        }}
        placeholder={"Aa"}
        className={"w-full input-sm"}
      />
      <div className="flex">
        {msgContent ? (
          <button onClick={handleSendMsg}>
            <SendIcon className={"cursor-pointer w-6 h-6 mx-2"} />
          </button>
        ) : (
          <button>
            <LikeIcon className={"cursor-pointer w-6 h-6 mx-2"} />
          </button>
        )}
      </div>
    </div>
  );
};

export default RoomFooter;
