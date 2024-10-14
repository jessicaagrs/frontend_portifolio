import SiteAreas from "./SiteAreas";
import SocialNetworks from "./SocialNetworks";
import { useInView } from "react-intersection-observer";

export default function Navbar() {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
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
            <SiteAreas />
            <SocialNetworks />
        </nav>
    );
}
