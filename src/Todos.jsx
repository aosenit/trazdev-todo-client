import { useDeleteTodo, useGetTodos } from "./todoFunctions";

const Todos = ({
  setCompleted,
  setTitle,
  setEdit,
  setTodo,
  handleEditTodo,
}) => {
  const getAllTodos = useGetTodos();
  const deleteTodo = useDeleteTodo();
  const handleEdit = async (todo) => {
    setTitle(todo.title);
    setCompleted(todo.completed);
    setEdit(true);
    setTodo(todo);
  };

  if (getAllTodos.isPending) return <h2>Loading...</h2>;
  if (getAllTodos.error) {
    console.log(getAllTodos.error);
  }
  return (
    <div className="mt-10">
      <h2 className="text-xl">List of Todos</h2>
      <div className="space-y-4 my-4">
        {getAllTodos.data?.map((t) => (
          <div key={t._id} className="flex justify-between items-center">
            <h3
              className={`${t.completed ? "text-green-500" : "text-red-500"}`}
            >
              {t.title}
            </h3>
            <div className="flex items-center gap-x-2">
              <button
                onClick={() => handleEdit(t)}
                className="bg-yellow-500 px-3 py-1 text-sm text-white rounded-md"
              >
                {"Edit"}
              </button>
              <button
                onClick={() => deleteTodo?.mutate(t)}
                className="bg-red-500 px-3 py-1 text-sm text-white rounded-md"
              >
                {"Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
