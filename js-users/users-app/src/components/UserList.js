import React, { useState, useEffect } from "react";
import { getAllUsers } from "../utils/apiCalls";
import User from "./User";
import Pagination from "@material-ui/lab/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import "../style/UserList.css";

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
    const firstUserIndex = usersPerPage * currentPage;
    const lastUserIndex = usersPerPage * currentPage + usersPerPage;
    setUsersToDisplay(allUsers.slice(firstUserIndex, lastUserIndex));
  }, [allUsers, currentPage]);

  const goToNextPage = (event, value) => {
    event.preventDefault();
    setCurrentPage(value - 1);
  };

  return (
    <div>
      <div className="user-table-container">
        <TableContainer component={Paper}>
          <Table size="big">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Creation Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersToDisplay.map((user) => (
                <User user={user} key={user.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="pagination">
        <Pagination
          count={Math.ceil(allUsers.length / usersPerPage)}
          onChange={goToNextPage}
          color="secondary"
        />
      </div>
    </div>
  );
}
