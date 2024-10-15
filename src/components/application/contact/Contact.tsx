import { useInView } from "react-intersection-observer";
import { FormContact } from "./FormContact";
import Footer from "../footer/Footer";

export default function Contact() {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <section
            className={`mt-24 flex items-center flex-col justify-around gap-16 min-h-screen ${
                inView ? "opacity-100 blur-none translate-x-0" : "opacity-0 blur-sm translate-x-[-100%]"
            } transform transition-all duration-1000`}
            ref={ref}
            id="sectionContact"
        >
            <div className="flex flex-col items-center gap-24 w-full">
                <h1 className="md:text-4xl text-3xl mt-8">
                    Entre em <span className="font-bold text-green-500">contato</span>
                </h1>
                <FormContact />
            </div>
            <Footer />
        </section>
    );
}
