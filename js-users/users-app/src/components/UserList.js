import React, { useState, useEffect } from "react";
import { getAllUsers } from "../utils/apiCalls";
import User from "./User";

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 10;
  const [allUsers, setAllUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState([]);

  useEffect(() => {
    getAllUsers().then((response) => setAllUsers(response));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setUsersToDisplay(
      allUsers.slice(
        usersPerPage * currentPage,
        usersPerPage * currentPage + usersPerPage
      )
    );
  }, [allUsers, currentPage]);

  return (
    <div>
      {usersToDisplay.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
