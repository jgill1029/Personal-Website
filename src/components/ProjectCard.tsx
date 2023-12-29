import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Project } from "./Projects";
import Language from "./Language";
import { useEffect, useState } from "react";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        const module = await import(`../assets/${project.image}.png`);
        setImageSrc(module.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    importImage();
  }, [project.image]);

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
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <HStack align="left">
          {imageSrc && (
            <Image
              border="rgba(226,232,240,.1)"
              width="25%"
              height="18%"
              src={imageSrc}
              alt={project.image}
              objectFit="contain"
              mr="1vw"
            />
          )}
          <VStack align="left" width="100%" flex="1">
            <Heading as="h2" size="md" fontWeight="bold">
              {project.name}
            </Heading>
            <Text>{project.description}</Text>
            <HStack>
              {project.languages.map((language, index) => (
                <Language key={index} language={language} />
              ))}
            </HStack>
          </VStack>
        </HStack>
      </a>
    </Box>
  );
};

export default ProjectCard;
