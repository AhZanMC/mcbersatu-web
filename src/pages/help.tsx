import { useState, useEffect } from 'react';
import NavMenu from "../components/navmenu"
import StickySection from "../components/stickyfaq"


const Help = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.location.href = ''; // pasang link tiket discord
    };

    return (
        <div className="open-sans h-auto min-h-screen w-screen relative bg-gradient-to-bl from-[#ED1C24] from-10% to-[#871015] overflow-x-hidden select-none">
            

            {/* Navbar */}
            <header className={`fixed z-50 inset-0 w-screen h-[10%] transition-all duration-300 ${scrolled ? 'backdrop-blur-3xl' : ''}`}>

                <div className="relative h-full flex justify-between items-center p-4 dp:px-0 lp:px-0 tb:px-0 mb:px-8">
                    <NavMenu />
                </div>

            </header>


            {/* Main */}
            <main>

                {/* Section 1 */}
                <section className='w-full h-full bg-left-top bg-no-repeat bg-cover
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6 |
                                    dp:pt-[50vh] lp:pt-[50vh] tb:pt-[55vh] mb:pt-[40vh] |
                                    dp:pb-[45vh] lp:pb-[45vh] tb:pb-[15vh] mb:pb-[5vh]' 
                                    style={{ backgroundImage: `url("/mcb-bg.png")` }}>

                    <h1 className="lato-black w-[20%] ml-[5%] text-white font-bold text-4xl text-left">
                        BANTUAN MINECRAFTER BERSATU
                    </h1>

                </section>


                {/* Section 2 */}
                <StickySection/>


                {/* Section 3 */}
                <section className='w-full h-full pt-40
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6'>
                    <div className="p-4 bg-[#871015]/70 h-auto flex justify-around items-center
                                    dp:flex-row lp:flex-row tb:flex-col mb:flex-col 
                                    border-[5px] border-t-[#790000] border-r-[#790000] border-b-[#ED1C24] border-l-[#ED1C24]">
                        <h3 className="lato-black text-white text-4xl font-bold m-8 
                                        dp:text-start lp:text-start tb:text-center mb:text-center
                                        dp:w-[30%] lp:w-[40%] tb:w-[65%] mb:w-[100%]">
                            Butuh Bantuan atau Menemukan Masalah?
                        </h3>

                        <button className='lato-regular text-white text-center text-xs p-auto h-9 dp:w-[20%] lp:w-[25%] tb:w-[40%] mb:w-[70%] border border-white rounded-[10px] 
                                    dp:mx-14 lp:mx-14 tb:mx-auto mb:mx-auto block dp:my-auto lp:my-auto tb:my-8 mb:my-8 hover:text-white/40 focus:opacity-40 
                                    transition-all duration-300'
                                onClick={handleClick}>
                            Hubungi Panitia
                        </button>
                    </div>
                </section>


            </main>


            {/* Footer */}
            <footer className='w-full h-full mt-14 mx-auto py-20 flex items-center
                                dp:flex-row lp:flex-row tb:flex-col mb:flex-col
                                dp:justify-between lp:justify-between tb:justify-center mb:justify-center
                                dp:px-24 lp:px-24 tb:px-24 mb:px-6'>
                <div className='flex gap-x-8 text-white uk-link-reset
                                dp:order-2 lp:order-2 tb:order-none mb:order-none
                                dp:py-0 lp:py-0 tb:py-8 mb:py-8
                                dp:mx-0 lp:mx-0 tb:mx-auto mb:mx-auto'>
                    <a href="https://www.instagram.com/mcbersatu/" uk-icon="icon: instagram; ratio: 1.5"></a>
                    <a href="https://www.tiktok.com/@mcbersatuid" uk-icon="icon: tiktok; ratio: 1.5"></a>
                    <a href="https://www.x.com/mcbersatu/" uk-icon="icon: x; ratio: 1.5"></a>
                </div>

                <p className="text-white text-center font-extralight text-xs">Proudly presented by &copy; Minecrafter Bersatu.</p>
            </footer>
            
        </div>
    );
}

export default Help;




