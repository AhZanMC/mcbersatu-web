import { useState, useEffect } from 'react';
import NavMenu from "../components/navmenu"

// import font
import "../assets/fonts/fonts.css";
import "../assets/fonts/Lato/Lato-Regular.ttf"
import "../assets/fonts/Lato/Lato-Black.ttf"
import "../assets/fonts/Open_Sans/static/OpenSans-Regular.ttf"



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
      <body style={{ fontFamily: 'OpenSansRegular, sans-serif' }} className="h-auto min-h-screen w-screen relative bg-gradient-to-bl from-[#ED1C24] from-10% to-[#871015] overflow-x-hidden select-none">
            
            
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

                      <h1 className="w-[20%] ml-[5%] text-white font-bold text-4xl text-left">
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

                        <h3 className='text-white text-4xl font-bold'>Pendaftaran</h3>
                        <p className="text-white text-sm font-normal text-justify
                                        dp:w-[40%] lp:w-[50%] tb:w-auto mb:w-auto">
                            1. Acara ini bertujuan untuk merayakan Hari Kemerdekaan Indonesia dengan cara yang unik dan kreatif, melibatkan 
                            komunitas Minecraft dalam sebuah perayaan yang menghormati sejarah dan persatuan nasional.
                            <br></br><br></br>
                            2. Acara ini dimaksudkan untuk menyatukan berbagai komunitas Minecraft yang ada di Indonesia, dari berbagai daerah dan 
                            latar belakang, dengan tujuan membangun solidaritas dan persatuan di antara para pemain.
                            <br></br><br></br>
                            3. Acara ini diharapkan dapat menginspirasi semua pihak yang terlibat untuk berkolaborasi, bertukar ide, dan 
                            mengekspresikan kemampuan mereka dalam lingkungan yang positif dan mendukung.
                            <br></br><br></br>
                            4. Dengan menyelenggarakan acara seperti Minecraft Bersatu, diharapkan akan tercipta sebuah komunitas yang lebih kuat 
                            dan berkelanjutan di dalam dunia Minecraft, di mana nilai-nilai persahabatan, kerjasama, dan rasa bangga 
                            akan terus ditanamkan dan dirayakan.
                        </p>

                    </div>

                    <div className='py-14 flex justify-around mx-auto gap-x-8
                                    dp:flex-row lp:flex-row tb:flex-col mb:flex-col
                                    dp:w-auto lp:w-auto tb:w-[80%] mb:w-auto'>

                        <h3 className='text-white text-4xl font-bold'>Perlombaan</h3>
                        <p className="text-white text-sm font-normal text-justify
                                        dp:w-[40%] lp:w-[50%] tb:w-auto mb:w-auto">
                            1. Acara ini bertujuan untuk merayakan Hari Kemerdekaan Indonesia dengan cara yang unik dan kreatif, melibatkan 
                            komunitas Minecraft dalam sebuah perayaan yang menghormati sejarah dan persatuan nasional.
                            <br></br><br></br>
                            2. Acara ini dimaksudkan untuk menyatukan berbagai komunitas Minecraft yang ada di Indonesia, dari berbagai daerah dan 
                            latar belakang, dengan tujuan membangun solidaritas dan persatuan di antara para pemain.
                            <br></br><br></br>
                            3. Acara ini diharapkan dapat menginspirasi semua pihak yang terlibat untuk berkolaborasi, bertukar ide, dan 
                            mengekspresikan kemampuan mereka dalam lingkungan yang positif dan mendukung.
                            <br></br><br></br>
                            4. Dengan menyelenggarakan acara seperti Minecraft Bersatu, diharapkan akan tercipta sebuah komunitas yang lebih kuat 
                            dan berkelanjutan di dalam dunia Minecraft, di mana nilai-nilai persahabatan, kerjasama, dan rasa bangga 
                            akan terus ditanamkan dan dirayakan.
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

                    <p style={{ fontFamily: 'LatoRegular, sans-serif' }} className="text-white text-center font-extralight text-xs">Proudly presented by &copy; Minecrafter Bersatu.</p>

          </footer>


      </body>
    );
}

export default Guide