import { useForm } from "../hooks";

const TodoAdd = ({ handleNewTodo }) => {
  const { description, handleChange, handleResetForm } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };
    handleNewTodo(newTodo);
    handleResetForm();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="¿Qué hay que hacer?"
          value={description}
          onChange={handleChange}
          name="description"
        />
        <button className="btn btn-outline-primary mt-2" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
