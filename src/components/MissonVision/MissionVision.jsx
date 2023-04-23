import React from 'react';
import { Link } from 'react-router-dom';

const MissionVision = () => {
    return (
        <section className='py-[65px] lg:py-[130px] font-roboto'>
            <div className='my-container grid lg:grid-cols-2 lg:gap-10'>
                <div>
                        <img src="https://bestwpware.com/react-templates/edumim/static/media/about1.4d7d45d168730de2759f.png" alt="" />
                </div>
                    <div className='pt-10 lg:pt-0 '>
                            <h5 className='title-name'>About Jh High School</h5>
                            <h2 className='title-text'>The Place Where You Can <span className='key-word'>Achieve</span></h2>
                            <p className='paragraph-text pt-6'>There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered.</p>
                            <div className='flex gap-4 items-center pt-10'>
                            <img src="https://bestwpware.com/react-templates/edumim/static/media/light.b64b29246594a9da972137e5b35e8e8f.svg" alt="" />
                            <div>
                                <h4 className='subtitle-text'>Our Mission</h4>
                                <p className='paragraph-text'>There Are Many Variations Of Passages Of The Lorem Ipsum Available.</p>
                            </div>
                            </div>
                            <div className='flex gap-4 items-center pt-10'>
                            <img src="https://bestwpware.com/react-templates/edumim/static/media/target.dcb7469324750a00248815cd116e89ae.svg" alt="" />
                            <div>
                                <h4 className='subtitle-text'>Our Vision</h4>
                                <p className='paragraph-text'>There Are Many Variations Of Passages Of The Lorem Ipsum Available.</p>
                            </div>
                            </div>
                            <div className='mt-10'>
                                <Link to='/' className='main-btn'>Read More Us</Link>
                            </div>
                    </div>
            </div>
          
        </section>
    );
};

export default MissionVision;