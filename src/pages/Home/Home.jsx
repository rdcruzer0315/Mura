import About from "../About/About";

const Home = () => {
    return (
        <>
        <div className="overflow-auto">
            <div className="relative flex items-center justify-center">
                <div className="relative flex justify-between items-center w-full">
                    <img className="w-full opacity-80" src="assets/main.png" alt="A new way of eating"/>
                    <div class="absolute inset-0 bg-black opacity-60 mix-blend-multiply" />
                </div>
                <div className="absolute">
                    <p className="text-white lg:text-5xl text-lg font-sans">A new way of eating</p>
                </div>
            </div>
        </div>
        <About />
        </>
    )
}

export default Home;