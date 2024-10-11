import Slide from "./Slide";

export default function Projects() {
    return (
        <section className="mx-8 my-10 flex items-center flex-col gap-16">
            <h1 className="text-4xl mt-8">
                Alguns <span className="font-bold text-green-500">projetos</span> desenvolvidos
            </h1>
            <Slide />
        </section>
    );
}
