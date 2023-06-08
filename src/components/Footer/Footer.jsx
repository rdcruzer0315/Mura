import { NavLink } from "react-router-dom";
import MapContainer from "../MapContainer/MapContainer";

const Footer = () => {
    return (
        <>
        <div className="lg:my-40 my-20 flex shadow shadow-gray-500">
            <MapContainer />
        </div>
        <div className="mt-10 pb-20 grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-start-1 lg:col-span-1 w-full">
                <p className="font-bold text-black lg:text-2xl text-lg text-center tracking-widest">CONTACT</p>
                <div className="flex flex-row items-center justify-center lg:mt-8 mt-3 cursor-pointer">
                    <img className="lg:w-6 w-4" src="assets/phone.png" alt="phone"/>
                    <p className="font-bold text-[#F5ECE6] ml-4 lg:text-xl text-xs text-center tracking-widest">+1 _______________</p>
                </div>
                <div className="flex flex-row items-center justify-center cursor-pointer lg:mt-3 mt-1">
                    <img className="lg:w-6 w-4" src="assets/email.png" alt="email"/>
                    <p className="font-bold text-black ml-4 lg:text-xl text-xs text-center tracking-widest">INFO@MURAMB.COM</p>
                </div>
            </div>
            <div className="lg:col-start-2 lg:col-span-1 w-full lg:mt-0 mt-10">
                <p className="font-bold text-black lg:text-2xl text-lg text-center tracking-widest">HOURS OF OPERATION</p>
                <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest">Monday - Wednesday</p>
                <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest">12 PM - 10 PM</p>
                <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest">Thursday to Sunday</p>
                <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest">11 AM - 11 PM</p>
            </div>
            <div className="lg:col-start-3 lg:col-span-1 w-full lg:mt-0 mt-10">
                <p className="font-bold text-black lg:text-2xl text-lg text-center tracking-widest">CONNECT WITH US</p>
                <div className="flex flex-row justify-center lg:mt-8 mt-3">
                    <a href="https://instagram.com/mura_myrtlebeach?igshid=MzRlODBiNWFlZA==" target="_blank"><img className="cursor-pointer lg:w-8 lg:h-8 w-5 h-5" src="assets/Home/instagram.png" alt="instagram" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100093174541363&mibextid=ZbWKwL" target="_blank"><img className="cursor-pointer lg:w-8 lg:h-8 w-5 h-5 ml-5" src="assets/Home/social.png" alt="facebook" /></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;