import React, { useState, useRef } from "react";

function FormApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [stateSubmitted, setStateSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStateSubmit = (e) => {
    e.preventDefault();
    setStateSubmitted(true);
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [refSubmittedData, setRefSubmittedData] = useState(null);

  const handleRefSubmit = (e) => {
    e.preventDefault();

    const refData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    setRefSubmittedData(refData);
  };

  return (
    <div className="form-app">
      <h1>Form Handling in React</h1>

      {/* Form with useState */}
      <div className="form-section">
        <h2>Form with useState</h2>
        <form onSubmit={handleStateSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        <div className="form-output">
          <h3>Form Data (Updated as you type):</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>

        {stateSubmitted && (
          <div className="submitted-data">
            <h3>Submitted Data:</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
          </div>
        )}
      </div>

      {/* Form with useRef */}
      <div className="form-section">
        <h2>Form with useRef</h2>
        <form onSubmit={handleRefSubmit}>
          <div className="form-group">
            <label htmlFor="refName">Name:</label>
            <input type="text" id="refName" ref={nameRef} />
          </div>
          <div className="form-group">
            <label htmlFor="refEmail">Email:</label>
            <input type="email" id="refEmail" ref={emailRef} />
          </div>
          <button type="submit">Submit</button>
        </form>

        {refSubmittedData && (
          <div className="submitted-data">
            <h3>Submitted Data:</h3>
            <p>Name: {refSubmittedData.name}</p>
            <p>Email: {refSubmittedData.email}</p>
          </div>
        )}
      </div>

      <footer>
        <p>Created by Abeer Gupta 23BCE1599</p>
      </footer>
    </div>
  );
}

export default FormApp;
