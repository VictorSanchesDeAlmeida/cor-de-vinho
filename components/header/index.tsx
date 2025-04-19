"use client";

import {
  Box,
  Flex,
  HStack,
  Text,
  Icon,
  IconButton,
  VStack,
  Collapsible,
  Image,
  Container,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa"; // Ícones de carrinho e menu
import Link from "next/link";
import { TbShoppingCart } from "react-icons/tb";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box bg="#851732" color="white" py={2} boxShadow="md">
      <Container>
        <Flex mx="auto" align="center" justify="space-between">
          <Link href="/" passHref>
            <Image src="/logo.png" w="140px" />
          </Link>

          <VStack>
            <IconButton
              aria-label="Open Menu"
              display={{ base: "block", md: "none" }}
              onClick={() => setIsOpen(!isOpen)}
              size="md"
              variant="solid"
            >
              <Flex justifyContent="center">
                <FaBars />
              </Flex>
            </IconButton>
          </VStack>

          <HStack
            gap={6}
            display={{ base: "none", md: "flex" }}
          >
            {navLinks.map((link, i) => (
              <Link key={i} href={link.link} passHref>
                <Text _hover={{ textDecoration: "underline" }} fontSize={18}>
                  {link.label}
                </Text>
              </Link>
            ))}

            {/* Ícone de Carrinho */}
            <Link href="/carrinho" passHref>
              <Icon w={6} h={6} _hover={{ color: "whiteAlpha.800" }}>
                <TbShoppingCart />
              </Icon>
            </Link>
          </HStack>
        </Flex>
      </Container>

      <Collapsible.Root open={isOpen} display={{ base: "block", md: "none" }}>
        <Collapsible.Content>
          <Container>
            <Box py={10}>
              <VStack gap={4} align="end">
                {navLinks.map((link, i) => (
                  <Link key={i} href={link.link} passHref>
                    <Text
                      _hover={{ textDecoration: "underline" }}
                      fontSize="lg"
                    >
                      {link.label}
                    </Text>
                  </Link>
                ))}

                <Link href="/carrinho" passHref>
                  <HStack gap={2}>
                    <Icon w={6} h={6}>
                      <TbShoppingCart />
                    </Icon>
                    <Text fontSize="lg">Carrinho</Text>
                  </HStack>
                </Link>
              </VStack>
            </Box>
          </Container>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Sobre",
    link: "/about",
  },
  {
    label: "Passeios",
    link: "/passeios",
  },
  {
    label: "Contatos",
    link: "/contatos",
  },
];

export default Header;
