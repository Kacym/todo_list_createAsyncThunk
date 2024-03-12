import { useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { getData } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";

export const TodoMain = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getData());
  });
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};
