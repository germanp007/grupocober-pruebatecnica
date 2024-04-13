import { useState } from "react";

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
    if (!emailRegex.test(email)) {
      setValidation(false);
      return;
    }
    try {
      const response = await fetch("enviar-correo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error("Error en el servidor");
      }
      alert("Correcto! El correo ha sido enviado.");
      setValidation(true);
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
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input-email"
          onChange={(e) => handleChange(e)}
        />
        <button className="ui-component-button ui-component-button-primary ui-component-button-normal form-button">
          Join Waitlist
        </button>
      </form>
      {validation === false && email.length > 0 && (
        <h3 style={{ color: "tomato" }}>
          Error: Por favor, ingresa un email válido
        </h3>
      )}
      {validation === true && email.length > 0 && (
        <h3 style={{ color: "green" }}>Éxito: El email es válido</h3>
      )}
    </div>
  );
};

export default Form;
