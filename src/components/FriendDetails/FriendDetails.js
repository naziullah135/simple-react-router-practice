import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetails = () => {
  let { friendId } = useParams();

  const [friend, setFriend] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  });
  return (
    <div>
      <h1>This is friend details component:{friendId}</h1>
      <h1>Name: {friend.name}</h1>
      <p>Email: {friend.email}</p>
      <p>Phone: {friend.phone}</p>
      <p>Website: {friend.website}</p>
    </div>
  );
};

export default FriendDetails;
