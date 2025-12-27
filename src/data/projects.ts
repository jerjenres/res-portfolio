// Projects data for portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "ally",
    title: "ALLY | AI-Powered Legal Engagement Platform",
    description:
      "Digital platform designed to streamline and secure the process of finding legal assistance and managing initial legal interactions for Filipino citizens.",
    longDescription:
      "ALLY is a comprehensive digital platform that connects clients with legal professionals, facilitates preliminary consultations, and organizes virtual legal processes. Built as a capstone project, it features an AI-powered legal assistant using Retrieval-Augmented Generation (RAG) to provide accurate legal information based on Philippine law. The platform includes secure user authentication, real-time legal consultations, and a modern web interface that makes legal services more accessible and efficient for Filipino citizens who struggle with legal representation and understanding their rights.",
    technologies: [
      "Spring Boot",
      "React",
      "FastAPI",
      "RAG System",
      "Pinecone Cloud Vector DB",
      "Vertex AI",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS"
    ],
    features: [
      "AI-powered legal assistant using RAG for accurate Philippine law information",
      "Secure user authentication and consultation booking system",
      "Real-time legal consultation platform",
      "Modern, responsive web interface",
      "Multi-service architecture (Spring Boot backend, FastAPI for AI, React frontend)",
      "Cloud-based vector database for legal knowledge base"
    ],
    image: "/images/projects/ally/ally.webp",
    demoUrl: "https://ally-cit.vercel.app/",
    githubUrl: "https://github.com/piolonrqz/Capstone-ALLY",
    category: "web"
  },
  {
    id: "proweaver-hackathon",
    title: "Proweaver Hackathon | Galactic Pulse Challenge (3rd Place)",
    description:
      "Interactive simple web-based game developed for the Proweaver Galactic Pulse Challenge Hackathon 2025, awarded 3rd place.",
    longDescription:
      "A dynamic web-based game created as part of the Proweaver Galactic Pulse Challenge Hackathon 2025. This project showcases creative game development skills with multiple game modes, scoring systems, and interactive features. Built with modern web technologies, the game features smooth animations, responsive design, and engaging gameplay mechanics that captivated judges and secured 3rd place in the competition. The project demonstrates proficiency in front-end development, game logic implementation, and user experience design.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Game Development",
      "Interactive Animations",
      "Responsive Design"
    ],
    features: [
      "Real-time scoring and leaderboard system",
      "Game settings and customization options",
      "How-to-play instructions and user guidance"
    ],
    image: "/images/projects/proweaver/proweaver.webp",
    demoUrl: "https://hanz15-bacus-proweaver-hackathon-ga.vercel.app/",
    githubUrl: "https://github.com/hanzii00/Proweaver-Hackathon-Galactic-Pulse-Challenge",
    category: "web"
  },
  {
    id: "studyspace",
    title: "StudySpace | Co-working Space Booking Platform",
    description:
      "Web and mobile platform that simplifies finding and booking co-working spaces for students, freelancers, and professionals.",
    longDescription:
      "StudySpace is a comprehensive platform designed to revolutionize how people find and book co-working spaces. The application provides users with an intuitive interface to search for available desks, private study rooms, and meeting spaces while enabling administrators to efficiently manage their space listings. Built with modern web technologies and deployed on cloud infrastructure, StudySpace ensures secure user authentication, real-time space availability updates, and convenient booking management. The platform serves students, freelancers, professionals, and teams looking for the perfect study or work environment.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Google Cloud Run",
      "Vercel",
      "TypeScript",
      "Node.js",
      "REST APIs"
    ],
    features: [
      "Real-time search and booking for co-working spaces",
      "User authentication and profile management",
      "Admin dashboard for space management",
      "Interactive calendar for availability checking",
      "Mobile-responsive design for web and mobile access",
      "Secure payment integration and booking confirmation",
      "Location-based search with maps integration",
      "Review and rating system for spaces"
    ],
    image: "/images/projects/studyspace/studyspace.webp",
    demoUrl: "https://it-342-g6-study-space-i6r8.vercel.app/",
    githubUrl: "https://github.com/piolonrqz/IT342G6-StudySpace",
    category: "web"
  }
];
