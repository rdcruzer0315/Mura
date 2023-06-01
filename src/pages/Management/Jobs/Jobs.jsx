import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewJob, showJobModal, getJobs, deleteJob } from "../../../store/Job";
import ReactModal from "react-modal";
import { useState } from "react";
import "./style.css";

const Jobs = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [time, setTime] = useState("");
    const [jobdescription, setJobdescription] = useState("");
    const [jobrequirement, setJobrequirement] = useState("");
    const [jobresponsibility, setJobresponsibility] = useState("");

    const isOpenModal = useSelector((state) => state.job.isOpenModal);

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    const onNewJob = () => {
        dispatch(showJobModal());
    }

    const closeModal = () => {
        dispatch(showJobModal());
    }

    const onTitle = (e) => {
        setTitle(e.target.value);
    }

    const onType = (e) => {
        setType(e.target.value);
    }

    const onTime = (e) => {
        setTime(e.target.value);
    }

    const onJobDescription = (e) => {
        setJobdescription(e.target.value);
    }

    const onJobRequirement = (e) => {
        setJobrequirement(e.target.value);
    }

    const onJobResponsibility = (e) => {
        setJobresponsibility(e.target.value);
    }

    const addNewJob = () => {
        let data = { title: title, type: type, time: time, description: jobdescription, requirement: jobrequirement, responsibility: jobresponsibility };
        setTitle("");
        setType("");
        setTime("");
        setJobdescription("");
        setJobrequirement("");
        setJobresponsibility("");
        dispatch(postNewJob(data));
        dispatch(getJobs());
    }

    const onDelete = (item) => {
        dispatch(deleteJob(item));
        dispatch(getJobs());
    }

    const jobs = useSelector((state) => state.job.jobs);

    return (
        <>
        <div>
            <div className="flex justify-end">
                <button onClick={onNewJob} className="bg-[#F5ECE6] border border-black rounded lg:px-4 px-2 lg:py-2 py-1 font-bold">New Job</button>
            </div>
            <table className="border-collapse border border-slate-400 w-full text-center">
                <caption className="caption-top lg:text-2xl text-lg underline mb-3">
                    All Jobs
                </caption>
                <thead className="bg-[#F5ECE6]">
                    <tr className="lg:text-xl text-base">
                        <th className="border border-slate-300">No</th>
                        <th className="border border-slate-300">Title</th>
                        <th className="border border-slate-300">Type</th>
                        <th className="border border-slate-300">Time</th>
                        <th className="border border-slate-300">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-[#F5ECE6]">
                {
                    jobs.map((item, key) => {
                    return <tr className="lg:text-lg text-normal">
                        <td className="border border-slate-300">{key + 1}</td>
                        <td className="border border-slate-300">{item.title}</td>
                        <td className="border border-slate-300">{item.type}</td>
                        <td className="border border-slate-300">{item.time}</td>
                        <td className="border border-slate-300 flex justify-center">
                            <img src="assets/Admin/delete.png" onClick={() => onDelete(item)} className="cursor-pointer" alt="delete"/>
                        </td>
                    </tr>
                    })
                }
                </tbody>
            </table>
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
            className="modal_style"
            overlayClassName="MyOverlay"
        >
            <div className="bg-white">
                <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                    <img src="assets/close.svg" alt="close"/>
                </div>
                <div className="flex lg:flex-row flex-col mt-5">
                    <p className="lg:w-1/5 flex items-center">Job Title:</p>
                    <input
                        type="text"
                        value={title}
                        onChange={onTitle}
                        className="w-full bg-[#D9D9D9] text-base p-2 border-none rounded-md"
                    />
                </div>
                <div className="flex lg:flex-row flex-col mt-2">
                    <p className="lg:w-1/5">Job Type:</p>
                    <div className="col-start-4 col-span-1">
                        <div className="flex flex-row">
                            <input type="radio" id="yes" name="authorization" value="Full-Time" onClick={onType}/>
                            <label className="pl-3 text-base font-bold">Full-Time</label>
                        </div>
                        <div className="flex flex-row">
                            <input type="radio" id="no" name="authorization" value="Part-Time" onClick={onType} />
                            <label className="pl-3 text-base font-bold">Part-Time</label>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col mt-2">
                    <p className="lg:w-1/5 flex items-center">Job Time:</p>
                    <input
                        type="text"
                        value={time}
                        onChange={onTime}
                        className="w-full mt-3 bg-[#D9D9D9] text-base p-2 border border-black rounded-md"
                    />
                </div>
                <div className="flex lg:flex-row flex-col mt-2">
                    <p className="lg:w-1/5">Job Description:</p>
                    <textarea
                        value={jobdescription}
                        className="lg:col-start-2 lg:col-span-4 w-full h-32 bg-[#D9D9D9] text-base p-2 border-none rounded-md resize-none"
                        onChange={onJobDescription}
                    />
                </div>
                <div className="flex lg:flex-row flex-col mt-2">
                    <p className="lg:w-1/5">Job Requirement:</p>
                    <textarea
                        value={jobrequirement}
                        className="lg:col-start-2 lg:col-span-4 w-full h-32 bg-[#D9D9D9] text-base p-2 border-none rounded-md resize-none"
                        onChange={onJobRequirement}
                    />
                </div>
                <div className="flex lg:flex-row flex-col mt-2">
                    <p className="lg:w-1/5">Job Responsibility:</p>
                    <textarea
                        value={jobresponsibility}
                        className="lg:col-start-2 lg:col-span-4 w-full h-32 bg-[#D9D9D9] text-base p-2 border-none rounded-md resize-none"
                        onChange={onJobResponsibility}
                    />
                </div>
                <div className="flex justify-center mt-4">
                     <button onClick={addNewJob} className="bg-[#F5ECE6] border border-black rounded-lg px-4 py-2">APPLY NOW</button>
                </div>
            </div>
        </ReactModal> : null
        }
        </>
    )
}

export default Jobs;