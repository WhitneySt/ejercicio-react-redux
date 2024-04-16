import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTodo, setStatusTodo } from "../redux/todo/todoSlice";
import { getTasksAction } from "../redux/todo/todoActions";
import Loading from "./Loading";
import Error from "./Error";

export default function ListTodo({ setEdit }) {
  const { todo, isLoading, error } = useSelector((state) => state.todo);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksAction());
  },[dispatch])

  const handleToggleStatus = (idTask) => {
    dispatch(setStatusTodo(idTask));
  };

  if (isLoading) return <Loading/>
  if(error) return <Error/>

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todo.map((item) => {
        const labelId = `checkbox-list-label-${item.id}`;

        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => setEdit(item)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => dispatch(deleteTodo(item.id))}
                >
                  <ClearIcon />
                </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => handleToggleStatus(item.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.status}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.task} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
