import React from "react";
import { useParams } from "react-router-dom";
import useGetClass from "../../../../../../hooks/useGetClass";
import useGetDBUser from "../../../../../../hooks/useGetDBUser";

const Stream = () => {
  const { id } = useParams();

  const { cls } = useGetClass(id);
  const { dbUser } = useGetDBUser(cls?.classTeacher);

  return (
    <div>
      <section className="w-full h-[30vh]">
        <div
          className="hero lg:h-[50vh] h-[30vh]"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/c0/c4/f0/c0c4f06b14625c8fb9c4cdcbaa58c6d8.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                {cls?.className}
              </h1>
              <p className="mb-5">{cls?.subject}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="avatar -mt-20 shadow-md lg:-mt-40 rounded-full lg:ml-10 ml-5">
            <div className="lg:w-40 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="w-full" src={dbUser?.profilePic} alt="" />
            </div>
          </div>
          <p className="lg:text-3xl text-xl font-bold">{dbUser?.userName}</p>
        </div>
      </section>
    </div>
  );
};

export default Stream;
