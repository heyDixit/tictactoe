import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon"></FaRegCircle>;

    case "cross":
      return <FaTimes className="icon" />;

    default:
      return <FaPen className="icon"></FaPen>;
  }
  //   return (
  //     <h1>
  //     </h1>
  //   );
};

export default Icon;
