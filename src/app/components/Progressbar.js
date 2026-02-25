// components/SkillsProgress.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import BlurText from './Decryptedtext';

const SkillsProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Sample skills data
  const skills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Next.js', percentage: 88 },
    { name: 'Node.js', percentage: 82 },
    { name: 'UI/UX Design', percentage: 78 },
  ];

  useEffect(() => {
    const sectionNode = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after animation triggers
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of component is visible
    );

    if (sectionNode) {
      observer.observe(sectionNode);
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, []);

  return (
    <section className="skills-section w-full relative " ref={sectionRef}>
      <div className="container relative w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12 w-full">
          <BlurText
            text="Technical Skills"
            delay={150}
            animateBy="words"
            direction="top"
            className="mainheadpart inter_font text-center text-4xl md:text-6xl pt-4 text-[#b19eef] inline-block"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-12 gap-y-8 w-full">
          {skills.map((skill, index) => (
            <div key={index} className="skill px-4 w-full ">
              <div className="skill-header ">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className={`skill-fill ${isVisible ? 'animate' : ''}`}
                  style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 4rem 1rem;
          background: linear-gradient(135deg,  #060010, #060010, #060010);
          color: #fff;
          display: flex;
          justify-content: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          width: 100%;
          overflow: hidden;
        }
        
        .container {
          /* display: grid; handled by tailwind classes now */
          width: 100%;
          padding: 3rem;
          background: #170c2b;
          backdrop-filter: blur(10px);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        h2 {
          text-align: center;
          margin-bottom: 2.5rem;
          font-size: 2.2rem;
          background: linear-gradient(45deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .skill {
          margin-bottom: 2rem;
        }
        
        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.8rem;
          font-weight: 500;
        }
        
        .skill-name {
          font-size: 1.1rem;
        }
        
        .skill-percentage {
          font-weight: bold;
          color: #a5b4fc;
        }
        
        .skill-bar {
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .skill-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #180142, #310089, #470cb3);
          box-shadow: 
            0 0 10px rgba(37, 99, 235, 0.5),
            0 0 20px rgba(37, 99, 235, 0.3),
            0 0 30px rgba(37, 99, 235, 0.2);
          position: relative;
          transition: width 1.5s ease-in-out;
        }
        
        .skill-fill.animate::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shine 2s infinite;
          border-radius: 10px;
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @media (max-width: 768px) {
          .skills-section {
            padding: 2rem 1rem;
          }
          
          .container {
            padding: 1.5rem;
            width: 95%; /* Make container slightly smaller than viewport width */
            margin: 0 auto;
          }
          
          h2 {
            font-size: 1.8rem;
          }
          
          .skill-bar {
            height: 16px;
          }
          
          /* Ensure text doesn't overflow */
          .skill-name {
            font-size: 0.9rem;
          }
        }
        @media (max-width: 600px) {
          .skills-section{
            padding: 1rem 0.2rem;
          }
          .container {
            width: 100%;
          }
      }
      `}</style>
    </section>
  );
};

export default SkillsProgress;