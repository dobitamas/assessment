import React, { useState } from "react";
import { toggleStatus } from "../utils/apiCalls";
import { statuses } from "../utils/constants";
import { Grid, TableCell, TableRow, Switch, Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

export default function User(properties) {
  const [status, setStatus] = useState(properties.user.status);
  const userId = properties.user.id;
  const firstName = properties.user.first_name;
  const lastName = properties.user.last_name;
  const creationDate = new Date(properties.user.created_at).toDateString();

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
  };

  return (
    <TableRow hover={true}>
      <TableCell style={attributeStyle}>{firstName}</TableCell>
      <TableCell style={attributeStyle}>{lastName}</TableCell>
      <TableCell style={attributeStyle}>{creationDate}</TableCell>
      <TableCell>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Lock</Grid>
          <Grid item>
            <Switch checked={!isLocked()} onChange={updateStatus} />
          </Grid>
          <Grid item>Activate</Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <Link to={`/edit/${userId}`}>
          <Fab color="secondary" aria-label="edit" size="small">
            <EditIcon />
          </Fab>
        </Link>
      </TableCell>
    </TableRow>
  );
}
