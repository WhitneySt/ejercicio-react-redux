import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { setStatusTodo } from "../redux/todo/todoSlice";

export default function CheckboxList({ setEdit }) {
  //Acceder a la información que se encuentra en el store
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  //   const [checked, setChecked] = useState([0]);

  //   const handleToggle = (value) => () => {
  //     const currentIndex = checked.indexOf(value);
  //     const newChecked = [...checked];

  //     if (currentIndex === -1) {
  //       newChecked.push(value);
  //     } else {
  //       newChecked.splice(currentIndex, 1);
  //     }

  //     setChecked(newChecked);
  //   };

  const handleSetStatus = (idTodo) => {
    dispatch(setStatusTodo(idTodo));
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
                  onClick={() => console.log("Eliminar")}
                >
                  <ClearIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="comments"
                        onClick={() => setEdit(item)}
                >
                  <EditIcon />
                </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => handleSetStatus(item.id)}
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
