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
    <TableHead>
      <TableRow>
        <TableCell align="center">
          <AddButton />
        </TableCell>
        {headTitles.map((title) => (
          <TableCell align={title.align}>
            <strong>{title.text}</strong>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
