import { Box, Flex } from "@chakra-ui/react";
import Title from "./Title";
import Navigation from "./Navigation";
import Logos from "./Logos";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Resume from "./Resume";
import { useEffect, useState } from "react";

const StickyLayout = () => {
  const [selectedNav, setSelectedNav] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight * 0.25) {
          currentSection = `#${section.id}`;
        }
      });

      if (window.location.hash !== currentSection) {
        window.history.replaceState(null, "", currentSection);
        setSelectedNav(currentSection.substring(1));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box overflowY="auto">
      <Flex px="15vw" py="10vh">
        <Box width="33.75vw" mr="2.5vw">
          <Box
            position="fixed"
            top="10vh"
            height="80vh"
            overflowY="auto"
            width="32.5vw"
          >
            <Title />
            <Navigation
              selectedNav={selectedNav}
              onSelectedNav={setSelectedNav}
            />
            <Logos />
          </Box>
        </Box>

        <Box flex="1" overflow="auto" width="33.75vw" id="main">
          <About />
          <Projects />
          <Experience />
          <Resume />
        </Box>
      </Flex>
    </Box>
  );
};

export default StickyLayout;
