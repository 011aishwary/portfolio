// components/GitHubButton.jsx
'use client';
import Image from 'next/image';

import Link from 'next/link';
import { useState } from 'react';

const GitHubButton = ({social}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="github-button-container cursor-target flex flex-col ">
      <Link 
        href={social.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-link"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`github-button ${isHovered ? 'hovered' : ' flex justify-items-center self-center'}`}>
            <Image className='text-center ' src={social.icon} alt="nkd" width={32} height={32} />
          
        </div>
      </Link>
        <span className="button-text">{social.text}</span>

      <style jsx>{`
        .github-button-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2rem 0;
        }
        
        .github-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        
        .github-link:hover {
          transform: translateY(-2px);
        }
        
        .button-text {
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          padding: 0.8rem 1.2rem;
        }
        
        .github-link:hover .button-text {
          color: #9ca3af;
          background: rgba(255, 255, 255, 0.15);
        }
        
        .github-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6e5494, #403d52);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 
            0 5px 15px rgba(110, 84, 148, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .github-button.hovered {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 
            0 8px 25px rgba(110, 84, 148, 0.6),
            0 0 20px rgba(110, 84, 148, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          animation: pulse 1.5s infinite;
        }
        
        .github-icon {
          width: 30px;
          height: 30px;
          color: #fff;
          transition: all 0.3s ease;
        }
        
        .github-button.hovered .github-icon {
          color: #f0f0f0;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 
              0 8px 25px rgba(110, 84, 148, 0.6),
              0 0 20px rgba(110, 84, 148, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 
              0 8px 25px rgba(110, 84, 148, 0.6),
              0 0 30px rgba(110, 84, 148, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          100% {
            box-shadow: 
              0 8px 25px rgba(110, 84, 148, 0.6),
              0 0 20px rgba(110, 84, 148, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
        }
        
        /* Optional: Add a subtle glow effect around the entire element on hover */
        .github-link::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 80px;
          background: transparent;
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        .github-link:hover::after {
          background: radial-gradient(circle, rgba(110, 84, 148, 0.2) 0%, transparent 70%);
        }
        
        @media (max-width: 768px) {
          .github-link {
            flex-direction: column;
            gap: 0.8rem;
          }
          
          .button-text {
            font-size: 1rem;
            padding: 0.6rem 1rem;
          }
          
          .github-button {
            width: 50px;
            height: 50px;
          }
          
          .github-icon {
            width: 25px;
            height: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default GitHubButton;