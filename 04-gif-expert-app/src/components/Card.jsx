import PropTypes from "prop-types";

export const Card = ({ title, uri }) => {
  return (
    <div className="card">
      <img src={uri} alt={title} />
      <p>{title}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isReq,
  uri: PropTypes.string.isReq,
};

// export default Card;
