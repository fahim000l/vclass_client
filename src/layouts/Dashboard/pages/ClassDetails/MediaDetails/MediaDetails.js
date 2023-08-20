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

const MediaDetails = () => {
  const { recordId, id } = useParams();
  const { authUser } = useContext(AuthContext);
  const [commentText, setCommentText] = useState("");

  const { mediaDetails = null } = useGetMedia(recordId);
  const { comments, commentsRefetch } = useGetComments(recordId);
  const { medias } = useGetClassRecords(id);
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
      <div className="lg:w-[60%] lg:p-5 p-2">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <video controls autoPlay src={mediaDetails?.mediaUrl}></video>
          </figure>
          <div className="card-body">
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
                    className={"mr-2 btn-sm w-36"}
                  >
                    <ShareIcon />
                    Share
                  </BasicIconButton>
                  <BasicIconButton className={"btn-sm w-36"}>
                    <DownloadIcon />
                    Download
                  </BasicIconButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="grid h-auto card bg-base-300 rounded-box text-start p-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae magni doloremque reiciendis necessitatibus quam
                soluta unde omnis ad eaque non? Distinctio non similique nemo
                temporibus ratione animi, necessitatibus totam facilis quo
                tempora, obcaecati dolor atque soluta ipsum illum nesciunt vitae
                fuga aliquam consequuntur ullam explicabo neque officiis nulla
                quisquam! Fuga animi, iusto repellendus, excepturi amet
                perferendis magnam eligendi quia rerum minima odit suscipit quo
                dolorum veritatis. Ex ipsa libero odio natus quaerat quae qui
                pariatur provident dolores dolorem, error quo sunt beatae
                accusantium? Quasi, eos quae. Excepturi velit ratione voluptatem
                maxime eveniet omnis provident odit asperiores, consequuntur
                corporis nulla consectetur.
              </div>
              <div className="divider"></div>
              <div className="grid h-auto card bg-base-300 rounded-box">
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
      <div className="lg:w-[40%] grid grid-cols-1 gap-5 lg:p-5 p-2">
        {medias?.map((media) => (
          <MediaCard media={media} />
        ))}
      </div>
      {mediaDetails && <ShareModal sharingRecod={mediaDetails} />}
    </div>
  );
};

export default MediaDetails;
