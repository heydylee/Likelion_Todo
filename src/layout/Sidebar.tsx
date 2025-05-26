import Logo from "../components/Logo";
import {
  CheckboxBlankCircleIcon,
  CheckboxMarkedCircleIcon,
} from "../components/Icons";
import { Todo } from "../api/types";
import { useNavigate, useLocation } from "react-router-dom";
import { getAllTodo } from "../api/apis";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<Todo[]>([]);
  useEffect(() => {
    getAllTodo().then((data) => {
      setData(data);
    });
  }, [location]);

  const DoneTodo = data.filter((todo) => !todo.done);
  const NotDoneTodo = data.filter((todo) => todo.done);

  return (
    <aside className="flex w-[400px] flex-col gap-4 bg-white p-4">
      <Logo />
      <div>
        <div className="flex h-8 items-center gap-[4px] text-2xl">
          <CheckboxBlankCircleIcon />할 일
          <div className="h-[2px] flex-grow bg-gray-500"></div>
        </div>

        <ul className="list-disc gap-[10px] space-y-2 pl-6">
          {DoneTodo.map((todo) => (
            <li
              key={todo.id}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => navigate(`/${todo.id}`)}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex h-8 items-center gap-[4px] text-2xl">
          <CheckboxMarkedCircleIcon />한 일
          <div className="h-[2px] flex-grow bg-gray-500"></div>
        </div>

        <ul className="list-disc gap-[10px] space-y-2 pl-6 text-gray-400 line-through">
          {NotDoneTodo.map((todo) => (
            <li
              key={todo.id}
              className="cursor-pointer"
              onClick={() => navigate(`/${todo.id}`)}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
