import { patchTodo } from "../api/types";
import { useNavigate } from "react-router-dom";
import { NoteCheckIcon } from "../components/Icons";
import { useState, useEffect } from "react";
import { modifyTodo, getOneTodo } from "../api/apis";

const TodoPatch = () => {
  const navigate = useNavigate();
  const id = location.pathname.split("/")[1];

  const [data, setData] = useState<patchTodo>();
  useEffect(() => {
    getOneTodo(+id).then((data) => {
      const { ...patchedData } = data;
      setData(patchedData);
    });
  }, []);

  const updateTodo = () => {
    if (data != undefined)
      modifyTodo(+id, data).then(() => {
        navigate(`/`);
      });
    else alert("Data가 비어있습니다");
  };

  return (
    <div className="flex w-full flex-grow flex-col gap-8">
      <input
        className="p-2 text-5xl font-semibold"
        value={data?.title || ""}
        onChange={(e) => {
          if (data != undefined) {
            setData({ ...data, title: e.target.value });
          }
        }}
      />

      <textarea
        className="flex flex-grow resize-none p-2 align-top text-3xl font-normal"
        value={data?.content || ""}
        onChange={(e) => {
          if (data != undefined) {
            setData({ ...data, content: e.target.value });
          }
        }}
      />

      <div className="flex h-16 justify-start gap-4">
        <button
          className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 p-4 font-bold text-white"
          onClick={updateTodo}
        >
          <NoteCheckIcon className="h-8 w-8" />
          저장
        </button>
      </div>
    </div>
  );
};

export default TodoPatch;
