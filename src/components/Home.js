import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(data);
  };
  return (
    <div>
      <label htmlFor="myInput">My input:</label>
      <input id="myInput" name="myInput" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Click me
      </button>
      <p>{data}</p>
    </div>
  );
};

export default Home;
