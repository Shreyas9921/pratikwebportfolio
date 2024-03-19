// components/About.jsx

import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me..</h2>
            
            <div className="flex-about">
        <div className="about-text">
          <p></p>
          <p>
            As a CS Engineer, I have always been passionate about creating elegant and effective solutions to
            uncommon tasks. Adequate knowledge & foundation in software development engineering, with a focus on web
            technologies such as JavaScript & its flavours as well as Java & its companion framework. 
            I enjoy both the front-and-back-end technologies to build applications, and I'm always looking for ways to optimize, 
            improve my newly acquired skills and ensure fair functionality.
          </p>
          <p>About my career and academics, having recently completed CDAC's PG diploma course in advanced computing,
            learned array of subjects in software engineering & principles. I'm now equipped with conception to dive in variety 
            of development tools, platforms and frameworks, including React, Next.js, Node.js, Java, Spring framework, SQL and NoSQL databases
            SpringToolSuite$4 IDE. I am always eager to learn and explore new technologies on the go, and 
            I am constantly seeking out opportunities to improve my skills and knowledge.</p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpg' className="profile-img" width={300} height={500}/>
        </div>
      </div>

        </div>
    )
}

export default About;