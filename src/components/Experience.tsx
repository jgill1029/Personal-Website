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
      time: "July 2023 - Present",
      role: "Technology Advisory",
      company: "Protiviti",
      description: "Description",
    },
    {
      time: "Sept 2022 - Mar 2023",
      role: "Enterprise Business Applications Intern",
      company: "BDO Digital",
      description: "Description",
    },
    {
      time: "Sept 2020 - Jan 2021",
      role: "Digital Intern",
      company: "Kelley School of Business",
      description: "Description",
    },
  ];

  return (
    <div className="section" id="experience">
      <Box mx="1vw">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.role} job={experience} />
        ))}
      </Box>
    </div>
  );
};

export default Experience;
