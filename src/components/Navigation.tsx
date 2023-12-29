import { List, ListItem } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <List height="40vh" spacing={2}>
      <li>About</li>
      <ListItem>Projects</ListItem>
      <ListItem>Experience</ListItem>
    </List>
  );
};

export default Navigation;
