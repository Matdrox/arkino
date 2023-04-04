import React from 'react';
import imgArkinoSide from './images/imgArkinoSide.jpg';

const Landing = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center'>
            {/* H1 saying ARKINO on top of image */}
            <h1 className='text-4xl text-white font-bold m-10 z-10 font-Encode text-shadow glow absolute'>
                ARKINO
            </h1>
            <div className='w-full h-full flex items-center z-10 p-32'>
                <div className='grid grid-cols-5 grid-rows-1 z-10'>
                    <div className='col-start-4 col-span-2'>
                        <h1 className='text-7xl text-white font-blod '>
                            Öka omsättningen med Photo Booth
                        </h1>
                        <h2 className='text-2xl'>En kassako för nattklubbar</h2>
                    </div>
                </div>
            </div>

            {/* Div that makes imgArkinoSide be the background with a dark overlay */}
            <div className='w-full h-full absolute z-0'>
                <div className='w-full h-full bg-gradient-to-br from-black/30 to-black/90 absolute'></div>
                <img
                    src={imgArkinoSide}
                    alt='Arkino Side'
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    );
};

export default Landing;
