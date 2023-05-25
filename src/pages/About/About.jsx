
const About = () => {
    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:p-36 p-12">
                    <p className=" text-black lg:text-5xl text-2xl">Our Story</p>
                    <p className=" text-lg text-black mt-10 leading-10">
                        Welcome to Myrtle Beach’s first conveyor belt restaurant. 
                        We are excited to open our doors and offer a unique and fun dining experience. 
                        Mura is not the traditional conveyor belt restaurant you may have seen used for sushi. 
                        Our menu includes small bites ranging from our signature milk bread with seasonal butter 
                        or house made sweet & savory spreads, to our play on the classic Wedge salad, 
                        traditional Korean rice bowls, a variety of desserts, unique cocktails, and much more.
                    </p>
                </div>
                <div className="lg:p-36 p-12 bg-[#F5F5F5]">
                    <div className="flex items-center mt-5 cursor-pointer">
                        <img src="assets/svg/Vector_2.png" alt="food_menu"/>
                        <p className=" lg:text-5xl text-2xl text-black ml-8">Food Menu</p>
                    </div>
                    <div className="flex items-center ml-2 mt-12 cursor-pointer">
                        <img src="assets/svg/Vector.png" alt="drink_menu"/>
                        <p className=" lg:text-5xl text-2xl text-black ml-11">Drink Menu</p>
                    </div>
                    <div className="flex items-center mt-12 cursor-pointer">
                        <img src="assets/svg/Vector_1.png" alt="bakery_menu"/>
                        <p className=" lg:text-5xl text-2xl text-black ml-8">Bakery Menu</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative w-full">
                    <img className="w-full h-auto opacity-80" src="assets/main-1.png" alt="main-1" />
                    <div className="absolute inset-0 bg-black opacity-30 mix-blend-multiply" />
                </div>
                <div className="lg:p-36 p-12">
                    <p className=" text-black lg:text-5xl text-2xl">How it works</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <p className=" text-lg text-black lg:mt-10 mt-5 leading-10 lg:pr-5 pr-0">
                            First, check to see what number you are sitting at.  
                            If you custom order any food items, the plates will be on the belt with your number. 
                            Then, look to see each plate has a different color and each color represents a price. 
                        </p>
                        <p className=" text-lg text-black lg:mt-10 mt-5 leading-10 lg:pl-5 pl-0">
                            If you are needing a food modification due to an allergy or preference, 
                            there is no extra charge. Next, place your drink orders with the team member behind the bar! 
                            Enjoy!
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:flex lg:mt-12 lg:pt-0 pt-12 items-center bg-[#F5F5F5] pb-12">
                <div className="lg:w-2/5 w-full">
                    <p className="ml-20  text-black lg:text-5xl text-3xl h-50">Location</p>
                    <div className="ml-20 mt-20 flex">
                        <img className="h-full mt-2" src="assets/position.png" alt="position"/>
                        <div>
                            <p className=" text-black lg:text-3xl text-2xl">1390 Farrow Parkway 3A & B</p>
                            <p className=" text-black lg:text-3xl text-2xl">Myrtle beach, SC 29577</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/5 w-full">
                    <img className="lg:w-5/6 w-full flex justify-around" src="assets/map.png" alt="location"/>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1">
                <div className="bg-[#2F2F2F] border-r-2 border-white">
                    <p className="lg:ml-24 ml-12 mt-28  font-bold text-white text-3xl">CONTACT US</p>
                    <p className="lg:ml-24 ml-12 mt-5  font-thin text-white text-2xl">Sunday to Wednesday: 10AM - 10PM</p>
                    <p className="lg:ml-24 ml-12  font-thin text-white text-2xl">Thursday to Saturday: 10AM - 11PM</p>
                    <p className="lg:ml-24 ml-12 mt-5  font-thin text-white text-2xl">1390 Farrow Parkway 3A & B</p>
                    <p className="lg:ml-24 ml-12  font-thin text-white text-2xl">Myrtle Beach, SC 29577</p>
                    <p className="lg:ml-24 ml-12 mt-5  font-thin text-white text-2xl">888-888-8888</p>
                    <p className="lg:ml-24 ml-12 mb-12  font-thin text-white text-2xl">info@muramb.com</p>
                </div>
                <div className="bg-[#2F2F2F] border-r-2 border-white flex justify-center flex-col">
                    <p className="lg:ml-24 ml-5 mt-10  font-bold text-white text-2xl">OUR NEWSLETTER</p>
                    <input
                        type="email"
                        placeholder="your email"
                        className="relative lg:ml-24 ml-5 mt-3 mb-10  text-black text-lg lg:w-3/5 w-4/5 px-5 py-3 rounded-md"
                    />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <img className="w-40 h-20 cursor-pointer md:mt-16 md:mb-16" src="assets/Logo/logo.png" alt="logo"/>
                    <div className="flex flex-col ml-3 md:mt-16 md:mb-16">
                        <img className="cursor-pointer" src="assets/instagram.png" alt="instagram" />
                        <img className="mt-3 cursor-pointer" src="assets/facebook.png" alt="facebook" />
                    </div>
                </div>
            </div>
            </>
    )
}

export default About;