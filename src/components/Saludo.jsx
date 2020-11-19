import React, { Fragment } from "react";

const Saludo = (props) => {
  console.log(props);
  
  return (
    <Fragment>
      <h1>Hola {props.persona}!</h1>
    </Fragment>
  );
};

export default Saludo;
