import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Project } from "./Projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <HStack
        spacing={4}
        align="left"
        p={4}
        borderRadius="md"
        _hover={{
          background: "rgb(255,255,255,0.15)",
          boxShadow: "md",
          cursor: "pointer",
        }}
      >
        <Text>Project Picture</Text>
        <VStack align="start">
          <Heading as="h2" size="md">
            {project.name}
          </Heading>
          <Text>{project.description}</Text>
          <Text>{project.languages}</Text>
        </VStack>
      </HStack>
    </a>
  );
};

export default ProjectCard;
