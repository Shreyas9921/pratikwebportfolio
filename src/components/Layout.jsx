// components/Layout.jsx

import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Hero />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;