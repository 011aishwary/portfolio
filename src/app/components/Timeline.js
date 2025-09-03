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
                                setVisibleItems((prev) => [...prev, skill.id]);
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.3 }
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
        <section className="timeline-section " ref={timelineRef}>
            <div className="container">
                <h2>My Learning Journey</h2>
                <p className="subtitle">A timeline of my skills development</p>

                <div className="timeline" >
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className={`timeline-item  ${visibleItems.includes(skill.id) ? 'visible' : ''}`}
                            style={{ '--item-index': index }}
                        >
                            <div className="timeline-marker">
                                <div className="marker-icon">{skill.icon}</div>
                                <div className="timeline-dot"></div>
                            </div>

                            <div className="timeline-content ">
                                <div className="timeline-date">{skill.learnedDate}</div>
                                <h3 className="skill-name">{skill.name}</h3>
                                <p className="skill-description">{skill.description}</p>


                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .timeline-section {
          padding: 1rem 1rem;
          background-color: #170c2b;
          color: #fff;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          position: relative;
          overflow: auto;
          min-height: 60vh;
          width:40vw;
          

          
        }
        
        .timeline-section::before {
          content: '';
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
        }
        
        .container {
          max-width: 40vw;
          overflow: hidden;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        h2 {
          text-align: center;
          font-size: 2.8rem;
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
          margin-bottom: 4rem;
          font-size: 1.2rem;
          font-weight: 300;
        }
        
        .timeline {
          position: relative;
          padding-left: 2rem;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 40px;
          top: 0;
          height: 100%;
          width: 3px;
          background: linear-gradient(to bottom, transparent 0%, #6366f1 15%, #8b5cf6 50%, #ec4899 85%, transparent 100%);
          border-radius: 3px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          opacity: 1;
          width: fit-content;
          transform: translateX(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .timeline-item.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .timeline-marker {
          position: absolute;
          left: -55px;
          top: 0;
          width: 80px;
          height: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        
        .marker-icon {
          font-size: 2rem;
          margin-bottom: 5px;
          
          filter: drop-shadow(0 0 5px rgba(99, 102, 241, 0.5));
        }
        
        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2), 0 0 15px rgba(99, 102, 241, 0.5);
        }
        
        .timeline-content {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 2rem;
          margin-left: 1rem;
        width: fit-content;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 10px 25px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .timeline-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        }
        
        .timeline-content:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 
            0 15px 30px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .timeline-date {
          color: #818cf8;
          font-weight: 600;
          margin-bottom: 0.8rem;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: inline-block;
          padding: 0.3rem 0.8rem;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 20px;
        }
        
        .skill-name {
          font-size: 1.6rem;
          margin-bottom: 0.8rem;
          color: #e2e8f0;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        
        .skill-description {
          color: #94a3b8;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: 1.05rem;
        }
        
       
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @media (min-width: 768px) {
          .timeline {
            padding-left: 0;
          }
          
          .timeline::before {
            left: 50%;
            transform: translateX(-1.5px);
          }
          
          .timeline-item {
            width: 50%;
            padding-right: 4rem;
            margin-bottom: 5rem;
          }
          
          .timeline-item:nth-child(even) {
            margin-left: 50%;
            padding-left: 4rem;
            padding-right: 0;
          }
          
          .timeline-marker {
            left: 85%;
            transform: translateX(-40px);
          }
          
          .timeline-item:nth-child(even) .timeline-marker {
            left: auto;
            right: 115%;
            transform: translateX(40px);
          }
          
          .timeline-content {
            margin-left: -60px;
          }
        }
        
        @media (max-width: 767px) {
          .timeline-section {
            padding: 1rem 1rem;
          }
          
          h2 {
            font-size: 2.2rem;
          }
          
          .subtitle {
            font-size: 1rem;
            margin-bottom: 3rem;
          }
          
          .timeline-marker {
            left: -45px;
            width: 70px;
          }
          
          .marker-icon {
            font-size: 1.7rem;
          }
        }
      `}</style>
        </section>
    );
};

export default SkillsTimeline;