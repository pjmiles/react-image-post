import "./App.css";
import Header from "./components/header/Header";
import DisplayImage from "./components/display/DisplayImage";
import { useState } from "react";


function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <Header setImages={setImages}/>
      <DisplayImage setImages={setImages} images={images} />
    </div>
  );
}

export default App;
