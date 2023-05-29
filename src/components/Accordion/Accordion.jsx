import { useState } from "react";

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    }

    return (
        <>
        <div>
            {items.map((item, index) => (
            <div className="lg:mb-12 mb-6 lg:p-5 p-3 border border-black rounded-lg" key={item.title}>
                <div onClick={() =>handleClick(index)} className="lg:text-3xl text-xl flex flex-row justify-between items-center cursor-pointer">
                    <button className="font-semibold">{item.title}</button>
                    {
                        index === activeIndex ? <p className="ml-3 font-black">-</p> : <p className="ml-3 font-black">+</p> 
                    }
                </div>
                {index === activeIndex && <p className="lg:text-2xl text-xl mt-5">{item.content}</p>}
            </div>
            ))}
        </div>
        </>
    )
}

export default Accordion;