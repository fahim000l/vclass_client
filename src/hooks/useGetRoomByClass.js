import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetRoomByClass = (classId) => {
  const {
    data: classRoom,
    refetch: classRoomRefetch,
    isLoading: classRoomLoading,
  } = useQuery({
    queryKey: ["get-room-by-class", classId],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_serverSiteLink}get-room-by-class?classId=${classId}`
      ).then((res) => res.json()),
  });

  return { classRoom, classRoomRefetch, classRoomLoading };
};

export default useGetRoomByClass;
