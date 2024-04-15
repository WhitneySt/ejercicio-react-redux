import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import ListTodo from "../components/ListTodo";

const AppRouter = () => {
  const [edit, setEdit] = useState(null);
  return (
    <div>
      <AddTodo edit={edit} setEdit={setEdit} />
      <ListTodo setEdit={setEdit} />
    </div>
  );
};

export default AppRouter;
