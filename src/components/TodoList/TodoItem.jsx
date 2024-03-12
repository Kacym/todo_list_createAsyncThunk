import { useDispatch } from "react-redux";
import { Button } from "../UI/Button";
import { deleteTodo, getData } from "../../redux/todoSlice";

export const TodoItem = ({ task }) => {
  const dispatch = useDispatch();
  const deleteTaskHandler = async (id) => {
    await dispatch(deleteTodo(id));
    await dispatch(getData());
  };
  return (
    <li>
      <p>{task.title}</p>
      <Button onClick={() => deleteTaskHandler(task._id)}>delete</Button>
    </li>
  );
};
