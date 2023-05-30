import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center mt-40">
            <p className="lg:text-5xl text-2xl font-extrabold text-center mx-auto">EAT UP AND ENJOY</p>
            <div className="grid lg:grid-cols-9 grid-cols-1">
                <p className="lg:col-start-3 lg:col-span-5 lg:text-2xl lg:px-0 col-start-1 col-span-1 text-base px-10 font-semibold text-center mt-12">
                    Welcome to Myrtle Beach's first conveyor belt restaurant. We are excited to open our doors and offer
                    a unique and fun dining experience. Mura is not the traditional conveyor belt restaurant you may have
                    seen used for sushi. Our menu includes small bites ranging from our signature milk bread with seasonal
                    butter or house made sweet & savory spreads, to our play on the classic Wedge salad, traditional
                    Korean rice bowls, a variety of desserts, unique cocktails, and much more.
                </p>
            </div>
        </div>
        <div className="lg:mt-40 mt-20 flex flex-row">
            <div className="w-1/2">
                <img className="w-full" src="assets/Home/cafe.png" alt="cafe"/>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p className="font-bold text-black lg:text-5xl text-lg text-center">CAFE MENU</p>
                <p className="font-semibold text-black lg:text-xl text-xs text-center lg:mt-6 mt-3">INCLUDE WITH</p>
                <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/cafe_logo.png" alt="cafe_logo"/>
                <NavLink to="/cafe" className="flex justify-center">
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </NavLink>
            </div>
        </div>
        <div className="lg:mt-10 mt-5 flex flex-row">
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p className="font-bold text-black lg:text-5xl text-lg text-center">DINNER MENU</p>
                <p className="font-semibold text-black lg:text-xl text-xs text-center lg:mt-6 mt-3">INCLUDE WITH</p>
                <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/dinner_logo.png" alt="cafe_logo"/>
                <NavLink to="/dinner" className="flex justify-center">
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </NavLink>
            </div>
            <div className="w-1/2">
                <img className="w-full" src="assets/Home/dinner.png" alt="cafe"/>
            </div>
        </div>
        <div className="lg:mt-10 mt-5 flex flex-row">
            <div className="w-1/2">
                <img className="w-full" src="assets/Home/bar.png" alt="cafe"/>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p className="font-bold text-black lg:text-5xl text-lg text-center">BAR MENU</p>
                <p className="font-semibold text-black lg:text-xl text-xs text-center lg:mt-6 mt-3">INCLUDE WITH</p>
                <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/bar_logo.png" alt="cafe_logo"/>
                <NavLink to="/bar" className="flex justify-center">
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default Home;