import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const Ejemplo1 = () => {
  const { register, errors, handleSubmit } = useForm();
  const [entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...entradas, data]);
    e.target.reset();
  };

  return (
    <Fragment>
      <h1>Ejemplo 1</h1>
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-3">
          <input
            type="text"
            name="titulo"
            className="form-control my-2"
            placeholder="Titulo"
            ref={register({
              required: { value: true, message: "Campo obligatorio" },
              minLength: { value: 2, message: "Minimo 2 letras" },
            })}
          />
          {errors.titulo && (
            <span className="text-danger text-small d-block mb-2">
              {errors?.titulo?.message}
            </span>
          )}
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="descripcion"
            className="form-control my-2"
            placeholder="Descripcion"
            ref={register({
              required: { value: true, message: "Desc obligatorio" },
            })}
          />
          {errors.descripcion && (
            <span className="text-danger text-small d-block mb-2">
              {errors?.descripcion?.message}
            </span>
          )}
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <ul>
        {entradas.map((item, index) => {
          return (
            <li key={index}>
              {item.titulo} - {item.descripcion}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Ejemplo1;
