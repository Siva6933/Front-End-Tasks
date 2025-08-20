import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [randomString, setRandomString] = useState("");

  const generateRandomString = useCallback(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomString(result);
  }, []);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Random String Generator</h1>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{randomString}</p>
      <button onClick={generateRandomString}>Generate New String</button>
    </div>
  );
}

export default App;
