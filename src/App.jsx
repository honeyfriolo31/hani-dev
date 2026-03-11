import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Experience from "./components/Experience";

function App() {
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-2">
        {/* <Navbar /> */}
      <Profile />
      {/* <Hero /> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-6 gap-2"> */}
      <About />
      <Experience />
      {/* </div> */}
       <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App