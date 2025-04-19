import AboutText from "@/components/aboutText";
import { Box, Container, Text, Image, Grid } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Container>
      <Box
        bg="#821632"
        w="full"
        maxW={500}
        mx="auto"
        py={10}
        rounded="xl"
        shadow="lg"
        my="10"
      >
        <Text textAlign="center" fontSize={30} fontWeight="bold">
          Sobre a Cor de Vinho
        </Text>
      </Box>
      <Image
        src="/aboutImage.png"
        mx="auto"
        rounded="xl"
        maxW="350px"
        w="full"
      />
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={20}
        py={16}
      >
        {aboutContent.map((about, i) => (
          <AboutText key={i} title={about.title} text={about.text} />
        ))}
      </Grid>
    </Container>
  );
}

const aboutContent = [
  {
    title: "QUEM SOMOS",
    text: "O conceito da marca “COR DE VINHO” veio consigo dês de quando Gramado e Canela ainda eram colônia. Nossos pais herdaram a técnica do plantio de uvas e elaboração de vinhos coloniais e sucos de uva. Assim que chegaram a Gramado, em uma pequena propriedade na área colonial, nossos pais, logo iniciaram o processo de produção de vinhos e sucos, inaugurando junto com a marca um comercio local chamado “COR DE VINHO SABOR DE QUEIJO” no qual era o único meio de sobrevivência da família.",
  },
  {
    title: "NOSSA TRAGETÓRIA",
    text: "Com o advindo do conceito turístico na Cidade, nossos familiares e parentes foram ganhando espaço através de muito trabalho, onde nos dias atuas estamos inseridos nos ramos de hotelaria, produção de chocolates artesanais, produção de sucos e vinhos e derivados, lojas Adega com comercialização de produtos coloniais e Passeios turísticos.",
  },
  {
    title: "NOSSA EVOLUÇÃO",
    text: `Em 2011 passamos a atuar no turismo, não somente na venda de pacotes turísticos, mas agora também operando nossos passeios. Começamos com carros particular oferecendo passeios privativos. Já em 2019 adquirimos nosso primeira Van com capacidade para 16 pessoas marca renomada MERCEDES bens, onde ao meio de muitas dificuldades sobrevivemos à crise mundial COVIDE. Com muito custo saímos vitoriosos, e já no meio do ano de 2022 tivemos uma grande vitória, adquirimos nossa segunda Van zero km com capacidade para 21 pessoas.
        
        Em 2023 iniciamos agregando novos valores para melhor atendê-los, junto a nossa equipe nos especializamos em fotografia, permitindo que ao longo das suas experiências em nossos passeios, possibilite registrar suas imagens.`,
  },
  {
    title: "NOSSA MISSÃO",
    text: "Sentimos no fundo de nossos corações a missão de todos nós enquanto equipe “COR DE VINHO” tornar suas experiências em Gramado e Canela o mais seguro e surpreendente, superando suas expectativas, aproximando vocês ao máximo da história, cultura e raízes da nossa Cidade.",
  },
  {
    title: "NOSSOS VALORES",
    text: "Primamos pelos valores da Família, liberdade e segurança. Valorizamos vocês como valor principal dos nossos sonhos e realizações. Devido a isto estamos otimistas para que voltem sempre e tragam novos amigos, convictos de tudo isto, estamos sempre preparando novidades para vocês.",
  },
  {
    title: "OFERECEMOS COMO POLITICA DA NOSSA EMPRESA",
    text: "Visualizamos em todo nosso trabalho, total qualidade em atendimento, segurança e conforto. Temos em mente nosso compromisso de tornar seu sonho de vir a Serra Gaúcha e dela tirar o melhor proveito, seja com sua família ou amigos, sem desperdiçar sequer um momento da sua alegria e projeto tão sonhado.",
  },
];
