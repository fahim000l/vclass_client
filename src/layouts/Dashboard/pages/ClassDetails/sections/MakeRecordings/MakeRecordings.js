import React from "react";
import RecordingModes from "./RecordingModes";
import ScreenRecordingModal from "./ScreenRecordingModal";
import AudioRecordingModal from "./AudioRecordingModal";
import VideoRecordingModal from "./VideoRecordingModal";

const MakeRecordings = () => {
  return (
    <div className="mt-10 my-10 lg:px-10 px-5">
      <RecordingModes />
      <ScreenRecordingModal />
      <AudioRecordingModal />
      <VideoRecordingModal />
    </div>
  );
};

export default MakeRecordings;
