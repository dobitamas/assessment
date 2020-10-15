import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import "../../style/Pagination.css";

export default function PaginationComponent({ paginationCount, goToNextPage }) {
  return (
    <div className="pagination">
      <Pagination
        count={paginationCount}
        onChange={goToNextPage}
        color="secondary"
      />
    </div>
  );
}
