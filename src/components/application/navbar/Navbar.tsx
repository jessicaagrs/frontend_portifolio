import SiteAreas from "./SiteAreas";
import SocialNetworks from "./SocialNetworks";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
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
