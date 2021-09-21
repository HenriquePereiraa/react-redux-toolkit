import React from "react";
import { useSelector } from "react-redux";
import './styles/Lista.css';

const List = () => {
  const frutas = useSelector((state) => state.frut.frutas);

  return (
    <div className="list">
      <ul>
        {frutas?.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
