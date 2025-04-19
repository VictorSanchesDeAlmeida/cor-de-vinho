import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box, Center, Container, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <>
      <Header />
      <Box bg="white">
        <Container
          minH={40}
          alignItems="center"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gap={10}
        >
          <Text color="#323232" fontSize={30} fontWeight="bold">
            Página não encontrada?
          </Text>
          <Link href="/">
              <Text color="#323232"  _hover={{ textDecoration: "underline" }}>
                <Icon>
                  <FaArrowLeft />
                </Icon>{" "}
                Voltar para o início
              </Text>
          </Link>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
