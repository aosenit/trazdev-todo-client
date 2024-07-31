import axios from "axios";

const baseUrl = import.meta.env.VITE_SERVER_URL;

export const getTodos = async () => {
  try {
    const data = await axios.get(baseUrl);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (newTodo) => {
  try {
    return await axios.post(baseUrl, newTodo);
  } catch (error) {
    console.log(error);
  }
};

export const handleDelete = async (todo) => {
  try {
    return await axios.delete(`${baseUrl}/${todo._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const handleEditTodo = async (payload) => {
  try {
    return await axios({
      method: "put",
      url: `${baseUrl}/${payload.id}`,
      data: payload.todo,
    });
  } catch (error) {
    console.log(error);
  }
};
