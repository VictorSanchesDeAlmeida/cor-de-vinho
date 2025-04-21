import { HStack, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface NavigationBarProps {
  totalTours: number;
  pageSize: number;
  currentPage: number;
}

export const NavigationBar = ({
  totalTours,
  pageSize,
  currentPage,
}: NavigationBarProps) => {
  const totalPages = Math.ceil(totalTours / pageSize);

  const createPageLink = (page: number) => (
    <Link key={page} href={`/painelAdm/tour?page=${page}`}>
      <IconButton
        aria-label={`Página ${page}`}
        size="sm"
        _hover={{ backgroundColor: currentPage == totalPages ? "red.400" : "" }}
        bg={currentPage == page ? "red.400" : ""}
      >
        {page}
      </IconButton>
    </Link>
  );

  const paginationButtons = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 4) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push("...");

      pages.push(totalPages);
    }

    return pages.map((p, idx) =>
      typeof p === "number" ? (
        createPageLink(p)
      ) : (
        <IconButton key={`dots-${idx}`} disabled size="sm">
          ...
        </IconButton>
      )
    );
  };

  return (
    <HStack mt={4} gap={2} alignSelf="flex-start">
      <Link href={`/painelAdm/tour?page=1`}>
        <IconButton
          aria-label="Anterior"
          size="sm"
          disabled={currentPage == 1}
          _hover={{ backgroundColor: "red.400" }}
          bg={currentPage == 1 ? "red.400" : ""}
        >
          <FaArrowLeft />
        </IconButton>
      </Link>

      {paginationButtons()}

      <Link
        href={`/painelAdm/tour?page=${Math.min(totalPages, currentPage + 1)}`}
      >
        <IconButton
          aria-label="Próxima"
          size="sm"
          disabled={currentPage == totalPages}
          _hover={{ backgroundColor: "red.400" }}
          bg={currentPage == totalPages ? "red.400" : ""}
        >
          <FaArrowRight />
        </IconButton>
      </Link>
    </HStack>
  );
};
