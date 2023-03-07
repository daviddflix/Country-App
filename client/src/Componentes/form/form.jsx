import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, postAcitvity } from "../../redux/actions";
import { Nav } from "../barra/barra";
import s from "./form.module.css";
import { Error } from "./style";
import swal from "sweetalert";

let handleError = (input) => {
  const expresiones = {
    usuario: /^[a-zA-Z0-9-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  let errorss = {};
  if (!expresiones.nombre.test(input.nombre)) {
    errorss.nombre = "Name of activity must be longer";
  }
  if (!input.dificultad) {
    errorss.dificultad = "Select an option";
  }
  if (!input.duracion) {
    errorss.duracion = "Select an option";
  }
  if (!input.temporada) {
    errorss.temporada = "Select an option";
  }
  if (!input.name) {
    errorss.name = "Select an option";
  }
  return errorss;
};

export function Form() {
  const paises = useSelector((state) => state.paises);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    name: [],
  });

  let handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(
      handleError({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  let handlePais = (e) => {
    setInput({ ...input, name: [...input.name, e.target.value] });
  };

  let handleTemp = (e) => {
    setInput({ ...input, temporada: e.target.value });
    setErrors(handleError({ ...input, [e.target.name]: e.target.value }));
  };

  let handleDificultad = (e) => {
    setInput({ ...input, dificultad: e.target.value });
    setErrors(handleError({ ...input, [e.target.name]: e.target.value }));
  };

  let handleDuration = (e) => {
    setInput({ ...input, duracion: e.target.value });
    setErrors(handleError({ ...input, [e.target.name]: e.target.value }));
  };

  let submit = (e) => {
    e.preventDefault();
    dispatch(postAcitvity(input));
    setInput({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      name: [],
    });
    swal({
      title: "Great!",
      text: "Activity created successfully",
      icon: "success",
    });
  };

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div className={s.main_container}>
      <div>
        <Nav />
      </div>

      <div>
        <form onSubmit={(e) => submit(e)}>
          <div className={s.form}>
            <div className={s.div1}>
              <label className={s.label} htmlFor="input">
                Activity
              </label>
              <input
                onChange={(e) => handleInputChange(e)}
                value={input.nombre}
                name="nombre"
                id="input"
                placeholder="Write an activity"
              />
              {<Error>{errors.nombre}</Error>}
            </div>

            <div className={s.div2}>
              <label className={s.label}>Difficulty</label>
              <select name="dificultad" onChange={(e) => handleDificultad(e)}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {<Error>{errors.dificultad}</Error>}
            </div>

            <div className={s.div3}>
              <label className={s.label}>Duration</label>
              <select name="duracion" onChange={(e) => handleDuration(e)}>
                <option value=""></option>
                <option value="1">1 day</option>
                <option value="2">2 days</option>
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
              </select>
              {<Error>{errors.duracion}</Error>}
            </div>

            <div className={s.div4}>
              <label className={s.label}>Season</label>
              <select name="temporada" onChange={(e) => handleTemp(e)}>
                <option value=""></option>
                <option value="Verano">Summer</option>
                <option value="Invierno">Winter</option>
                <option value="Otoño">Autumn</option>
                <option value="Primavera">Spring</option>
              </select>
              {<Error>{errors.temporada}</Error>}
            </div>

            <div className={s.div5}>
              <label className={s.label}>Country</label>
              <select name="name" onChange={(e) => handlePais(e)}>
                {paises?.map((el) => {
                  return (
                    <option key={el.id} value={el.name}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
              <div className={s.pais}>
                {" "}
                {input.name.map((el) => (
                  <p key={el} style={{ color: "#4A1414" }}>
                    {el}
                  </p>
                ))}
              </div>
            </div>

            <div className={s.div6}>
              <button
                type="submit"
                disabled={
                  !input.nombre ||
                  !input.name ||
                  !input.dificultad ||
                  !input.duracion ||
                  !input.temporada
                }
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
