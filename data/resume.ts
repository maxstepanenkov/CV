import { Resume } from "./types";

import education from "./resume/education";
import experiences from "./resume/experiences";
import projects from "./resume/projects";
import publications from "./resume/publications";
import skills from "./resume/skills";
import about from "./resume/about";

const resume: Resume = {
  name: "Maksym Stepanenkov",
  image: "/avatar.png",
  title: "JavaScript TeamLead",
  sections: [
    about,
    education,
    experiences,
    projects,
    // publications,
    skills,
  ],
};

export default resume;
