import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

type PaginationProps = {
  value: number;
  onChangePage: any;
};

export const Pagination: React.FC<PaginationProps> = ({
  value,
  onChangePage,
}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={4}
      forcePage={value - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
