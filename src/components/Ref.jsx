import React, { useEffect, useRef, useState } from "react";

export default function Ref() {
  const usernameRef = useRef();
  const [username, setUsername] = useState("");

  const ShowUsername = () => {
    setUsername(usernameRef.current.value);
  };

  return (
    <div>
      <h1>{username}</h1>
      <input type="text" ref={usernameRef} />
      <button onClick={ShowUsername}>SHOW</button>
    </div>
  );
}
