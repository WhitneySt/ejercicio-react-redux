import React from "react";
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
import { setStatusTodo } from "../redux/todo/todoSlice";

export default function ListTodo() {
  const { todo } = useSelector((state) => state.todo);
  console.log(todo);
  const dispatch = useDispatch();

  const handleToggleStatus = (idTask) => {
    dispatch(setStatusTodo(idTask));
  };

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
                  onClick={() => console.log("quiero editar")}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => console.log("quiero eliminar")}
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
