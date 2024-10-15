import SiteAreas from "./SiteAreas";
import SocialNetworks from "./SocialNetworks";

type MenuMobileProps = {
    visibleItems: boolean;
    closeMenu: () => void;
};

const MenuMobile = ({ visibleItems, closeMenu }: MenuMobileProps) => {
    return (
        <>
            <div
                className="bg-neutral-900/90 w-full h-full fixed top-0 left-0 z-[88888]"
                onClick={closeMenu}
            ></div>
            <div className="bg-black h-screen fixed top-0 right-0 w-4/5 z-[99999] overscroll-y-none">
                <button
                    className="bg-[url('/cross-1.svg')] bg-cover w-8 h-8 m-3 md:hidden"
                    onClick={closeMenu}
                ></button>
                <div>
                    <SiteAreas
                        isView={visibleItems}
                        closeMenu={closeMenu}
                    />
                    <SocialNetworks
                        isView={visibleItems}
                        closeMenu={closeMenu}
                    />
                </div>
            </div>
        </>
    );
};

export default MenuMobile;
