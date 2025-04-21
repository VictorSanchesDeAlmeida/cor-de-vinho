import { Button, Wrap, WrapItem, Text } from "@chakra-ui/react";

interface SelectWeeProps {
  diasSelecionados: string[];
  setDiasSelecionados: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SelectWee = ({
  diasSelecionados,
  setDiasSelecionados,
}: SelectWeeProps) => {
  const toggleDia = (dia: string) => {
    setDiasSelecionados((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    );
  };

  return (
    <>
      <Text color="gray.800" fontWeight="semibold" fontSize={16}>
        Dias da Semana
      </Text>
      <Wrap>
        {diasDaSemana.map((dia) => (
          <WrapItem key={dia}>
            <Button
              onClick={() => toggleDia(dia)}
              bg={diasSelecionados.includes(dia) ? "#851732" : "#a6ce39"}
              color="white"
              _hover={{ bg: "red.400" }}
              _active={{ bg: "green.600" }}
              borderRadius="md"
              fontWeight="bold"
              minW="50px"
              shadow="sm"
            >
              {dia}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

const diasDaSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
