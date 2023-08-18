export const Card = ({ title, uri }) => {
  return (
    <div className="card">
      <img src={uri} alt={title} />
      <p>{title}</p>
    </div>
  );
};

// export default Card;
