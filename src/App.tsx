import About from "./components/application/about/About";
import Contact from "./components/application/contact/Contact";
import Navbar from "./components/application/navbar/Navbar";
import Projects from "./components/application/projects/Projects";

function App() {
    return (
        <main className="mx-8 my-8 bg-black">
            <Navbar />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}

export default App;
