import "./App.css";
import Header from "./components/header/Header";
import DisplayImage from "./components/display/DisplayImage";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [err, setErr] = useState("");

  return (
    <div className="App">
      <Header setErr={setErr} setImages={setImages} />
      <DisplayImage
        err={err}
        setErr={setErr}
        setImages={setImages}
        images={images}
      />
    </div>
  );
}

export default App;
