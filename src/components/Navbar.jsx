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
                            <Image src='/Images/arrow.png' alt="Logo" className="logo-img" width={30} height={30} />
                            &nbsp;Portfolio Website @ Shreyas
                        </div>
                    </Link>
                </div>
                <a href="https://drive.google.com/file/d/1nrQr3nU1elSpQORkQmaZlIrBnd7aaqH9/view?usp=sharing" className="cta-btn">Resume/CV</a>
            </div>
            <hr />
        </>
    )
}

export default Navbar;
