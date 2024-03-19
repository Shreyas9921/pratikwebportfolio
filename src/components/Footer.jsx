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
                    <a
                     href="https://twitter.com/TheGreatTitan21"
                     aria-label="Twitter"
                     target="_black"
                     rel="noopener noreferrer">
                     <i className="fa-brands fa-twitter"></i>
                     </a>
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
                     href="https://instagram.com/_shreyas_9921_"
                     aria-label="Instagram"
                     target="_black"
                     rel="noopener noreferrer">
                     <i className="fa-brands fa-instagram"></i>
                     </a>
                </div>
            </div>
        </>
    )
}

export default Footer;