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
            As a CS Engineer, I've  developed a passion for creating elegant and effective designs & solutions,
            having Adequate knowledge & foundation in software development, with a focus on web
            technologies such as JavaScript & its flavors as well as Java & its companion frameworks. 
            I happen to explore both the UI and logic part on the technologies front to build applications, 
            and I'm always looking for ways to optimize & improve my newly acquired skills and ensure fair functionality.
          </p>
          <p>About my career and academics, having recently completed CDAC'S PG diploma course in advanced computing,
            learned the array of subjects in software engineering & principles. Now equipped with a conception to upskill in  
            development tools, platforms, and frameworks, including React, Next.js, Node.js, Java, Spring framework, 
            SQL and NoSQL databases SpringToolSuite$4 IDE to name a few. Always eager to learn and explore new technologies on the go, 
            constantly seeking out opportunities to improve my skills and knowledge.</p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpg' className="profile-img" width={300} height={500}/>
        </div>
      </div>

        </div>
    )
}

export default About;
