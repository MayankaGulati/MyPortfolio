import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tyroo,
    pingenie,
    diagnostic,
    Admin,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Figma Designer",
      icon: backend,
    },
    {
      title: "Problem solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Internship",
      company_name: "Tyroo Technologies",
      icon: tyroo,
      iconBg: "#fff",
      date: "March 2022 - August 2022",
      points: [
        "Learnt tools like Postman, Git, Bitbucket and PostgreSql, Python, Javascript, React",
        "Developed Pages in the Product, vidtech using javascript and react.",
        "Solved issues which improved my problem solving skills",
      ],
    },
    {
      title: "Software Developer Engineer",
      company_name: "Tyroo Technologies",
      icon: tyroo,
      iconBg: "#fff",
      date: "September 2022 - current",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  
  const projects = [
    {
      name: "Pin Genie",
      description:
        "Designed and developed a web application enabling users to create templated pins effortlessly by entering a webpage URL using React.js, fabric.js figma",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fabric",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: pingenie,
      source_code_link: "https://hub.vidtech.ai/pin/create",
    },
    {
      name: "Reporting",
      description:
        "Designed and developed diagnostic and reporting screens through which brands can easily monitor the performance of their campaigns using javascript, react.js, tailwind and figma ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: diagnostic,
      source_code_link: "https://hub.vidtech.ai/dashboard/monitor",
    },
    {
      name: "Admin Section",
      description:
        "A comprehensive User, role and brand management system which allows the admin to manage everything efficiently using react.js, antd, Html, css and figma",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "antd",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Admin,
      source_code_link: "https://hub.vidtech.ai/settings/brand-management",
    },
  ];
  
  export { services, technologies, experiences, projects };