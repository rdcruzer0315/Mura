import { useDispatch, useSelector } from "react-redux";
import { showCafeModal } from "../../../store/Cafe";
import ReactModal from "react-modal";
import "./style_cafe.css";
import { useState } from "react";

const Cafe = () => {

    const dispatch = useDispatch();

    const isOpenModal = useSelector((state) => state.cafe.isOpenModal);
    const [image, setImage] = useState(null);

    const onNewImage = () => {
        dispatch(showCafeModal());
    }

    const closeModal = () => {
        dispatch(showCafeModal());
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
        <div>
            <div className="flex justify-end">
                    <button onClick={onNewImage} className="bg-[#F5ECE6] border border-black rounded lg:px-4 px-2 lg:py-2 py-1 font-bold">New Image</button>
            </div>
        </div>
        {
        isOpenModal ? 
        <ReactModal
            isOpen={isOpenModal}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            preventScroll={true}
            bodyOpenClassName={"ReactModal__Body--open"}
            htmlOpenClassName={"ReactModal__Html--open"}
            shouldFocusAfterRender={true}
            shouldReturnFocusAfterClose={true}
            ariaHideApp={false}
            parentSelector={() => document.body }
            className="style_cafe"
            overlayClassName="MyOverlay"
        >
            <div className="bg-white">
                <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                    <img src="assets/close.svg" alt="close"/>
                </div>
                <div className="mt-4">
                    <input 
                        accept=".jpg, .png, .jpeg" 
                        id="icon-button-file" 
                        type="file"
                        className="hidden"
                        onChange={onImageUpload}
                        required={true} 
                    />
                    <label htmlFor="icon-button-file" className="flex justify-center">
                        <div className="w-1/2 bg-white border-2 border-solid border-black rounded-sm">
                            <p className="text-black font-bold text-base text-center p-3">Upload Image</p>
                        </div>
                    </label>
                    <div className="flex justify-center mt-4">
                        {image && <img className="w-1/3" src={image} alt="Preview" />}
                    </div>
                </div>
            </div>
        </ReactModal> : null
        }
        </>
    )
}

export default Cafe;