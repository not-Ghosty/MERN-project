import React from "react";
import {useState} from "react";
import css from "./form.module.css";

const Form = ({cllback}) => {
  let [title, setTitle] = useState("");
  let [cost, setCost] = useState("");
  let [days, setDays] = useState("");
  let [error, setError] = useState(null);
  let [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {title, cost, days};

    const response = await fetch("/api/bucketlist", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.empty);
    }
    if (response.ok) {
      setError(null);
      setEmptyFields([]);
      console.log("New Task added", json);
      setTitle("");
      setCost("");
      setDays("");
      cllback();
    }
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <h3>Add A New Task</h3>
      <label>Task Name:</label>
      <input
        type="text"
        placeholder="  Enter Task Name"
        onChange={(e) => {
          setTitle(e.target.value);
          setError(null);
        }}
        className={emptyFields.includes("title") ? css.error : ""}
        value={title}
      />
      <label>Cost {"(in Rupee ₹)"}:</label>
      <input
        type="number"
        placeholder="  Enter Amount in ₹"
        onChange={(e) => {
          setCost(e.target.value);
          setError(null);
        }}
        className={emptyFields.includes("cost") ? css.error : ""}
        value={cost}
      />
      <label>No of Days:</label>
      <input
        type="number"
        placeholder="  Enter Days Count"
        onChange={(e) => {
          setDays(e.target.value);
          setError(null);
        }}
        className={emptyFields.includes("days") ? css.error : ""}
        value={days}
      />
      <button>Add Task</button>
      {error && <div className={css.err}>{error}</div>}
    </form>
  );
};

export default Form;
