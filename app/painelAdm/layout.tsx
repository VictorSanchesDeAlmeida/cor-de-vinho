import SideBar from "@/components/sideBar";
import { Box, Container, Flex } from "@chakra-ui/react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default async function PainelAdmLayout({
  children,
}: AuthProviderProps) {


  return (
    <Box bg="#e0e3e7" minW="vw" minH="vh">
      <Container height="vh" py={10}>
        <Flex h="full" gap={10}>
            <SideBar />
            {children}
        </Flex>
      </Container>
    </Box>
  );
}
