import { StickyContainer, Sticky } from 'react-sticky';
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import '../index.css'


const StickySection = () => {


    return (
        <section className="w-full -mt-10 flex justify-around mx-auto gap-x-8
                            dp:flex-row lp:flex-row tb:flex-col mb:flex-col
                            dp:px-14 lp:px-14 tb:px-14 mb:px-6 h-auto">
            
            <StickyContainer className="flex justify-around mx-auto gap-x-8
                            dp:flex-row lp:flex-row tb:flex-col mb:flex-col
                            dp:px-14 lp:px-14 tb:px-14 mb:px-6
                            w-full">
                                
                <Sticky>
                  {({
                    style,
                  }) => (
                    // dp:w-[40%] lp:w-[40%] tb:w-[80%] mb:w-[100%] mx-auto
                    <header className="w-full mx-auto mt-20 lp:block hidden" style={style}>
                        <h3 className='text-white text-4xl font-bold w-96'>Pertanyaan Umum</h3>
                        <p className="text-white text-sm font-normal text-start mt-4 w-96">
                            Temukan jawaban yang mungkin ingin kamu ketahui terkait acara ini!
                        </p>
                    </header>
                  )}
                </Sticky>

                <div className="w-full mx-auto mt-20 lp:hidden z-20 -mb-28">
                    <h3 className='text-white text-4xl font-bold w-auto'>Pertanyaan Umum</h3>
                    <p className="text-white text-sm font-normal text-start mt-4 w-auto">
                        Temukan jawaban yang mungkin ingin kamu ketahui terkait acara ini!
                    </p>
                </div>

                <div className='lp:mt-32 mt-40 text-white/90 lp:ml-auto lp:mx-0 mx-auto
                                dp:w-[40%] lp:w-[40%] tb:w-[80%] mb:w-[100%] h-auto'>
                    <ul uk-accordion="collapsible: false">
                        <li className='uk-open border-white border-b p-4'>
                            <a className="uk-accordion-title text-white font-semibold">Minecrafter Bersatu itu acara apa?</a>
                            <div className="uk-accordion-content text-sm">Minecrafter Bersatu adalah acara perayaan hari kemerdekaan Indonesia, yang dirancang khusus oleh gabungan berbagai komunitas Minecraft yang ada di Indonesia.</div>
                        </li>
                        <li className='border-white border-b p-4'>
                            <a className="uk-accordion-title text-white font-semibold">Kapan dan dimana Minecraft Bersatu 2024 diadakan?</a>
                            <div className="uk-accordion-content text-sm">Rangkaian dan jadwal acara akan diumumkan di sosial media @mcbersatu (Instagram dan Twitter/X) atau @mcbersatuid (TikTok). Pastikan kamu menyiapkan aplikasi Discord dan game Minecraftnya ya.. Karena acara ini diadakan secara online!</div>
                        </li>
                        <li className='border-white border-b p-4'>
                            <a className="uk-accordion-title text-white font-semibold">Apakah acara ini terbuka untuk umum?</a>
                            <div className="uk-accordion-content text-sm">Ya, acara ini terbuka untuk kamu yang bermain atau menyukai game Minecraft dan berdomisili di Indonesia serta berstatus sebagai Warga Negara Indonesia (WNI). Perlu diketahui bahwa, kamu juga merupakan seorang anggota di salah satu komunitas kolaborator kami, jika kamu belum menjadi anggota di salah satunya, kamu bisa bergabung terlebih dahulu kok!</div>
                        </li>
                        <li className='border-white border-b p-4'>
                            <a className="uk-accordion-title text-white font-semibold">Bagaimana cara mengikuti acara ini?</a>
                            <div className="uk-accordion-content text-sm">Kamu bisa mendaftar sebagai peserta dengan mengisi form yang dapat ditemukan melalui tombol “Ikuti acara” di halaman beranda website ini.</div>
                        </li>
                        <li className='border-white border-b p-4'>
                            <a className="uk-accordion-title text-white font-semibold">Apakah acara ini berbayar untuk diikuti?</a>
                            <div className="uk-accordion-content text-sm">Tentu saja tidak!! Acara ini pastinya GRATIS!!!</div>
                        </li>
                        <li className='border-white border-b p-4'>
                            <a className="uk-accordion-title text-white font-semibold">Apa saja kegiatan yang akan dilakukan?</a>
                            <div className="uk-accordion-content text-sm">Kamu dapat mengikuti kegiatan perlombaan minigames dan perlombaan karya berhadiah, serta juga terdapat server pameran. Penjelasan selengkapnya bisa dibaca di halaman “Panduan”</div>
                        </li>
                        <li className='border-white border-b p-4'>
                            <a className="uk-accordion-title text-white font-semibold">Edisi Minecraft apakah yang digunakan dalam acara ini?</a>
                            <div className="uk-accordion-content text-sm">Java? Bedrock? Kenapa tidak keduanya saja?! Ya, Java dan Bedrock bisa mengikuti acara ini, namun pastikan versi Minecraftmu yang terbaru ya!</div>
                        </li>
                    </ul>
                </div>

            </StickyContainer>

        </section>
    );
};

export default StickySection;



