import React from "react";
import { useState } from "react";
import validate from "../Utility/validate";
import styles from "./Form.module.css";
import axios from "axios";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      axios
        .post("http://localhost:3001/rickandmorty/login/register", {
          password: userData.password,
          email: userData.email,
          id: 1,
        })
        .then(({ data }) => {
          console.log(data);
        });
      login(userData);
      setUserData({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
    } else {
      return alert("Error");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles["form-header"]}>Login</h1>
        <label htmlFor="email">Usuario:</label>
        <input
          name="email"
          type="email"
          placeholder=""
          value={userData.email}
          onChange={handleChange}
          className={styles["form-input"]}
        />
        {errors.email && (
          <p className={styles["error-message"]}>{errors.email}</p>
        )}
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          placeholder="Ingrese su contraseña"
          value={userData.password}
          onChange={handleChange}
          className={styles["form-input"]}
        />
        {errors.password && (
          <p className={styles["error-message"]}>{errors.password}</p>
        )}
        <button className={styles["submit-button"]}>Submit</button>
      </form>
    </div>
  );
};
export default Form;
