import { Box, Flex } from "@chakra-ui/react";
import Title from "./Title";
import Navigation from "./Navigation";
import Logos from "./Logos";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const StickyLayout = () => {
  return (
    <Flex height="100vh" px="20vw" py="10vh" mx={8}>
      <Box
        width="45%"
        position="sticky"
        top="0"
        height="80vh"
        overflowY="auto"
        mx={8}
      >
        <Title />
        <Navigation />
        <Logos />
      </Box>
      <Box flex="1" width="50vw" overflowY="auto">
        <About />
        <Projects />
        <Experience />
      </Box>
    </Flex>
  );
};

export default StickyLayout;
