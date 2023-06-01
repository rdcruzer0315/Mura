import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFaq } from "../../store/Faq";

const ManageAccordion = ({ items }) => {

    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    }

    const onDelete = (data) => {
        dispatch(deleteFaq(data));
    }

    return (
        <>
        <div>
            {items.map((item, key) => (
            <div className="flex flex-row" key={item.title}>
                <div className="w-11/12 lg:mb-4 mb-4 lg:p-5 p-3 border border-black rounded-lg">
                    <div onClick={() =>handleClick(key)} className="lg:text-xl text-base flex flex-row justify-between items-center cursor-pointer">
                        <button className="font-semibold">{item.title}</button>
                        {
                            key === activeIndex ? <p className="ml-3 font-black">-</p> : <p className="ml-3 font-black">+</p> 
                        }
                    </div>
                    {key === activeIndex && <p className="lg:text-lg text-normal mt-5">{item.content}</p>}
                </div>
                <div className="w-1/12 flex justify-center items-center">
                    <img src="assets/Admin/delete.png" onClick={() => onDelete(item)} className="cursor-pointer" alt="delete"/>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default ManageAccordion;