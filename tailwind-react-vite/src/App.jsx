import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

// padding argument like string , object and array.
const object={
  name:"Andro",
  age:21
}

let newArray=[1,2,3,44,54]

function App() {
  return (
  <>
    <Card title="Robot" obj={object} btntext="Click Me" />
    <Card title="Andro" btntext="Visit Me" />
  </>
  );
}

export default App;
