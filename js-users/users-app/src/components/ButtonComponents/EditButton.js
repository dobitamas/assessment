import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

export default function EditButton({ userId }) {
  return (
    <Link to={`/edit/${userId}`} className="link-to-edit">
      <EditIcon fontSize="small" color="secondary" />
    </Link>
  );
}
