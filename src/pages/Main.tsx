import { useNavigate } from "react-router-dom";
import { ClickIcon, NoteAddIcon } from "../components/Icons";

const Main = () => {
  const navigate = useNavigate();
  /* eslint-disable no-var */
  // console.log(a);
  // 오류처리를 위해 7번 라인은 주석처리
  var a = 10;
  console.log(a);

  return (
    <div className="flex w-full flex-grow flex-col gap-8">
      <div className="flex w-full flex-grow flex-col items-center justify-center gap-8 font-bold text-gray-400">
        <ClickIcon className="h-64 w-64" />
        <div className="text-4xl">왼쪽 목록에서 할 일을 선택 해 주세요!</div>
      </div>

      <div className="flex justify-start gap-4">
        <button
          className="flex items-center justify-center gap-2 rounded-2xl bg-gray-800 p-4 font-bold text-white"
          onClick={() => navigate(`/add`)}
        >
          <NoteAddIcon className="h-8 w-8" />할 일 생성
        </button>

        <button
          onClick={function (this: HTMLButtonElement) {
            console.log(this);
          }}
        >
          버튼1
        </button>
        <button onClick={() => console.log(this)}>버튼2</button>
      </div>
    </div>
  );
};

export default Main;
