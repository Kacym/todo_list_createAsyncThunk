import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useDispatch } from "react-redux";
import { addTodo, getData } from "../../redux/todoSlice";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const addNewTaskHandler = async (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const newData = {
        title: inputValue,
        completed: false,
      };
      await dispatch(addTodo(newData));
      await dispatch(getData());
    }
  };

  return (
    <form>
      <Input
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="something"
      />
      <Button onClick={addNewTaskHandler}>Add</Button>
    </form>
  );
};
