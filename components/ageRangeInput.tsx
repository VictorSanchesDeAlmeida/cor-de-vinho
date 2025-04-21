import { Box, HStack, VStack, Input, IconButton, Text } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";

interface Faixa {
  descricao: string;
  preco: number;
}

interface FaixaEtariaPrecoProps {
  faixas: Faixa[];
  setFaixas: React.Dispatch<React.SetStateAction<Faixa[]>>;
}

export const AgeRangeInput = ({ faixas, setFaixas }: FaixaEtariaPrecoProps) => {
  const adicionarFaixa = () => {
    setFaixas([...faixas, { descricao: "", preco: 0 }]);
  };

  const atualizarFaixa = (
    index: number,
    key: keyof Faixa,
    valor: string | number
  ) => {
    const novasFaixas = [...faixas];
    if (key === "descricao" && typeof valor === "string") {
      novasFaixas[index][key] = valor;
    } else if (key === "preco" && typeof valor === "number") {
      novasFaixas[index][key] = valor;
    }
    setFaixas(novasFaixas);
  };

  return (
    <Box mt={4}>
      <Text fontWeight="semibold" color="gray.800" mb={2}>
        Idade/Preço
      </Text>
      <VStack gap={3} align="flex-start">
        {faixas.map((faixa, index) => (
          <HStack key={index}>
            <VStack align="flex-start" mr={2}>
              <Input
                placeholder="Idade"
                value={faixa.descricao}
                onChange={(e) =>
                  atualizarFaixa(index, "descricao", e.target.value)
                }
                color="black"
                fontSize={18}
                fontWeight={"semibold"}
              />
              <Input
                placeholder="Preço"
                value={faixa.preco}
                onChange={(e) =>
                  atualizarFaixa(index, "preco", Number(e.target.value))
                }
                type="number"
                color="black"
                fontSize={18}
                fontWeight={"semibold"}
              />
            </VStack>
            {index === faixas.length - 1 && (
              <IconButton
                aria-label="Adicionar faixa"
                onClick={adicionarFaixa}
                bg="#a6ce39"
                color="white"
                _hover={{ bg: "red.400" }}
                size="lg"
                borderRadius="md"
                shadow="sm"
              >
                <FiPlusCircle />
              </IconButton>
            )}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};
