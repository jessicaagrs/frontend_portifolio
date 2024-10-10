export default function About() {
    return (
        <section className="flex gap-8 items-center w-full mt-8">
            <div className="w-2/4">
                <h1 className="text-4xl mb-8">
                    Desenvolvedora <span className="font-bold text-green-500">Web</span>
                </h1>
                <p className="indent-8 text-justify text-base">
                    Olá! Sou desenvolvedora web apaixonada por tecnologia, estou no mercado há mais de dois anos. Atuei
                    em grandes empresas do ramo e em segmentos diversos, como soluções ERP, mobile e web. Nesse período
                    tive a oportunidade atuar sempre como full stack, com diversas tecnologias como Javascript,
                    Typescript, NodeJS, C#, NET, React e outras. Acredito que programação vai além do código, é entregar
                    produtos que façam a diferença para o cliente, auxiliem em suas conquistas e tragam inovação ao
                    mercado. Além do desenvolvimento, no dia a dia gosto de explorar novos aprendizados, buscar novas
                    referencias de projetos e praticar. Referente a soft skills, tenho autonomia, disciplina na atuação
                    remota, boa comunicação e fácil adaptabilidade. Estou sempre em busca de novos desafios e
                    oportunidades de crescimento.
                </p>
            </div>

            <div className="w-2/4">
                <img
                    src="src/assets/images/about-image.png"
                    alt="imagem abstrata e notebook"
                    className="max-w-2xl"
                />
            </div>
        </section>
    );
}
