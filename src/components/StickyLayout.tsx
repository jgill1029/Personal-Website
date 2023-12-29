import { Box, Flex } from "@chakra-ui/react";
import Title from "./Title";
import Navigation from "./Navigation";
import Logos from "./Logos";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const StickyLayout = () => {
  return (
    <Box overflowY="auto" height="100vh">
      <Flex px="15vw" py="10vh">
        <Box width="32.5vw" mr="5vw">
          <Box position="sticky" top="10vh" height="80vh" overflowY="auto">
            <Title />
            <Navigation />
            <Logos />
          </Box>
        </Box>

        <Box flex="1" overflowY="auto" width="32.5vw">
          <About />
          <Projects />
          <Experience />
        </Box>
      </Flex>
    </Box>
  );
};

export default StickyLayout;
