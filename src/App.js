import imgPhotobooth from './images/photobooth.png';
import imgBackground1 from './images/background1.png';
import svgConstruction from './svg/construction.png';

function App() {
    return (
        <div className='w-screen h-screen relative bg-slate-900 overflow-hidden'>
            <div className='absolute h-[500px] w-[500px] left-40 top-40 bg-gradient-to-br from-yellow-400 to-red-500 opacity-50 rounded-full filter blur-3xl animate-blob'></div>
            <div className='absolute h-[500px] w-[500px] -right-40 bg-gradient-to-br from-cyan-400 to-purple-500 opacity-50 rounded-full filter blur-3xl animate-blob animation-delay-4000'></div>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='text-white text-8xl z-10 font-bold'>ARKINO</div>
                <div className='text-white text-4xl z-10 '>
                    We are currently building something new
                </div>
                <br />
                <div className='flex gap-5'>
                    <button className='w-32 h-12 text-xl rounded-md bg-purple-500 shadow-purple-500 shadow-2xl text-slate-900 transition hover:bg-orange-500 hover:shadow-orange-500'>
                        Contact
                    </button>
                    <button className='w-32 h-12 text-xl rounded-md border-2 border-purple-500 text-purple-500 shadow-purple-500 shadow-2xl transition hover:border-orange-500 hover:text-orange-500 hover:shadow-orange-500'>
                        About
                    </button>
                </div>
            </div>
        </div>

        // <div className='h-screen text-white'>
        //     <div className='w-full h-1/3 flex flex-col gap-2 justify-center items-center'>
        //         <h1 className='text-8xl font-bold'>ARKINO</h1>
        //         <h2 className='text-5xl mb-10'>blhlha</h2>
        //         <button className='h-14 w-40 rounded-md px-4 py-2 font-bold bg-black hover:bg-white hover:text-black duration-150'>
        //             Discover
        //         </button>
        //     </div>
        // </div>

        // <div className='h-full'>
        //     {/* <img className='w-1/2' src={svgConstruction} /> */}
        //     <div className='h-1/3 w-full mt-20 flex flex-col justify-center items-center'>
        //         <h1 className='text-9xl font-bold text-black text-center'>
        //             SITE IS UNDER <br />
        //             CONSTRUCTION
        //         </h1>
        //     </div>

        //     <div className='w-full flex flex-col justify-center items-center my-28'>
        //         <h2 className='w-[500px] py-2 pl-2 bg-white mr-60 text-center rounded-lg text-3xl'>
        //             We love building new solutions.
        //         </h2>

        //         <h2 className='w-[700px] py-2 pl-2 bg-white ml-60 text-center rounded-lg text-3xl'>
        //             We're currently working on something new.
        //         </h2>
        //     </div>

        //     <div className='flex flex-col justify-center items-center gap-5'>
        //         <h2 className='text-center text-3xl'>
        //             Mail us while we're building
        //         </h2>

        //         <a href='mailto:cananau@kth.se'>
        //             <button className='h-14 w-40 rounded-md px-4 py-2 font-bold bg-black text-white hover:bg-white hover:text-black duration-150'>
        //                 Discover
        //             </button>
        //         </a>
        //     </div>

        //     <div className='mt-24'>
        //         <h1 className='text-5xl font-bold text-center'>ARKINO</h1>
        //     </div>
        // </div>
    );
}

export default App;
