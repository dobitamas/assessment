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
    <TableRow className="table-row" hover={true}>
      <TableCell className="table-cell" align="center">
        <EditButton className="edit-button" userId={userId} />
      </TableCell>
      <TableCell className="table-cell" style={attributeStyle} align="left">
        {firstName}
      </TableCell>
      <TableCell className="table-cell" style={attributeStyle} align="left">
        {lastName}
      </TableCell>
      <TableCell className="table-cell" style={attributeStyle} align="center">
        {creationDate}
      </TableCell>
      <TableCell className="table-cell" align="center">
        <Switch
          className="switch"
          checked={!isLocked}
          onChange={updateStatus}
        />
      </TableCell>
    </TableRow>
  );
}
