import About from "./components/application/about/About";
import Navbar from "./components/application/navbar/Navbar";

function App() {
    return (
        <main className="mx-8 my-8 bg-black">
            <Navbar />
            <About />
        </main>
    );
}

export default App;
