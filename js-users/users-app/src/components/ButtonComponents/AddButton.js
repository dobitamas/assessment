import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function AddButton() {
  return (
    <Link to="/new">
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
}
