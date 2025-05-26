import { newTodo } from "../api/types";
import { useNavigate } from "react-router-dom";
import { NoteCheckIcon } from "../components/Icons";
import { useState, useRef, useEffect } from "react";
import { postTodo } from "../api/apis";

const TodoAdd = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<newTodo>({ title: "", content: "" });
  const titleRef = useRef<HTMLInputElement>(null); // ← ① ref 선언
  useEffect(() => {
    titleRef.current?.focus();
  }, []);
  const saveTodo = () => {
    if (data != undefined) {
      postTodo(data).then(() => {
        navigate("/");
      });
    } else alert("Data가 비어있습니다");
  };

  return (
    <div className="flex w-full flex-grow flex-col gap-8">
      <input
        ref={titleRef}
        className="p-2 text-5xl font-semibold"
        placeholder="제목을 입력하세요"
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <textarea
        className="flex flex-grow resize-none p-2 align-top text-3xl font-normal"
        placeholder="내용을 입력하세요"
        onChange={(e) => setData({ ...data, content: e.target.value })}
      />
      <div className="flex h-16 justify-start gap-4">
        <button
          className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 p-4 font-bold text-white"
          onClick={saveTodo}
        >
          <NoteCheckIcon className="h-8 w-8" />
          저장
        </button>
      </div>
    </div>
  );
};

export default TodoAdd;
