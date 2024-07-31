import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import '../index.css'

const StickySection = () => {

    return (
        <section className="relative w-full h-full mt-14 flex justify-around mx-auto gap-x-8
                                            dp:flex-row lp:flex-row tb:flex-col mb:flex-col
                                            dp:px-14 lp:px-14 tb:px-14 mb:px-6">

            <div className="sticky block top-14 bottom-0 dp:w-[40%] lp:w-[40%] tb:w-[80%] mb:w-[100%] mx-auto">
                <h3 className='text-white text-4xl font-bold'>Tanya Jawab</h3>
                <p className="text-white text-sm font-normal text-justify w-auto mt-4">
                    Temukan jawaban yang mungkin ingin kamu ketahui terkait acara ini!
                </p>
            </div>

            <div className='mt-14 text-white mx-auto
                                        dp:w-[40%] lp:w-[40%] tb:w-[80%] mb:w-[100%]'>

                            <ul uk-accordion="collapsible: false">
                                <li className='uk-open border-white border-b p-4'>
                                    <a className="uk-accordion-title">tes1</a>
                                    <div className="uk-accordion-content">tes</div>
                                </li>
                                <li className='border-white border-b p-4'>
                                    <a className="uk-accordion-title">tes2</a>
                                    <div className="uk-accordion-content">tes</div>
                                </li>
                                <li className='border-white border-b p-4'>
                                    <a className="uk-accordion-title">tes3</a>
                                    <div className="uk-accordion-content">tes</div>
                                </li>
                                <li className='border-white border-b p-4'>
                                    <a className="uk-accordion-title">tes4</a>
                                    <div className="uk-accordion-content">tes</div>
                                </li>
                                <li className='border-white border-b p-4'>
                                    <a className="uk-accordion-title">tes4</a>
                                    <div className="uk-accordion-content">tes</div>
                                </li>
                                <li className='border-white border-b p-4'>
                                    <a className="uk-accordion-title">tes4</a>
                                    <div className="uk-accordion-content">tes</div>
                                </li>
                            </ul>
                            
            </div>

        </section>
    );
};

export default StickySection;
