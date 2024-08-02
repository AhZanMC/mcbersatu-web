import { useState, useEffect } from 'react';
import NavMenu from "../components/navmenu"



const Guide = () => {
    
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

                        <h1 style={{ fontFamily: 'LatoBlack, sans-serif' }} className="w-[20%] ml-[5%] text-white font-bold text-4xl text-left">
                            PANDUAN MINECRAFTER BERSATU
                        </h1>

                </section>


                {/* Section 2 */}
                <section className='w-full h-full mt-14
                                        dp:px-14 lp:px-14 tb:px-14 mb:px-6'>

                        <div className='dp:flex lp:flex tb:block mb:block mx-auto gap-14 items-start
                                        dp:w-[auto] lp:w-auto tb:w-[80%] mb:w-auto
                                        dp:justify-between lp:justify-between tb:justify-center mb:justify-center'>

                            <p className="text-white text-sm font-normal text-justify my-0
                                            dp:w-[50%] lp:w-[50%] tb:w-auto mb:w-auto">
                                
                                Dalam Acara Minecrafter Bersatu, akan terdapat 2 (dua) jenis perlombaan yang diselenggarakan, 
                                yaitu Perlombaan Minigames dan Perlombaan Karya. Selain itu, terdapat Server Exhibition yang 
                                akan dibuka sebelum dan saat perlombaan berlangsung. Peserta yang mampu meraih peringkat juara 
                                akan mendapatkan hadiah sesuai dengan lomba yang diikuti dan peringkat yang didapatkan.
                                
                            </p>
                            
                        </div>

                        <div className='py-14 mt-14 flex justify-around mx-auto gap-x-8
                                        dp:flex-row lp:flex-row tb:flex-col mb:flex-col
                                        dp:w-auto lp:w-auto tb:w-[80%] mb:w-auto'>

                            <h3 className='text-white text-left text-4xl font-bold mb-8
                                            dp:w-[10%] lp:w-[20%] tb:w-auto mb:w-auto'>Perlombaan Minigames</h3>
                            <p className="text-white text-sm font-normal text-justify
                                            dp:w-[50%] lp:w-[60%] tb:w-auto mb:w-auto">
                                Dalam kegiatan ini, peserta akan mengikuti serangkaian minigames atau permainan ringan yang disediakan di dalam game 
                                Minecraft melalui server. Peserta akan mendaftar sebagai tim berisi 4 (empat) orang dan berlomba untuk mendapatkan 
                                skor tim tertinggi untuk memenangkan perlombaan bersama.
                                <br></br><br></br>
                                Mode permainan : Tim (1 Tim terdiri dari 4 Peserta)<br></br>
                                Sistem permainan : Akumulasi Poin Tim; Tim dengan poin akumulasi tertinggi dari seluruh permainan akan menjadi 
                                pemenang dalam lomba.
                            </p>

                        </div>

                        <div className='py-14 flex justify-around mx-auto gap-x-8
                                        dp:flex-row lp:flex-row tb:flex-col mb:flex-col
                                        dp:w-auto lp:w-auto tb:w-[80%] mb:w-auto'>

                            <h3 className='text-white text-left text-4xl font-bold mb-8
                                            dp:w-[10%] lp:w-[20%] tb:w-auto mb:w-auto'>Perlombaan Karya</h3>
                            <p className="text-white text-sm font-normal text-justify
                                            dp:w-[50%] lp:w-[60%] tb:w-auto mb:w-auto">
                                Tidak hanya permainan, namun juga terdapat lomba khusus yang dapat diikuti oleh peserta yang ingin mengekspresikan diri 
                                dengan unjuk keterampilan, karya, dan kreativitas yang dimiliki.
                                <br></br><br></br>
                                Game Mode : Individu<br></br>
                                Game system : Submisi melalui Google Form (untuk skin contest) dan Build di server Minecraft (untuk build battle). 
                                Karya akan dinilai oleh juri berdasarkan variabel komponen penilaian yang disepakati.
                            </p>

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

export default Guide
