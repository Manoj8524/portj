import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col lg:flex-row gap-8 px-6 max-w-7xl mx-auto">
        <ProjectCard
          title="Tina and Wanna AI"
          role="Frontend Developer"
          description="A unified AI-driven Q&A interface that combines Git repository parsing and database schema access. Built with Next.js and integrated with OpenAI API for real-time code and data insights."
          technologies={["Next.js", "TypeScript", "OpenAI API", "OAuth2", "JWT", "Tailwind CSS", "Git Integration"]}
          features={[
            "Unified Git repo parsing and DB schema access",
            "Real-time AI-powered code/data insights",
            "Secure OAuth2/JWT authentication",
            "90%+ test coverage with automated CI/CD",
            "DevOps-ready deployment pipeline"
          ]}
        />
        
        <ProjectCard
          title="MERN Stack Billing Web Application"
          role="Full-Stack Developer"
          description="A comprehensive billing management system built with the MERN stack. Features customer management, invoice generation, and payment processing with a responsive design."
          technologies={["MongoDB", "Express.js", "React", "Node.js", "REST API", "Vercel"]}
          liveLink="https://upadate-billing-web-h48r.vercel.app"
          features={[
            "Complete customer data management",
            "Automated invoice generation and tracking",
            "Secure payment processing integration",
            "Responsive design for all devices",
            "RESTful API architecture",
            "Cloud deployment on Vercel"
          ]}
        />
        
        <ProjectCard
          title="Laundry Management System"
          role="Full-Stack Developer"
          description="A complete laundry management solution with user authentication, order tracking, and billing features. Built with MERN stack for optimal performance and user experience."
          technologies={["MongoDB", "Express.js", "React", "Node.js", "JWT Auth", "Vercel"]}
          liveLink="https://laundry-web-project.vercel.app"
          features={[
            "User authentication and authorization",
            "Real-time order tracking system",
            "Automated billing and payment processing",
            "Customer and order data management",
            "Responsive React frontend",
            "RESTful API with Node.js/Express"
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
