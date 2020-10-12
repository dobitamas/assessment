import React, { useState, useEffect } from "react";
import { getAllUsers } from "../utils/apiCalls";
import User from "./User";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => setUsers(res));
    /*eslint-disable */
  }, []);
  /*eslint-enable */

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
