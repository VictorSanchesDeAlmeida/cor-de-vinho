"use client";

import {
  Box,
  Input,
  Image,
  VStack,
  Text,
  Icon,
  WrapItem,
  Wrap,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";
import { CloseButton } from "./ui/close-button";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

export const ImageUpload = ({
  register,
}: {
  register: UseFormRegister<any>;
}) => {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviews(newPreviews);
    }
  };

  const handleClick = () => {
    document.getElementById("imagem")?.click();
  };

  const handleRemove = (indexToRemove: number) => {
    setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const moveLeft = (index: number) => {
    if (index === 0) return;
    setPreviews((prev) => {
      const newOrder = [...prev];
      [newOrder[index - 1], newOrder[index]] = [
        newOrder[index],
        newOrder[index - 1],
      ];
      return newOrder;
    });
  };

  const moveRight = (index: number) => {
    if (index === previews.length - 1) return;
    setPreviews((prev) => {
      const newOrder = [...prev];
      [newOrder[index + 1], newOrder[index]] = [
        newOrder[index],
        newOrder[index + 1],
      ];
      return newOrder;
    });
  };

  return (
    <>
      <VStack align="start" w="full" gap={3}>
        <Box
          onClick={handleClick}
          border="2px dashed gray"
          borderRadius="xl"
          bg="gray.100"
          p={6}
          w="100%"
          textAlign="center"
          cursor="pointer"
          _hover={{ bg: "gray.200" }}
        >
          <Input
            id="imagem"
            type="file"
            accept="image/*"
            display="none"
            multiple
            {...register("imagem", {
              onChange: handleFileChange,
            })}
          />

          <Icon as={FiUploadCloud} boxSize={8} color="gray.400" mb={2} />
          <Text color="gray.500">
            Clique aqui para escolher uma imagem do seu computador
          </Text>
        </Box>

        {previews && (
          <Wrap mt={2} w="100%">
            {previews.map((src, index) => (
              <WrapItem key={index} position="relative" userSelect={"none"}>
                <Image
                  src={src}
                  alt={`Preview ${index + 1}`}
                  objectFit="cover"
                  borderRadius="lg"
                  shadow="md"
                  boxSize="200px"
                  draggable="false"
                />
                <CloseButton
                  size="sm"
                  position="absolute"
                  top="1"
                  right="1"
                  color="white"
                  bg="blackAlpha.700"
                  borderRadius="full"
                  _hover={{ bg: "blackAlpha.900" }}
                  onClick={() => handleRemove(index)}
                />
                <HStack
                  gap={1}
                  position="absolute"
                  bottom="1"
                  left="1"
                  bg="blackAlpha.500"
                  borderRadius="md"
                  px={1}
                  py={0.5}
                >
                  <IconButton
                    aria-label="Mover para esquerda"
                    size="xs"
                    onClick={() => moveLeft(index)}
                    disabled={index === 0}
                    variant="outline"
                    border="none"
                    _hover={{ bg: "red.400" }}
                  >
                    <FaRegArrowAltCircleLeft />
                  </IconButton>
                  <IconButton
                    aria-label="Mover para direita"
                    size="xs"
                    onClick={() => moveRight(index)}
                    disabled={index === previews.length - 1}
                    variant="outline"
                    border="none"
                    _hover={{ bg: "red.400" }}
                  >
                    <FaRegArrowAltCircleRight />
                  </IconButton>
                </HStack>
              </WrapItem>
            ))}
          </Wrap>
        )}
      </VStack>
    </>
  );
};
