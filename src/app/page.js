"use client";

import Particles from "./components/Sphere";
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


// Sample project data
export default function Home() {
  const sampleProject = {
    title: "Authentication App",
    description: "A fully working authentication app with NextAuth.js, supporting multiple providers and secure user sessions.",
    image: "/auth.png", // Replace with your image path
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "JWT", "React"],
    demoUrl: "/",
    githubUrl: "https://www.linkedin.com/in/01aishwary"
  };
  const sampleProject2= {
    title: "To-Do App using MongoDB",
    description: "This is a simple to-do app built with Next.js and MongoDB.",
    image: "/todo.png", // Replace with your image path
    technologies: ["MERN Stack",  "TailwindCSS", "NodeJs", "React"],
    demoUrl: "/",
    githubUrl: "https://www.linkedin.com/in/01aishwary"
  };
  const sampleProject3 = {
    title: "Movie Recommender",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    image: "/recommender.png", // Replace with your image path
    technologies: ["Next.js","Numpy", "TailwindCSS", "Python", "Pandas"],
    demoUrl: "/",
    githubUrl: "https://www.linkedin.com/in/01aishwary"
  };
  const sampleProject4 = {
    title: "Eco-Sphere",
    description: "This App is made by me in Hackout 2025 ,  it is a platform where local pepople can report illegal forest cutting and pollution in forest",
    image: "/ecosphere.png", // Replace with your image path
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "Prisma"],
    demoUrl: "/",
    githubUrl: "https://www.linkedin.com/in/01aishwary"
  };
  const sampleProject5 = {
    title: "Get me Chai",
    description: "A crowdfunding platform for creators. Get funded by your fans and followers ",
    image: "/Getmechai.png", // Replace with your image path
    technologies: ["Next.js", "Razorpay", "TailwindCSS", "Payment Gateway", "Mongo DB"],
    demoUrl: "/",
    githubUrl: "https://www.linkedin.com/in/01aishwary"
  };
  const sampleProject6 = {
    title: "URL Shortener",
    description: "A Simple url shortener made using Mongo DB to store  the shorten url in database so that other cannot shorten the url with same link ",
    image: "/URl.png", // Replace with your image path
    technologies: ["Next.js", "Razorpay", "TailwindCSS", "Payment Gateway", "Mongo DB"],
    demoUrl: "/",
    githubUrl: "https://www.linkedin.com/in/01aishwary"
  };



  return (
    <div className="poppins-regular overflow-x-hidden bg-[#060010]">

      <div className="min-h-screen relative flex flex-col items-center justify-center">

        <div className="text-white w-full h-full relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-[1400px] mx-auto min-h-[90vh] px-6 py-20 relative z-20">
            <TargetCursor
              spinDuration={2}
              hideDefaultCursor={true}
            />

            <div className="flex flex-col items-center md:items-start gap-8 z-20 order-2 md:order-1">

              <div className="flex flex-col gap-2 w-full">
                <SplitText
                  text="I am Aishwary"
                  className="montserrat-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#3f1b7f] text-center md:text-left leading-tight tracking-tight"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="0px"
                />
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-target montserrat-bold text-xl sm:text-2xl md:text-3xl text-[#b19eef] border-[2px] border-dashed px-4 py-2 border-white/50 rounded-full"
                  >
                    Web Developer +
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-target relative montserrat-bold text-xl sm:text-2xl md:text-3xl border-[2px] border-double px-4 py-2 text-[#b19eef] border-white/50 rounded-full"
                  >
                    Data Scientist
                  </motion.div>
                </div>
              </div>

              <div className="w-full md:w-[90%] text-[#c8c0d5] poppins-medium text-base sm:text-lg leading-relaxed text-center md:text-left opacity-90">
                {"I'm"} a passionate creative technologist who bridges the gap between artistic vision and technical execution. With a deep love for both code and design, I create immersive digital experiences that push the boundaries of {"what's"} possible on the web.
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center h-full z-20 order-1 md:order-2"
            >
              <TiltedCard
                imageSrc="/portfolio image.png"
                altText="Aishwary"
                captionText="Aishwary"
                containerHeight="400px"
                containerWidth="350px"
                imageHeight="400px"
                imageWidth="350px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                  </p>
                }
              />
            </motion.div>
          </div>
          
          <div className="absolute inset-0 w-full h-full z-0 top-0 left-0">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

        </div>
      </div>
      {/* <div className="bg-[#c8c0d5] w-[100vw] h-0.5"></div> */}
      <div id="projects" className="sec2 bg-[#060010] relative max-h-fit py-10">
        <div className="mainheading blocke text-[] playfair_font  text-center text-[18px] pt-8 text-[#b19eef]">
          Featured Work
        </div>
        <div className="flex justify-center px-4">
          <BlurText
            text="Projects and Creations"
            delay={150}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="mainheadpart blocke inter_font text-center text-4xl md:text-6xl pt-4 text-[#b19eef]"
          />
        </div>
        <div className="mainheadpart2 blocke inter_font flex justify-self-center text-[#b0c4de] text-center text-[14px] pt-6 w-[90vw] md:w-[40vw]">
          A collection of innovative projects that showcase the intersection of creative design, cutting-edge technology, and immersive user experiences.
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-4 justify-items-center items-center content-center mt-8 mb-8 max-w-7xl mx-auto">
          {[sampleProject, sampleProject2, sampleProject3, sampleProject4, sampleProject5, sampleProject6].map((project, index) => (
            <motion.div
              key={index}
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
        <div className="mainheadpart2 blocke blocke inter_font flex justify-self-center text-[#b0c4de] text-center text-[14px] px-4">
          Want to see more? Check out my complete portfolio on GitHub.
        </div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" inter_font blocke text-[#ffffff] text-center mt-6"
        >
          <HoverBoarderGradient />
        </motion.div>
      </div>

      {/* Section 3 */}
      <div id="about" className="sec2 bg-[#060010] relative max-h-fit pb-10 px-4 md:px-0">
        <div className="mainheading text-[#f0fff0] playfair_font  text-center text-[18px] pt-8">
          Get To Know Me
        </div>
        <div className="mainheadpart text-[#f0fff0] inter_font text-center text-4xl md:text-6xl pt-4 mb-10">
          <TextType
            text={["About Me", "My Journey" , "And Skills"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center md:items-stretch content-stretch p-2 gap-10 md:gap-0 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[40vw] border-0 rounded-2xl h-[60vh] md:h-[80vh] overflow-auto"
          >
            <SkillsTimeline />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[40vw]"
          >
            <div className="playfair_font text-[#f0fff0] text-[18px] py-6 text-center md:text-left">
              Creative Technologist & Digital Innovator
            </div>
            <div className="flex flex-col gap-5 text-[#b0c4de] text-sm md:text-base text-center md:text-left">
              <span className="">{"I'm"} a passionate creative technologist who bridges the gap between artistic vision and technical execution. With a deep love for both code and design, I create immersive digital experiences that push the boundaries of {"what's"} possible on the web.</span>
              <span className="">My journey began with traditional web development, but I quickly discovered my fascination with 3D graphics, WebGL, and interactive animations. This led me to specialize in creating cutting-edge web applications that combine stunning visuals with seamless user experiences.</span>
              <span className="">When {"I'm"} not crafting digital experiences, {"you'll"} find me exploring the latest in AI, contributing to open-source projects, or experimenting with new creative coding techniques.</span>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mx-auto w-full mt-8">

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="col-span-1 cursor-target">
                <MovingBorderButtons params="Next JS" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="col-span-1 cursor-target">
                <MovingBorderButtons params="Machine Learning" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="col-span-1 cursor-target">
                <MovingBorderButtons params="Full Stack Web-Dev" />
              </motion.div>

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
