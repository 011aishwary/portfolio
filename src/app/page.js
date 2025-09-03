
import Particles from "./components/Sphere";

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
    demoUrl: "https://yourproject.demo",
    githubUrl: "https://github.com/yourusername/project"
  };
  const sampleProject2= {
    title: "To-Do App using MongoDB",
    description: "This is a simple to-do app built with Next.js and MongoDB.",
    image: "/todo.png", // Replace with your image path
    technologies: ["MERN Stack",  "TailwindCSS", "NodeJs", "React"],
    demoUrl: "https://yourproject.demo",
    githubUrl: "https://github.com/yourusername/project"
  };
  const sampleProject3 = {
    title: "Movie Recommender",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    image: "/recommender.png", // Replace with your image path
    technologies: ["Next.js","Numpy", "TailwindCSS", "Python", "Pandas"],
    demoUrl: "https://yourproject.demo",
    githubUrl: "https://github.com/yourusername/project"
  };
  const sampleProject4 = {
    title: "Eco-Sphere",
    description: "This App is made by me in Hackout 2025 ,  it is a platform where local pepople can report illegal forest cutting and pollution in forest",
    image: "/ecosphere.png", // Replace with your image path
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "Prisma"],
    demoUrl: "https://yourproject.demo",
    githubUrl: "https://github.com/yourusername/project"
  };
  const sampleProject5 = {
    title: "Get me Chai",
    description: "A crowdfunding platform for creators. Get funded by your fans and followers ",
    image: "/Getmechai.png", // Replace with your image path
    technologies: ["Next.js", "Razorpay", "TailwindCSS", "Payment Gateway", "Mongo DB"],
    demoUrl: "https://yourproject.demo",
    githubUrl: "https://github.com/yourusername/project"
  };
  const sampleProject6 = {
    title: "URL Shortener",
    description: "A Simple url shortener made using Mongo DB to store  the shorten url in database so that other cannot shorten the url with same link ",
    image: "/URl.png", // Replace with your image path
    technologies: ["Next.js", "Razorpay", "TailwindCSS", "Payment Gateway", "Mongo DB"],
    demoUrl: "https://yourproject.demo",
    githubUrl: "https://github.com/yourusername/project"
  };



  return (
    <div className="poppins-regular ">



      <div className="bg-[#060010]">

        <div className=" text-white  ">

          <div className="absolute z-15 ">
            <TargetCursor
              spinDuration={2}
              hideDefaultCursor={true}
            />

            <div className=" mt-[30vh] w-[50vw] ml-[15vw] flex-col gap-1 flex justify-items-center">

              {/* <h1 className="">I am Aishwary</h1> */}
              <SplitText
                text="I am Aishwary"
                className="montserrat-bold text-4xl text-[#3f1b7f]"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign=""
              // onLetterAnimationComplete={handleAnimationComplete}
              />
              <button className="cursor-target montserrat-bold text-5xl w-fit text-[#b19eef] border-[3px] border-dashed p-1 border-white border-spacing-90 ">Web Developer +</button>
              <div className="cursor-target h-15 relative montserrat-bold text-5xl border-2 w-100 border-double p-1  text-[#b19eef]">
                <div className="absolute inset-px  bg-[#060010] rounded-lg">

                  Data Scientist
                </div>
              </div>
              <div className="w-[35vw] text-[#c8c0d5] poppins-medium">{"I'm"} a passionate creative technologist who bridges the gap between artistic vision and technical execution. With a deep love for both code and design, I create immersive digital experiences that push the boundaries of {"what's"} possible on the web.</div>
            </div>
          </div>
          <div className="absolute z-1 right-0 pr-[15vw] pt-[25vh]">
            <TiltedCard
              imageSrc="profic.jpg"
              altText=""
              captionText="Aishwary"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="200px"
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
          </div>
          <div className="w-[100%] h-[600px] relative">

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
      <div id="projects" className="sec2 bg-[#060010] relative max-h-fit ">
        <div className="mainheading blocke text-[] playfair_font  text-center text-[18px] pt-8 text-[#b19eef]">
          Featured Work
        </div>
        <div className="flex justify-center ">
          <BlurText
            text="Projects and Creations"
            delay={150}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="mainheadpart blocke inter_font text-center text-6xl pt-4 text-[#b19eef]"
          />
        </div>
        <div className="mainheadpart2 blocke inter_font flex justify-self-center text-[#b0c4de] text-center text-[14px] pt-6 w-[40vw]">
          A collection of innovative projects that showcase the intersection of creative design, cutting-edge technology, and immersive user experiences.
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap gap-y-5 p-4 justify-items-center items-center content-center mt-8 mb-8">
          <ProjectCard project={sampleProject} />
          <ProjectCard project={sampleProject2} />
          <ProjectCard project={sampleProject3} />
          <ProjectCard project={sampleProject4} />
          <ProjectCard project={sampleProject5} />
          <ProjectCard project={sampleProject6} />
        </div>
        <div className="mainheadpart2 blocke blocke inter_font flex justify-self-center text-[#b0c4de] text-center text-[14px]">
          Want to see more? Check out my complete portfolio on GitHub.
        </div>
        <div className=" inter_font blocke  text-[#ffffff] text-center ">
          <HoverBoarderGradient />
        </div>
      </div>

      {/* Section 3 */}
      <div id="about" className="sec2 bg-[#060010] relative max-h-fit pb-6">
        <div className="mainheading text-[#f0fff0] playfair_font  text-center text-[18px] pt-8">
          Get To Know Me
        </div>
        <div className="mainheadpart text-[#f0fff0] inter_font text-center text-6xl pt-4">
          <TextType
            text={["About Me", "My Journey" , "And Skills"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div className="flex justify-around items-center content-stretch p-2 ">
          <div className="w-[40vw]  border-0 rounded-2xl h-[80vh] overflow-auto">

            <SkillsTimeline />
          </div>
          <div className="w-[40vw]">
            <div className="playfair_font text-[#f0fff0]   text-[18px] py-6 justify-self-center ">
              Creative Technologist & Digital Innovator
            </div>
            <div className="flex flex-col gap-5  text-[#b0c4de]">
              <span className="">{"I'm"} a passionate creative technologist who bridges the gap between artistic vision and technical execution. With a deep love for both code and design, I create immersive digital experiences that push the boundaries of {"what's"} possible on the web.</span>
              <span className="">My journey began with traditional web development, but I quickly discovered my fascination with 3D graphics, WebGL, and interactive animations. This led me to specialize in creating cutting-edge web applications that combine stunning visuals with seamless user experiences.</span>
              <span className="">When {"I'm"} not crafting digital experiences, {"you'll"} find me exploring the latest in AI, contributing to open-source projects, or experimenting with new creative coding techniques.</span>
            </div>
            <div className="grid gap-4 grid-cols-3 mx-auto w-full mt-6">


              <div className="col-span-1 cursor-target">
                <MovingBorderButtons params="Next JS" />
              </div>
              <div className="col-span-1 cursor-target">
                <MovingBorderButtons params="Machine Learning" />
              </div>
              <div className="col-span-1 cursor-target">
                <MovingBorderButtons params="Full Stack Web-Dev" />
              </div>

            </div>
          </div>
        </div>



        <div className=" ">
        <SkillsProgress />
        </div>

        <div id="contact" className="">
          <ContactPage />
        </div>



      </div>


    </div>
  );
}
