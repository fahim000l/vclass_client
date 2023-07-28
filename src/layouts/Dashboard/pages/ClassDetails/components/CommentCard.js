import React from "react";
import useGetDBUser from "../../../../../hooks/useGetDBUser";

const CommentCard = ({ comment }) => {
  const { author, content, postId } = comment;
  const { dbUser } = useGetDBUser(author);

  return (
    <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={dbUser?.profilePic} alt="" />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
          <span className="text-sm text-gray-400">General manager</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
