import { FormContact } from "./FormContact";

export default function Contact() {
    return (
        <section className="mx-8 my-10 flex items-center flex-col gap-16">
            <h1 className="text-4xl mt-8">
                Entre em <span className="font-bold text-green-500">contato</span>
            </h1>
            <FormContact />
        </section>
    );
}
