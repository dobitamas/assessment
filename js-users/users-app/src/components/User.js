import React, { useState } from "react";
import { toggleStatus } from "../utils/apiCalls";

export default function User(properties) {
  const [status, setStatus] = useState(properties.user.status);

  const updateStatus = (event) => {
    event.preventDefault();
    let newStatus = status === "locked" ? "active" : "locked";
    toggleStatus(newStatus, properties.user.id);
    setStatus(newStatus);
  };

  const attributeStyle = {
    textDecoration: status === "locked" ? "line-through" : "none",
  };

  return (
    <div>
      <h1 style={attributeStyle}>{properties.user.first_name}</h1>
      <h1 style={attributeStyle}>{properties.user.last_name}</h1>
      <h1 style={attributeStyle}>{properties.user.created_at}</h1>
      <button onClick={updateStatus}>toggle status</button>
    </div>
  );
}
