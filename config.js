import { FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
  developer: {
    name: "Naveen S",
  },
  social: {
    github: "Naveensaravanan2002",
    discord: "#",
  },
  NAV_ITEMS: [
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],

  recentTracks: false, // disable spotify section

  projects: [
    {
      id: 1,
      title: "Brick Breaker Game",
      description:
        "A Java Swing-based brick-breaking game with paddle controls, collision physics, and score tracking.",
      image: "/projects/project1.png", // replace later with your own screenshot
      technologies: ["Java", "Swing", "AWT"],
      github: "https://github.com/Naveensaravanan2002/brick-breaker",
      demo: "#",
    },
    {
      id: 2,
      title: "Upcoming Projects",
      description:
        "New web development and AI-based projects are currently under development. Stay tuned for updates!",
      image: "/projects/project2.png",
      technologies: ["React", "Next.js", "Python"],
      github: "#",
      demo: "#",
    },
  ],

  skills: [
    {
      title: "Frontend",
      icon: <HiCode />,
      description: "Modern and responsive web interfaces",
      bgClass: "bg-blue-500/10",
      iconClass: "text-blue-500",
      skills: [
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "TailwindCSS", level: "Intermediate" },
      ],
    },
    {
      title: "Backend",
      icon: <HiDatabase />,
      description: "Server logic and data management",
      bgClass: "bg-emerald-500/10",
      iconClass: "text-emerald-500",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
        { name: "Streamlit", level: "Beginner" },
      ],
    },
    {
      title: "Programs & Tools",
      icon: <HiCube />,
      description: "Development tools & productivity software",
      bgClass: "bg-orange-500/10",
      iconClass: "text-orange-500",
      skills: [
        { name: "VS Code", level: "Expert" },
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
      ],
    },
  ],

  experiences: [
    {
      position: "Software Developer (Trainee)",
      company: "LTIMindtree",
      period: "2025 - Present",
      location: "Remote",
      description:
        "Preparing for onboarding and enhancing full-stack development skills in advance with hands-on learning.",
      responsibilities: [
        "Building personal projects in Java and web development",
        "Learning modern frameworks and clean coding practices",
      ],
      technologies: ["Java", "React", "Node.js", "SQL"],
    },
  ],

  contactInfo: [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "@Naveensaravanan2002",
      link: "https://github.com/Naveensaravanan2002",
    },
    {
      icon: <HiMail className="w-5 h-5" />,
      label: "Email",
      value: "naveensaravanan2002@gmail.com",
      link: "mailto:naveensaravanan2002@gmail.com",
    },
    {
      icon: <FaMapPin className="w-5 h-5" />,
      label: "Location",
      value: "Trichy, India",
      link: null,
    },
  ],
};
