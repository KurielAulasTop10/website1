import { SEO } from '../components/forward/SEO'
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { Text } from "@chakra-ui/react"
import Lottie from "react-lottie";
import banana404 from "../assets/banana404.json";

export default function Custom404 () {
  return (
    <>
      <SEO />
      <Header />
      <Text fontSize="xl" color="blue.100" as="a" textAlign="center">
        404
      </Text>
      <Text fontSize="xs" color="yellow.120" as="b" textAlign="center">
        Esta não é banana de que estás à procura!
      </Text>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: banana404,
        }}
        isClickToPauseDisabled
        style={{
          maxWidth: "450px",
          height: "100%",
          cursor: "default",
        }}
      />
      
      <Footer />
    </>
  );
}
