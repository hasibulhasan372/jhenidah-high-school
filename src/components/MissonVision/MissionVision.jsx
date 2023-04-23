import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid'

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
                            <p className='paragraph-text'>There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered.</p>
                            <div>
                            <EnvelopeIcon className="h-6 w-6 text-[rgb(123,123,138)]" />
                            </div>
                    </div>
            </div>
          
        </section>
    );
};

export default MissionVision;