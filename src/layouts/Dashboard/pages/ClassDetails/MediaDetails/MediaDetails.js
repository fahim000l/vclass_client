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
import ClassRecords from "../sections/ClassRecords/ClassRecords";
import useGetClassRecords from "../../../../../hooks/useGetClassRecords";
import MediaCard from "../sections/ClassRecords/sections/MediaCard";
import TrushIcon from "../../../../../tools/icons/TrushIcon";
import EditIcon from "../../../../../tools/icons/EditIcon";
import audioDisplay from "../../../../../assets/audio.png";

const MediaDetails = () => {
  const { recordId, id } = useParams();
  const { authUser } = useContext(AuthContext);
  const [commentText, setCommentText] = useState("");

  const { mediaDetails = null } = useGetMedia(recordId);
  const { comments, commentsRefetch } = useGetComments(recordId);
  const { medias } = useGetClassRecords(id);
  const hiddenShareLabel = useRef();
  const hiddenAnchor = useRef();

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
    <div className="w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[60%] w-full lg:p-5 p-2">
          <div className="card bg-base-100 shadow-xl">
            <figure className="w-full">
              {mediaDetails?.mediaType === "audio" ? (
                <div className="w-full">
                  <img className="mx-auto" src={audioDisplay} alt="" />
                  <audio
                    className="w-full"
                    autoPlay
                    controls
                    src={mediaDetails?.mediaUrl}
                  ></audio>
                </div>
              ) : (
                <video
                  controls
                  autoPlay
                  className="w-full"
                  src={mediaDetails?.mediaUrl}
                ></video>
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{mediaDetails?.mediaTitle}</h2>
              <div className="flex items-start">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={dbUser?.profilePic} alt="" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="ml-2 text-start">
                    <p className="opacity-75 font-bold">{dbUser?.userName}</p>
                    <p className="opacity-75 font-bold">{mediaDetails?.date}</p>
                  </div>
                  <div className="flex mt-2">
                    <label
                      ref={hiddenShareLabel}
                      htmlFor="shareModal"
                      className="hidden"
                    ></label>
                    <a
                      ref={hiddenAnchor}
                      className="hidden"
                      href={mediaDetails?.mediaUrl}
                      download={mediaDetails?.mediaTitle}
                    >
                      Download
                    </a>
                    <BasicIconButton
                      onClick={() => hiddenShareLabel.current.click()}
                      className={"mr-2 btn-sm"}
                    >
                      <ShareIcon />
                      Share
                    </BasicIconButton>
                    <BasicIconButton
                      onClick={() => hiddenAnchor.current.click()}
                      className={"btn-sm mr-2"}
                    >
                      <DownloadIcon />
                      Download
                    </BasicIconButton>
                    <BasicIconButton
                      onClick={() => hiddenAnchor.current.click()}
                      className={"btn-sm mr-2"}
                    >
                      <TrushIcon className={"h-6 w-6"} />
                      Delete
                    </BasicIconButton>
                    <BasicIconButton
                      onClick={() => hiddenAnchor.current.click()}
                      className={"btn-sm"}
                    >
                      <EditIcon className={"h-6 w-6"} />
                      Edit
                    </BasicIconButton>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                {mediaDetails?.mediaDetails && (
                  <div className="h-auto bg-base-300 rounded-box text-start p-2">
                    {mediaDetails?.mediaDetails}
                  </div>
                )}
                <div className="divider"></div>
                <div className="h-auto bg-base-300 rounded-box">
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
          </div>
        </div>
        <div className="lg:w-[40%] w-full grid grid-cols-1 gap-5 lg:p-5 p-2">
          {medias?.map((media) => (
            <MediaCard media={media} />
          ))}
        </div>
      </div>
      {mediaDetails && <ShareModal sharingRecod={mediaDetails} />}
    </div>
  );
};

export default MediaDetails;
