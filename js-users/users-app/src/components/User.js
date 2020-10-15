import React, { useState } from "react";
import { toggleStatus } from "../utils/apiCalls";
import { statuses } from "../utils/constants";
import { TableCell, TableRow, Switch } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

export default function User(properties) {
  const [status, setStatus] = useState(properties.user.status);
  const userId = properties.user.id;
  const firstName = properties.user.first_name;
  const lastName = properties.user.last_name;
  const creationDate = new Date(properties.user.created_at).toDateString();
  //változó
  const isLocked = () => {
    return status === statuses.LOCKED;
  };

  const updateStatus = (event) => {
    let newStatus = isLocked() ? statuses.ACTIVE : statuses.LOCKED;
    toggleStatus(newStatus, properties.user.id);
    setStatus(newStatus);
  };

  const attributeStyle = {
    textDecoration: isLocked() ? "line-through" : "none",
    color: isLocked() ? "grey" : "black",
  };

  return (
    <TableRow hover={true}>
      <TableCell align="center">
        <Link to={`/edit/${userId}`}>
          <EditIcon fontSize="medium" color="secondary" />
        </Link>
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
        <Switch checked={!isLocked()} onChange={updateStatus} />
      </TableCell>
    </TableRow>
  );
}
