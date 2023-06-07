import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center mt-40">
            <p id="caption" className="font-bold text-center mx-auto">EAT UP AND ENJOY</p>
            <div className="grid lg:grid-cols-9 grid-cols-1">
                <p id="content" className="lg:col-start-3 lg:col-span-5 lg:px-0 col-start-1 col-span-1 px-10 font-normal text-center mt-12">
                    Welcome to Myrtle Beach's first conveyor belt restaurant. We are excited to open our doors and offer
                    a unique and fun dining experience. Mura is not the traditional conveyor belt restaurant you may have
                    seen used for sushi. Our menu includes small bites ranging from our signature milk bread with seasonal
                    butter or house made sweet & savory spreads, to our play on the classic Wedge salad, traditional
                    Korean rice bowls, a variety of desserts, unique cocktails, and much more.
                </p>
            </div>
        </div>
        <div className="lg:mt-40 mt-20 flex lg:flex-row">
            <div className="w-1/2 relative flex justify-start items-center">
                <img className="w-full" src="assets/Home/cafe.png" alt="cafe"/>
                <div className="absolute h-full w-full xl:py-12 lg:py-7 md:py-6 py-2 xl:pr-16 lg:pr-9 md:pr-8 pr-2 left-0">
                    <img className="h-full w-full rounded-r-full" src="assets/Home/cafe_back.png" alt="cafe_back"/>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p id="cafe" className="font-bold text-black lg:text-5xl text-lg text-center">CAFE MENU</p>
                <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/cafe_logo.png" alt="cafe_logo"/>
                <NavLink to="/cafe" className="flex justify-center">
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </NavLink>
            </div>
        </div>
        <div className="lg:mt-10 mt-5 flex flex-row">
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p id="brunch" className="font-bold text-black lg:text-5xl text-lg text-center">BRUNCH/DINNER MENU</p>
                <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/brunch_logo.png" alt="brunch_logo"/>
                <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/dinner_logo.png" alt="dinner_logo"/>
                <NavLink to="/dinner" className="flex justify-center">
                    <image className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </NavLink>
            </div>
            <div className="w-1/2 relative flex justify-end items-center">
                <img className="w-full" src="assets/Home/dinner.png" alt="cafe"/>
                <div className="absolute h-full w-full xl:py-12 lg:py-7 md:py-6 py-2 xl:pl-16 lg:pl-9 md:pl-8 pl-2 right-0">
                    <img className="h-full w-full rounded-l-full" src="assets/Home/dinner_back.png" alt="dinner_back" />
                </div>
            </div>
        </div>
        <div className="lg:mt-10 mt-5 flex flex-row">
            <div className="w-1/2 relative flex justify-start items-center">
                <img className="w-full" src="assets/Home/bar.png" alt="cafe"/>
                <div className="absolute h-full w-full xl:py-12 lg:py-7 md:py-6 py-2 xl:pr-16 lg:pr-9 md:pr-8 pr-2 left-0">
                    <img className="h-full w-full rounded-r-full" src="assets/Home/bar_back.png" alt="bar_back" />
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p id="bar" className="font-bold text-black lg:text-5xl text-lg text-center">BAR MENU</p>
                <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/bar_logo.png" alt="bar_logo"/>
                <NavLink to="/bar" className="flex justify-center">
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default Home;