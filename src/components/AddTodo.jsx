import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { addTask, editTask } from "../redux/todo/todoSlice";

const AddTodo = ({ edit = null, setEdit }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (edit) {
      setTask(edit.task);
    }
  }, [edit]);

  const handleChange = (event) => {
    setTask(event.target.value);
    if (error && event.target.value) {
      setError(false);
    }
  };

  const handleEditTask = () => {
    if (task.trim()) {
      dispatch(
        editTask({
          id: edit.id,
          task: task,
        })
      );
      setTask("");
      setEdit(null);
    } else {
      setError(true);
    }
  };

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    } else {
      setError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit) {
      handleEditTask();
    } else {
      handleAddTask();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error} variant="standard">
        <InputLabel htmlFor="component-error">
          {edit ? "Editar tarea" : "Agregar nueva tarea"}
        </InputLabel>
        <Input
          id="component-error"
          //   defaultValue="Composed TextField"
          aria-describedby="component-error-text"
          value={task}
          onChange={handleChange}
        />
        {error ? (
          <FormHelperText id="component-error-text">
            Agregue una tarea
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
