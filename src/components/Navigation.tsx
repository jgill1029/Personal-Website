import { List, ListItem } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
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
          About
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
          Projects
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
          Experience
        </ScrollLink>
      </ListItem>
    </List>
  );
};

export default Navigation;
