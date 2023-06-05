import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center mt-40">
            <p className="lg:text-5xl text-2xl font-extrabold text-center mx-auto">EAT UP AND ENJOY</p>
            <div className="grid lg:grid-cols-9 grid-cols-1">
                <p className="lg:col-start-3 lg:col-span-5 lg:text-2xl lg:px-0 col-start-1 col-span-1 text-base px-10 font-normal text-center mt-12">
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
                <div className="w-5/6 absolute grid grid-cols-2">
                    <div className="col-start-1 col-span-1 mb-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Cafe/cafe2.png" alt="cafe2" />
                    </div>
                    <div className="col-start-2 col-span-2 mb-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Cafe/cafe3.png" alt="cafe3" />
                    </div>
                    <div className="col-start-1 col-span-1 mt-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Cafe/cafe4.png" alt="cafe4" />
                    </div>
                    <div className="col-start-2 col-span-2 mt-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Cafe/cafe5.png" alt="cafe5" />
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p className="font-bold text-black lg:text-5xl text-lg text-center">CAFE MENU</p>
                <p className="font-semibold text-black lg:text-xl text-xs text-center lg:mt-6 mt-3">Open - 5 PM</p>
                <p className="font-semibold text-black lg:text-xl text-xs text-center lg:mt-6 mt-3">5 PM - Close</p>
                <NavLink to="/cafe" className="flex justify-center">
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </NavLink>
            </div>
        </div>
        <div className="lg:mt-10 mt-5 flex flex-row">
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p className="font-bold text-black lg:text-5xl text-lg text-center">BRUNCH/DINNER MENU</p>
                <p className="font-semibold text-black lg:text-xl text-xs text-center lg:mt-6 mt-3">Open - 5 PM</p>
                <p className="font-semibold text-black lg:text-xl text-xs text-center lg:mt-6 mt-3">DINNER - 5 PM Close</p>
                <NavLink to="/dinner" className="flex justify-center">
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </NavLink>
            </div>
            <div className="w-1/2 relative flex justify-end items-center">
                <img className="w-full" src="assets/Home/dinner.png" alt="cafe"/>
                <div className="w-5/6 absolute grid grid-cols-2">
                    <div className="col-start-1 col-span-1 mb-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Dinner/dinner2.png" alt="dinner2" />
                    </div>
                    <div className="col-start-2 col-span-2 mb-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Dinner/dinner3.png" alt="dinner3" />
                    </div>
                    <div className="col-start-1 col-span-1 mt-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Dinner/dinner4.png" alt="dinner4" />
                    </div>
                    <div className="col-start-2 col-span-2 mt-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Dinner/dinner5.png" alt="dinner5" />
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:mt-10 mt-5 flex flex-row">
            <div className="w-1/2 relative flex justify-start items-center">
                <img className="w-full" src="assets/Home/bar.png" alt="cafe"/>
                <div className="w-5/6 absolute grid grid-cols-2">
                    <div className="col-start-1 col-span-1 mb-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Bar/bar2.png" alt="bar2" />
                    </div>
                    <div className="col-start-2 col-span-2 mb-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Bar/bar3.png" alt="bar3" />
                    </div>
                    <div className="col-start-1 col-span-1 mt-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Bar/bar4.png" alt="bar4" />
                    </div>
                    <div className="col-start-2 col-span-2 mt-2 flex items-center justify-center">
                        <img className="rounded-full w-2/3" src="assets/Menu/Bar/bar5.png" alt="bar5" />
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <p className="font-bold text-black lg:text-5xl text-lg text-center">BAR MENU</p>
                <p className="font-semibold text-black lg:text-xl text-xs text-center lg:mt-6 mt-3">ALL DAY</p>
                <NavLink to="/bar" className="flex justify-center">
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default Home;