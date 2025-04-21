import { For, Table, VStack } from "@chakra-ui/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FindTours } from "./actions";
import { NavigationBar } from "@/components/navigationBar";

interface TableTourProps {
  currentPage: number;
}

export async function TableTour(props: TableTourProps) {
  const pageSize = 10;

  const start = (props.currentPage - 1) * pageSize;

  const { data, count } = await FindTours({ start: start, pageSize: pageSize });

  return (
    <>
      <VStack>
        <Table.Root
          rounded="2xl"
          shadow="lg"
          overflow="hidden"
          variant="outline"
          border={0}
        >
          <Table.Header border={0}>
            <Table.Row bg="#f1f4f8">
              <For each={TableColumn}>
                {(column) => (
                  <Table.ColumnHeader
                    key={column}
                    color="black"
                    textAlign={"center"}
                    fontSize={18}
                  >
                    {column}
                  </Table.ColumnHeader>
                )}
              </For>
            </Table.Row>
          </Table.Header>
          <Table.Body bg="white">
            <For each={data}>
              {(item) => (
                <Table.Row key={item.id} bg="white" color="black" border={0}>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell textAlign={"center"}>
                    {item.publish ? "Sim" : "Não"}
                  </Table.Cell>
                  <Table.Cell textAlign={"center"}>{item.comission}</Table.Cell>
                  <Table.Cell>{item.link_tour}</Table.Cell>
                  <Table.Cell textAlign={"center"}>
                    {format(item.created_at, "dd/MM/yyyy, HH:mm", {
                      locale: ptBR,
                    })}
                  </Table.Cell>
                </Table.Row>
              )}
            </For>
          </Table.Body>
        </Table.Root>
        <NavigationBar
          totalTours={count}
          pageSize={pageSize}
          currentPage={props.currentPage}
        />
      </VStack>
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
