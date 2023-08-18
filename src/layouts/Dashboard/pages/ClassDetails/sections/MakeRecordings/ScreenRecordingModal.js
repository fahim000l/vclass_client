import React, { useContext, useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import TextField from "../../../../../../tools/inputs/TextField";
import { AuthContext } from "../../../../../../contexts/AuthProvider";
import useSetMediaToDB from "../../../../../../hooks/useSetMediaToDB";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video className="rounded-xl" ref={videoRef} autoPlay controls />;
};

const ScreenRecordingModal = () => {
  const [mediaTitle, setMediaTitle] = useState(`${new Date().getTime()}`);
  const { authUser } = useContext(AuthContext);
  const [mediaInfo, setMediaInfo] = useState(null);
  const { id } = useParams();

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl,
    clearBlobUrl,
    previewStream,
  } = useReactMediaRecorder({
    screen: true,
    blobPropertyBag: {
      type: "video/mp4",
    },
  });
  const { dbConfirmation } = useSetMediaToDB(mediaInfo, mediaBlobUrl);

  useEffect(() => {
    if (dbConfirmation?.acknowledged) {
      setMediaInfo(null);
      toast.success("Recording saved successfully");
    }
  }, [dbConfirmation]);

  const [enable, setEnable] = useState(true);

  const handleUpload = () => {
    const media = {
      date: `${new Date().getDate()}-${
        new Date().getMonth() + 1
      }-${new Date().getYear()}`,
      author: authUser?.email,
      mediaType: "video",
      mediaTitle,
      classId: id,
    };

    setMediaInfo(media);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="screenRecordingModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => {
              if (status === "stopped") {
                clearBlobUrl();
              }
            }}
            htmlFor="screenRecordingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="mt-5">
            <div className="stack w-full">
              <div className="card shadow-md bg-[green] text-primary-content">
                <div className="card-body">
                  <p className="font-bold">
                    Status :{" "}
                    <span
                      className={`btn btn-xs font-bold ${
                        status === "recording"
                          ? "btn-error"
                          : status === "paused"
                          ? "btn-warning"
                          : status === "stopped"
                          ? "btn-success"
                          : ""
                      }`}
                    >
                      {status}
                    </span>
                  </p>
                  {status === "recording" || mediaBlobUrl ? (
                    enable ? (
                      <VideoPreview stream={previewStream} />
                    ) : (
                      <video
                        className="rounded-xl"
                        src={mediaBlobUrl}
                        controls
                        autoPlay
                        loop
                      />
                    )
                  ) : (
                    <div>
                      <h2 className="text-center text-xl font-bold">
                        Start Recording
                      </h2>
                      {/* <p>You have 3 unread messages. Tap here to see.</p> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="card shadow bg-[green] text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Notification 2</h2>
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div>
              <div className="card shadow-sm bg-[green] text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Notification 3</h2>
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-evenly mt-4">
              {status === "recording" ? (
                <button
                  onClick={() => {
                    setEnable(false);
                    stopRecording();
                  }}
                  className="btn btn-circle bg-[red] text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => {
                    clearBlobUrl();
                    setEnable(true);
                    startRecording();
                  }}
                  className="btn btn-circle btn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </button>
              )}
              {status === "stopped" ? (
                <>
                  <TextField
                    onChange={(event) => setMediaTitle(event.target.value)}
                    placeholder={"Media Title"}
                  />
                  <a
                    href={mediaBlobUrl}
                    download={`${mediaTitle || new Date().getTime()}`}
                    className="btn btn-circle btn-success bg-green-700 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                  <button
                    onClick={handleUpload}
                    className="btn btn-circle btn-success bg-green-700 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    if (status === "recording") {
                      pauseRecording();
                    } else if (status === "paused") {
                      resumeRecording();
                    }
                  }}
                  className="btn btn-circle btn-success bg-green-700 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecordingModal;
