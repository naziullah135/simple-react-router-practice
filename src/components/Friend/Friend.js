import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friend = (props) => {
  const { name, email, id } = props.friend;

  const history = useHistory();
  const handleClick = friendId =>{
      history.push(`/friend/${friendId}`);
  }

  const style = {
    border: "1px solid purple",
    borderRadius: "20px",
    margin: "20px",
    padding: "20px",
  };
  return (
    <div style={style}>
      <h1>{name}</h1>
      <p>{email}</p>
        {/* <Link to={`/friend/${id}`}> <button>show details of {id}</button> </Link> */}
        <button onClick={() => handleClick(id)}>Click me</button>
    </div>
  );
};

export default Friend;
