import {
  Box,
  Center,
  Container,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import IframeGoogle from "../iFrameGoogle";

const Footer = () => {
  return (
    <Box bg="#851732" minH={20} py={14}>
      <Container>
        <Center mx="auto" maxW="4xl" w="full" minH={20} flexDirection="column">
          <Flex
            justifyContent="space-between"
            w="full"
            gap={{ base: 10, md: 0 }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Image src="/logo.png" h={100} objectFit="contain" />
            <Flex alignItems="center" maxW={{ base: "full", md: 300 }}>
              <Text fontSize={18} textAlign="center">
                R. Largo Cláudio Pasqual, 19 Vila Suica, Gramado - RS, 95670-141
              </Text>
            </Flex>
          </Flex>
          <Flex
            my={10}
            gap={{ base: 4, md: 10 }}
            flexDirection={{ base: "column", md: "row" }}
          >
            {navLinks.map((link, i) => (
              <Link key={i} href={link.link} passHref>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  fontSize={18}
                  textAlign="center"
                >
                  {link.label}
                </Text>
              </Link>
            ))}
          </Flex>
          <Flex my={4} gap={5}>
            {socialMedia.map((item, i) => (
              <Link key={i} href={item.link} passHref>
                <Icon size="2xl">
                  <item.icon />
                </Icon>
              </Link>
            ))}
          </Flex>
          <Flex w="full" maxW="600px">
            <IframeGoogle/>
          </Flex>
          <Flex mt={6}>
            <Text textAlign="center">
              © 2023 Cor de Vinho Turismo - CNPJ 29.754.634/0001-11. Todos os
              direitos reservados.
            </Text>
          </Flex>
          <Flex>
            <Text textAlign="center" fontWeight="bold">
              Desenvolvendo por: Diego Almeida
            </Text>
          </Flex>
        </Center>
      </Container>
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
  {
    label: "Login de Afiliado",
    link: "/loginAdm",
  },
];

const socialMedia = [
  {
    icon: () => <FiFacebook />,
    link: "#",
  },
  {
    icon: () => <FiInstagram />,
    link: "#",
  },
];
export default Footer;
