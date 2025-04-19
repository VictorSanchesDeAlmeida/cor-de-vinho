import CardTour from "@/components/cardTour";
import { Box, Container, Grid, Image } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <>
      <Container>
        <Box width="100%" maxW="4xl" mx="auto" mt={16}>
          <Image src="/bannerHome.png" w="full" rounded="4xl" />
        </Box>
      </Container>
      <Container my={16}>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          <CardTour />
          <CardTour />
          <CardTour />
          <CardTour />
          <CardTour />
          <CardTour />
          <CardTour />
          <CardTour />
        </Grid>
      </Container>
    </>
  );
}
