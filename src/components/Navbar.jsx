//components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                <div className="logo-text">
                    Portfolio Web@Shreyas
                </div>
                </Link>
            </div>
            <a href="" className="cta-btn">Resume/CV</a>
        </div>
    )
}

export default Navbar;