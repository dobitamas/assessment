import React from "react";
import User from "../User/User";
import TableBody from "@material-ui/core/TableBody";

export default function UserTableBody({ usersToDisplay }) {
  return (
    <TableBody className="table-body">
      {usersToDisplay.map((user) => (
        <User className="user" user={user} key={user.id} />
      ))}
    </TableBody>
  );
}
