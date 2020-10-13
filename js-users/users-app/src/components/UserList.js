import React, { useState, useEffect } from "react";
import { getAllUsers } from "../utils/apiCalls";
import User from "./User";
import Pagination from "@material-ui/lab/Pagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
      <Pagination
        count={Math.ceil(allUsers.length / usersPerPage)}
        onChange={goToNextPage}
      />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Creation Date</TableCell>
              <TableCell>Status</TableCell>
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
  );
}
