import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { addTask } from "../redux/todo/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setTask(event.target.value);
    if (error && event.target.value) {
      setError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    } else {
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error} variant="standard">
        <InputLabel htmlFor="component-error">Agregar nueva tarea</InputLabel>
        <Input
          id="component-error"
          //   defaultValue="Composed TextField"
          aria-describedby="component-error-text"
          vale={task}
          onChange={handleChange}
        />
        {error ? (
          <FormHelperText id="component-error-text">
            Agregue una tarea
          </FormHelperText>
        ) : null}
      </FormControl>
      <Button variant="contained" disableElevation type="submit">
        Agregar
      </Button>
    </form>
  );
};

export default AddTodo;
