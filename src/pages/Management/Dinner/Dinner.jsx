import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import "./style_dinner.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDinnerImages, showDinnerModal, showApply, showApplyButton } from "../../../store/Dinner";

const Dinner = () => {

    const dispatch = useDispatch();

    const isOpenModal = useSelector((state) => state.dinner.isOpenModal);
    const isShowButton = useSelector((state) => state.dinner.isShowButton);
    
    const file = useSelector((state) => state.dinner.file);
    const [image, setImage] = useState(null);

    useEffect(() => {
        dispatch(getDinnerImages());
    }, []);

    const onNewImage = () => {
        dispatch(showDinnerModal());
    }

    const closeModal = () => {
        setImage(null);
        dispatch(showDinnerModal());
        dispatch(showApply());
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
            dispatch(showApplyButton(file));
        }
    }

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append('image', file);
    
        try {
            await axios.post('http://localhost:8080/dinnerImageUpload', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Image uploaded successfully');
        } catch (error) {
            console.log('Error uploading image:', error);
        }
        setImage(null);
        dispatch(showDinnerModal());
        dispatch(showApply());
        dispatch(getDinnerImages());
    };

    const onDelete = async (imageID) => {
        try {
            let data = { id: imageID}
            await axios.post("http://localhost:8080/dinner/imageDelete", data);
        } catch (error) {
            console.log("Error uploading image:", error);
        }
        dispatch(getDinnerImages());
    }

    const imageData = useSelector((state) => state.dinner.images);

    return (
        <>
        <div>
            <div className="flex justify-end">
                    <button onClick={onNewImage} className="bg-[#F5ECE6] border border-black rounded lg:px-4 px-2 lg:py-2 py-1 font-bold">New Image</button>
            </div>
            <div className="mt-4 grid lg:grid-cols-3 grid-cols-1">
            {imageData.map(image => (
                <>
                <div key={image.name}>
                    <div className="w-full lg:px-20 p-4" key={image.name}>
                        <img src={`data:image/png;base64,${image.data}`} alt={image.name} />
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => onDelete(image.name)} className="bg-black text-white rounded-full cursor-pointer px-4 py-1">Delete</button>
                    </div>
                </div>
                </>
            ))}
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
            className="style_dinner"
            overlayClassName="MyOverlay"
        >
            <div className="bg-white">
                <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                    <img src="assets/close.svg" alt="close"/>
                </div>
                <div className="mt-4 flex flex-col justify-center">
                    <input 
                        accept=".jpg, .png, .jpeg" 
                        id="icon-button-file" 
                        type="file"
                        className="w-1/2 hidden"
                        onChange={onImageUpload}
                        required={true} 
                    />
                    <label htmlFor="icon-button-file" className="">
                        <div className="bg-white border-2 border-solid border-black rounded-sm">
                            <p className="text-black font-bold text-base text-center p-3">Upload Image</p>
                        </div>
                    </label>
                    {
                        isShowButton ?
                        <div className="flex justify-center mt-4">
                            {image && <img className="w-1/3" src={image} alt="Preview" />}
                        </div> : null
                    }
                </div>
                {
                    isShowButton ? 
                    <div className="flex justify-center mt-4">
                        <button onClick={uploadImage} className="px-4 py-2 text-white bg-black rounded-lg">APPLY NOW</button>
                    </div> : null
                }
            </div>
        </ReactModal> : null
        }
        </>
    )
}

export default Dinner;