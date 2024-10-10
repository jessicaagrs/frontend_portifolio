const SiteAreas = () => {
    return (
        <ul className="flex gap-10">
            <li className="relative after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:mt-1 after:duration-500 after:ease-in-out hover:after:w-full cursor-pointer">
                Sobre
            </li>
            <li className="relative after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:mt-1 after:duration-500 after:ease-in-out hover:after:w-full cursor-pointer">
                Projetos
            </li>
            <li className="relative after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:mt-1 after:duration-500 after:ease-in-out hover:after:w-full cursor-pointer">
                Contato
            </li>
        </ul>
    );
};

export default SiteAreas;
