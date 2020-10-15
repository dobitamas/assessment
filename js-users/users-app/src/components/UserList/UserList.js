import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../utils/apiCalls";
import Loader from "../Loader/Loader";
import UserTable from "../TableComponents/UserTable";
import PaginationComponent from "../Pagination/PaginationComponent";
import "../../style/UserList.css";
import { serverErrorMessage } from "../../utils/constants";

const USERS_PER_PAGE = 10;

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let paginationCount = Math.ceil(allUsers.length / USERS_PER_PAGE);

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setAllUsers(response.data);
        setLoading(false);
      })
      .catch((error) => alert(serverErrorMessage));
  }, []);

  useEffect(() => {
    const firstUserIndex = USERS_PER_PAGE * currentPage;
    const lastUserIndex = USERS_PER_PAGE * currentPage + USERS_PER_PAGE;
    setUsersToDisplay(allUsers.slice(firstUserIndex, lastUserIndex));
  }, [allUsers, currentPage]);

  const goToNextPage = (event, value) => {
    event.preventDefault();
    setCurrentPage(value - 1);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <UserTable usersToDisplay={usersToDisplay} />
      <PaginationComponent
        paginationCount={paginationCount}
        goToNextPage={goToNextPage}
      />
    </div>
  );
}
