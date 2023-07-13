import React, {useEffect} from "react";
import {useState} from "react";
import css from "./edit.module.css";
import {useNavigate, useParams} from "react-router-dom";
const Edit = () => {
  let [title, setTitle] = useState("");
  let [cost, setCost] = useState("");
  let [days, setDays] = useState("");
  let [error, setError] = useState(null);

  let {index} = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/bucketlist/${index}`);
      const data = await response.json();
      if (response.ok) {
        setTitle(data.title);
        setCost(data.cost);
        setDays(data.days);
      }
    };
    getData();
  }, [index]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {title, cost, days};
    const response = await fetch(`/api/bucketlist/${index}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log(`Updated :${index}`, json);
      navigate("/");
    }
  };
  return (
    <div className={css.edit}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h3>Update Task : {title.toUpperCase()}</h3>
        <label>Task Name:</label>
        <input
          type="text"
          placeholder="  Enter Task Name"
          onChange={(e) => {
            setTitle(e.target.value);
            setError(null);
          }}
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
          value={days}
        />
        <button>Update Task</button>
        {error && <div className={css.err}>{error}</div>}
      </form>
    </div>
  );
};

export default Edit;
