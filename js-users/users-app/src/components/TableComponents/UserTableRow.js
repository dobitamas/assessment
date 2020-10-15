import React from "react";
import EditButton from "../ButtonComponents/EditButton";
import { TableCell, TableRow, Switch } from "@material-ui/core";

export default function UserTableCell({
  userId,
  attributeStyle,
  firstName,
  lastName,
  creationDate,
  isLocked,
  updateStatus,
}) {
  return (
    <TableRow hover={true}>
      <TableCell align="center">
        <EditButton userId={userId} />
      </TableCell>
      <TableCell style={attributeStyle} align="left">
        {firstName}
      </TableCell>
      <TableCell style={attributeStyle} align="left">
        {lastName}
      </TableCell>
      <TableCell style={attributeStyle} align="center">
        {creationDate}
      </TableCell>
      <TableCell align="center">
        <Switch checked={!isLocked} onChange={updateStatus} />
      </TableCell>
    </TableRow>
  );
}
