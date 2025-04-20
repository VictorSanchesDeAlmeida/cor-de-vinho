import { IconButton, Pagination } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface PaginationProps {
  id: number;
  name: string;
  isPubliced: string;
  comission: string;
  link: string;
  createdAt: string;
}

const PaginationTable = ({ items }: { items: PaginationProps[] }) => {
  return (
    <Pagination.Root count={items.length * 5} pageSize={5} page={1}>
      <Pagination.PrevTrigger>
        <IconButton>
          <LuChevronLeft />
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
          >
            {page.value}
          </IconButton>
        )}
      />
      <Pagination.NextTrigger>
        <IconButton>
          <LuChevronRight />
        </IconButton>
      </Pagination.NextTrigger>
    </Pagination.Root>
  );
};

export default PaginationTable;
