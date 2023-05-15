
const FAQ = () => {
    return (
        <>
        <div className="bg-[#E9E9E9]">
            <p className="pt-20 text-black text-5xl flex justify-center font-bold">F A Q</p>
            <div className="mt-12 pb-12 grid grid-cols-7">
                <p className="text-black text-lg text-center flex justify-center col-start-3 col-span-3 font-semibold">
                    Mura has a cafe, brunch and dessert plates with a full bar on the conveyor belt from 10 AM to 5 PM. 
                    Starting at 5 PM, we will be offering dinner plates and dessert plates with a full bar as well. 
                    Grab and go is available throughout the day!
                </p>
            </div>
        </div>
        <div className="mt-10">
            <p className="text-black text-lg text-center font-bold">Can I make reservations for dine in?</p>
            <div className="mt-3 grid grid-cols-9">
                <p className="relative text-black text-lg text-left flex justify-center col-start-4 col-span-3 font-semibold pb-12 border-b-2 border-[#ACABAB]">
                    Currently we are not taking reservations, we are serving on a first come first serve basis, and guests will be able to grab a seat when all members of the party arrive. 
                    <br /><br />If you have a large group for an event or a special occasion, email us at <a className="absolute fixed underline bottom-6 left-0" href="/contact">Info@muramb.com</a>
                </p>
            </div>
        </div>
        <div className="mt-10">
            <p className="text-black text-lg text-center font-bold">I have dietary restrictions. Can I find other options in Mura?</p>
            <div className="mt-3 grid grid-cols-9">
                <p className="relative text-black text-lg text-left flex justify-center col-start-4 col-span-3 font-semibold pb-12 border-b-2 border-[#ACABAB]">
                If you have any allergies, please let us know in advance, in order for us to determine available alternatives. In addition, we are not a gluten-free kitchen at this time.
                </p>
            </div>
        </div>
        <div className="mt-10">
            <p className="text-black text-lg text-center font-bold">How does the conveyor belt system work?</p>
            <div className="mt-3 grid grid-cols-9">
                <p className="relative text-black text-lg text-left flex justify-center col-start-4 col-span-3 font-semibold pb-12 border-b-2 border-[#ACABAB]">
                Please feel free to choose a plate by pulling it from the belt. Once touched, plates cannot be put back on the belt.
                </p>
            </div>
        </div>
        <div className="mt-10 mb-12">
            <p className="text-black text-lg text-center font-bold">Can I lift the covers on the plates while it is on the belt?</p>
            <div className="mt-3 grid grid-cols-9">
                <p className="relative text-black text-lg text-left flex justify-center col-start-4 col-span-3 font-semibold pb-12 border-b-2 border-[#ACABAB]">
                For sanitary purposes, please do not lift the covers. Once you are certain you would like a plate, then pull it from the belt.
                </p>
            </div>
        </div>
        </>
    )
}

export default FAQ;