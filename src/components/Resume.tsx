import { Box, Link } from "@chakra-ui/react";
import ResumeJagdeepGill from "../assets/ResumeJagdeepGill.pdf";

const Resume = () => {
  return (
    <Box mx="2vw">
      <Link href={ResumeJagdeepGill} target="_blank" rel="noopener noreferrer">
        View Full Resume...
      </Link>
    </Box>
  );
};

export default Resume;
