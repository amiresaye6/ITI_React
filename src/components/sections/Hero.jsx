import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900">
            <div className="absolute inset-0 z-0">
                <img
                    src='bgImage.avif'
                    alt="Coding Background"
                    className="h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-b from-gray-900/60 via-gray-900/80 to-gray-900"></div>
            </div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                    Amir <span className="text-indigo-500">Alsayed</span>
                </h1>

                <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide uppercase">
                    Fullstack Engineer
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="Status: 4 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <polyline points="7 11 12 16 17 11" />
                            <line x1="12" y1="4" x2="12" y2="16" />
                        </svg>
                        Download CV
                    </Button>
                    <Button
                        className="px-8 py-3 bg-transparent border border-gray-500 hover:border-white text-white font-semibold rounded-lg transition-all duration-300"
                    >
                        View Projects
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-gray-500 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero