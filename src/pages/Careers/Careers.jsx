import Position from "../../components/Position/Position";
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { modal_open, set_role_type, submit_appliction, getAllJobs } from "../../store/Career";
import Job_Description from "./steps/Job_Description";
import Application from "./steps/Application";
import "./style_career.css";

const Careers = () => {
    
    const open_modal = useSelector((state) => state.career.isOpen);
    const submit_modal = useSelector((state) => state.career.submit)
    const step = useSelector((state) => state.career.step);

    const dispatch = useDispatch();
    const role_type_array = useSelector((state) => state.career.jobs);

    useEffect(() => {
        dispatch(getAllJobs());
    }, [dispatch]);


    const uploadResume = () => {
        dispatch(modal_open());
    }

    const saveRole = (role, type, idx) => {
        dispatch(set_role_type({role: role, type: type, idx: idx}));
    }

    const closeModal = (e) => {
        e.preventDefault();
        dispatch(modal_open());
    }

    const onGotit = (e) => {
        e.preventDefault();
        dispatch(submit_appliction());
    }

    return (
        <>
        <div className="bg-[#F5ECE6] lg:pt-40 pt-20 flex lg:flex-row flex-col lg:mx-60 mx-6">
            <img className="lg:w-1/2 lg:mr-32 w-full rounded-xl" src="assets/careers.png" alt="careers" />
            <div className="lg:w-1/2 w-full flex flex-col justify-center lg:mt-0 mt-20">
                <p className="lg:text-4xl text-2xl mt-5 font-semibold lg:leading-12 leading-5 text-center">COME JOIN OUR TEAM</p>
                <div className="lg:mt-12 mt-3">
                    <p className="lg:text-xl text-lg text-left lg:px-8 px-6 font-normal mt-2">
                        We are a passionate collective, from various backgrounds. 
                        We bring creativity, fun, hard work, and a zeal to make others happy with the joy of making delicious food. 
                        We take our culture seriously and hope you do, too! 
                        If this sounds like something you’re interested in, take a look into our open positions and apply. 
                        Looking forward to hearing from you!
                    </p>
                </div>
            </div>
        </div>
        <div className="lg:mx-60 mx-6 lg:my-16 my-8">
            <p className="lg:text-5xl text-3xl text-black font-bold text-center">Browse Open Positions</p>
            <div className="grid lg:grid-cols-3 grid-cols-1">
                {
                    role_type_array.map((item, key) => {
                    return <Position 
                                role = {item.title}
                                type = {item.type}
                                time = {item.time}
                                idx = { key + 1 }
                                uploadResume={uploadResume}
                                saveRole={saveRole}
                            />
                    })
                }
            </div>
        </div>
        {
        open_modal ? 
        <ReactModal
            isOpen={open_modal}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            preventScroll={true}
            bodyOpenClassName={"ReactModal__Body--open"}
            htmlOpenClassName={"ReactModal__Html--open"}
            shouldFocusAfterRender={true}
            shouldReturnFocusAfterClose={true}
            ariaHideApp={false}
            parentSelector={() => document.body }
            className="career_modal"
            overlayClassName="MyOverlay"
        >
            <div className="bg-white">
                <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                    <img src="assets/close.svg" alt="close"/>
                </div>
                <div className="flex justify-center">
                    <img className="lg:w-1/3 w-1/2 lg:mt-6" src="assets/Logo/logo.png" alt="logo"/>
                </div>
                {
                    step === 1 ? <Job_Description /> : <Application />
                }
            </div>
        </ReactModal> : null
        }
        {
        submit_modal ? 
        <ReactModal
            isOpen={submit_modal}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            preventScroll={true}
            overlayClassName={"ReactModal__Overlay"}
            bodyOpenClassName={"ReactModal__Body--open"}
            htmlOpenClassName={"ReactModal__Html--open"}
            shouldFocusAfterRender={true}
            shouldReturnFocusAfterClose={true}
            ariaHideApp={false}
            parentSelector={() => document.body }
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgb(0, 0, 0)',
                },
                content: {
                    position: 'absolute',
                    zIndex: 1,
                    top: '30%',
                    left: '25%',
                    right: '25%',
                    bottom: '30%',
                    border: '1px solid black',
                    background: '#fff',
                    WebkitOverflowScrolling: 'touch',
                    outline: 'none',
                    padding: '20px'
                }
            }}
        >
            <div className="bg-white">
                <div className="px-10 py-6 flex flex-col items-center">
                    <p className="font-bold text-black lg:text-3xl text-xl text-center">
                        Application Submitted!
                    </p>
                    <p className="font-semibold text-black text-lg text-center px-20 lg:mt-8 mt-4">
                        Thank you for your interest and taking the time to submit an application. We will reach out to you within the next 3-5 business days.
                    </p>
                    <input
                        type="button"
                        value="Got it!"
                        className="lg:mt-12 mt-4 lg:w-60 lg:h-12 bg-[#F38117] cursor-pointer lg:text-xl text-white text-base p-3 border-none text-center rounded-md"
                        onClick={onGotit}
                    />
                </div>
            </div>
        </ReactModal> : null
        }
        </>
    )
}

export default Careers;