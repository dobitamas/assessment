import React, { useState, useEffect } from "react";
import { getAllUsers } from "../utils/apiCalls";
import User from "./User";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "../style/UserList.css";
const usersPerPage = 10;

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsers().then((response) => {
      setAllUsers(response);
      setLoading(false);
    });
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

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="user-table-container">
        <div className="table-title">Users</div>

        <Paper>
          <TableContainer>
            <Table size="big">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Link to="/new">
                      <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <strong>First Name</strong>
                  </TableCell>
                  <TableCell align="left">
                    <strong>Last Name</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Creation Date</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Toggle Status</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersToDisplay.map((user) => (
                  <User user={user} key={user.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
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
