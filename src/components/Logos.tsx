import { HStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Logos = () => {
  return (
    <HStack spacing={4}>
      <a
        href="https://github.com/jgill1029/" // Replace with the actual URL
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Security best practice for opening links in new tabs
        style={{ textDecoration: "none", color: "inherit" }} // Optional: styling for the link
      >
        <FaGithub size="25" style={{ opacity: 0.75 }} />
      </a>

      <a
        href="https://www.linkedin.com/in/jagdeep-gill/" // Replace with the actual URL
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Security best practice for opening links in new tabs
        style={{ textDecoration: "none", color: "inherit" }} // Optional: styling for the link
      >
        <FaLinkedin size="25" style={{ opacity: 0.75 }} />
      </a>
    </HStack>
  );
};

export default Logos;
