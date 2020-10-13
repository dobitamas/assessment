import React, { useState, useEffect } from "react";
import { getAllUsers } from "../utils/apiCalls";
import User from "./User";
import Pagination from "@material-ui/lab/Pagination";

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

  const goToNextPage = (event, value) => {
    event.preventDefault();
    setCurrentPage(value - 1);
  };

  return (
    <div>
      <Pagination
        count={Math.ceil(allUsers.length / usersPerPage)}
        onChange={goToNextPage}
      />
      {usersToDisplay.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
