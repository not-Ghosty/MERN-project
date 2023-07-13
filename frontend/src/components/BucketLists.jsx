import React from "react";
import css from "./bucketlists.module.css";
import delicon from "./delete.png";
import {Link} from "react-router-dom";
import editicon from "./edit.png";

//install data-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BucketLists = ({blist, cllback}) => {
  const handleClick = async () => {
    const response = await fetch("/api/bucketlist/" + blist._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      cllback();
      console.log("Deleted: ", json);
    }
  };
  return (
    <div className={css.list_details}>
      <h4>{blist.title}</h4>
      <p>
        <strong>Est Cost{"(in ₹) :"}</strong>
        {"   "}
        {blist.cost}
      </p>
      <p>
        <strong>Task Duration{"(in days)"}:</strong>
        {"   "}
        {blist.days}
      </p>
      <br />
      <p>{formatDistanceToNow(new Date(blist.createdAt), {addSuffix: true})}</p>

      <div className={css.png} onClick={handleClick}>
        <img src={delicon} alt="" />
      </div>
      <div className={css.edit_icon}>
        <span>
          <var>Last updated: </var>
          {formatDistanceToNow(new Date(blist.updatedAt), {addSuffix: true})}
        </span>
        <Link to={`/edit/${blist._id}`}>
          <img src={editicon} className={css.edit_img} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default BucketLists;
