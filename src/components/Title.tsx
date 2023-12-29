import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Title = () => {
  return (
    <Flex height="30vh">
      <VStack align={"right"} spacing={5}>
        <Heading as="h1" size="2xl">
          Jagdeep Gill
        </Heading>
        <Heading as="h2" size="md">
          Software Engineer
        </Heading>
        <Text>
          Hey there! I'm Jagdeep Gill, a passionate front-end engineer with a
          knack for turning ideas into interactive and visually stunning digital
          experiences. I thrive on bringing design concepts to life through
          clean and efficient code.
        </Text>
      </VStack>
    </Flex>
  );
};

export default Title;
