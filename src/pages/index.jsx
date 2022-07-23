import { Footer } from "../components/common/Footer";
import { SEO } from "../components/forward/SEO";
import { Container, Section } from "../styles/pages/home";
import { Header } from "../components/common/Header";

import Lottie from "react-lottie";
import banana from "../assets/banana.json";
import {
  useBreakpointValue,
  Text,
  Tooltip,
  Heading,
  Box,
  SimpleGrid,
  Image,
  Avatar,
  HStack,
} from "@chakra-ui/react";

export default function Home() {
  const isLgBreakpoint = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <SEO />

      <Container>
        <Section>
          <Header />
          <Box m="auto" mt="30px" mb="30px">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: banana,
              }}
              isClickToPauseDisabled
              style={{
                maxWidth: "450px",
                height: "100%",
                cursor: "default",
              }}
            />
            <Heading textAlign="center" color="white">
              Banana Frita
            </Heading>
            <Text color="gray.300" fontSize="20px" textAlign="center">
              Compre as melhores bananas fritas, de graça, por um preço!
            </Text>
            <Text color="gray.300" fontSize="30px" textAlign="center">
              Temos Bananas carameladas em promoção
            </Text>
            <SimpleGrid columns={[2, null, 3]} p="5">
              <Box w="300px" ml="5">
                <Tooltip
                  label="banana da terra frita"
                  closeDelay={700}
                  placement="bottom"
                >
                  <Image
                    src="https://img.itdg.com.br/tdg/images/recipes/000/183/205/243890/243890_original.jpg?mode=crop&width=300&height=200"
                    alt="banana da terra frita"
                    w="300px"
                  />
                </Tooltip>
                <Text color="gray.200" textAlign="center">
                  50,00€
                </Text>
              </Box>
              <Box w="300px" ml="5">
                <Tooltip
                  label="banana prata"
                  closeDelay={700}
                  placement="bottom"
                >
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJGFqVQiQUVI5i2oIyQyPaAUp6uN3GK00NQ&usqp=CAU"
                    alt="sla"
                    w="300px"
                  />
                </Tooltip>
                <Text color="gray.200" textAlign="center">
                  30,00€
                </Text>
              </Box>
              <Box w="300px" ml="5">
                <Tooltip
                  label="banana nanica"
                  closeDelay={700}
                  placement="bottom"
                >
                  <Image
                    src="https://ceagesp.gov.br/wp-content/uploads/2017/06/Banana-Nanica-28.9.2011-645-412x275.jpg"
                    alt="banana nanica"
                  />
                </Tooltip>
                <Text color="gray.200" textAlign="center">
                  150,99€ ou R$:3000.000,00
                </Text>
              </Box>
            </SimpleGrid>
            <Box p="25" boxShadow="lg" bg="gray.700">
              <HStack>
                <Avatar mb="4" w="10" h="10" />{" "}
                <Text color="gray.500" pb="15px"> Kaziel </Text>
              </HStack>
              <Text color="white">
                Muito boa essas bananas, de qualidade incrível
              </Text>
            </Box>
          </Box>
        </Section>
        <Footer />
      </Container>
    </>
  );
}
