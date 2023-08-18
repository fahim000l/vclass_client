import { useQuery } from "@tanstack/react-query";
const useGetMedia = (mediaId) => {
  const {
    data: mediaDetails,
    refetch: mediaDetailsRefetch,
    isLoading: mediaDetailsLoading,
  } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_serverSiteLink}get-media?mediaId=${mediaId}`
      ).then((res) => res.json()),
  });

  return { mediaDetails, mediaDetailsRefetch, mediaDetailsLoading };
};

export default useGetMedia;
