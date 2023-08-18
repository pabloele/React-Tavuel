import { useState } from "react";

import { AddCategory, GifGrid } from "./components/index";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onNewCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories((c) => [...c, value]);
  };
  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategory={onNewCategory} />

      {categories.map((c) => (
        <GifGrid category={c} key={c} />
      ))}
    </>
  );
};

export default GifExpertApp;
