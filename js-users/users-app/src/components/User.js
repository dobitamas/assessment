import React from "react";

export default function User(properties) {
  return (
    <div>
      <h1>{properties.user.first_name}</h1>
      <h1>{properties.user.last_name}</h1>
      <h1>{properties.user.created_at}</h1>
    </div>
  );
}
