import SideBar from "@/components/sideBar";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function PainelAdmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
