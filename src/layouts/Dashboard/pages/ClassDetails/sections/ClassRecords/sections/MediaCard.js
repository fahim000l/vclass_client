import React, { useEffect, useRef } from "react";
import useGetDBUser from "../../../../../../../hooks/useGetDBUser";
import MenuIcon from "../../../../../../../tools/icons/MenuIcon";
import ThreeDotIcon from "../../../../../../../tools/icons/ThreeDotIcon";
import BasicIconButton from "../../../../../../../tools/buttons/BasicIconButton";
import TrushIcon from "../../../../../../../tools/icons/TrushIcon";
import DownloadIcon from "../../../../../../../tools/icons/DownloadIcon";
import ShareIcon from "../../../../../../../tools/icons/ShareIcon";

const MediaCard = ({ media }) => {
  console.log(media);
  const { author, classId, date, mediaTitle, mediaType, mediaUrl, _id } = media;
  const { dbUser } = useGetDBUser(author);
  const hiddenDownloadRef = useRef();

  return (
    <div className="card card-compact bg-base-100 shadow-xl cursor-pointer">
      <figure>
        <video
          muted
          title={mediaTitle}
          src={mediaUrl}
          download={mediaTitle}
        ></video>
      </figure>
      <div className="card-body">
        <div className="flex items-start">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={dbUser?.profilePic} alt="" />
            </div>
          </div>
          <div className="ml-2 text-start">
            <h2 className="card-title">{mediaTitle}</h2>
            <p className="opacity-75 font-bold">{dbUser?.userName}</p>
            <p className="opacity-75 font-bold">{date}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
          <div className="dropdown dropdown-end ml-auto">
            <label tabIndex={0} className="btn btn-sm btn-circle m-1">
              <ThreeDotIcon className={"w-6 h-6"} />
            </label>
            <a
              ref={hiddenDownloadRef}
              download={`${mediaUrl}/fl_attachment/${mediaTitle}.mp4`}
              className="hidden"
              href={mediaUrl}
            >
              Download
            </a>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-green-300"
            >
              <li className="mt-2">
                <BasicIconButton>
                  Delete
                  <TrushIcon className={"w-6 h-6"} />
                </BasicIconButton>
              </li>
              <li className="mt-2">
                <BasicIconButton
                  onClick={() => hiddenDownloadRef.current.click()}
                >
                  Download
                  <DownloadIcon />
                </BasicIconButton>
              </li>
              <li className="mt-2">
                <BasicIconButton>
                  Share
                  <ShareIcon />
                </BasicIconButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
