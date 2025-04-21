import { Box, HStack, Input, Text, IconButton } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";

interface HorariosDoPasseioProps {
  horarios: string[];
  setHorarios: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SetHours = ({ horarios, setHorarios }: HorariosDoPasseioProps) => {
  const adicionarHorario = () => {
    setHorarios([...horarios, ""]);
  };

  const atualizarHorario = (index: number, novoHorario: string) => {
    const novosHorarios = [...horarios];
    novosHorarios[index] = novoHorario;
    setHorarios(novosHorarios);
  };

  return (
    <Box mt={4}>
      <Text fontWeight="semibold" color="gray.800" mb={2}>
        Horário do Passeio
      </Text>
      {horarios.map((horario, index) => (
        <HStack key={index} mb={2}>
          <Input
            type="time"
            value={horario}
            onChange={(e) => atualizarHorario(index, e.target.value)}
            width="120px"
            color="black"
            fontSize={18}
            fontWeight={"semibold"}
          />
          {index === horarios.length - 1 && (
            <IconButton
              aria-label="Adicionar horário"
              onClick={adicionarHorario}
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
    </Box>
  );
};
