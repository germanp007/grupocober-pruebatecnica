import { useState } from "react";
import axios from "axios";
const Form = () => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setValidation(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length == "") {
      setValidation(false);
      return;
    }

    setValidation(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/enviar-correo",
        {
          email,
        }
      );
      if (response.status >= 200 && response.status < 300) {
        // La solicitud fue exitosa
        setEmail("");
      } else {
        // La solicitud no fue exitosa, lanzar un error
        throw new Error("Error en el servidor");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="ui-form-container">
      <h2>Design Better</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor
        incididunt ut labore et dolore magna aliqua ullamco laboris nisi
      </p>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          className="input-email"
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="ui-component-button ui-component-button-primary ui-component-button-normal form-button"
        >
          Join Waitlist
        </button>
      </form>
      {validation === false && email.length > 0 && (
        <h3 style={{ color: "tomato" }}>
          Error: Por favor, ingresa un email válido
        </h3>
      )}
      {validation === true && email.length > 0 && (
        <h3 style={{ color: "green" }}>El email se envio exitosamente</h3>
      )}
    </div>
  );
};

export default Form;
