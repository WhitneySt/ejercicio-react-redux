import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import List from "../components/List";

const AppRouter = () => {
  const [edit, setEdit] = useState(null);
  return (
    <div>
      <AddTodo edit={edit} />
      <List setEdit={setEdit} />
    </div>
  );
};

export default AppRouter;
