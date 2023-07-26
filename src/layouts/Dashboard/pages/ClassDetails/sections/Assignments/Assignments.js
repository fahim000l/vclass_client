import React, { useState } from "react";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextEditor from "../../components/TextEditor";
import { useParams } from "react-router-dom";
import useGetClass from "../../../../../../hooks/useGetClass";
import useGetDBUser from "../../../../../../hooks/useGetDBUser";
import BasicButton from "../../../../../../tools/buttons/BasicButton";
import BasicOutlineButton from "../../../../../../tools/buttons/BasicOutlineButton";

const Assignments = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const { cls } = useGetClass(id);
  const { dbUser } = useGetDBUser(cls?.classTeacher);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        HTMLAttributes: {
          class: "text-primary opacity-90 underline",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "textarea focus:outline-none textarea-bordered w-full h-60 pt-4 leading-5",
      },
    },
    content: "",
  });

  return (
    <div className="lg:px-10 px-2 py-2">
      {isEditing ? (
        <div className="shadow-lg p-5">
          <TextEditor editor={editor} />
          <div className="my-2 flex items-center justify-end">
            <BasicOutlineButton
              onClick={() => setIsEditing(false)}
              className={"w-32 mx-2"}
            >
              Cancel
            </BasicOutlineButton>
            <BasicButton className={"w-32 mx-2"}>Post</BasicButton>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className="btn btn-ghost w-full flex justify-start shadow-lg normal-case"
        >
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={dbUser?.profilePic} alt="" />
            </div>
          </div>
          Make Assignment
        </div>
      )}
    </div>
  );
};

export default Assignments;
