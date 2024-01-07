import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Job } from "./Experience";

interface Props {
  job: Job;
}

const ExperienceCard = ({ job }: Props) => {
  return (
    <Box
      mb="4vh"
      width="100%"
      borderRadius="md"
      _hover={{
        background: "rgb(255,255,255,0.15)",
        boxShadow: "md",
        cursor: "pointer",
      }}
      p="1vw"
    >
      <HStack align="left">
        <Text width="20%" mr="1vw" fontSize="sm">
          {job.time}
        </Text>
        <VStack align="left" width="100%" flex="1">
          <Heading as="h2" size="md" fontWeight="bold">
            {job.role} • {job.company}
          </Heading>
          <Text>{job.description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ExperienceCard;
