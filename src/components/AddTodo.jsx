import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/todo/todoSlice";

const AddTodo = ({ edit = null }) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState(edit?.task || "");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (edit) {
      setNewTask(edit?.task);
    }
  }, [edit]);

  const handleChange = (event) => {
    const task = event.target.value;
    setNewTask(task);
    if (error && task.trim) {
      setError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTask.trim()) {
      if (edit) {
        dispatch(
          editTodo({
            id: edit.id,
            task: newTask,
          })
        );
      } else {
        dispatch(addTodo(newTask));
      }
      setNewTask("");
    } else {
      setError(true);
    }
  };
  return (
    <form style={{ display: "flex", gap: "10px" }} onSubmit={handleSubmit}>
      <FormControl error={error}>
        <InputLabel htmlFor="component-outlined">
          {edit ? "Editar tarea" : "Agregar nueva tarea"}
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          //   defaultValue={edit ? edit.task : ""}
          value={newTask}
          onChange={handleChange}
          label={edit ? "Editar tarea" : "Agregar nueva tarea"}
        />
        {error ? (
          <FormHelperText id="component-error-text">
            Por favor indique la tarea
          </FormHelperText>
        ) : null}
      </FormControl>
      <Button variant="contained" disableElevation type="submit">
        {edit ? "Editar" : "Agregar"}
      </Button>
    </form>
  );
};

export default AddTodo;
