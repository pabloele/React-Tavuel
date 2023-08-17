import PropTypes from "prop-types";

function FirstApp({ title, subtitle, name }) {
  if (!title) throw new Error("El title no existe");
  return (
    <>
      <div data-testid="test-title">TITULO</div>
      <h1>{title}</h1>
      <p>{subtitle + 1}</p>
      <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay título",
  subtitle: 0,
  name: "Pablo",
};

export default FirstApp;
