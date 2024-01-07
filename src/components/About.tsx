import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <div className="section" id="about">
      <Box mx="2vw">
        <Text mb="2vh">
          Hey there! I'm Jagdeep Gill, a passionate software engineer with a
          knack for turning ideas into interactive and visually stunning digital
          experiences. I thrive on bringing design concepts to life through
          clean and efficient code. With a foundation built on continuous
          learning and a genuine passion for the craft, I am dedicated to
          pushing the boundaries of what's possible in the ever-evolving world
          of technology.
        </Text>
        <Text mb="15vh">
          Outside of coding, my passions span a diverse spectrum, anchored by a
          love for music across various genres that enrich my daily experiences.
          From the soulful rhythms of R&B to the eclectic melodies of different
          genres, music serves as a constant companion.
        </Text>
      </Box>
    </div>
  );
};

export default About;
