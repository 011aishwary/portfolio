
"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="project-card blocke cursor-target "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-inner  ">
                {/* Image section */}
                <div className="image-container">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="project-image"
                        style={{
                            objectFit: 'cover',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                    />
                    <div className={`image-overlay ${isHovered ? 'active' : ''}`}></div>
                </div>

                {/* Content section */}
                <div className="card-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    {/* Technologies used */}
                    <div className="technologies">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>

                    {/* Project links */}
                    <div className="project-links">
                        {project.demoUrl && (
                            <Link href={project.demoUrl} className="demo-link">
                                Live Demo
                            </Link>
                        )}
                        {project.githubUrl && (
                            <Link href={project.githubUrl} className="github-link">
                                GitHub
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Glass effect overlay */}
            <div className="glass-overlay"></div>

            {/* Hover shine effect */}
            <div className={`shine ${isHovered ? 'active' : ''}`}></div>

            <style jsx>{`
        .project-card {
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 15px 30px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(59, 130, 246, 0.5),
    0 0 35px rgba(37, 99, 235, 0.3),
    0 0 45px rgba(29, 78, 216, 0.2);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  padding:20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.image-container {
  position: relative;
  flex-shrink: 0;  width: 100%;
  height: 160px;

  overflow: hidden;
}

.project-image {
  transition: transform 0.5s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.image-overlay.active {
  opacity: 0.4;
}

.card-content {
  padding: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  background: linear-gradient(45deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-description {
  font-size: 0.7rem;
  line-height: 1.5;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.15);
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
}

.project-links {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.demo-link, .github-link {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.demo-link {
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  color: white;
}

.github-link {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.demo-link:hover {
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  transform: translateY(-2px);
}

.github-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.glass-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(15px);
  border-radius: 20px;
  z-index: 1;
}

/* Blue glow effect */
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.2) 0%,
    rgba(37, 99, 235, 0.1) 50%,
    rgba(29, 78, 216, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
}

.project-card:hover::before {
  opacity: 1;
}

/* Responsive design */
@media (max-width: 768px) {
  .project-card {
    max-width: 100%;
    min-height: fit-content;
  }
  
  .project-card:hover {
    box-shadow: 
      0 15px 30px rgba(0, 0, 0, 0.3),
      0 0 15px rgba(59, 130, 246, 0.4);
  }
}
      `}</style>
        </div>
    );
};

export default ProjectCard;