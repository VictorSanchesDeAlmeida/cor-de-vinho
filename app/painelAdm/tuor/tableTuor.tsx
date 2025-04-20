"use client";

import PaginationTable from "@/components/paginationTable/intdex";
import { For, Table } from "@chakra-ui/react";

export function TableTuor() {
  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row bg="#f1f4f8">
            <For each={TableColumn}>
              {(column) => (
                <Table.ColumnHeader key={column} color="black">
                  {column}
                </Table.ColumnHeader>
              )}
            </For>
          </Table.Row>
        </Table.Header>
        <Table.Body bg="white">
          <For each={items}>
            {(item) => (
              <Table.Row key={item.id} bg="white" color="black">
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.isPubliced}</Table.Cell>
                <Table.Cell>{item.comission}</Table.Cell>
                <Table.Cell>{item.link}</Table.Cell>
                <Table.Cell>{item.createdAt}</Table.Cell>
              </Table.Row>
            )}
          </For>
        </Table.Body>
      </Table.Root>
      <PaginationTable items={items} />
    </>
  );
}

const TableColumn = [
  "Nome",
  "Publicados",
  "Comissionamento",
  "Link",
  "Criado em",
];

const items = [
  {
    id: 1,
    name: "LaptopLaptopLaptopLaptopLaptop",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
  {
    id: 2,
    name: "Coffee Maker",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
  {
    id: 3,
    name: "Desk Chair",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
  {
    id: 4,
    name: "Smartphone",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
  {
    id: 5,
    name: "Headphones",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
  {
    id: 6,
    name: "Smartwatch",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
  {
    id: 8,
    name: "Tablet",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
  {
    id: 9,
    name: "Smart TV",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
  {
    id: 10,
    name: "Gaming Console",
    isPubliced: "Sim",
    comission: "20%",
    link: "/",
    createdAt: "01/01/2023",
  },
];
