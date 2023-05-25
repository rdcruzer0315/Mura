
const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-40">
                <p className="text-5xl font-extrabold text-center mx-auto">EAT FUN. DRINK BETTER.</p>
                <div className="grid grid-cols-9">
                    <p className="col-start-3 col-span-5 text-2xl font-semibold text-center mt-12">
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
                    {/* <svg viewBox="0 0 100 86" xmlns="http://www.w3.org/2000/svg">
                        <path id="circle"
                            d="M 0,10 L 46,10 C 66,10 100,33 66,58 C 66,58 56,66 46,66 L 0,66" 
                            fill="black" 
                            stroke="transparent"
                            strokeWidth={10}
                        />
                        <text style={{ fontSize: "3px"}}>
                            <textPath xlinkHref="#circle">
                                CON PANCAKES SAUSAGE FRENCH TOAST SOUFLE PANCAKE EGG FRITTATA MILK BREAD FRUIT CORN DOG S WEDGE SALAD KOREA STREET T
                            </textPath>
                        </text>
                    </svg> */}
                    <img className="w-full" src="assets/Home/cafe.png" alt="cafe"/>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <p className="font-bold text-black text-5xl text-center">CAFE MENU</p>
                    <p className="font-semibold text-black text-xl text-center lg:mt-6 mt-3">INCLUDE WITH</p>
                    <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/cafe_logo.png" alt="cafe_logo"/>
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </div>
            </div>
            <div className="lg:mt-10 mt-5 flex flex-row">
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <p className="font-bold text-black text-5xl text-center">DINNER MENU</p>
                    <p className="font-semibold text-black text-xl text-center lg:mt-6 mt-3">INCLUDE WITH</p>
                    <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/dinner_logo.png" alt="cafe_logo"/>
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
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
                    <p className="font-bold text-black text-5xl text-center">BAR MENU</p>
                    <p className="font-semibold text-black text-xl text-center lg:mt-6 mt-3">INCLUDE WITH</p>
                    <img className="w-1/2 lg:mt-6 mt-3" src="assets/Home/bar_logo.png" alt="cafe_logo"/>
                    <img className="w-1/2 lg:mt-6 mt-3 cursor-pointer" src="assets/see_menu.png" alt="cafe_logo"/>
                </div>
            </div>
            <div className="lg:mt-40 mt-20">
                <img className="w-full" src="assets/Home/map.png" alt="map" />
            </div>
            <div className="mt-10 pb-20 grid lg:grid-cols-3 grid-cols-1">
                <div className="lg:col-start-1 lg:col-span-1 w-full">
                    <p className="font-bold text-black text-2xl text-center tracking-widest">CONTACT</p>
                    <p className="font-bold text-black text-xl text-center tracking-widest">+1 813-123-5678</p>
                    <p className="font-bold text-black text-xl text-center tracking-widest cursor-pointer">INFO@MURAMB.COM</p>
                </div>
                <div className="lg:col-start-2 lg:col-span-1 w-full lg:mt-0 mt-10">
                    <p className="font-bold text-black text-2xl text-center tracking-widest">OPEN HOURS</p>
                    <p className="font-bold text-black text-xl text-center tracking-widest">Sunday to Wednesday</p>
                    <p className="font-bold text-black text-xl text-center tracking-widest">10 AM - 10 PM</p>
                    <p className="font-bold text-black text-xl text-center tracking-widest">Thursday to Saturday</p>
                    <p className="font-bold text-black text-xl text-center tracking-widest">10 AM - 11 PM</p>
                </div>
                <div className="lg:col-start-3 lg:col-span-1 w-full lg:mt-0 mt-10">
                    <p className="font-bold text-black text-2xl text-center tracking-widest">SOCIAL NETWORK</p>
                    <p className="font-bold text-black text-xl text-center tracking-widest">+1 813-123-5678</p>
                </div>
            </div>
        </>
    )
}

export default Home;