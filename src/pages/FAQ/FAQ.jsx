import Accordion from "../../components/Accordion/Accordion";

const items = [
    {
        title: "Can I make reservations for dine in?",
        content: "Currently we are not taking reservations, we are serving on a first come first serve basis, and guests will be able to grab a seat when all members of the party arrive. If you have a large group for an event or a special occasion, please email us at Info@muramb.com",
    },
    {
        title: "I have dietary restrictions. Can I find other options in Mura?",
        content: "If you have any allergies, please let us know in advance, in order for us to determine available alternatives. In addition, we are not a gluten-free kitchen at this time.",
    },
    {
        title: "How does the conveyor belt system work?",
        content: "Please feel free to choose a plate by pulling it from the belt. Once touched, plates cannot be put back on the belt.",
    },
    {
        title: "Can I lift the covers on the plates while it is on the belt?",
        content: "For sanitary purposes, please do not lift the covers. Once you are certain you would like a plate, then pull it from the belt.",
    },
]

const FAQ = () => {
    return (
        <>
        <div className="bg-[#F5ECE6] pt-20 flex lg:flex-row flex-col">
            <div className="lg:w-2/3 w-full lg:pl-60 lg:pr-60 lg:pb-24 pl-12 pr-12">
                <p className="lg:pt-20 pt-4 lg:text-5xl text-3xl lg:text-left text-center font-bold text-black">F A Q</p>
                <p className="text-black lg:text-2xl text-xl lg:text-left text-center leading-relaxed pt-12">
                    Mura has a cafe, brunch and dessert plates with a full bar on the conveyor belt from 10 AM to 5 PM. 
                    Starting at 5 PM, we will be offering dinner plates and dessert plates with a full bar as well. 
                    Grab and go is available throughout the day!
                    Mura has a cafe, brunch and dessert plates with a full bar on the conveyor belt from 10 AM to 5 PM. 
                    Starting at 5 PM, we will be offering dinner plates and dessert plates with a full bar as well. 
                    Grab and go is available throughout the day!
                </p>
            </div>
            <div className="lg:w-1/3 w-full flex justify-center items-center">
                <img src="assets/FAQ/frame.png" />
            </div>
        </div>
        <div className="lg:mt-12 mt-8 lg:mx-56 mx-12">
            <Accordion items = { items } />
        </div>
        </>
    )
}

export default FAQ;