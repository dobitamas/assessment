import React, { useState } from "react";
import { toggleStatus } from "../utils/apiCalls";
import { statuses } from "../utils/constants";

export default function User(properties) {
  const [status, setStatus] = useState(properties.user.status);

  const isLocked = () => {
    return status === statuses.LOCKED;
  };

  const updateStatus = (event) => {
    event.preventDefault();
    let newStatus = isLocked() ? statuses.ACTIVE : statuses.LOCKED;
    toggleStatus(newStatus, properties.user.id);
    setStatus(newStatus);
  };

  const attributeStyle = {
    textDecoration: isLocked() ? "line-through" : "none",
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
