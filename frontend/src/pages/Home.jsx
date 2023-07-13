import React from "react";
import {useEffect, useState} from "react";
import css from "./home.module.css";
//components
import BucketLists from "../components/BucketLists";
import Form from "../components/Form";
const Home = () => {
  let [list, setList] = useState(null);
  let [change, setChange] = useState(false);

  useEffect(() => {
    const fetchBuckets = async () => {
      const response = await fetch("/api/bucketlist");
      const json = await response.json();

      if (response.ok) {
        setList(json);
      }
    };

    fetchBuckets();
  }, [change]);
  const cllback = () => {
    setChange(!change);
  };
  return (
    <div className={css.lists}>
      <div className={css.card}>
        {list &&
          list.map((blist) => (
            <BucketLists key={blist._id} blist={blist} cllback={cllback} />
          ))}
      </div>
      <Form cllback={cllback} />
    </div>
  );
};

export default Home;
