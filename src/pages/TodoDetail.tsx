import { patchTodo, Todo } from "../api/types";
import { useNavigate } from "react-router-dom";
import {
  NoteAddIcon,
  NoteMinusIcon,
  NoteCheckIcon,
  NoteEditIcon,
  NoteRemoveIcon,
} from "../components/Icons";
import { useEffect, useState } from "react";
import { getOneTodo, deleteTodo, modifyTodo } from "../api/apis";

const TodoDetail = () => {
  const navigate = useNavigate();
  const id = location.pathname.split("/")[1];
  const [data, setData] = useState<Todo>();
  const [Done, setDone] = useState<patchTodo>();

  useEffect(() => {
    getOneTodo(+id).then((data) => {
      setData(data);
      const { ...patchedData } = data;
      setDone(patchedData);
    });
  }, [id]);

  const toggleDone = async () => {
    if (!Done) {
      alert("오류오류");
      return;
    }
    try {
      const updatedTodo = await modifyTodo(+id, { ...Done, done: !Done.done });
      setDone(updatedTodo);
      setData(updatedTodo);
    } catch (error) {
      alert("상태 변경 중 오류가 발생했습니다.");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteTodo(+id);
      navigate("/");
    } catch (error) {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex w-full flex-grow flex-col gap-8">
      <div className="text-5xl font-semibold text-gray-400">
        {data != undefined && data.title}
      </div>

      <div className="flex-grow text-3xl font-normal text-gray-800">
        {data != undefined && data.content}
      </div>

      <div className="flex h-16 justify-start gap-4">
        <button
          className="flex items-center justify-center gap-2 rounded-2xl bg-gray-800 p-4 font-bold text-white"
          onClick={() => navigate(`/add`)}
        >
          <NoteAddIcon className="h-8 w-8" />할 일 생성
        </button>

        {data?.done ? (
          <button
            className="flex items-center justify-center gap-2 rounded-2xl bg-gray-400 p-4 font-bold text-white"
            onClick={toggleDone}
          >
            <NoteMinusIcon className="h-8 w-8" />이 일을 미완료로 표기
          </button>
        ) : (
          <button
            className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 p-4 font-bold text-white"
            onClick={toggleDone}
          >
            <NoteCheckIcon className="h-8 w-8" />이 일을 완료로 표기
          </button>
        )}

        <button
          className="flex items-center justify-center gap-2 rounded-2xl bg-blue-400 p-4 font-bold text-white"
          onClick={() => navigate(`/${+id}/patch`)}
        >
          <NoteEditIcon className="h-8 w-8" />
          수정
        </button>

        <button
          className="flex items-center justify-center gap-2 rounded-2xl bg-red-300 p-4 font-bold text-white"
          onClick={handleDelete}
        >
          <NoteRemoveIcon className="h-8 w-8" />
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoDetail;
