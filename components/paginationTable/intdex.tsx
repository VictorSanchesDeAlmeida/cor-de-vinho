"use client";

import { IconButton, Pagination } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface PaginationTableProps {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationTable = ({
  total,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationTableProps) => {
  const totalPages = Math.ceil(total / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination.Root count={total} pageSize={10} page={1}>
      <Pagination.PrevTrigger>
        <IconButton>
          <LuChevronLeft onClick={() => onPageChange(currentPage - 1)} />
        </IconButton>
      </Pagination.PrevTrigger>
      <Pagination.Items
        render={(page) => (
          <IconButton
            variant={{ base: "ghost", _selected: "outline" }}
            bg="white"
            color="black"
            _hover={{ bg: "#f1f4f8" }}
            mx={1}
            onClick={() => {
              onPageChange(page.value);
              console.log(page.value);
            }}
          >
            {page.value}
          </IconButton>
        )}
      />
      <Pagination.NextTrigger>
        <IconButton onClick={() => onPageChange(currentPage + 1)}>
          <LuChevronRight />
        </IconButton>
      </Pagination.NextTrigger>
    </Pagination.Root>
  );
};

export default PaginationTable;
