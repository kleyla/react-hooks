import React, { Fragment, useState } from "react";

const Lista = () => {
  const [arrayNumero, setNumero] = useState([]);
  const [numero, setNum] = useState(1);

  const agregarElemento = () => {
    setNum(numero + 1);
    setNumero([...arrayNumero, numero]);
  };
  return (
    <Fragment>
      <h3>Lista</h3>
      <button onClick={agregarElemento}>Add</button>
      {arrayNumero.map((item, index) => {
        return (
          <p key={index}>
            {item} - {index}
          </p>
        );
      })}
    </Fragment>
  );
};

export default Lista;
