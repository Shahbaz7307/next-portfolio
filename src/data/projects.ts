export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  image: string;
  gallery: string[];
  year: string;
  client: string;
  live?: string;
  github?: string;
  stack: string[];
  featured: boolean;
}

export const projects: Project[]  = [
  {
    slug: "stay-at-modern-pines",

    title: "Stay At Modern Pines",

    category: "Next.js Development",

    description:
      "A premium hospitality website designed to showcase luxury cabin rentals through immersive storytelling, modern design and seamless booking experiences.",

    longDescription:
      "Modern Pines is a luxury vacation rental platform developed to help travelers discover, explore and book premium mountain cabins in the Smoky Mountains. The website combines cinematic visuals, property showcases, local destination content and integrated reservation functionality to create a polished hospitality experience. Built with a strong focus on performance, responsiveness and user engagement, the platform provides visitors with everything they need to confidently plan and book their stay.",

    overview:
      "A luxury hospitality platform built to showcase premium vacation rental properties while providing a seamless booking experience. The project combines modern frontend technologies, engaging visual design and hospitality-focused functionality to deliver a high-end digital experience for travelers.",

    challenge:
      "The project required balancing rich visual storytelling with real-world booking functionality. Large property imagery, interactive content sections, location-based information, booking workflows and third-party integrations needed to work seamlessly across desktop and mobile devices while maintaining fast load times and an intuitive user experience.",

    solution:
      "I developed the frontend using Next.js, TypeScript and Tailwind CSS, creating a scalable and responsive architecture optimized for performance. GSAP was used to enhance the user experience with smooth animations and transitions. OwnerRez widgets were integrated to provide booking functionality, availability management and interactive property information, allowing users to browse accommodations and complete reservations directly through the website.",

    image: "/images/stayatmodernpines-home.png",

    gallery: [
      "/images/stayatmodernpines-home.png",
      "/images/stayatmodernpines-cabin.png",
      "/images/stayatmodernpines-blog.png",
    ],

    year: "2026",

    client: "Stay Modern Pines",

    live: "https://www.staymodernpines.com",

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "OwnerRez Widgets",
    ],

    featured: true,
  },
  {
    slug: "droit-inc",

    title: "Droit-inc",

    category: "Frontend Development",

    description:
      "A large-scale legal news and job marketplace platform serving the legal community of Québec through news publishing, job listings and professional resources.",

    longDescription:
      "Droit-inc is one of Québec’s leading legal media and employment platforms, providing legal professionals with industry news, career opportunities, employer resources and professional insights. The platform includes large-scale content publishing systems, job listing experiences, category-based navigation, search functionality and responsive layouts designed to handle high volumes of content while maintaining usability and performance.",

    overview:
      "A content-driven legal media and recruitment platform built to connect legal professionals, law firms and employers through news publishing, job opportunities and industry-focused resources. The frontend experience was designed to support large-scale content discovery, intuitive navigation and responsive user experiences across all devices.",

    challenge:
      "The project required developing responsive frontend interfaces capable of presenting large amounts of dynamic content in a clean and accessible way. News articles, job listings, category archives, search experiences and promotional content all needed to remain easy to navigate while maintaining visual consistency across a complex multi-page platform.",

    solution:
      "I was responsible for the frontend development of the platform, building responsive user interfaces using HTML, Bootstrap, SCSS and JavaScript within a Yii2-based application. Reusable frontend components, scalable layouts and responsive design systems were implemented to support content publishing, job discovery and user engagement across desktop, tablet and mobile devices.",

    image: "/images/droit-in-home.png",

    gallery: [
      "/images/droit-in-home.png",
      "/images/droit-in-about.png",
      "/images/droit-in-jobs.png",
      "/images/droit-in-contact.png",
    ],

    year: "2023",

    client: "Droit-inc",

    live: "https://droit-inc.com",

    stack: ["Yii2", "HTML", "Bootstrap", "SCSS", "JavaScript"],

    featured: false,
  },

  {
    slug: "fan-flo-nation",

    title: "Fan Flo Nation",

    category: "Vue.js Development",

    description:
      "A modern sports fan platform designed to connect communities through sports content, fan engagement and interactive digital experiences.",

    longDescription:
      "Fan Flo Nation is a sports-focused digital platform created to bring fans closer to the games, athletes and communities they follow. The platform combines modern visual design, community-driven content, engaging user experiences and responsive layouts to create an immersive environment for sports enthusiasts across devices.",

    overview:
      "A sports community platform focused on fan engagement, content discovery and interactive experiences. The project was designed to provide a modern digital space where users can explore sports-related content, connect with communities and engage with a dynamic sports-focused experience.",

    challenge:
      "The challenge was creating an engaging and visually dynamic frontend experience capable of presenting large amounts of sports-related content while maintaining usability, responsiveness and performance. The platform required flexible layouts, modern UI patterns and mobile-first experiences that could adapt across multiple content types and screen sizes.",

    solution:
      "I developed the frontend experience using Vue.js, SCSS and modern responsive development practices. Reusable UI components, scalable page structures and responsive layouts were implemented to ensure consistency across the platform. The frontend was optimized to provide smooth navigation, engaging content presentation and a seamless user experience across desktop, tablet and mobile devices.",

    image: "/images/fanflonation-home.png",

    gallery: [
      "/images/fanflonation-home.png",
      "/images/fanflonation-about.png",
      "/images/fanflonation-faqs.png",
      "/images/fanflonation-contact.png",
    ],

    year: "2025",

    client: "Fan Flo Nation",

    live: "https://fanflonation.com",

    stack: ["Vue.js", "JavaScript", "SCSS", "Responsive Design"],

    featured: false,
  },

  {
    slug: "atomic-interior-portal",

    title: "Atomic Interior Portal",

    category: "React Development",

    description:
      "A modern interior design platform concept focused on immersive visuals, API-driven content and elegant user experiences built with React.",

    longDescription:
      "Atomic Interior Portal is a frontend-focused practice project created to explore modern React development, API integration and scalable UI architecture. The project was designed as a premium interior design and architecture platform featuring modern layouts, visual storytelling, dynamic content sections and responsive user experiences. The goal was to improve frontend development skills while building a polished, real-world style application.",

    overview:
      "A React-based interior design platform concept developed to practice component-driven architecture, API integration and responsive UI development. The project focuses on creating a visually engaging browsing experience through modern layouts, reusable components and dynamic content presentation.",

    challenge:
      "The challenge was creating a visually polished frontend experience while managing dynamic content, reusable component structures and responsive layouts. The project required balancing modern design aesthetics with maintainable React architecture and smooth user interactions across different screen sizes.",

    solution:
      "I built the project using React, creating reusable UI components and scalable page structures to improve maintainability and development efficiency. APIs were integrated to populate dynamic content throughout the platform, while responsive layouts and modern interface patterns were implemented to deliver a smooth and engaging user experience across desktop and mobile devices.",

    image: "/images/atomic-interior-dashboard.png",

    gallery: [
      "/images/atomic-interior-dashboard.png",
      "/images/atomic-interior--1.png",
      "/images/atomic-interior--2.png",
    ],

    year: "2025",

    client: "Personal Project",

    live: "https://atomic-interior-portal-iy5g.vercel.app/",

    stack: [
      "React",
      "JavaScript",
      "REST APIs",
      "TailwindCSS",
      "Responsive Design",
    ],

    featured: false,
  },

  {
    slug: "dashboard-ui",

    title: "Dashboard UI",

    category: "React Development",

    description:
      "A modern analytics dashboard built with React to explore data visualization, reusable component architecture and responsive admin interfaces.",

    longDescription:
      "Dashboard UI is a frontend-focused practice project created to strengthen React development skills through the implementation of modern dashboard patterns, analytics interfaces and reusable component systems. The project focuses on presenting data through clean visualizations, responsive layouts and intuitive user interactions commonly found in modern SaaS and admin platforms.",

    overview:
      "A React-based dashboard application developed to practice building scalable frontend architectures, data-driven interfaces and modern admin experiences. The project combines reusable UI components, analytics visualizations and responsive layouts to create a polished dashboard environment.",

    challenge:
      "The challenge was designing and developing a dashboard capable of displaying large amounts of information in a structured and user-friendly manner. The project required creating reusable components, responsive layouts and visual data representations while maintaining consistency across the interface.",

    solution:
      "I built the application using React and modern frontend development practices, creating reusable dashboard components and scalable UI structures. Interactive charts, analytics cards and responsive layouts were implemented to provide a realistic admin dashboard experience while improving component organization and frontend architecture skills.",

    image: "/images/dashboard.png",

    gallery: ["/images/dashboard.png", "/images/dashboard-1.png"],

    year: "2025",

    client: "Personal Project",

    live: "https://dashboard-ui-xi-lake.vercel.app/",

    stack: [
      "React",
      "JavaScript",
      "Chart.js",
      "TailwindCSS",
      "Responsive Design",
    ],

    featured: false,
  },

  {
    slug: "first-bristol",

    title: "First Bristol Corporation",

    category: "WordPress Development",

    description:
      "A custom WordPress corporate website developed for a real estate development company, focused on showcasing projects, company expertise and investment opportunities through a modern digital experience.",

    longDescription:
      "First Bristol Corporation is a corporate real estate development platform designed to present the company’s portfolio, development projects, hospitality properties and business services through a professional and scalable web experience. The website combines modern layouts, project showcases, company information, news content and responsive user experiences to strengthen the company’s digital presence and communicate its industry expertise.",

    overview:
      "A custom WordPress website built for a large-scale real estate development company to showcase commercial, residential, hospitality and mixed-use projects. The platform was designed to support content management flexibility while delivering a modern and professional frontend experience.",

    challenge:
      "The project required building a professional corporate website capable of presenting large amounts of business information, project portfolios, company services and development updates in a structured and visually engaging way. The frontend needed to remain scalable, responsive and easy to manage through WordPress while maintaining a polished brand identity.",

    solution:
      "I developed a fully custom WordPress theme, creating responsive frontend layouts using HTML, CSS, JavaScript and WordPress theme development practices. Reusable content sections, project showcase templates, news layouts and flexible content structures were implemented to allow the client to easily manage and update content while maintaining design consistency across the platform.",

    image: "/images/firstbristol.png",

    gallery: [
      "/images/firstbristol.png",
      "/images/firstbristol-about.png",
      "/images/firstbristol-property.png",
      "/images/firstbristol-teams.png",
      "/images/firstbristol-contact.png",
    ],

    year: "2022",

    client: "First Bristol Corporation",

    live: "https://www.firstbristol.com",

    stack: [
      "WordPress",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Custom Theme Development",
    ],

    featured: false,
  },
];
