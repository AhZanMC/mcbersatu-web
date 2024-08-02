import { useState, useEffect } from 'react';
import NavMenu from "../components/navmenu"
import Countdown from "../components/countdown"
import Tabs from '../components/tabs'
import Marquee from '../components/marquee'
import getImage from '../utils/getImage';



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

    //fungsi tombol link gform
    const handleClick = () => {
        window.location.href = ''; //pasang link gform
      };

    
    return (
        <div className="open-sans h-auto w-screen bg-cover bg-scroll bg-gradient-to-bl from-[#ED1C24] from-10% to-[#871015] overflow-x-hidden select-none">
            

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
                                    dp:pt-[65vh] lp:pt-[60vh] tb:pt-[55vh] mb:pt-[40vh] |
                                    dp:pb-[25vh] lp:pb-[24vh] tb:pb-[15vh] mb:pb-[5vh]' 
                                    style={{ backgroundImage: `url("/mcb-bg.png")` }}>

                    <div className='flex justify-between dp:flex-row lp:flex-row tb:flex-col mb:flex-col align-center' uk-parallax="y: 0%, -100%">

                        <div className='dp:w-[25%] lp:w-[35%] tb:w-[70%] mb:w-[70%] h-auto flex gap-8  
                                    mb-[5vh] items-center'>

                            <img src="/mcb.png" alt="MCB-Logo" title='Minecrafter Bersatu' className='minecraft-five dp:block lp:block tb:block mb:hidden h-[60px] w-auto'/>
                            
                            <p className='text-white text-sm text-left text-pretty hyphens-auto'>
                                Minecrafter Bersatu adalah acara kolaborasi antar komunitas Minecraft se-Indonesia!
                                Acara ini diselenggarakan untuk merayakan hari kemerdekaan Republik Indonesia.
                            </p>

                        </div>

                        <div className='dp:w-[35%] lp:w-[45%] tb:w-[80%] mb:w-[100%] | 
                                        h-auto | block | dp:mx-0 lp:mx-0 tb:mx-auto mb:mx-auto | 
                                        bg-[#871015]/70 px-7 py-5 rounded-[30px]'>

                            <div className='dp:block lp:block tb:block mb:flex justify-between items-end text-white text-right right-0'>
                                <p className='lato-regular text-3xl my-0 font-bold'>Vol.2</p>
                                <p className='text-base my-0'>24 Agustus 2024</p>
                            </div>

                            <Countdown targetDate={new Date('2024-08-24T15:45:00')} />
                            
                            <button className='lato-regular text-white text-center text-xs p-auto h-9 dp:w-[30%] lp:w-[30%] tb:w-[25%] mb:w-[50%] border border-white rounded-[30px] 
                                            dp:mr-0 lp:mr-0 tb:mr-0 mb:mr-1/2 mb:mx-auto block | mb-4 hover:text-white/40 focus:opacity-40 
                                            dp:-mt-4 lp:-mt-4 tb:-mt-4 mb:mt-0 shrink transition-all duration-300'
                                    onClick={handleClick}
                            >
                                Ikuti acara
                            </button>

                        </div>

                    </div>

                </section>


                {/* Section 2 */}
                <section className='relative w-full h-full mt-14
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6'>

                    <img src="/mcb-pattern.png" className='absolute z-10 scale-150 h-[25vh] object-cover 
                                                            dp:-top-[18vh] lp:-top-[18vh] tb:-top-[18vh] mb:-top-[10vh]' 
                                                uk-parallax="x: -40%, 10%" />
                    
                    <div className='relative w-full h-[70vh]'>
                        <video
                            src="/mcb-2023.mp4"
                            uk-video="autoplay: inview"
                            loop
                            muted
                            className="w-full h-full object-cover shadow-[4px_3px_10px_3px_rgba(0,0,0,0.3)] opacity-70"
                        ></video>
                        <div
                            className="minecraft-font absolute w-full h-full inset-0 flex justify-center items-center text-white text-4xl font-black text-center bg-gradient-to-bl from-[#D91A21] from-[15%]"
                        >
                            #MCBERSATU 2024
                        </div>
                    </div>

                </section>


                {/* Section 3 */}
                <section className='w-full h-full mt-14
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6'>

                    <div className='flex dp:flex-row lp:flex-row tb:flex-row mb:flex-col py-14
                                    dp:justify-between lp:justify-between tb:justify-between mb:justify-center'>

                        <h3 className='lato-black text-white text-4xl font-bold mx-auto mb-8 
                                                                                        dp:w-[20%] lp:w-[30%] tb:w-[30%] mb:w-[80%]'>Linimasa dan Susunan Acara</h3>

                        <Tabs />

                    </div>
    
                </section>


                {/* Section 4 */}
                <section className='w-full h-full mt-14
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6'>
                    <div className="uk-card uk-card-body items-center bg-[#871015]/70 h-auto 
                                    border-[5px] border-t-[#790000] border-r-[#790000] border-b-[#ED1C24] border-l-[#ED1C24]">

                        <h3 className="lato-black text-white text-center text-4xl font-bold mb-8">Rayakan Hari Kemerdekaan Bersama</h3>

                        <p className="lato-regular mx-auto text-white text-center text-sm
                                                                                        dp:w-[60%] lp:w-[80%] tb:w-[80%] mb:w-[100%]">
                            Hai, Minecrafter! Mari kita meriahkan perayaan hari Kemerdekaan Indonesia yang ke-79 tahun ini dengan kreativitas dan semangat juang! 
                            Kami mengundang kalian untuk berpartisipasi dalam acara Minecraft Bersatu 2024 untuk merayakan hari Kemerdekaan RI.</p>

                        <button className='lato-regular text-white text-center text-xs p-auto h-9 dp:w-[25%] lp:w-[25%] tb:w-[40%] mb:w-[70%] border border-white rounded-[10px] 
                                        mb:mx-auto block | mb-4 hover:text-white/40 focus:opacity-40 
                                        mt-14 transition-all duration-300'
                                onClick={handleClick}
                        >
                            Ikuti acara
                        </button>
                        <a className='lato-regular mx-auto block text-white text-center text-xs hover:text-red-300 focus:opacity-40' href="/about">Pelajari selengkapnya</a>

                    </div>
                    
                </section>


                {/* Section 5 */}
                <section className='w-full h-full mt-14
                                    dp:px-14 lp:px-14 tb:px-14 mb:px-6'>

                    <div className='h-auto py-14'>

                        <h5 className='lato-regular text-white text-center text-xl font-bold mb-14'>In Collaboration With</h5>
                        <Marquee />

                    </div>
                    
                    <div className='grid gap-8 gap-y-24 content-start py-14 h-auto
                                    dp:grid-cols-2 lp:grid-cols-2 tb:grid-cols-1 mb:grid-cols-1'>

                        <div>

                            <h5 className='lato-regular text-white text-center text-xl font-bold mb-14'>Official Dev</h5>
                            <div className='flex justify-center'>

                                <div>
                                    <a href="https://s.id/HikaruStudioMedia" className="shrink-0 w-auto" uk-tooltip="title: Hikaru Studio; pos: bottom">
                                        <img src={getImage('../../public/logos/partner', 'hikaru', 'png')} className="h-28 mx-12" />
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div>

                            <h5 className='lato-regular text-white text-center text-xl font-bold mb-14'>Event Partner</h5>
                            <div className='flex justify-center'>

                                <div className='grid content-start justify-between gap-x-12 gap-y-14 grid-cols-3'>

                                    <a href="https://www.instagram.com/sirkel.friendss/" className="shrink-0 w-auto" uk-tooltip="title: Sirkel Friends; pos: bottom">
                                        <img src="./public/logos/partner/sirkelfren.png" className="h-28" />
                                    </a>

                                    <a href="https://invs.studio/" className="shrink-0 w-auto" uk-tooltip="title: Invious Visuals; pos: bottom">
                                        <img src="./public/logos/partner/invious.png" className="h-28" />
                                    </a>

                                    <a href="https://www.instagram.com/dreamlightedu/" className="shrink-0 w-auto" uk-tooltip="title: Dreamlight Education; pos: bottom">
                                        <img src="./public/logos/partner/dreamlightedu.png" className="h-28" />
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div>

                            <h5 className='lato-regular text-white text-center text-xl font-bold mb-14'>Media Partner</h5>
                            <div className='flex justify-center'>

                                <div className='grid content-start justify-between gap-x-12 gap-y-14 grid-cols-3'>
                                    
                                    <a href="https://mcsejati.site/news" className="shrink-0 w-auto" uk-tooltip="title: Warta Minecraft; pos: bottom">
                                        <img src="./public/logos/partner/wartamc.png" className="h-28" />
                                    </a>

                                    <a href="https://neoteric.eu.org/discord" className="shrink-0 w-auto" uk-tooltip="title: NTC Department; pos: bottom">
                                        <img src="./public/logos/partner/neoteric.png" className="h-28" />
                                    </a>

                                    <a href="" className="shrink-0 w-auto" uk-tooltip="title: Placeholder; pos: bottom">
                                        <img src="./public/logos/placeholder.png" className="h-28" />
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div>

                            <h5 className='lato-regular text-white text-center text-xl font-bold mb-14'>Sponsored By</h5>
                            <div className='flex justify-center'>

                                <div>
                                    <a href="" className="shrink-0 w-auto" uk-tooltip="title: Placeholder; pos: bottom">
                                        <img src="./public/logos/placeholder.png" className="h-28" />
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* Section 6 */}
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

