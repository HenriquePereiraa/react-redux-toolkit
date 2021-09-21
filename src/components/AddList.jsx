import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFruits, resetFruits } from "../store/frutasSlice";
import "./styles/AddList.css";

const AddList = () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleCick = (event) => {
    event.preventDefault();
    dispatch(setFruits(state));
  };

  const handleClearStore = (event) => {
    event.preventDefault();
    dispatch(resetFruits());
  }

  return (
    <div>
      <form className="form">
        <input
          className="input"
          placeholder="adicionar elementos a lista"
          type="text"
          values={state}
          onChange={(event) => setState(event.target.value)}
        />
        <button className="btn" onClick={(event) => handleCick(event)}>Adicionar</button>
      </form>

      <div>
        <button className="reset" onClick={(event) => handleClearStore(event)}>limpar Store</button>
      </div>
    </div>
  );
};

export default AddList;
