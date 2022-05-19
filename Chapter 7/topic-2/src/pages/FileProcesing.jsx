import React, { useRef, useState } from "react";
import logo from "../logo.svg";

const FileProcesing = () => {
  const [imgFile, setImgFile] = useState(logo);
  const fileRef = useRef();

  function handleChange() {
    const image = fileRef.current.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImgFile(reader.result);
    });

    reader.readAsDataURL(image);
  }

  return (
    <div className="App">
      <header className="App-heade">
        <img src={imgFile} alt="logo" className="App-logo" />
        <input
          type="file"
          ref={fileRef}
          placeholder="Gambar"
          onChange={handleChange}
        />
      </header>
    </div>
  );
};

export default FileProcesing;
