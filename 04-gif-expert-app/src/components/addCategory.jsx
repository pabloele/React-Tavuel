import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = value.trim();
    if (newValue.length <= 1) return;
    // setCategories((c) => [...c, value]);
    onNewCategory(newValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Buscar Gifs"
        onChange={handleChange}
      />
      <button>Agregar</button>
    </form>
  );
};

// export default AddCategory;
