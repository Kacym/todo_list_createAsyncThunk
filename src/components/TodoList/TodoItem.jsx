import { useDispatch } from "react-redux";
import { Button } from "../UI/Button";
import { deleteTodo, getData, updateTodo } from "../../redux/todoSlice";
import { Input } from "../UI/Input";

export const TodoItem = ({ task }) => {
  const dispatch = useDispatch();
  const deleteTaskHandler = async (id) => {
    await dispatch(deleteTodo(id));
    await dispatch(getData());
  };

  const updateTaskHandler = async (task) => {
    await dispatch(updateTodo(task));
    await dispatch(getData());
  };
  return (
    <li>
      <p>{task.title}</p>
      <Input
        value={task.completed}
        type="checkbox"
        onChange={() => updateTaskHandler(task)}
      />
      <Button onClick={() => deleteTaskHandler(task._id)}>delete</Button>
    </li>
  );
};
