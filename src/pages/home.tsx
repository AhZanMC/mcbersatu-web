import { useState, useEffect } from 'react';
import NavMenu from "../components/navmenu"
import Tabs from '../components/tabs'
import Marquee from '../components/marquee'

const Home = () => {

    //fungsi efek navbar
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

    //fungsi efek parallax
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {   
        const handleScroll = () => {
        setScrollX(window.scrollY);
        setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //fungsi tombol link gform
    const handleClick = () => {
        window.open('https://forms.gle/SjtBpzxYCv2kgyH67', '_blank'); //pasang link gform
      };

    
    return (
        <div className="open-sans h-auto w-screen bg-cover bg-scroll bg-gradient-to-bl from-[#ED1C24] from-10% to-[#790000] overflow-x-hidden select-none">
            

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
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6 pt-[30vh] pb-[30vh]' 
                                    style={{ backgroundImage: `url("/mcb-bg.png")` }}>

                    <div className='w-full flex flex-col items-center' style={{ transform: `translateY(${scrollY * -0.2}px)` }}>

                        <div className='w-auto h-auto mb-[5vh] items-center'>

                            <h1 className='minecraft-dungeons tracking-wide text-white text-5xl font-bold text-center leading-relaxed'>
                                #MCBERSATU 2024
                            </h1>

                            <p className='lato-regular text-white mt-2 text-3xl font-semibold text-center'>
                                Vol. 2
                            </p>

                            <h4 className='lato-regular text-white mt-10 text-3xl mx-auto text-center
                                            dp:w-[70%] lp:w-[60%] tb:w-[80%] mb:w-[100%]'>
                                IKUTI PERLOMBAAN MINECRAFT TERBESAR DALAM MERAYAKAN HUT KE 79 TAHUN RI !
                            </h4>

                            <button className='minecraft-five text-[#ED1C24] text-center font-normal text-xl tracking-wider p-2 h-12 dp:w-[30%] lp:w-[35%] tb:w-[50%] mb:w-[80%] bg-white rounded-[30px] 
                                            mx-auto block hover:bg-transparent hover:border-white hover:border hover:text-white focus:opacity-40 
                                           mt-10 shrink transition-all duration-300' 
                                    onClick={handleClick}
                            >
                                Daftar Sekarang
                            </button>

                        </div>

                    </div>

                </section>


                {/* Section 2 */}
                <section className='relative w-full h-full mt-14
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6'>

                    <img src="/mcb-pattern.png" className='absolute -z-1 scale-150 h-[25vh] object-cover -left-[30vw]
                                                            dp:-top-[30vh] lp:-top-[35vh] tb:-top-[35vh] mb:-top-[30vh]' 
                                                style={{ transform: `translateX(${scrollX* 0.5}px)` }} />
                    
                    <div className='mt-40 relative w-full 
                                    dp:h-[70vh] lp:h-[70vh] tb:h-[70vh] mb:h-[80vh]'>

                        <video
                            src="/mcb-2023.mp4"
                            uk-video="autoplay: inview"
                            loop
                            muted
                            className="w-full h-full object-cover shadow-[4px_3px_10px_3px_rgba(0,0,0,0.3)] opacity-30"
                        ></video>

                        <div
                            className="absolute w-full h-full inset-0 justify-center items-center text-white text-4xl bg-gradient-to-bl from-[#D91A21] from-[25%]
                                        dp:flex lp:flex tb:block mb:block dp:p-[3%] lp:p-[3%] tb:p-[10%] mb:p-[10%]"
                        >
                            <div className='relative dp:w-[35%] lp:w-[40%] tb:w-[80%] mb:w-[100%]
                                            dp:h-full lp:h-full tb:h-[28%] mb:h-[25%]'>

                                <h3 className='lato-black text-white text-4xl font-bold mx-auto
                                                dp:mx-auto lp:mx-auto tb:mx-0 mb:mx-auto
                                                dp:w-[80%] lp:w-[80%] tb:w-[80%] mb:w-[100%]
                                                dp:mb-20 lp:mb-20 tb:mb-8 mb:mb-8 '>Linimasa dan Susunan Acara</h3>

                                <div className='w-[80%] h-auto flex gap-8 items-center absolute bottom-0 left-0'>

                                    <img src="/mcb.png" alt="MCB-Logo" title='Minecrafter Bersatu' className='minecraft-five dp:block lp:block tb:hidden mb:hidden h-[60px] w-auto'/>
                                    
                                    <p className='text-white text-xs text-left text-pretty hyphens-auto'>
                                        Minecrafter Bersatu adalah acara kolaborasi antar komunitas Minecraft se-Indonesia!
                                        Acara ini diselenggarakan untuk merayakan hari kemerdekaan Republik Indonesia.
                                    </p>
                                    
                                </div>

                            </div>
                            
                            <Tabs />

                        </div>
                    </div>

                </section>


                {/* Section 3 */}
                <section className='w-full h-full mt-20
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6'>
                    <div className="uk-card uk-card-body items-center bg-[#871015]/70 h-auto 
                                    border-[5px] border-t-[#790000] border-r-[#790000] border-b-[#ED1C24] border-l-[#ED1C24]">

                        <h3 className="lato-black text-white text-center text-4xl font-bold mb-8">Rayakan Hari Kemerdekaan Bersama</h3>

                        <p className="lato-regular mx-auto text-white text-center text-sm
                                                                                        dp:w-[60%] lp:w-[80%] tb:w-[80%] mb:w-[100%]">
                            Hai, Minecrafter! Mari kita meriahkan perayaan hari Kemerdekaan Indonesia yang ke-79 tahun ini dengan kreativitas dan semangat juang! 
                            Kami mengundang kalian untuk berpartisipasi dalam acara Minecraft Bersatu 2024 untuk merayakan hari Kemerdekaan RI.</p>

                        <button className='lato-regular text-white text-center text-base p-auto h-10 dp:w-[25%] lp:w-[25%] tb:w-[40%] mb:w-[70%] border border-white rounded-[10px] 
                                        mb:mx-auto block | mb-4 hover:text-white/40 focus:opacity-40 
                                        mt-14 transition-all duration-300'
                                onClick={handleClick}
                        >
                            Daftar Sekarang
                        </button>
                        <a className='lato-regular mx-auto block text-white text-center text-xs hover:text-red-300 focus:opacity-40' href="/about">Pelajari selengkapnya</a>

                    </div>
                    
                </section>


                {/* Section 4 */}
                <section className='w-full h-full mt-14
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6'>

                    <div className='h-auto py-14'>

                        <h5 style={{fontWeight: 'bold'}} className='lato-regular text-white text-center text-xl font-bold mb-14'>In Collaboration With</h5>
                        <Marquee />

                    </div>
                    
                    <div className='grid gap-8 gap-y-24 content-start py-14 h-auto
                                    dp:grid-cols-2 lp:grid-cols-2 tb:grid-cols-1 mb:grid-cols-1'>

                        <div>

                            <h5 style={{fontWeight: 'bold'}} className='lato-regular text-white text-center text-xl font-bold mb-14'>Official Dev</h5>
                            <div className='flex justify-center'>

                                <div className='grid content-start justify-between gap-x-20 gap-y-14 grid-cols-2'>

                                    <a href="https://s.id/HikaruStudioMedia" className="shrink-0 w-auto" uk-tooltip="title: Hikaru Studio; pos: bottom">
                                        <img src="/logos/partner/hikaru.png" className="h-28 mx-auto" />
                                    </a>

                                    <a href="https://discord.gg/ud5VJubg2N" className="shrink-0 w-auto" uk-tooltip="title: YueMi Development; pos: bottom">
                                        <img src="/logos/partner/yuemidev.png" className="h-28 mx-auto" />
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div>

                            <h5 style={{fontWeight: 'bold'}} className='lato-regular text-white text-center text-xl font-bold mb-14'>Event Partner</h5>
                            <div className='flex justify-center'>

                                <div className='grid content-start justify-between gap-x-12 gap-y-14 grid-cols-3'>

                                    <a href="https://www.instagram.com/sirkel.friendss/" className="shrink-0 w-auto" uk-tooltip="title: Sirkel Friends; pos: bottom">
                                        <img src="/logos/partner/sirkelfren.png" className="h-28 mx-auto" />
                                    </a>

                                    <a href="https://invs.studio/" className="shrink-0 w-auto" uk-tooltip="title: Invious Visuals; pos: bottom">
                                        <img src="/logos/partner/invious.png" className="h-28 mx-auto" />
                                    </a>

                                    <a href="https://www.instagram.com/dreamlightedu/" className="shrink-0 w-auto" uk-tooltip="title: Dreamlight Education; pos: bottom">
                                        <img src="/logos/partner/dreamlightedu.png" className="h-28 mx-auto" />
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div>

                            <h5 style={{fontWeight: 'bold'}} className='lato-regular text-white text-center text-xl font-bold mb-14'>Media Partner</h5>
                            <div className='flex justify-center'>

                                <div className='grid content-start justify-between gap-x-12 gap-y-14 grid-cols-2'>
                                    
                                    <a href="https://mcsejati.site/news" className="shrink-0 w-auto" uk-tooltip="title: Warta Minecraft; pos: bottom">
                                        <img src="/logos/partner/wartamc.png" className="h-28 mx-auto" />
                                    </a>

                                    <a href="https://neoteric.eu.org/discord" className="shrink-0 w-auto" uk-tooltip="title: NTC Department; pos: bottom">
                                        <img src="/logos/partner/neoteric.png" className="h-28 mx-auto" />
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div>

                            <h5 style={{fontWeight: 'bold'}} className='lato-regular text-white text-center text-xl font-bold mb-14'>Sponsored By</h5>
                            <div className='flex justify-center'>

                                <div>
                                    <a href="https://www.lenovo.com/" className="shrink-0 w-auto" uk-tooltip="title: Lenovo; pos: bottom">
                                        <img src="/logos/sponsor/lenovo.png" className="h-28 mx-auto" />
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* Section 5 */}
                <section className='w-full h-full mt-32
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6'>

                    <div>
                        <h3 className="lato-black text-white text-4xl font-bold ml-24 mb-8
                                                                                        dp:ml-24 lp:ml-24 tb:ml-18 mb:ml-12">Arsip</h3>
                        <div className='flex justify-arround w-full py-4'>
                            <a style={{ fontFamily: 'LatoRegular, sans-serif' }} className='mx-auto block text-white text-center text-sm hover:text-red-300 focus:opacity-40' 
                            title='Vol.1' href="https://www.youtube.com/live/2fII-MVkp14?si=ZaSxMJBqJ3ApCI0z">[2023]</a>
                            <a style={{ fontFamily: 'LatoRegular, sans-serif' }} className='mx-auto block text-white text-center text-sm hover:text-red-300 focus:opacity-40' 
                            title='Vol.2: Belum tersedia' >[2024]</a>
                            <a style={{ fontFamily: 'LatoRegular, sans-serif' }} className='mx-auto block text-white text-center text-sm hover:text-red-300 focus:opacity-40' 
                            title='Vol.3: Akan datang' >[2025]</a>
                        </div>
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
    )
}

export default Home
