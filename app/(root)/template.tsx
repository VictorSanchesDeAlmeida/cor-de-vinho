import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box } from "@chakra-ui/react";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <Box backgroundColor="white" minH="vh">
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
