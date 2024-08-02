import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const NavMenu = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [, setAnimate] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            setAnimate(true);
        } else {
            const timer = setTimeout(() => {
                setAnimate(false);
            }, 500); // Durasi harus sesuai dengan durasi animasi slideUp

            return () => clearTimeout(timer);
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleClose = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="minecraft-five dp:flex lp:flex tb:flex mb:hidden justify-around items-center w-full px-4 text-white">
                <a onClick={() => navigate("/")} className="text-white text-base mr-4 cursor-pointer uk-text-decoration-none uk-link-reset uk-button-text">Beranda</a>
                <a onClick={() => navigate("/about")} className="text-white text-base mr-4 cursor-pointer uk-text-decoration-none uk-link-reset uk-button-text">Tentang</a>
                <a onClick={() => navigate("/guide")} className="text-white text-base mr-4 cursor-pointer uk-text-decoration-none uk-link-reset uk-button-text">Panduan</a>
                <a onClick={() => navigate("/help")} className="text-white text-base cursor-pointer uk-text-decoration-none uk-link-reset uk-button-text">Bantuan</a>
            </nav>

            <div className="minecraft-five dp:hidden lp:hidden tb:hidden mb:block text-white cursor-pointer" onClick={() => navigate("/")}>
                <img src="/mcb.png" alt="MCB-Logo" className="h-[25px] w-auto" />
            </div>

            <button onClick={toggleMenu} className="minecraft-five dp:hidden lp:hidden tb:hidden mb:flex text-white text-base">
                <a className="uk-text-decoration-none uk-link-reset uk-button-text">Menu</a>
            </button>


            {menuOpen && (
                <div className="minecraft-five dp:hidden lp:hidden tb:hidden mb:flex flex-col h-screen w-screen absolute inset-0 py-[3.6vh] bg-[#790000] text-white">
                    
                    <div className="flex justify-between w-full mb-4 z-50">
                        <div className="text-white pl-8 cursor-pointer" onClick={() => navigate("/")}>
                            <img src="/mcb.png" alt="MCB-Logo" className="h-[25px] w-auto" />
                        </div>
                        <button onClick={toggleClose} className="text-white text-base pr-8 pt-[2px] focus:text-[#ED1C24]">
                            Tutup
                        </button>
                    </div>

                    <nav
                        className={`flex flex-col bg-[#790000] items-center h-screen w-full py-20 ${
                            menuOpen ? 'animate-slideDown' : 'animate-slideUp'
                        }`}
                    >
                        <a onClick={() => navigate("/")} className="w-auto text-center my-4 text-white text-base uk-text-decoration-none uk-link-reset uk-button-text">Beranda</a>
                        <a onClick={() => navigate("/about")} className="w-auto text-center my-4 text-white text-base uk-text-decoration-none uk-link-reset uk-button-text">Tentang</a>
                        <a onClick={() => navigate("/guide")} className="w-auto text-center my-4 text-white text-base uk-text-decoration-none uk-link-reset uk-button-text">Panduan</a>
                        <a onClick={() => navigate("/help")} className="w-auto text-center my-4 text-white text-base uk-text-decoration-none uk-link-reset uk-button-text">Bantuan</a>
                    </nav>
                
                </div>
            )}
        </>
    );
}


export default NavMenu;