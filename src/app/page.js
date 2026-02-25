"use client";

import Particles from "./components/InteractiveParticles";
import { motion } from "framer-motion";
import HoverBoarderGradient from "./components/HoverBoarderGradient";
import MovingBorderButtons from "./components/MovingBorderButtons";
import ContactPage from "./components/Contact";
import ProjectCard from "./components/Cards";
import SkillsProgress from "./components/Progressbar";
import TargetCursor from "./components/TargetCursor";
import TiltedCard from "./components/TiltedImage";
import SplitText from "./components/Splitext";
import BlurText from "./components/Decryptedtext";
import SkillsTimeline from "./components/Timeline";
import TextType from "./components/TextType";
// import GitHubButton from "./components/Contactbutton";


import { Github, Linkedin, Mail, Twitter } from "lucide-react";

// Sample project data
export default function Home() {
  const sampleProject = {
    title: "MindSettler App",
    description: "A comprehensive mental wellness platform allowing users to book appointments with therapists, track moods, and use journaling tools to achieve mindfulness and emotional balance.",
    image: "/mindsettler.png", // Replace with your image path
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "JWT", "React"],
    demoUrl: "https://mindsettler-landing-page.vercel.app/",
    githubUrl: "https://github.com/011aishwary/mindsettler-landing-page"
  };
  const sampleProject2= {
    title: "To-Do App using MongoDB",
    description: "This is a simple to-do app built with Next.js and MongoDB.",
    image: "/todo.png", // Replace with your image path
    technologies: ["MERN Stack",  "TailwindCSS", "NodeJs", "React"],
    demoUrl: "/",
    githubUrl: "https://github.com/011aishwary"
  };
  const sampleProject3 = {
    title: "Movie Recommender",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    image: "/movie.png", // Replace with your image path
    technologies: ["Next.js","Numpy", "TailwindCSS", "Python", "Pandas"],
    demoUrl: "https://movierecommender-three.vercel.app/",
    githubUrl: "https://github.com/011aishwary/movierecommender"
  };
  const sampleProject4 = {
    title: "Eco-Sphere",
    description: "This App is made by me in Hackout 2025 ,  it is a platform where local pepople can report illegal forest cutting and pollution in forest",
    image: "/ecosphere.png", // Replace with your image path
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "Prisma"],
    demoUrl: "/",
    githubUrl: "https://github.com/011aishwary"
  };
  const sampleProject5 = {
    title: "Get me Chai",
    description: "A crowdfunding platform for creators. Get funded by your fans and followers ",
    image: "/chai.png", // Replace with your image path
    technologies: ["Next.js", "Razorpay", "TailwindCSS", "Payment Gateway", "Mongo DB"],
    demoUrl: "https://getmeachai-coral.vercel.app/",
    githubUrl: "https://github.com/011aishwary/Get_me_a_chai"
  };
  const sampleProject6 = {
    title: "URL Shortener",
    description: "A Simple url shortener made using Mongo DB to store  the shorten url in database so that other cannot shorten the url with same link ",
    image: "/srtlink.png", // Replace with your image path
    technologies: ["Next.js", "Razorpay", "TailwindCSS", "Payment Gateway", "Mongo DB"],
    demoUrl: "https://srtlink-olive.vercel.app/",
    githubUrl: "https://github.com/011aishwary/nextauth"
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/011aishwary", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/01aishwary", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/01Aishwary", label: "Twitter" },
    { icon: Mail, href: "mailto:aishwaryg01@gmail.com", label: "Email" },
  ];

  return (
    <div className="poppins-regular overflow-x-hidden bg-[#060010] selection:bg-[#b19eef] selection:text-[#060010]">

      <div className="min-h-screen relative flex flex-col justify-center overflow-hidden py-20">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#3f1b7f] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

        <div className="w-full max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6">
            <TargetCursor
              spinDuration={2}
              hideDefaultCursor={true}
            />
            
            <div className="flex pt-12  flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
              
              {/* Left Column: Text & Context */}
              <div className="w-full lg:w-1/2  flex flex-col gap-8 max-lg:gap-12 z-20">
                
                {/* Decorative Pill */}
                <motion.div 
                  initial={{ opacity: 0, width: "100%" }}
                  animate={{ opacity: 1, width: "fit-content" }}
                  transition={{ duration: 0.8 }}
                  className=" w-fit flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[#c8c0d5] w-fit text-xs font-medium tracking-wider uppercase">Open for Work</span>
                </motion.div>

                {/* Main Heading */}
                <div className="relative">
                  <SplitText
                    text="Hi, I'm Aishwary"
                    className="montserrat-semibold text-6xl sm:text-6xl md:text-8xl text-white leading-[1.1] tracking-tight"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 50 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="0px"
                  />
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-4"
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#b0c4de] font-light">
                      I build <span className="font-bold cursor-target text-[#b19eef] italic relative inline-block">
                        digital realities
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#b19eef] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      </span>.
                    </h2>
                  </motion.div>
                </div>

                {/* Description Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm max-w-xl"
                >
                  <p className="text-[#c8c0d5] cursor-target text-lg leading-relaxed">
                    A passionate Creative Technologist & Data Scientist bridging the gap between artistic vision and technical execution.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-wrap gap-4 mt-2"
                >
                  <button className="group relative cursor-target px-8 py-3 bg-[#b19eef] text-[#060010] font-bold rounded-full overflow-hidden transition-all hover:scale-105">
                    <span className="relative z-10">Download CV</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  
                  <div className="flex gap-3">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href}
                        className="w-12 h-12 flex cursor-target items-center justify-center rounded-full border border-white/20 text-[#b0c4de] hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
                      >
                        <link.icon size={20} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Visual Centerpiece */}
              <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end z-10 mt-12 lg:mt-0">
                {/* Orbital Rings Background */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"
                ></motion.div>
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#b19eef]/20 rounded-full border-dashed"
                ></motion.div>

                {/* Floating Elements on Orbit */}
                <motion.div 
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="relative"
                >
                  <div className="absolute -top-10 -left-10 z-20 hidden md:block">
                     <div className="bg-[#060010]/80 backdrop-blur-md border border-[#b19eef]/30 p-4 rounded-xl shadow-2xl transform -rotate-6">
                        <code className="text-[#b19eef] text-sm">git commit -m "feat: new idea"</code>
                     </div>
                  </div>

                  <div className="absolute -bottom-5 -right-5 z-20 hidden md:block">
                     <div className="bg-[#060010]/80 backdrop-blur-md border cursor-target border-blue-400/30 p-4 rounded-xl shadow-2xl transform rotate-3">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                          <span className="text-white text-sm font-bold">Data Scientist</span>
                        </div>
                     </div>
                  </div>

                  {/* Main Card */}
                  <TiltedCard
                    imageSrc="/portfolio image.png"
                    altText="Aishwary"
                    captionText=""
                    containerHeight="480px"
                    containerWidth="380px"
                    imageHeight="480px"
                    imageWidth="380px"
                    rotateAmplitude={15}
                    scaleOnHover={1.02}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={null}
                  />
                </motion.div>
              </div>
            </div>
            
        </div>

        {/* Ambient Particles */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Particles
            particleCount={200}
            colors={['#b19eef', '#ffffff']}
            minSize={1}
            maxSize={3}
            speed={0.5}
            connectParticles={true}
            mouseInteractionRadius={150}
          />
        </div>
      </div>
      {/* <div className="bg-[#c8c0d5] w-[100vw] h-0.5"></div> */}
      <div id="projects" className="sec2 bg-[#060010] relative max-h-fit py-10">
        <div className="mainheading blocke text-[] playfair_font  text-center text-[18px] pt-8 text-[#b19eef]">
          Featured Work
        </div>
        <div className="flex justify-center px-4 ">
          <BlurText
            text="Projects and Creations"
            delay={150}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="mainheadpart  blocke inter_font text-center text-4xl md:text-6xl pt-4 text-[#b19eef]"
          />
        </div>
        <div className="mainheadpart2 blocke inter_font flex justify-self-center text-[#b0c4de] text-center text-[14px] pt-6 w-[90vw] md:w-[40vw]">
          A collection of innovative projects that showcase the intersection of creative design, cutting-edge technology, and immersive user experiences.
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-4 justify-items-center items-stretch content-center mt-8 mb-8 max-w-7xl mx-auto">
          {[sampleProject, sampleProject2, sampleProject3, sampleProject4, sampleProject5, sampleProject6].map((project, index) => (
            <motion.div
              key={index}
              className="h-full w-full flex justify-center"
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <div className="mainheadpart2 blocke blocke inter_font flex justify-self-center cursor-target text-[#b0c4de] text-center text-[14px] px-4">
          Want to see more? Check out my complete portfolio on GitHub.
        </div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" inter_font blocke  text-[#ffffff] text-center mt-6"
        >
          <HoverBoarderGradient />
        </motion.div>
      </div>

      {/* Section 3 */}
      <div id="about" className="sec2 bg-[#060010] relative max-h-fit pb-10 px-4 md:px-0">
        <div className="mainheading text-[#f0fff0] playfair_font  text-center text-[18px] pt-8">
          Get To Know Me
        </div>
        <div className="mainheadpart  text-[#f0fff0] inter_font text-center text-4xl md:text-6xl pt-4 mb-10">
          <TextType
            text={["About Me", "My Journey" , "And Skills"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 px-4 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 border-0 rounded-2xl h-[60vh] lg:h-[80vh] overflow-auto custom-scrollbar"
          >
            <SkillsTimeline />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col justify-center relative"
          >
            {/* Decorative background element behind text */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#b19eef]/10 rounded-full blur-3xl -z-10"></div>
            
            <h3 className="playfair_font text-[#f0fff0] text-3xl mb-2 text-center md:text-left relative inline-block w-fit mx-auto md:mx-0">
               Creative Technologist
               <span className="block h-1 w-1/2 bg-gradient-to-r from-[#b19eef] to-transparent mt-2 rounded-full"></span>
            </h3>
            
            <div className="text-[#b19eef] font-medium tracking-wider text-sm mb-6 text-center md:text-left uppercase">
               & Digital Innovator
            </div>

            <div className="flex flex-col gap-6 text-[#b0c4de] text-base leading-relaxed text-center md:text-left">
              <p className="border-l-2 border-[#b19eef]/30 pl-4 md:pl-0 md:border-l-0 md:border-l-transparent">
                <span className="text-white font-semibold">I'm a passionate builder</span> who bridges the gap between artistic vision and technical execution. With a deep love for both code and design, I create immersive digital experiences that push the boundaries of what's possible on the web.
              </p>
              <p>
                My journey began with traditional web development, but I quickly discovered my fascination with <span className="text-[#e2e8f0] underline decoration-[#b19eef]/50 underline-offset-4 decoration-2">3D graphics</span>, WebGL, and interactive animations. This led me to specialize in creating cutting-edge web applications.
              </p>
              <p className="bg-white/5 p-4 cursor-target  rounded-lg border border-white/5 italic">
                "When I'm not crafting digital experiences, you'll find me exploring the latest in AI, contributing to open-source projects, or experimenting with new creative coding techniques."
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-8">
               {["Next JS", "Machine Learning", "Full Stack"].map((skill, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer  "
                  >
                    <MovingBorderButtons params={skill} />
                  </motion.div>
               ))}
            </div>
          </motion.div>
        </div>



        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <SkillsProgress />
        </motion.div>

        <div id="contact" className="mt-10">
          <ContactPage />
        </div>



      </div>


    </div>
  );
}
