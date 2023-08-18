import React from "react";
import useGetClassRecords from "../../../../../../hooks/useGetClassRecords";
import { useParams } from "react-router-dom";
import TextField from "../../../../../../tools/inputs/TextField";
import MediaCard from "./sections/MediaCard";

const ClassRecords = () => {
  const { id } = useParams();

  const { medias } = useGetClassRecords(id);

  return (
    <div className="mt-10 my-10 lg:px-10 px-5">
      <TextField className={"w-full"} placeholder={"Search"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        {medias?.map((media, i) => (
          <MediaCard key={i} media={media} />
        ))}
      </div>
    </div>
  );
};

export default ClassRecords;
