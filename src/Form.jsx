const FormComponent = ({
  handleSubmit,
  title,
  setTitle,
  completed,
  setCompleted,
  createTodo,
  edit,
}) => {
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className=" flex flex-col gap-y-2">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="title"
          name="title"
          id="title"
          className="border-[1px] border-gray-500 px-2 py-2 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className=" flex gap-x-2 items-center">
        <label htmlFor="completed">Completed:</label>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          className="size-5"
          checked={completed}
          onChange={() => setCompleted((prev) => !prev)}
        />
      </div>

      <button
        className="bg-green-500 px-3 py-2 text-white rounded-md"
        type="submit"
      >
        {createTodo.mutateIsPending ? "submitting" : edit ? "Edit" : "Submit"}
      </button>
    </form>
  );
};

export default FormComponent;
