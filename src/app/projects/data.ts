export type ProjectData = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  fullDescription: string;
  challenges: string;
  images: string[];
}

export const projectsData: Record<string, ProjectData> = {
  "personal-website": {
    title: "Personal Website",
    description: "My personal website built with Next.js, TypeScript, and Tailwind CSS. Features a responsive design and smooth animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://senem.me",
    fullDescription: `
      A modern, responsive personal website showcasing my portfolio and experiences. 
      Built with performance and user experience in mind, utilizing the latest web technologies.
      
      Key Features:
      • Responsive design that works seamlessly across all devices
      • Smooth animations and transitions using Framer Motion
      • Server-side rendering for optimal performance
      • Clean and minimalist design aesthetic
    `,
    challenges: `
      During development, I focused on creating a seamless user experience while maintaining 
      high performance. Key challenges included optimizing animations for smooth transitions 
      and ensuring responsive design across all device sizes.
    `,
    images: []
  },
  "onepack.club": {
    title: "onepack.club",
    description: "A platform for travelers to share their experiences and tips.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    link: "https://onepack.club",
    fullDescription: `
        Onepack.club is a platform for travelers to share their experiences and tips.
        It's built with Next.js, Tailwind CSS, and Firebase.
    `,
    challenges: `
        The main challenge was to create a platform that allows users to share their experiences and tips.
        I also had to ensure that the platform is secure and scalable.
    `,
    images: []
  },
  "law-office-website": {
    title: "Law Office Website",
    description: "A website for a law office built with Next.js, TypeScript, and Tailwind CSS. Features a responsive design and smooth animations.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://emirtasli.av.tr",
    fullDescription: `
      A modern, responsive personal website showcasing my portfolio and experiences. 
      Built with performance and user experience in mind, utilizing the latest web technologies.
      
      Key Features:
      • Responsive design that works seamlessly across all devices
      • Smooth animations and transitions using Framer Motion
      • Server-side rendering for optimal performance
      • Clean and minimalist design aesthetic
    `,
    challenges: `
      During development, I focused on creating a seamless user experience while maintaining 
      high performance. Key challenges included optimizing animations for smooth transitions 
      and ensuring responsive design across all device sizes.
    `,
    images: []
  },
  "75-days-challenge-mobile-app": {
    title: "75 Days Challenge Mobile App",
    description: "A mobile app for a 75 days challenge built with React Native, TypeScript, and Expo. Features a responsive design and smooth animations.",
    technologies: ["React Native", "TypeScript", "Expo"],
    link: "https://github.com/yourusername/75-days-challenge-mobile-app",
    fullDescription: "",
    challenges: "",
    images: []
  }
}; 