import { useState } from "react";
import "./App.css";

function App() {

  const [data, setData] = useState([])
  const [inputData, setInputData] = useState({
    name: "",
    age: "",
    height: "",
    superpower: "",
  });

  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(inputData);
  };

  const submitChangeHandler = (e) => {
    e.preventDefault();
    console.log(inputData);
    setInputData({
      name: "",
      age: "",
      height: "",
      superpower: ""
    })
  };

  return (
    <>
      <h1>Build a Hero</h1>

      <form onSubmit={submitChangeHandler}>
        <label htmlFor="Name">Name:</label>
        <input
          onChange={inputChangeHandler}
          name="name"
          value={inputData.name}
          id="Name"
          type="text"
        />
        <label htmlFor="Age">Age:</label>
        <input
          onChange={inputChangeHandler}
          name="age"
          value={inputData.age}
          id="Age"
          type="number"
          step="1"
        />
        <label htmlFor="Height">Height:</label>
        <input
          onChange={inputChangeHandler}
          name="height"
          value={inputData.height}
          id="Height"
          type="number"
        />
        <label htmlFor="Superpower">Superpower:</label>
        <input
          onChange={inputChangeHandler}
          name="superpower"
          value={inputData.superpower}
          type="text"
          id="Superpower"
        />
        <button onClick={submitChangeHandler} type="submit">
          Submit
        </button>
      </form>
      <h3>List of all Superheroes</h3>
    </>
  );
}

export default App;
