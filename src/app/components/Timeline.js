// components/SkillsTimeline.jsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const SkillsTimeline = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const timelineRef = useRef(null);

    // Sample skills data with learning dates
    const skills = useMemo(()=> [
        {
            id: 1,
            name: 'HTML/CSS',
            proficiency: 95,
            learnedDate: 'Jan 2024',
            description: 'Started with web fundamentals',
            icon: '🟧'
        },
        {
            id: 2,
            name: 'JavaScript',
            proficiency: 90,
            learnedDate: 'Jun 2024',
            description: 'Began interactive web development',
            icon: '🟨'
        },
        {
            id: 3,
            name: 'Tailwind CSS',
            proficiency: 87,
            learnedDate: 'May 2024',
            description: 'Utility-first CSS framework',
            icon: '🎨'
        },
        {
            id: 4,
            name: 'React',
            proficiency: 88,
            learnedDate: 'August 2024',
            description: 'Learned component-based architecture',
            icon: '⚛️'
        },
        {
            id: 5,
            name: 'Next.js',
            proficiency: 85,
            learnedDate: 'October 2024',
            description: 'Mastered server-side rendering',
            icon: '▲'
        },
        {
            id: 6,
            name: 'Node.js',
            proficiency: 82,
            learnedDate: 'Dec 2024',
            description: 'Backend JavaScript development',
            icon: '🟢'
        },
        
        {
            id: 7,
            name: 'Machine Leaarning',
            proficiency: 80,
            learnedDate: 'Mar 2025',
            description: 'Started exploring machine learning concepts',
            icon: '🔷'
        },
    ],[]);

    useEffect(() => {
       const node = timelineRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate items sequentially
                        skills.forEach((skill, index) => {
                            setTimeout(() => {
                                setVisibleItems((prev) => {
                                    if (prev.includes(skill.id)) return prev;
                                    return [...prev, skill.id];
                                });
                            }, index * 200);
                        });
                        // Unobserve after triggering to prevent re-runs
                        if (node) observer.unobserve(node);
                    }
                });
            },
            { threshold: 0.1 } // Reduced threshold for better triggering
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [skills]);

    return (
        <section className="timeline-section" ref={timelineRef}>
            <div className="container flex flex-col" >
              <div className="flex flex-col items-cente justify-cente">

                <h2>My Learning Journey</h2>
                <p className="subtitle">A timeline of my skills development</p>
              </div>

                <div className="timeline">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className={`timeline-item  ${visibleItems.includes(skill.id) ? 'visible' : ''}`}
                            style={{ '--item-index': index }}
                        >
                             <div className="timeline-marker">
                                <div className="marker-icon max-[767px]:ml-5">{skill.icon}</div>
                                <div className="timeline-dot max-[767px]:ml-5"></div>
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <span className="timeline-date">{skill.learnedDate}</span>
                                    <h3 className="skill-name">{skill.name}</h3>
                                </div>
                                <p className="skill-description">{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .timeline-section {
          padding: 4rem 1rem;
          background-color: transparent;
          color: #fff;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #64ffda, #a8b2d1, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        
        .subtitle {
          text-align: center;
          color: #94a3b8;
          margin-bottom: 3rem;
          font-size: 1.1rem;
          font-weight: 300;
        }
        
        .timeline {
          position: relative;
          padding: 1rem 0;
        }
        
        /* Central Line */
        .timeline::before {
          content: '';
          position: absolute;
          left: 20px; /* Mobile: Line on the left */
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, transparent 0%, #6366f1 15%, #8b5cf6 50%, #ec4899 85%, transparent 100%);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          opacity: 1; /* Fallback: visible by default if logic fails */
          width: 100%;
          padding-left: 3.5rem; 
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        /* Initial state controlled by JS class, but defaulting to visible helps debugging */
        .timeline-item:not(.visible) {
             opacity: 0;
             transform: translateY(20px);
        }
        
        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .timeline-marker {
          position: absolute;
          left: 11px; /* Center on the line (20px left + 2px width / 2) */
          top: 0;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
        }
        
        .marker-icon {
          font-size: 1.5rem;
          margin-bottom: 5px;
          background: #170c2b; /* Match bg to hide line behind icon */
          padding: 5px;
          border-radius: 50%;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }
        
        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
        }
        
        .timeline-content {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .timeline-header {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .timeline-date {
          color: #818cf8;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: rgba(99, 102, 241, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          width: fit-content;
        }
        
        .skill-name {
          font-size: 1.25rem;
          color: #e2e8f0;
          font-weight: 700;
          margin: 0;
        }
        
        .skill-description {
          color: #94a3b8;
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
        }

        /* Desktop Styles */
        @media (min-width: 768px) {
          .timeline::before {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .timeline-item {
            width: 50%;
            padding-left: 0;
            padding-right: 3rem;
            margin-bottom: 4rem;
            margin-left: 0; /* Reset */
          }
          
          .timeline-item:nth-child(even) {
            margin-left: 50%;
            padding-left: 3rem;
            padding-right: 0;
          }
          
          .timeline-marker {
            left: 100%; /* For left side items, marker is on right */
            transform: translateX(-50%);
          }
          
          .timeline-item:nth-child(even) .timeline-marker {
            left: 0; /* For right side items, marker is on left */
            transform: translateX(-50%);
          }
          
          .timeline-item:nth-child(odd) .timeline-content {
             text-align: right; 
             align-items: flex-end;
          }
          
          .timeline-item:nth-child(odd) .timeline-header {
             align-items: flex-end;
          }
        }
        
        @media (max-width: 767px) {
        
            h2 {
                font-size: 2rem;
            }
        }
      `}</style>
        </section>
    );
};

export default SkillsTimeline;