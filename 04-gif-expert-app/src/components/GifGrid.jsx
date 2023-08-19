import useFetchGifs from "../hooks/useFetchGifs";
import { Card } from "./Card";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading ? (
          <h1>cargando...</h1>
        ) : (
          images.map((image) => <Card key={image.id} {...image} />)
        )}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
