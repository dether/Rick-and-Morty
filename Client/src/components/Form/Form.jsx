import React from "react";
import { useState } from "react";
import validate from "../Utility/validate";
import styles from "./Form.module.css";

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
    login(userData);
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
