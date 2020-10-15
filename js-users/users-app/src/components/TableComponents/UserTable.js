import React from "react";
import { Table, TableContainer, Paper } from "@material-ui/core";
import UserTableHead from "./UserTableHead";
import UserTableBody from "./UserTableBody";

export default function UserTable({ usersToDisplay }) {
  return (
    <div className="user-table-container">
      <div className="table-title">Users</div>
      <Paper className="paper">
        <TableContainer className="table-container">
          <Table className="table" size="medium">
            <UserTableHead className="table-head" />
            <UserTableBody
              className="table-body"
              usersToDisplay={usersToDisplay}
            />
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
