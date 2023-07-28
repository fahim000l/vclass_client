import React from "react";
import IconCoverButton from "../../../../../../../tools/buttons/IconCoverButton";
import DocumentIcon from "../../../../../../../tools/icons/DocumentIcon";
import ThreeDotIcon from "../../../../../../../tools/icons/ThreeDotIcon";
import CrossIcon from "../../../../../../../tools/icons/CrossIcon";
import IconButton from "../../../../../../../tools/buttons/IconButton";
import { useNavigate } from "react-router-dom";
import IconOutlineCoverButton from "../../../../../../../tools/buttons/IconOutlineCoverButton";
import TrushIcon from "../../../../../../../tools/icons/TrushIcon";
import useGetComments from "../../../../../../../hooks/useGetComments";
import MessageIcon from "../../../../../../../tools/icons/MessageIcon";
import AttachIcon from "../../../../../../../tools/icons/AttachIcon";

const AssignmentCard = ({ assignment, classId, handleDeletConfirm }) => {
  const navigator = useNavigate();
  const { comments } = useGetComments(assignment?._id);

  return (
    <div
      key={assignment?._id}
      className="p-2 flex justify-between items-center my-2 shadow-lg cursor-pointer"
    >
      <div
        onClick={() =>
          navigator(
            `/dashboard/class-details/${classId}/assignments/${assignment?._id}`
          )
        }
        className="flex items-center w-full"
      >
        <IconCoverButton>
          <DocumentIcon className={"w-6 h-6"} />
        </IconCoverButton>
        <div className="flex items-center justify-between w-full">
          <div className="ml-2 flex flex-col justify-start">
            <h3 className="card-title">{assignment?.title}</h3>
            <p>deadline: {assignment?.deadline}</p>
          </div>
          <div className="flex items-center mr-2">
            <div className="flex place-items-center">
              {comments?.length}
              <MessageIcon className={"w-4 h-4 ml-2 mx-5"} />
            </div>
            <div className="flex place-items-center">
              {assignment?.attachments?.length}
              <AttachIcon className={"w-4 h-4 ml-2 mx-5"} />
            </div>
          </div>
        </div>
      </div>
      <IconOutlineCoverButton onClick={() => handleDeletConfirm(assignment)}>
        <TrushIcon className={"w-6 h-6"} />
      </IconOutlineCoverButton>
    </div>
  );
};

export default AssignmentCard;
