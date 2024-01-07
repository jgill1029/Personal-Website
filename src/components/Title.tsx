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
        <Text width="100%">
          Crafting Digital Experiences, One Line of Code at a Time.
        </Text>
      </VStack>
    </Flex>
  );
};

export default Title;
