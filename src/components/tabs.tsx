import React from 'react';

const Tabs: React.FC = () => {
  return (
    <div className='dp:w-[50%] lp:w-[50%] tb:w-[80%] mb:w-[100%] 
                    dp:mt-0 lp:mt-0 tb:mt-14 mb:mt-14 mx-auto'>
        <ul className="flex uk-child-width-expand text-white/70 text-base uk-tab" uk-tab="true" uk-switcher="animation: uk-animation-fade">
            <li className="uk-active"><a style={{color: "white"}} href="#">7 Agustus 2024</a></li>
            <li><a style={{color: "white"}} href="#">24 Agustus 2024</a></li>
            <li><a style={{color: "white"}} href="#">25 Agustus 2024</a></li>
        </ul>

        {/* tab content */}
        <ul className="uk-switcher uk-margin w-full text-white text-sm h-[45vh] overflow-y-auto scrollbar-thin scrollbar-webkit">

            <li>
                <div className='flex gap-x-8 my-4 w-full'>
                    <p className='text-white/80 w-[30%]'>12.00 WIB - 20/08</p>
                    <div className='w-[90%]'>
                        <h5 className='text-white font-bold text-lg'>Pendaftaran peserta & submisi (Minigames & karya)</h5>
                        <p className='text-white/80'>Dibuka pendaftaran peserta semua lomba dan submisi lomba karya hingga tanggal 20 Agustus 2024.</p>
                    </div>
                </div>            
            </li>

            <li>
                <div className='flex gap-x-8 my-4 w-full'>
                    <p className='text-white/80 w-[30%]'>15.45 - 16.00 WIB</p>
                    <div className='w-[90%]'>
                        <h5 className='text-white font-bold text-lg'>Upacara pembukaan</h5>
                        <p className='text-white/80'>Memulai acara dengan upacara dan pengenalan singkat tentang acara</p>
                    </div>
                </div>
                <div className='flex gap-x-8 my-4 w-full'>
                    <p className='text-white/80 w-[30%]'>16.10 WIB - Selesai</p>
                    <div className='w-[90%]'>
                        <h5 className='text-white font-bold text-lg'>Perlombaan babak eliminasi dan penilaian karya</h5>
                        <p className='text-white/80'>Peserta memainkan minigames untuk memenangkan babak eliminasi dan penilaian submisi 
                                                        hasil dari lomba karya serta penentuan tim minigames yang lolos ke babak final</p>
                    </div>
                </div>
                {/* <div className='flex gap-x-8 my-4 w-full'>
                    <p className='text-white/80 w-[30%]'>17.15 - 17.30 WIB</p>
                    <div className='w-[90%]'>
                        <h5 className='text-white font-bold text-lg'>Seleksi babak final</h5>
                        <p className='text-white/80'>Panitia melakukan seleksi terhadap peserta lomba minigames untuk melanjutkan babak final</p>
                    </div>
                </div> */}
            </li>

            <li>
                <div className='flex gap-x-8 my-4 w-full'>
                    <p className='text-white/80 w-[30%]'>12.45 - 13.00 WIB</p>
                    <div className='w-[90%]'>
                        <h5 className='text-white font-bold text-lg'>Upacara Pembukaan final</h5>
                        <p className='text-white/80'>Memulai babak final dengan upacara untuk disiarkan langsung</p>
                    </div>
                </div>
                <div className='flex gap-x-8 my-4 w-full'>
                    <p className='text-white/80 w-[30%]'>13.10 - 14.10 WIB</p>
                    <div className='w-[90%]'>
                        <h5 className='text-white font-bold text-lg'>Perlombaan babak final</h5>
                        <p className='text-white/80'>Peserta memainkan minigames untuk memenangkan babak final</p>
                    </div>
                </div>
                <div className='flex gap-x-8 my-4 w-full'>
                    <p className='text-white/80 w-[30%]'> 14.15 WIB - Selesai</p>
                    <div className='w-[90%]'>
                        <h5 className='text-white font-bold text-lg'>Penutupan & After party</h5>
                        <p className='text-white/80'>Acara ditutup dengan pengumuman pemenang dan hiburan</p>
                    </div>
                </div>
            </li>

        </ul>

    </div>
  );
};

export default Tabs;
