import React, { Fragment, useState } from "react";

const Contador = () => {
  const [numero, setNunumero] = useState(0);

  return (
    <Fragment>
      <h3>{numero}</h3>
      <button onClick={() => setNunumero(numero + 1)}>Add</button>
      {numero > 10 ? <p>Numero alto</p> : <p>Numero bajo</p>}
    </Fragment>
  );
};

export default Contador;
