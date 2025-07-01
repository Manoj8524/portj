import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Props {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  role: string;
  features: string[];
}

const ProjectCard = ({ title, description, technologies, liveLink, githubLink, role, features }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl border border-[#6e0e61] hover:border-purple-400 bg-gradient-to-br from-[#0c0c0c] via-[#1a0a1a] to-[#0c0c0c] hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 group">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative p-6 z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              {title}
            </h1>
            <span className="text-sm text-purple-300 font-medium px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30">
              {role}
            </span>
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-2">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group/btn"
              >
                <FiExternalLink className="w-4 h-4 text-purple-300 group-hover/btn:text-white" />
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-600/20 hover:bg-gray-600/40 border border-gray-500/30 hover:border-gray-400 transition-all duration-300 group/btn"
              >
                <FiGithub className="w-4 h-4 text-gray-300 group-hover/btn:text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Key Features */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-200 border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
