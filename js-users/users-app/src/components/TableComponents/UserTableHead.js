import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";
import AddButton from "../ButtonComponents/AddButton";

const headTitles = [
  { text: "First Name", align: "left" },
  { text: "Last Name", align: "left" },
  { text: "Creation Date", align: "center" },
  { text: "Toggle Status", align: "center" },
];

export default function UserTableHead() {
  return (
    <TableHead className="table-head">
      <TableRow className="table-row">
        <TableCell className="table-cell" align="center">
          <AddButton className="add-button" />
        </TableCell>
        {headTitles.map((title) => (
          <TableCell
            className="table-cell"
            align={title.align}
            key={title.text}
          >
            <strong>{title.text}</strong>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
