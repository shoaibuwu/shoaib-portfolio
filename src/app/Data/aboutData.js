import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaGamepad,
} from "react-icons/fa";

const getIcon = (heading) => {
  switch (heading.toLowerCase()) {
    case "experience":
      return <FaBriefcase className="w-8 h-8" />;
    case "education":
      return <FaGraduationCap className="w-8 h-8" />;
    case "skills":
      return <FaCode className="w-8 h-8" />;
    case "hobbies":
      return <FaGamepad className="w-8 h-8" />;
    default:
      return <FaBriefcase className="w-8 h-8" />;
  }
};

const aboutMeContent = [
  {
    heading: "Experience",
    description:
      "3 years of Web Development experience in various projects. Focused on delivering efficient and scalable solutions. Worked on multiple full-stack applications with an emphasis on responsive design and user experience.",
  },
  {
    heading: "Education",
    description:
      "BS in Computer Science (4 years). Specialized in web technologies and database systems. Gained expertise in algorithms, data structures, and software development practices.",
  },
  {
    heading: "Skills",
    description:
      "JavaScript, React, Next.js, Tailwind CSS, etc. Strong problem-solving and debugging abilities. Adept at integrating APIs, building reusable components, and optimizing performance for large-scale applications.",
  },
  {
    heading: "Hobbies",
    description:
      "Coding, Reading, Learning new technologies. Enjoy participating in hackathons and coding challenges. Passionate about exploring new frameworks and contributing to open-source projects.",
  },
];

export { aboutMeContent, getIcon };
