import React from "react";
import { useState, useReducer, useEffect, useRef } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import StyledButton from "./StyledButton";
import LifecycleDemo from "./l";
import Parent from "./Parent";
import Child from "./Child";
import ThemeApp from "./ThemedComponent";
import FormApp from "./FormApp";
import "./FormApp.css";
function App() {
  return (
    <div className="app">
      <Header title="My React Application" />
      {/* <Content /> */}
      {/* <StyledButton /> */}
      {/* <LifecycleDemo /> */}
      {/* <Child />
      <Parent /> */}
      <Footer />

      {/* <CounterUseState />
      <CounterUseReducer /> */}
      {/* <JokeFetcher /> */}
      {/* <FocusInput /> */}
      {/* <ThemeApp /> */}
      <FormApp />
    </div>
  );
}

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Focus Input Example</h2>
      <input ref={inputRef} type="text" placeholder="Type something here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

function CounterUseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter with useState</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unknown action");
  }
}

function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
    </div>
  );
}

function JokeFetcher() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      {loading ? <p>Loading joke...</p> : <p>{joke}</p>}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
}

export default App;
