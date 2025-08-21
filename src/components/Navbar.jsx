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
                <a href="https://drive.google.com/file/d/1KRmidF5PLSIocGl4Ax7QCnjiIgLSEQb5/view?usp=sharing" className="cta-btn">Resume/CV</a>
                <a href="https://drive.google.com/file/d/1qT2-6n1C46NMMAVGQ_IKeh1CRfJXhkas/view?usp=sharing" className="cta-btn">Academia</a>
            </div>
            <hr />
        </>
    )
}

export default Navbar;
