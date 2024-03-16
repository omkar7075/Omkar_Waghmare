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
    kasnet,
    studio,
    codesoft,
    octanet,
    threejs,
    linkedin,
    instagram,
    leetcode,
    codingninja,
    geekofgeeks,
    github,
    MD,
    MP,
    CC,
    QG,
    LP,
    BA,

  
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
      title: "PHP Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
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
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
 
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
   
  ];
  
  const experiences = [
    {
      title: "Industrial Trainee",
      company_name: "KasNet",
      icon: kasnet,
      iconBg: "#383E56",
      date: "Jul 2021 - Sep 2021",
      points: [
        "Assist senior software engineers, Develop, test, and contribute to software applications.",
        "Write clean, documented, and efficient code, Learn software development methodologies (Agile/Waterfall).",
        "Test and debug software, Stay updated on software trends and technologies.",
        "Document technical processes and reports,Participate in code reviews.",
      ],
    },
    {
      title: "Web Designer",
      company_name: "Internship Studio",
      icon: studio,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Feb 2024",
      points: [
        "Assist software engineers with web development, Build user interfaces (UIs) from designs.",
        "Code with HTML, CSS, and JavaScript, Test web app functionality.",
        "Collaborate on web projects (design & development), Learn version control (e.g., Git).",
        "Strong understanding of design principles and user experience (UX).",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "CodSoft",
      icon: codesoft,
      iconBg: "#383E56",
      date: "Mar 2024 - Apr 2024",
      points: [
        "Learn and apply web development technologies (HTML, CSS, JavaScript), Contribute to the development of real-world web applications.",
        "Write clean, well-documented, and efficient code for web functionalities, Participate in testing and debugging web applications.",
        "Gain exposure to web development methodologies used at CodSoft.",
        "Collaborate with the development team on web projects.",
      ],
    },
    {
      title: "Development Intern",
      company_name: "OctaNet",
      icon: octanet,
      iconBg: "#E6DEDD",
      date: "Apr 2024 - Jun 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Business Analyzer",
      description:
        "The Business Analyzer project aims to develop a comprehensive inventory management system that addresses the limitations of existing tally apps. The system will provide a secure and reliable platform for managing invoices, tracking inventory levels.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "bootsrap",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image: BA,
      source_code_link: "https://github.com/omkar7075/Business-Analyzer",
      live: "https://github.com/omkar7075/Business-Analyzer",
    },
    {
      name: "Malware Detector",
      description:
        "Malware detector is a security program that scans your device for malicious software (malware).  It checks for things like viruses, spyware, and ransomware.  If it finds something suspicious, it will typically alert you and offer options to remove it.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: MD,
      source_code_link: "https://github.com/omkar7075/MalwareDetector",
      live: "https://omkar7075.github.io/MalwareDetector/",
    },
    {
      name: "Music Player",
      description:
        "This music website project is a comprehensive demonstration of modern web development concepts, built with HTML, CSS, and JavaScript. Designed for music enthusiasts, it features a responsive layout, dynamic content. ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: MP,
      source_code_link: "https://github.com/omkar7075/musicwebsite",
      live: "https://omkar7075.github.io/musicwebsite/",
    },
    {
      name: "Landing Page",
      description:
        "This project provides a simple and user-friendly landing page with a smooth sliding image carousel using React.js. Feel free to ask if you have any further questions about customizing the slider or adding more components.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "jsx",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: LP,
      source_code_link: "https://github.com/omkar7075/Akatsuki",
      live: "https://akatsuki-sooty.vercel.app/",
    },
    {
      name: "Calculator",
      description:
        "Implement a functionality to display a history of user inputs and calculations, allowing users to review past operations and potentially reuse values.Theming Options: Provide options for users to personalize the calculator's theme to improve accessibility.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "jsx",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: CC,
      source_code_link: "https://github.com/omkar7075/Calculator",
      live: "https://calculator-lilac-tau.vercel.app/",
    },
   
    {
      name: "Quote Generator",
      description:
        "Welcome to our Random Quote Generator! With just a click of a button, you can generate a random quote that can help you get through the day or provide insight into a particular problem or challenge you might be facing.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: QG,
      source_code_link: "https://github.com/omkar7075/Quote-Generater",
      live: "https://omkar7075.github.io/Quote-Generater/",
    },
  ];

  
  const certificates = [
    {
      name: "AWS DevOps Engineer",
      pdf:"https://drive.google.com/file/d/1ENAwSm1hgG6TMUwCc50BFIM56GxL1-ki/preview",
      url: "https://drive.google.com/file/d/1ENAwSm1hgG6TMUwCc50BFIM56GxL1-ki/view?usp=sharing",
    },
    {
      name: "Google UX Designer",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      pdf:"https://drive.google.com/file/d/1w3NXIlu4G1uN8nuHmBoEy0t54uL_5-AK/preview",
      url: "https://drive.google.com/file/d/1w3NXIlu4G1uN8nuHmBoEy0t54uL_5-AK/view?usp=sharing",
    },
    {
      name: "IBM Full Stack Developer",
      pdf:"https://drive.google.com/file/d/1l6r5X7HrrqTDokJDLYbymHc4a6jnDT8v/preview",
      url: "https://drive.google.com/file/d/1l6r5X7HrrqTDokJDLYbymHc4a6jnDT8v/view?usp=sharing",
    },
    {
      name: "Microsoft Azure Fundamentals",
      pdf: "https://drive.google.com/file/d/16oqHLX0bQxBTJQTqa0cN0sPfR7lCtKze/preview",
      url: "https://drive.google.com/file/d/16oqHLX0bQxBTJQTqa0cN0sPfR7lCtKze/view?usp=sharing",
    },
    {
      name: "MongoDB Nodejs Developer",
      pdf:"https://drive.google.com/file/d/1fODne5LIHvVBwBUGXMVwZZC5H-LIbsW3/preview",
      url: "https://drive.google.com/file/d/1fODne5LIHvVBwBUGXMVwZZC5H-LIbsW3/view?usp=sharing",
    },
    {
      name: "Software Engineering Diploma",
      pdf:"https://drive.google.com/file/d/1icNy4USfJx4FU6nOJ0i1VSu5HeLKmZje/preview",
      url: "https://drive.google.com/file/d/1icNy4USfJx4FU6nOJ0i1VSu5HeLKmZje/view?usp=sharing",
    },
  ];
  

  const socialmedias = [
  
    {
      name: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/omkar-waghmare-b5aaab200/"
    },
    {
      name: "Instagram",
      icon: instagram,
      url: "https://www.instagram.com/omkar_waghmare_7075?igsh=MTNhODh4MGdzYjdsNA=="
    },
    {
      name: "Github",
      icon: github,
      url: "https://github.com/omkar7075"
    },
    {
      name: "CodingNinja",
      icon: codingninja,
      url: "https://www.codingninjas.com/studio/profile/omkar7075"
    },
    {
      name: "GeekOfGeeks",
      icon: geekofgeeks,
      url: "https://auth.geeksforgeeks.org/user/omkarwaghju6b"
    },
    {
      name: "LeetCode",
      icon: leetcode,
      url: "https://leetcode.com/omkarwaghmare7075/"
    },
  
  ];

  
  export { services, technologies, experiences, testimonials, projects, certificates, socialmedias };