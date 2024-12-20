import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import { useState } from "react";

const App = () => {
    const [cursorVariant] = useState("default");

    return (
        <main className="max-w-7xl mx-auto relative">
            <CustomCursor cursorVariant={cursorVariant} />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;