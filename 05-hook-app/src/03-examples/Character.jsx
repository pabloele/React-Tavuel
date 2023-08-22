import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Character = ({ image, name, status }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, heigth: 0 });
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);
  return (
    <>
      <blockcharacter className="text-start" style={{ display: "flex" }}>
        <img src={image} alt="" className="blockcharacter text-left mb-4" />
        <p ref={pRef} className="mb-1">
          {name}
        </p>
        <footer className="blockcharacter-footer mb-4">{status}</footer>
      </blockcharacter>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
