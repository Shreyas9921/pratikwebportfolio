//component/Footer.jsx
//Format the 
import formattedDateString from "./JScode/date";

const Footer = () => {
    return (
        <>
            <hr/>
            <div className="footer-container">
                <p>
                &copy;&nbsp; Pratik's Portfolio |&nbsp;{formattedDateString} 
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
        </>
    )
}

export default Footer;
