import { useEffect, useState } from "react";

// const Message = () => {
//   useEffect(() => {
//     console.log("Message Mounted");
//     return () => {
//       console.log("Message Unmounted");
//     };
//   }, []);

//   return (
//     <>
//       <h3>Usuario ya existe</h3>
//     </>
//   );
// };
const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const onMouseMove = ({ x, y }) => {
    // const coords = { x, y };
    setCoords({ x, y });
  };
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <h2>{JSON.stringify(coords)}</h2>
    </>
  );
};

export default Message;
