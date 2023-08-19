import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = value.trim();
    if (newValue.length <= 1) return;
    setValue("");
    onNewCategory(newValue);
  };
  return (
    <form onSubmit={handleSubmit} aria-label="form">
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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

// export default AddCategory;
