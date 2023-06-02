import MapView from "../MapView/MapView";

const Footer = () => {
    return (
        <>
        <div className="lg:my-40 my-20 flex shadow shadow-gray-500">
            <MapView />
        </div>
        <div className="mt-10 pb-20 grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-start-1 lg:col-span-1 w-full">
                <p className="font-bold text-black lg:text-2xl text-lg text-center tracking-widest">CONTACT</p>
                {/* <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest">+1 813-123-5678</p> */}
                <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest cursor-pointer">INFO@MURAMB.COM</p>
            </div>
            <div className="lg:col-start-2 lg:col-span-1 w-full lg:mt-0 mt-10">
                <p className="font-bold text-black lg:text-2xl text-lg text-center tracking-widest">HOURS OF OPERATION</p>
                <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest">Sunday to Wednesday</p>
                <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest">10 AM - 10 PM</p>
                <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest">Thursday to Saturday</p>
                <p className="font-bold text-black lg:text-xl text-xs text-center tracking-widest">10 AM - 11 PM</p>
            </div>
            <div className="lg:col-start-3 lg:col-span-1 w-full lg:mt-0 mt-10">
                <p className="font-bold text-black lg:text-2xl text-lg text-center tracking-widest">CONNECT WITH US</p>
                <div className="flex flex-row justify-center lg:mt-8 mt-3">
                    <img className="cursor-pointer lg:w-8 lg:h-8 w-5 h-5" src="assets/Home/instagram.png" alt="instagram" />
                    <img className="cursor-pointer lg:w-8 lg:h-8 w-5 h-5 ml-5" src="assets/Home/social.png" alt="instagram" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;