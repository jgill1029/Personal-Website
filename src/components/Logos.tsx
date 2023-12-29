import { HStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Logos = () => {
  return (
    <HStack spacing={4} height="10vh">
      <a
        href="https://github.com/jgill1029/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <FaGithub size="25" style={{ opacity: 0.75 }} />
      </a>

      <a
        href="https://www.linkedin.com/in/jagdeep-gill/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <FaLinkedin size="25" style={{ opacity: 0.75 }} />
      </a>
    </HStack>
  );
};

export default Logos;
