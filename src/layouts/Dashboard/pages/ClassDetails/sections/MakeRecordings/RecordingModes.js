import React from "react";

const RecordingModes = ({ setSelectedMode }) => {
  return (
    <div>
      <h1 className="section-gap text-xl lg:text-3xl mb-5 font-bold">
        Choose a Recording Mode
      </h1>
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-screen-sm lg:max-w-none mx-auto">
        <div className="bg-base-100 shadow-lg cursor-pointer lg:hover:text-white transition ease-in-out delay-150 hover:scale-105 lg:hover:bg-[#179275] duration-300 rounded-lg">
          <div className="card-body items-center text-center">
            <figure className="px-10 pt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeLinecap="1.5"
                stroke="currentColor"
                className="w-full h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
            </figure>
            <h2 className="mb-2">Screen Record</h2>
            <label
              onClick={() => setSelectedMode("screen")}
              htmlFor="screenModal"
              className="cursor-pointer"
            >
              <label
                className="btn btn-circle transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[green] duration-300 text-white border-0"
                htmlFor="screenRecordingModal"
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
              </label>
            </label>
          </div>
        </div>
        <div className="bg-base-100 shadow-lg cursor-pointer lg:hover:text-white transition ease-in-out delay-150 hover:scale-105 lg:hover:bg-[#179275] duration-300 rounded-lg">
          <div className="card-body items-center text-center">
            <figure className="px-10 pt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeLinecap="1.5"
                stroke="currentColor"
                className="w-full h-20"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </figure>
            <h2 className="mb-2">Webcam Record</h2>
            <label
              onClick={() => setSelectedMode("video")}
              htmlFor="screenModal"
              className="cursor-pointer"
            >
              <label
                className="btn btn-circle transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[green] duration-300 text-white border-0"
                htmlFor="screenRecordingModal"
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
              </label>
            </label>
          </div>
        </div>
        <div className="bg-base-100 shadow-lg cursor-pointer lg:hover:text-white transition ease-in-out delay-150 hover:scale-105 lg:hover:bg-[#179275] duration-300 rounded-lg">
          <div className="card-body items-center text-center">
            <figure className="px-10 pt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeLinecap="1.5"
                stroke="currentColor"
                className="w-full h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>
            </figure>
            <h2 className="mb-2">Audio Record</h2>
            <label
              onClick={() => setSelectedMode("audio")}
              htmlFor="screenModal"
              className="cursor-pointer"
            >
              <label
                className="btn btn-circle transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[green] duration-300 text-white border-0"
                htmlFor="screenRecordingModal"
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
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordingModes;
