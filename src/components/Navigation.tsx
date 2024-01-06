import { Box, List, ListItem } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import NavigationLine from "./NavigationLine";
import { useState } from "react";

const Navigation = () => {
  const [selectedNav, setSelectedNav] = useState("about");

  return (
    <List height="40vh" spacing={2}>
      <ListItem>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
        >
          <NavigationLine
            selectedNav={selectedNav}
            onSelectedNav={(selected) => setSelectedNav(selected)}
            id="about"
          >
            <Box
              ml={selectedNav === "about" ? "12%" : "7%"}
              transition="margin-left 0.3s ease-in-out"
              color={
                selectedNav === "about" ? "white" : "rgba(255, 255, 255, 0.6)"
              }
            >
              About
            </Box>
          </NavigationLine>
        </ScrollLink>
      </ListItem>
      <ListItem>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
        >
          <NavigationLine
            selectedNav={selectedNav}
            onSelectedNav={(selected) => setSelectedNav(selected)}
            id="projects"
          >
            <Box
              ml={selectedNav === "projects" ? "12%" : "7%"}
              transition="margin-left 0.3s ease-in-out"
              color={
                selectedNav === "projects"
                  ? "white"
                  : "rgba(255, 255, 255, 0.6)"
              }
            >
              Projects
            </Box>
          </NavigationLine>
        </ScrollLink>
      </ListItem>

      <ListItem>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
        >
          <NavigationLine
            selectedNav={selectedNav}
            onSelectedNav={(selected) => setSelectedNav(selected)}
            id="experience"
          >
            <Box
              ml={selectedNav === "experience" ? "12%" : "7%"}
              transition="margin-left 0.3s ease-in-out"
              color={
                selectedNav === "experience"
                  ? "white"
                  : "rgba(255, 255, 255, 0.6)"
              }
            >
              Expereince
            </Box>
          </NavigationLine>
        </ScrollLink>
      </ListItem>
    </List>
  );
};

export default Navigation;
