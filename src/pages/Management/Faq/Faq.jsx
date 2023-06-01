import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getFaqs, postNewFaq, showFaqModal } from "../../../store/Faq";
import ReactModal from "react-modal";
import "./style_faq.css";
import { useEffect } from "react";
import ManageAccordion from "../../../components/ManageAccordion/ManageAccordion";

const Faq = () => {

    const dispatch = useDispatch();

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const isOpenModal = useSelector((state) => (state.faq.isOpenModal));

    useEffect(() => {
        dispatch(getFaqs());
    }, [dispatch])

    const onNewFaq = () => {
        dispatch(showFaqModal());
    }

    const closeModal = () => {
        dispatch(showFaqModal());
    }

    const onQuestion = (e) => {
        setQuestion(e.target.value);
    }

    const onAnswer = (e) => {
        setAnswer(e.target.value);
    }

    const addNewFaq = () => {
        let data = { title: question, content: answer };
        setQuestion("");
        setAnswer("");
        dispatch(postNewFaq(data));
        dispatch(getFaqs());
    }

    const items = useSelector((state) => (state.faq.faqs));

    return (
        <>
        <div className="flex justify-end mb-4">
            <button onClick={onNewFaq} className="bg-[#F5ECE6] border border-black rounded lg:px-4 px-2 lg:py-2 py-1 font-bold">New Faq</button>
        </div>

        <ManageAccordion items = { items } />
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
            className="modal_style"
            overlayClassName="MyOverlay"
        >
            <div className="bg-white">
                <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                    <img src="assets/close.svg" alt="close"/>
                </div>
                <div className="flex lg:flex-row flex-col mt-5">
                    <p className="lg:w-1/5 flex items-center">Question:</p>
                    <input
                        type="text"
                        value={question}
                        onChange={onQuestion}
                        className="w-full bg-[#D9D9D9] text-base p-2 border-none rounded-md"
                    />
                </div>
                <div className="flex lg:flex-row flex-col mt-2">
                    <p className="lg:w-1/5">Answer:</p>
                    <textarea
                        value={answer}
                        className="lg:col-start-2 lg:col-span-4 w-full lg:h-32 h-80 bg-[#D9D9D9] text-base p-2 border-none rounded-md resize-none"
                        onChange={onAnswer}
                    />
                </div>
                <div className="flex justify-center lg:mt-12 mt-4">
                     <button onClick={addNewFaq} className="bg-[#F5ECE6] border border-black rounded-lg px-4 py-2">APPLY NOW</button>
                </div>
            </div>
        </ReactModal> : null
        }
        </>
    )
}

export default Faq;