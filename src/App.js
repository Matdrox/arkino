import imgPhotobooth from './images/photobooth.png';
import imgBackground1 from './images/background1.png';
import svgConstruction from './svg/construction.png';
import imgArkinoFront from './images/imgArkinoFront.jpg';
import imgArkinoSide from './images/imgArkinoSide.jpg';
import imgArkinoFit from './images/imgArkinoFit.jpg';

function App() {
    return (
        <div>
            <div className='w-screen h-screen relative bg-slate-900'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='text-white/90 text-8xl z-10 font-bold'>
                        ARKINO
                    </div>
                    <div className='text-white/90 text-4xl z-10 text-center'>
                        Make your locales stand out and your guests smile
                    </div>
                    <div className='flex gap-5 m-4'>
                        <button className='w-32 h-12 z-10 text-xl rounded-md bg-purple-500/80 shadow-purple-500/80 shadow-2xl text-slate-900 transition hover:bg-orange-500 hover:shadow-orange-500'>
                            Contact
                        </button>
                        <button className='w-32 h-12 z-10 text-xl rounded-md border-2 border-purple-500/80 text-purple-500/80 shadow-purple-500/80 shadow-2xl transition hover:border-orange-500 hover:text-orange-500 hover:shadow-orange-500'>
                            About
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-screen h-screen bg-slate-900'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-14'>
                    <img
                        className='w-full h-auto object-cover rounded-3xl z-10 shadow-2xl shadow-white/80 border-8 border-white/90 transition hover:shadow-white/100 '
                        src={imgArkinoFront}
                        alt='Arkino Photobooth'
                    />
                    <div className='flex flex-col justify-center items-center z-10 text-center'>
                        <h2 class='text-2xl md:text-4xl font-bold mb-2 mt-10 md:mt-0'>
                            Why Arkino?
                        </h2>
                        <p className='text-white px-12'>
                            As a unique and innovative photobooth that creates a
                            fun and memorable experience for your customers, our
                            product helps you build an engaged customer base,
                            and increases your brand visibility and reputation.
                            Arkino is more than a photobooth - it's a smart
                            investment for your business.
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center z-10 text-center'>
                        <h2 class='text-2xl md:text-4xl font-bold mb-2 mt-10 md:mt-0'>
                            Beautiful Design
                        </h2>
                        <p className='text-white px-12'>
                            Arkino is not only functional, but also stylish and
                            elegant. It has a sleek and modern design that fits
                            any decor and space. You can choose from different
                            colors and themes to match your brand and mood.
                            Arkino also has a high-quality camera and screen
                            that capture and display stunning, fast images.
                            Arkino is a photobooth that looks as good as it
                            works.
                        </p>
                    </div>
                    <img
                        className='w-full h-auto object-cover rounded-3xl z-10 shadow-2xl shadow-white/80 border-8 border-white/90 transition hover:shadow-white/100'
                        src={imgArkinoSide}
                        alt='Arkino Photobooth'
                    />

                    <img
                        className='w-full h-auto object-cover rounded-3xl z-10 shadow-2xl shadow-white/80 border-8 border-white/90 transition hover:shadow-white/100'
                        src={imgArkinoFit}
                        alt='Arkino Photobooth'
                    />
                    <div className='flex flex-col justify-center items-center z-10 text-center'>
                        <h2 class='text-2xl md:text-4xl font-bold mb-2 mt-10 md:mt-0'>
                            A Perfect Fit
                        </h2>
                        <p className='text-white px-12'>
                            Arkino is a fun and engaging photobooth that lets
                            your customers take photos together and print them
                            out. You can customize it with your logo and
                            branding, and collect feedback and data from your
                            customers. Arkino is easy to use and support is
                            always ready to assist you. Reach out to us for more
                            information - we help figure out a plan that suits
                            your specific needs.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className='absolute h-[500px] w-[500px] left-40 top-40 bg-gradient-to-br from-yellow-400 to-red-500 opacity-50 rounded-full filter blur-3xl animate-blob'></div>
                <div className='absolute h-[400px] w-[400px] -right-40 top-0 bg-gradient-to-br from-cyan-400 to-purple-500 opacity-50 rounded-full filter blur-3xl animate-blob animation-delay-4000'></div>
                <div className='absolute h-[600px] w-[600px] right-40 top-[40rem] bg-gradient-to-br from-cyan-800 to-purple-300 opacity-50 rounded-full filter blur-3xl animate-blob animation-delay-4000'></div>
                <div className='absolute h-[500px] w-[500px] left-10 top-[80rem] bg-gradient-to-br from-orange-300 to-purple-500 opacity-50 rounded-full filter blur-3xl animate-blob animation-delay-4000'></div>
            </div>
        </div>

    );
}

export default App;
