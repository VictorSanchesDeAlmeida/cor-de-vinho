"use client";

import EditorChakra from "@/components/editorChakra";
import InputField from "@/components/inputField";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function CreateTuorPage() {
  return (
    <Box
      w="full"
      minH="full"
      p={4}
      bg="#fff"
      rounded="2xl"
      shadow="lg"
      overflowY="scroll"
    >
      <form>
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Box>
            <Text color="black" fontSize={30} fontWeight="semibold" mb={2}>
              Novo Passeio
            </Text>
            <Text color="black" fontSize={20} mb={6}>
              Preencha todos os campos para adicionar um novo passeio na
              plataforma
            </Text>
          </Box>

          <Box textAlign="right">
            <Button
              type="submit"
              bg="#a6ce39"
              color="white"
              fontSize={20}
              fontWeight="semibold"
              _hover={{ bg: "lime.500" }}
              rounded="md"
            >
              Salvar
            </Button>
          </Box>
        </Flex>

        <Stack gap={4}>
          <InputField label="Nome do Passeio" type="text" />
          <EditorChakra />
        </Stack>
      </form>
    </Box>
  );
}
