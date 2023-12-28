import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Title from "./Title";
import Navigation from "./Navigation";
import Logos from "./Logos";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const StickyLayout: React.FC = () => {
  return (
    <Box overflowY="auto" height="100vh">
      <Flex px="20vw" py="10vh" mx={8}>
        {/* Sidebar */}
        <Box width="25vw" mx={8}>
          <Box position="sticky" top="10vh" height="80vh" overflowY="auto">
            <Title />
            <Navigation />
            <Logos />
          </Box>
        </Box>

        {/* Main Content */}
        <Box flex="1" overflowY="auto">
          <About />
          <Projects />
          <Experience />
        </Box>
      </Flex>
    </Box>
  );
};

export default StickyLayout;
