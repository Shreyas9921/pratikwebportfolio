//components/Navbar.jsx

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="logo">
                    <Link href="/">
                        <div className="logo-text">
                            <Image src='/Images/phoenix.jpg' alt="Logo" className="logo-img" width={50} height={50} />
                            &nbsp;Personal Portfolio
                        </div>
                    </Link>
                </div>
                <a href="https://drive.google.com/file/d/11e4ECl7WE15YHOvD3MNmFvO65Tblp9A9/view?usp=sharing" className="cta-btn">Resume/CV</a>
            </div>
            <hr />
        </>
    )
}

export default Navbar;
