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
    title: "Problem Solver",
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
    name: "Pinterest Pin Genie",
    description:
      "Engineered a user-friendly web application for Pinterest, streamlining the process of designing pins effortlessly by inputting a webpage URL.Developed an interactive web playground, allowing users to customize their pin templates using an intuitive canvas and various tools.Leveraging the power of AI, created an insightful analytics dashboard.Made this application using Html, CSS, JavaScript, React.js, fabric.js & figma ",
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
      "Designed and Developed user-friendly diagnostic and reporting screens that allow brands to effortlessly keep track of their campaign performance. Utilizing JavaScript, React.js, Tailwind, and Figma. The result is a powerful tool that makes campaign management straightforward and impactful for brands.",
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
    name: "Administration",
    description:
      "Architected and implemented an intricate User, Role, and Brand Management System catering to the needs of over 500 brands, including those on the Shopify platform for Snapchat. This extensive system efficiently handles a user base exceeding thousands. Leveraging current technologies such as React.js, Ant Design (AntD), HTML, CSS, and Figma, the project exemplifies a meticulous blend of design and development to deliver a seamless, scalable, and user-centric management solution for diverse brands and their extensive user networks. ",
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
