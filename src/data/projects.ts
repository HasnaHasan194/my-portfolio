export interface Project {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  image: string;
  problemStatement: string;
  myRole: string;
  keyFeatures: { title: string; desc: string }[];
  engineeringDecisions: string;
  technicalChallenges: string;
  learnings: string;
  architectureComponents: { name: string; type: string }[];
  workflowSteps: string[];
}

export const projectsData: Project[] = [
  {
    id: "carevoyage",
    name: "CareVoyage",
    category: "Travel Booking & Multi-Role Service Platform",
    shortDescription: "An accessible travel booking platform connecting travelers who need additional assistance with travel agencies and caretakers.",
    fullDescription: "CareVoyage is a comprehensive service marketplace designed to enable users to connect with caretakers and agencies for booking travel-related services. It features personalized packages, accessibility services, booking workflows, payments, and real-time communication.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Redux Toolkit", "React Query", "JWT", "Google OAuth", "Redis", "Socket.IO", "Stripe", "Docker", "AWS EC2", "Nginx"],
    liveDemo: "https://care.hasnacodes.site/",
    github: "https://github.com/HasnaHasan194/carevoyage-api",
    image: "/carevoyageimage.png",
    problemStatement: "Travelers requiring additional assistance often struggle to find reliable travel agencies and caretakers who can accommodate their specific accessibility needs in a unified, verified platform.",
    myRole: "Architected a scalable backend using Clean Architecture and SOLID principles across 15+ API modules. Built real-time features using WebSockets and deployed the containerized services using Docker on AWS EC2.",
    keyFeatures: [
      { title: "Multi-Role Authentication", desc: "User, Caretaker, Agency, and Admin roles using JWT, Google OAuth, and OTP flows with Redis." },
      { title: "End-to-end Booking Workflow", desc: "Real-time status tracking, cart, wishlist, and order management." },
      { title: "Payments & Wallet", desc: "Integrated Stripe supporting advance payments, secure transactions, and refunds." },
      { title: "Real-Time Communication", desc: "Enabled group chat and booking status updates using Socket.IO." },
      { title: "Analytics & Reporting", desc: "Generated sales and booking reports with filtering and PDF/Excel export functionality." }
    ],
    engineeringDecisions: "Adopted Clean Architecture and SOLID principles to ensure the 15+ API modules remain maintainable and scalable. Used Redis for OTPs to reduce database load. Chose Socket.IO for real-time chat and updates to enhance the user experience.",
    technicalChallenges: "Managing complex multi-role authorization and real-time state synchronization across different client interfaces. Ensured robust payment and refund workflows through Stripe integration.",
    learnings: "Gained deep insights into implementing WebSockets for real-time features and orchestrating multi-container deployments using Docker and Nginx on AWS EC2.",
    architectureComponents: [
      { name: "React Frontend", type: "frontend" },
      { name: "Express/Node.js", type: "backend" },
      { name: "MongoDB", type: "database" },
      { name: "Redis", type: "cache" },
      { name: "Socket.IO", type: "external" },
      { name: "Stripe", type: "external" },
      { name: "AWS EC2 & Nginx", type: "infrastructure" }
    ],
    workflowSteps: [
      "Package discovery",
      "Accessibility selections",
      "Caretaker selection",
      "Price calculation",
      "Payment processing via Stripe",
      "Booking management & Tracking"
    ]
  },
  {
    id: "readhaven",
    name: "ReadHaven",
    category: "Full-Stack E-Commerce Platform",
    shortDescription: "A full-stack online bookstore supporting book discovery, shopping carts, coupons, and order workflows.",
    fullDescription: "ReadHaven is a complete e-commerce solution for book lovers. It features a robust product browsing experience with category-based filtering, cart management, wishlist, and a comprehensive admin panel for inventory and order management.",
    technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Redux Toolkit", "JWT", "Google OAuth", "Razorpay"],
    liveDemo: "https://readhaven-frontend.vercel.app/",
    github: "https://github.com/HasnaHasan194/readhaven_backend",
    image: "/images123.jpg",
    problemStatement: "Creating a seamless online bookstore experience that handles everything from secure authentication and complex discounting logic to reliable payment processing and analytics.",
    myRole: "Developed the full-stack application following MVC architecture. Implemented the coupon management system, integrated the Razorpay payment gateway, and built the admin analytics features.",
    keyFeatures: [
      { title: "Product Discovery", desc: "Category-based filtering, search, wishlist, and cart management." },
      { title: "Coupon Management", desc: "System with validation logic and automatic discount calculations." },
      { title: "Secure Checkout", desc: "Integrated Razorpay payment gateway with wallet and refund workflows." },
      { title: "Admin Analytics", desc: "Automated PDF and Excel sales reports for admin insights." }
    ],
    engineeringDecisions: "Followed the MVC architecture pattern for clear separation of concerns on the backend. Deployed the backend on AWS EC2 with Nginx for reliable serving, while utilizing Vercel for fast frontend delivery.",
    technicalChallenges: "Implementing complex coupon validation and discount logic that dynamically updates cart totals securely. Handling Razorpay webhook callbacks to ensure order states are consistent.",
    learnings: "Improved proficiency in building complete e-commerce flows, integrating third-party payment gateways like Razorpay, and generating automated downloadable reports.",
    architectureComponents: [
      { name: "React Frontend", type: "frontend" },
      { name: "Express/Node.js", type: "backend" },
      { name: "MongoDB", type: "database" },
      { name: "Razorpay", type: "external" },
      { name: "AWS EC2", type: "infrastructure" }
    ],
    workflowSteps: [
      "Browse books",
      "Add to cart / wishlist",
      "Apply coupon & validation",
      "Checkout via Razorpay",
      "Order management"
    ]
  },
  {
    id: "flavor-forge",
    name: "Flavor Forge",
    category: "Interactive Recipe Application",
    shortDescription: "An interactive recipe discovery app integrating external data to explore ingredients, instructions, and favorites.",
    fullDescription: "Flavor Forge is a full-stack recipe application that enables users to search, view, and save recipes by leveraging the Spoonacular API for rich culinary data, including ingredients and nutritional information.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Spoonacular API"],
    liveDemo: "https://flavor-forge-flax.vercel.app/",
    github: "https://github.com/HasnaHasan194/FlavorForge",
    image: "/portfolioflavor.jpg",
    problemStatement: "Users need a centralized, responsive interface to discover new recipes from a vast external database while being able to securely save and manage their personalized favorites.",
    myRole: "Developed the frontend interface, integrated the Spoonacular API, built RESTful APIs for user preference management, and implemented PostgreSQL database persistence.",
    keyFeatures: [
      { title: "Recipe Discovery", desc: "Search and filter recipes using data fetched from the Spoonacular API." },
      { title: "Nutritional Information", desc: "Detailed breakdown of ingredients, instructions, and health metrics." },
      { title: "User Authentication", desc: "Secure token-based authentication for user accounts." },
      { title: "Favorites Management", desc: "Database persistence for saving and organizing favorite recipes." }
    ],
    engineeringDecisions: "Chose PostgreSQL for robust relational data mapping between users and their saved recipes. Structured the backend following industry best practices for maintainable REST APIs.",
    technicalChallenges: "Handling API rate limits and optimizing data fetching from the external Spoonacular API. Implementing seamless error handling and loading states for a smooth user experience.",
    learnings: "Mastered third-party API integration, robust error handling strategies on the frontend, and relational database modeling with PostgreSQL.",
    architectureComponents: [
      { name: "React Frontend", type: "frontend" },
      { name: "Express/Node.js", type: "backend" },
      { name: "PostgreSQL", type: "database" },
      { name: "Spoonacular API", type: "external" }
    ],
    workflowSteps: [
      "Search recipes",
      "Fetch from Spoonacular",
      "Explore details & nutrition",
      "Authenticate",
      "Save to favorites (PostgreSQL)"
    ]
  },
  {
    id: "zaplink",
    name: "ZapLink",
    category: "Authenticated URL Shortener",
    shortDescription: "A secure URL-shortening application with authenticated URL-management workflows and a modular backend.",
    fullDescription: "ZapLink is a secure URL shortening platform developed using NestJS and modern frontend technologies. It features robust input validation, error handling, and JWT-based access control.",
    technologies: ["React.js", "NestJS", "Node.js", "JWT Authentication", "REST APIs"],
    liveDemo: "https://zaplink-frontend.vercel.app/login",
    github: "https://github.com/HasnaHasan194/FlavorForge",
    image: "/zaplink.jpg",
    problemStatement: "Providing a reliable, authenticated URL shortening service that ensures links are generated and managed only by authorized users, requiring a highly structured backend architecture.",
    myRole: "Structured the application using NestJS architecture principles. Implemented user registration, login, JWT-based authentication, and APIs for managing shortened URLs.",
    keyFeatures: [
      { title: "URL Management", desc: "Generate, track, and manage shortened URLs." },
      { title: "JWT Authentication", desc: "Protected routes accessible only to authenticated users." },
      { title: "Enhanced Security", desc: "Password hashing and validation mechanisms." },
      { title: "Modular Architecture", desc: "Built with NestJS principles and modular design patterns." }
    ],
    engineeringDecisions: "Selected NestJS for its opinionated, modular architecture that enforces clean code principles. Used JWT for stateless, secure authentication across frontend and backend.",
    technicalChallenges: "Implementing robust input validation and handling edge cases in URL generation. Structuring the NestJS modules to ensure scalability and maintainability.",
    learnings: "Gained significant experience in building enterprise-grade modular backends using NestJS and TypeScript decorators.",
    architectureComponents: [
      { name: "React Frontend", type: "frontend" },
      { name: "NestJS Modules", type: "backend" },
      { name: "Database", type: "database" },
      { name: "JWT Auth Guard", type: "backend" }
    ],
    workflowSteps: [
      "User Authentication",
      "Submit long URL",
      "Validate input",
      "Generate short URL",
      "Manage URL records"
    ]
  }
];
