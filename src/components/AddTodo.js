import React, { useState } from "react";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}
    >
      <form onSubmit={handleSubmit}>
        First Name <input type="text" onChange={handleInput} value={value} />{" "}
        <button type="submit" disabled={!value}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
