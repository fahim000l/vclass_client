import React from "react";
import EmojiPicker from "emoji-picker-react";

const EmojiModal = ({ msgContent, setMsgContent }) => {
  return (
    <div>
      <input type="checkbox" id="emojiModal" className="modal-toggle" />
      <div className="modal modal-bottom lg:modal-middle">
        <div className="modal-box">
          <EmojiPicker
            width={"100%"}
            height={"330px"}
            onEmojiClick={(event, emojiObject) => {
              console.log("emoji clicked", event.emoji);
              setMsgContent(msgContent + event.emoji);
            }}
          />
        </div>
        <label className="modal-backdrop" htmlFor="emojiModal">
          Close
        </label>
      </div>
    </div>
  );
};

export default EmojiModal;
