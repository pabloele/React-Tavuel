import PropTypes from "prop-types";

function FirstApp({ title, subtitle }) {
  if (!title) throw new Error("El title no existe");
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle + 1}</h2>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay título",
  subtitle: "no hay subtítulo",
  name: "Pablo",
};

export default FirstApp;
