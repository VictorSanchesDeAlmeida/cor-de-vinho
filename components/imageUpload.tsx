"use client";

import { Box, Input, Image, VStack, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";

export const ImageUpload = ({
  register,
}: {
  register: UseFormRegister<any>;
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    document.getElementById("imagem")?.click();
  };

  return (
    <>
      <VStack align="start" gap={3}>
        <Box
          onClick={handleClick}
          border="2px dashed gray"
          borderRadius="xl"
          bg="gray.100"
          p={6}
          w="100%"
          maxW="400px"
          textAlign="center"
          cursor="pointer"
          _hover={{ bg: "gray.200" }}
        >
          <Input
            id="imagem"
            type="file"
            accept="image/*"
            display="none"
            {...register("imagem", {
              onChange: handleFileChange,
            })}
          />

          <Icon as={FiUploadCloud} boxSize={8} color="gray.400" mb={2} />
          <Text color="gray.500">
            Clique aqui para escolher uma imagem do seu computador
          </Text>
        </Box>

        {preview && (
          <Box mt={2} w="100%">
            <Image
              src={preview}
              alt="Preview"
              objectFit="cover"
              borderRadius="lg"
              shadow="md"
              w="100%"
              maxW="400px"
              maxH="400px"
            />
          </Box>
        )}
      </VStack>
    </>
  );
};
