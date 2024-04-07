import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <Image src='/images/profile.jpg' className="profile-img" width={350} height={350} alt="pratik's personal headshot" />
                <div className="hero-text">
                    <h1>Hello There, I'm Pratik 👋</h1>
                    <p>
                        I'm a software engineer based in Pune, MH India. I specialize in full-stack web development & occasionally design
                        websites, applications, and everything in between using tech stack...

                        {/* <FontAwesomeIcon icon={faJs} /> JavaScript,
                        <FontAwesomeIcon icon={faReact} /> React.js,
                        <FontAwesomeIcon icon={faNodeJs} /> Node.js,
                        <FontAwesomeIcon icon={faCode} /> TypeScript,
                        <FontAwesomeIcon icon={faJava} /> Java,
                        Spring,
                        <FontAwesomeIcon icon={faDatabase} /> MySql,
                        Mongodb,
                        <FontAwesomeIcon icon={faGithub} /> GitHub. */}
                    </p>
                    <div className="social_icon">
                        &nbsp;&nbsp;
                        <a
                            href="https://github.com/Shreyas9921"
                            aria-label="Github"
                            target="_black"
                            rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="https://www.linkedin.com/in/pratik-gade-34530718b"
                            aria-label="Linkedin"
                            target="_black"
                            rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="https://www.hackerrank.com/profile/pratikgade0102"
                            aria-label="Hackerrank"
                            target="_black"
                            rel="noopener noreferrer">
                            <i className="fa-brands fa-hackerrank"></i>
                        </a>
                    &nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
