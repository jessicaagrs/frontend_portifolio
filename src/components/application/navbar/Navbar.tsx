import { useState } from "react";
import { useInView } from "react-intersection-observer";
import MenuMobile from "./MenuMobile";
import SiteAreas from "./SiteAreas";
import SocialNetworks from "./SocialNetworks";

export default function Navbar() {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const [isVisible, setIsVisible] = useState(false);

    const handleMenu = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <nav
                className={`flex justify-between items-center ${
                    inView ? "opacity-100 blur-none translate-x-0" : "opacity-0 blur-sm translate-x-[-100%]"
                } transform transition-all duration-1000`}
                ref={ref}
            >
                <div>
                    <h1 className="text-2xl hover:shadow-xl hover:shadow-green-500/50">
                        Jessica<span className="font-bold text-green-500">AG</span>
                    </h1>
                </div>
                <button
                    className="bg-[url('/hamburger-menu.svg')] bg-cover w-8 h-8 md:hidden"
                    onClick={handleMenu}
                ></button>
                <SiteAreas />
                <SocialNetworks />
            </nav>
            {isVisible && (
                <MenuMobile
                    visibleItems={isVisible}
                    closeMenu={handleMenu}
                />
            )}
        </>
    );
}
