import { Box, Link } from "@chakra-ui/react";

const Resume = () => {
  const pdfPath = "../assets/example.pdf";

  return (
    <Box mx="2vw">
      <Link href={pdfPath} target="_blank" rel="noopener noreferrer">
        View Full Reseme...
      </Link>
    </Box>
  );
};

export default Resume;
