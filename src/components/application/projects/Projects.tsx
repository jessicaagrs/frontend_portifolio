import Slide from "./Slide";
import { useInView } from "react-intersection-observer";

export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <section
            className={`mx-8 my-10 flex items-center justify-center flex-col gap-16 min-h-screen ${
                inView ? "opacity-100 blur-none translate-x-0" : "opacity-0 blur-sm translate-x-[-100%]"
            } transform transition-all duration-1000`}
            ref={ref}
            id="sectionProject"
        >
            <h1 className="text-4xl mt-8">
                Alguns <span className="font-bold text-green-500">projetos</span> desenvolvidos
            </h1>
            <Slide />
        </section>
    );
}
