import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-3">
          <input
            type="text"
            name="titulo"
            className="form-control my-2"
            ref={register({
              required: { value: true, message: "Titulo obligatorio" },
            })}
          />
          <span className="text-danger text-small d-block mb-2">
            {errors?.titulo?.message}
          </span>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default FormHook;
