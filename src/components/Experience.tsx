import { Box } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";

export interface Job {
  time: string;
  role: string;
  company: string;
  description: string;
}

const Experience = () => {
  const experiences = [
    {
      time: "Jan - jun 2023",
      role: "Technology Advisory",
      company: "Protiviti",
      description: "Ipsum",
    },
  ];

  return (
    <Box mx="1vw">
      {experiences.map((experience) => (
        <ExperienceCard job={experience} />
      ))}
    </Box>
  );
};

export default Experience;
