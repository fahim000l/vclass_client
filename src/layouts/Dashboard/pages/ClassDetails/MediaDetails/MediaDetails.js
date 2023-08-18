import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useGetMedia from "../../../../../hooks/useGetMedia";
import useGetDBUser from "../../../../../hooks/useGetDBUser";
import BasicIconButton from "../../../../../tools/buttons/BasicIconButton";
import ShareIcon from "../../../../../tools/icons/ShareIcon";
import DownloadIcon from "../../../../../tools/icons/DownloadIcon";
import SendIcon from "../../../../../tools/icons/SendIcon";
import TextField from "../../../../../tools/inputs/TextField";
import { AuthContext } from "../../../../../contexts/AuthProvider";
import useGetComments from "../../../../../hooks/useGetComments";
import { toast } from "react-toastify";
import CommentCard from "../components/CommentCard";
import ScrollToBottom from "react-scroll-to-bottom";
import ShareModal from "../sections/ClassRecords/sections/ShareModal";

const MediaDetails = () => {
  const { recordId } = useParams();
  const { authUser } = useContext(AuthContext);
  const [commentText, setCommentText] = useState("");

  const { mediaDetails = null } = useGetMedia(recordId);
  const { comments, commentsRefetch } = useGetComments(recordId);
  const hiddenShareLabel = useRef();

  //   const {
  //     author = "",
  //     classId = "",
  //     date = "",
  //     mediaTitle = "",
  //     mediaType = "",
  //     mediaUrl = "",
  //     _id = "",
  //   } = mediaDetails;

  const { dbUser } = useGetDBUser(mediaDetails?.author);

  const sendComment = () => {
    const commentInfo = {
      author: authUser?.email,
      content: commentText,
      postId: recordId,
    };

    console.log(commentInfo);

    fetch(`${process.env.REACT_APP_serverSiteLink}post-comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          setCommentText("");
          commentsRefetch();
          toast.success("yor comment has been added");
        }
      });
  };

  return (
    <div className="lg:flex">
      <div className="lg:w-[70%] lg:p-5 p-2">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <video controls autoPlay src={mediaDetails?.mediaUrl}></video>
          </figure>
          <div className="card-body">
            <TextField />
            <h2 className="card-title">{mediaDetails?.mediaTitle}</h2>
            <div className="flex items-start">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={dbUser?.profilePic} alt="" />
                </div>
              </div>
              <div className="lg:flex justify-between w-full">
                <div className="ml-2 text-start">
                  <p className="opacity-75 font-bold">{dbUser?.userName}</p>
                  <p className="opacity-75 font-bold">{mediaDetails?.date}</p>
                </div>
                <div className="flex">
                  <label
                    ref={hiddenShareLabel}
                    htmlFor="shareModal"
                    className="hidden"
                  ></label>
                  <BasicIconButton
                    onClick={() => hiddenShareLabel.current.click()}
                    className={"mr-2"}
                  >
                    <ShareIcon />
                    Share
                  </BasicIconButton>
                  <BasicIconButton>
                    <DownloadIcon />
                    Download
                  </BasicIconButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="grid h-20 card bg-base-300 rounded-box text-ellipsis overflow-auto text-start p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                obcaecati reprehenderit dicta doloremque eos, eligendi accusamus
                soluta repudiandae commodi, aperiam rerum corrupti
              </div>
              <div className="divider"></div>
              <div className="grid h-20 card bg-base-300 rounded-box">
                <ScrollToBottom className="h-[40vh]">
                  {comments?.map((comment) => (
                    <CommentCard comment={comment} key={comment?._id} />
                  ))}
                </ScrollToBottom>
              </div>
              <div className="flex items-center justify-between border-t gap-3 mt-2 pt-2">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={authUser?.photoURL} alt="" />
                  </div>
                </div>
                <TextField
                  onChange={(event) => setCommentText(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      sendComment();
                    }
                  }}
                  value={commentText}
                  placeholder={"Aa"}
                  className={"w-full input-sm"}
                />
                <div className="flex">
                  <button onClick={sendComment}>
                    <SendIcon className={"cursor-pointer w-6 h-6 mx-2"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <TextField />
        </div>
      </div>
      <div className="lg:w-[30%]">
        <TextField />
      </div>
      {mediaDetails && <ShareModal sharingRecod={mediaDetails} />}
    </div>
  );
};

export default MediaDetails;
