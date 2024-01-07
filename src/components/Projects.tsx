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
      description:
        "A music exploration tool that assesses the uniqueness of your Spotify listening, providing personalized recommendations to diversify your music taste by suggesting niche tracks aligned with your current favorites or preferred genres, broadening your taste beyond mainstream selections",
      languages: ["TypeScript", "React", "Spotify API"],
      link: "https://github.com/jgill1029/Nichify",
    },
    {
      name: "Game Hub",
      image: "Game_Hub_Screenshot",
      description:
        "An interactive web tool enabling users to discover diverse games effortlessly by applying extensive filters and personalized preferences.",
      languages: ["TypeScript", "React", "RAWG API"],
      link: "https://github.com/jgill1029/game-hub",
    },
    {
      name: "Jagdeepgill.com",
      image: "Game_Hub_Screenshot",
      description:
        "A showcase of my software engineering endeavors, featuring hands-on projects, impactful experiences, and a glimpse into my passion for innovation and problem-solving.",
      languages: ["TypeScript", "React", "Netlify"],
      link: "https://github.com/jgill1029/Personal-Website",
    },
  ];
  return (
    <div className="section" id="projects">
      <Box mx="1vw" mb="15vh">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Box>
    </div>
  );
};

export default Projects;
