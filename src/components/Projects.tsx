import { Box } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export interface Project {
  name: string;
  image: string;
  description: string;
  languages: string[];
  link: string;
}

const Projects = () => {
  const projects = [
    {
      name: "Nichify",
      image: "Nichify_Screenshot",
      description: "description",
      languages: ["TypeScript", "React", "Spotify API"],
      link: "https://github.com/jgill1029/Nichify",
    },
    {
      name: "Game Hub",
      image: "Game_Hub_Screenshot",
      description: "description",
      languages: ["TypeScript", "React", "RAWG API"],
      link: "https://github.com/jgill1029/game-hub",
    },
    {
      name: "Jagdeepgill.com",
      image: "Game_Hub_Screenshot",
      description: "Description",
      languages: ["TypeScript", "React", "Netlify"],
      link: "https://github.com/jgill1029/Personal-Website",
    },
  ];
  return (
    <Box mx="1vw" mb="10vh">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </Box>
  );
};

export default Projects;
