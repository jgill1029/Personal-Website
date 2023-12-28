import { Box } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export interface Project {
  name: string;
  description: string;
  languages: string[];
  link: string;
}

const Projects = () => {
  const projects = [
    {
      name: "Nichify",
      description: "description",
      languages: ["TypeScript", "React", "Spotify API"],
      link: "https://github.com/jgill1029/Nichify",
    },
    {
      name: "Game Hub",
      description: "description",
      languages: ["TypeScript", "React", "RAWG API"],
      link: "https://github.com/jgill1029/game-hub",
    },
    {
      name: "Jagdeepgill.com",
      description: "Description",
      languages: ["TypeScript", "React", "Netlify"],
      link: "https://github.com/jgill1029/Personal-Website",
    },
    {
      name: "Jagdeepgill.com",
      description: "Description",
      languages: ["TypeScript", "React", "Netlify"],
      link: "https://github.com/jgill1029/Personal-Website",
    },
    {
      name: "Jagdeepgill.com",
      description: "Description",
      languages: ["TypeScript", "React", "Netlify"],
      link: "https://github.com/jgill1029/Personal-Website",
    },
    {
      name: "Jagdeepgill.com",
      description: "Description",
      languages: ["TypeScript", "React", "Netlify"],
      link: "https://github.com/jgill1029/Personal-Website",
    },
  ];
  return (
    <Box mx={4}>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </Box>
  );
};

export default Projects;
