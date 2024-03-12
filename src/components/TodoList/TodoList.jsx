import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { data } = useSelector((state) => state.todoSlice);
  return (
    <ul>
      {data.map((task) => (
        <TodoItem key={task._id} task={task} />
      ))}
    </ul>
  );
};
