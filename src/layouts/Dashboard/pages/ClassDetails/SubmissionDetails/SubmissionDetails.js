import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import useGetSubmissionInfo from "../../../../../hooks/useGetSubmissionInfo";
import useGetDBUser from "../../../../../hooks/useGetDBUser";
import useGetComments from "../../../../../hooks/useGetComments";
import CommentCard from "../components/CommentCard";
import TextField from "../../../../../tools/inputs/TextField";
import SendIcon from "../../../../../tools/icons/SendIcon";
import { AuthContext } from "../../../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const SubmissionDetails = () => {
  const { id, assignmentId, subId } = useParams();

  const { subInfo } = useGetSubmissionInfo(subId);
  const { authUser } = useContext(AuthContext);

  const { dbUser } = useGetDBUser(subInfo?.submittedBy);
  const { comments, commentsRefetch } = useGetComments(subId);
  const [commentText, setCommentText] = useState("");

  const sendComment = () => {
    const commentInfo = {
      author: authUser?.email,
      content: commentText,
      postId: subId,
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
    <div className="lg:px-5 px-2 my-5">
      <div className="flex items-start">
        <div className="avatar">
          <div className="lg:w-16 w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={dbUser?.profilePic} alt="" />
          </div>
        </div>
        <div className="mx-2">
          <h3 className="lg:text-2xl text-xl font-bold">{dbUser?.userName}</h3>
          <p className="text-start">
            <span> {subInfo?.date}</span>
          </p>
        </div>
      </div>
      <hr className="my-2 border border-black border-solid mt-5" />
      <div>
        <p className="card-title">{subInfo?.title}</p>
        <div className="grid grid-cols-2 gap-5">
          <div className="btn btn-primary flex justify-between my-1">
            <a
              className="flex justify-between items-center"
              href={subInfo?.submittedFile?.link}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="w-10 h-10"
                src={subInfo?.submittedFile?.icon}
                alt=""
              />
              {subInfo?.submittedFile?.name}
            </a>
          </div>
        </div>
      </div>
      <hr className="my-2 border border-black border-solid mt-5" />
      <div className={`flex flex-col justify-between w-full`}>
        <ScrollToBottom className="h-[40vh]">
          {comments?.map((comment) => (
            <CommentCard comment={comment} key={comment?._id} />
          ))}
        </ScrollToBottom>
        <div className="flex items-center justify-between px-4 py-3 border-t gap-3">
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
  );
};

export default SubmissionDetails;
