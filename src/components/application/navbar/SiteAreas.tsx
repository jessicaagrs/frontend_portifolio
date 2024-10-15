type SiteAreasProps = {
    isView?: boolean;
    closeMenu?: () => void;
};

const SiteAreas = ({ isView, closeMenu }: SiteAreasProps) => {
    return (
        <ul className={`${isView ? "flex flex-col items-center mt-8" : "hidden"} md:flex gap-10`}>
            <li className="relative after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:mt-1 after:duration-500 after:ease-in-out hover:after:w-full cursor-pointer">
                <a
                    href="#sectionAbout"
                    onClick={closeMenu}
                >
                    Sobre
                </a>
            </li>
            <li className="relative after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:mt-1 after:duration-500 after:ease-in-out hover:after:w-full cursor-pointer">
                <a
                    href="#sectionProject"
                    onClick={closeMenu}
                >
                    Projetos
                </a>
            </li>
            <li className="relative after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:mt-1 after:duration-500 after:ease-in-out hover:after:w-full cursor-pointer">
                <a
                    href="#sectionContact"
                    onClick={closeMenu}
                >
                    Contato
                </a>
            </li>
        </ul>
    );
};

export default SiteAreas;
