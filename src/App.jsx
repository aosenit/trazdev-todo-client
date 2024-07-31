import { useState } from "react";
import { useCreateTodos, useEditTodos } from "./todoFunctions";
import { handleEditTodo } from "./apis";
import Todos from "./Todos";
import FormComponent from "./Form";

function App() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState(null);
  const createTodo = useCreateTodos();
  const editTodo = useEditTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      const payload = {
        todo: {
          title: title,
          completed: completed,
        },
        id: todo._id,
      };

      editTodo.mutate(payload);
    } else {
      const payload = {
        title: title,
        completed: completed,
      };
      createTodo.mutate(payload);
    }

    reset();
  };

  const reset = () => {
    setTitle("");
    setCompleted(false);
    setEdit(false);
  };

  return (
    <div className="px-10 py-10">
      <h1 className=" text-3xl mb-5">Todo app</h1>

      <div className="">
        {/* Todo Form */}
        <FormComponent
          completed={completed}
          createTodo={createTodo}
          edit={edit}
          handleSubmit={handleSubmit}
          setCompleted={setCompleted}
          setTitle={setTitle}
          title={title}
        />
      </div>

      <div className="">
        {/* Display Todo */}
        <Todos
          setCompleted={setCompleted}
          setEdit={setEdit}
          setTitle={setTitle}
          setTodo={setTodo}
          handleEditTodo={handleEditTodo}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
