import About from "./components/application/about/About";
import Navbar from "./components/application/navbar/Navbar";
import Projects from "./components/application/projects/Projects";

function App() {
    return (
        <main className="mx-8 my-8 bg-black">
            <Navbar />
            <About />
            <Projects />
        </main>
    );
}

export default App;
