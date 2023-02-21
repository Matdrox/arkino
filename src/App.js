import imgPhotobooth from './images/photobooth.png';
import imgBackground1 from './images/background1.png';
import svgConstruction from './svg/construction.png';

function App() {
    return (
        // <div className='h-screen'>
        //     <div className='w-full h-full bg-main'>
        //         <img
        //             className='absolute w-full h-full'
        //             src={imgBackground1}
        //         ></img>
        //         <div className='absolute w-full h-full bg-black bg-opacity-25'></div>
        //         <div className='relative w-full h-full flex flex-col items-center justify-center'>
        //             <h1 className='text-8xl font-bold text-white'>ARKINO</h1>
        //             <h2 className='text-4xl font-bold text-white'>
        //                 blahjblahblha
        //             </h2>
        //         </div>
        //     </div>
        //     <div className='w-full h-full bg-black'>
        //         <div className='relative w-full h-full flex flex-col items-center justify-center'></div>
        //     </div>
        // </div>

        // <div className='h-screen text-white'>
        //     <div className='w-full h-1/3 flex flex-col gap-2 justify-center items-center'>
        //         <h1 className='text-8xl font-bold'>ARKINO</h1>
        //         <h2 className='text-5xl mb-10'>blhlha</h2>
        //         <button className='h-14 w-40 rounded-md px-4 py-2 font-bold bg-black hover:bg-white hover:text-black duration-150'>
        //             Discover
        //         </button>
        //     </div>
        // </div>

        <div className='h-full'>
            {/* <img className='w-1/2' src={svgConstruction} /> */}
            <div className='h-1/3 w-full mt-20 flex flex-col justify-center items-center'>
                <h1 className='text-9xl font-bold text-black text-center'>
                    SITE IS UNDER <br />
                    CONSTRUCTION
                </h1>
            </div>

            <div className='w-full flex flex-col justify-center items-center my-28'>
                <h2 className='w-[500px] py-2 pl-2 bg-white mr-60 text-center rounded-lg text-3xl'>
                    We love building new solutions.
                </h2>

                <h2 className='w-[700px] py-2 pl-2 bg-white ml-60 text-center rounded-lg text-3xl'>
                    We're currently working on something new.
                </h2>
            </div>

            <div className='flex flex-col justify-center items-center gap-5'>
                <h2 className='text-center text-3xl'>
                    Mail us while we're building
                </h2>

                <a href='mailto:cananau@kth.se'>
                    <button className='h-14 w-40 rounded-md px-4 py-2 font-bold bg-black text-white hover:bg-white hover:text-black duration-150'>
                        Discover
                    </button>
                </a>
            </div>

            <div className='mt-24'>
                <h1 className='text-5xl font-bold text-center'>ARKINO</h1>
            </div>
        </div>
    );
}

export default App;
