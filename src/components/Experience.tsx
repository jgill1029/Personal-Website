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
      time: "2023 - Present",
      role: "Technology Advisory",
      company: "Protiviti",
      description:
        "Spearhead comprehensive cybersecurity maturity assessments using the NIST Cybersecurity Framework, pinpointing areas for improvement, and conducting detailed internal audit testing on over 20 General IT Controls (GITC) to ensure Sarbanes-Oxley (SOX) compliance.",
    },
    {
      time: "2022 - 2023",
      role: "Enterprise Business Applications Intern",
      company: "BDO Digital",
      description:
        "Revamped project management efficiency by developing and implementing standardized templates, processes, and documentation for client projects.",
    },
    {
      time: "2020 - 2021",
      role: "Digital Intern",
      company: "Kelley School of Business",
      description:
        "Engineered and implemented websites, application frameworks, and digital storefronts for 7 small businesses affected by the COVID-19 pandemic, significantly enhancing their online presence.",
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
