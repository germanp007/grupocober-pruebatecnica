import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Please enter a valid email address");
      return false;
    } else {
      console.log(`You've successfully signed up`);
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
          type="email"
          placeholder="Email"
          className="input-email"
          onChange={(e) => handleChange(e)}
        />
        <button className="ui-component-button ui-component-button-primary ui-component-button-normal form-button">
          Join Waitlist
        </button>
      </form>
    </div>
  );
};

export default Form;
