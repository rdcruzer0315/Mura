import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { resumeModal, resumeUpload, uploadButton } from "../../../store/Upload";
import ReactModal from "react-modal";
import { modal_open, postData } from "../../../store/Career";
import "./style_resume.css";

const Application = () => {
    const role = useSelector((state) => state.career.role);
    const resumeModalOpen = useSelector((state) => state.upload.resume_modal_open);
    const uploadbtn = useSelector((state) => state.upload.upload_button);
    const uploadApplication = useSelector((state) => state.upload.upload_application);
    // const resume_content = useSelector((state) => state.upload.file_content);
    // const resume_type = useSelector((state) => state.upload.file_type);

    const dispatch = useDispatch();

    const [coverletter, setCoverletter] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState();
    const [authorize, setAuthorize] = useState("");
    const [subdata, setSubdata] = useState(null);

    const onCoverletter = (e) => {
        let letter = e.target.value;
        setCoverletter(letter);
    }
    const onPhone = (e) => {
        let phone = e.target.value;
        setPhone(phone);
    }
    const onEmail = (e) => {
        let email = e.target.value;
        setEmail(email);
    }

    const handleUpload = () => {
        dispatch(resumeModal());
    }

    const closeModal = () => {
        dispatch(resumeModal());
    }

    const onFileUpload = (e) => {
        let files = e.target.files;
        setResume(files[0].name);
        setSubdata(files[0]);   
        dispatch(uploadButton(files[0]));
    }

    const onAuthrize = (e) => {
        console.log(e.target.value);
        setAuthorize(e.target.value);
    }

    const lastUpload = (e) => {
        dispatch(resumeUpload({file_name: resume}));
    }

    const onSubmitApplication = (e) => {
        if ( coverletter === "" && phone === "" && authorize === "") {

        } else {
            const formData = new FormData();
            formData.append("file", subdata);
            formData.append("coverletter", coverletter);
            formData.append("phone", phone);
            formData.append("email", email);
            formData.append("authorize", authorize);
            dispatch(postData(formData));
            dispatch(modal_open());
        }
    }

    return (
        <>
        <div className="lg:px-12 lg:py-8 px-2 lg:py-4 py-8">
            <div className="flex flex-col justify-start">
                <p className="text-black lg:text-3xl text-2xl font-bold">Application</p>
                <p className="text-black text-normal font-semibold lg:pb-6 lg:mt-4 pb-2 mt-2 border-b-2 border-solid border-[#ACABAB]">{"General " + role + " Position"}</p>
            </div>
            <div className="lg:mt-8 mt-4 pb-4 border-b-2 border-solid border-[#ACABAB]">
                <div className="grid lg:grid-cols-5 grid-cols-1 flex items-center">
                    <p className="col-start-1 col-span-1 text-black text-xl font-bold">Resume</p>
                    <input
                        type="button"
                        value="Upload Resume"
                        className="col-start-2 col-span-4 lg:w-80 lg:h-12 bg-[#F5ECE6] cursor-pointer lg:text-xl text-base p-3 border-none text-center rounded-lg"
                        onClick={handleUpload}
                    />
                </div>
                {
                    uploadApplication ?
                    <div className="mt-3 grid lg:grid-cols-5 grid-cols-1 flex items-center">
                        <div className="col-start-2 col-span-4 w-full h-12 px-5 flex flex-row justify-between items-center bg-[#DAD6D3] rounded-lg">
                            <p>{resume}</p>
                            <input
                                type="button"
                                value="Delete"
                                className="cursor-pointer underline"
                            />
                        </div>
                    </div> :
                    null
                }
            </div>
            <div className="lg:mt-8 mt-4">
                <div className="grid lg:grid-cols-5 grid-cols-1 flex pb-4 border-b-2 border-solid border-[#ACABAB]">
                    <div className="flex lg:flex-col flex-row">
                        <p className="lg:col-start-1 lg:col-span-1 text-black text-xl font-bold">Cover Letter</p>
                        <p className="text-left text-base flex justify-center items-center">(optional)</p>
                    </div>
                    <textarea
                        value={coverletter}
                        className="lg:col-start-2 lg:col-span-4 w-full h-32 bg-[#D9D9D9] text-base p-2 border-none rounded-md resize-none"
                        onChange={onCoverletter}
                    />
                </div>
            </div>
            <div className="lg:mt-8 mt-4">
                <div className="grid lg:grid-cols-5 grid-cols-1 flex pb-4 border-b-2 border-solid border-[#ACABAB]">
                    <p className="lg:col-start-1 lg:col-span-1 w-full text-black text-xl font-bold">Your Contact Information</p>
                    <div className="lg:col-start-2 lg:col-span-4 flex lg:flex-row flex-col lg:mt-0 mt-4">
                        <div className="lg:w-1/2">
                            <p>Phone number<b className="pl-1 text-[#FF0000]">*</b></p>
                            <input
                                type="text"
                                value={phone}
                                className="w-full mt-3 bg-[#D9D9D9] text-base p-2 border-none rounded-md"
                                onChange={onPhone}
                            />
                        </div>
                        <div className="lg:ml-3 ml-0 lg:mt-0 mt-3 lg:w-1/2">
                            <p>Email<b className="pl-1 text-[#FF0000]">*</b></p>
                            <input
                                type="email"
                                value={email}
                                className="w-full mt-3 bg-[#D9D9D9] text-base p-2 border-none rounded-md"
                                onChange={onEmail}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-8 mt-4">
                <div className="grid lg:grid-cols-5 grid-cols-2 flex pb-4 border-b-2 border-solid border-[#ACABAB]">
                    <p className="col-start-1 col-span-3 text-black text-base font-bold flex justify-end pr-6">
                        Are you legally authorized to work in U.S.?<b className="pl-1 text-[#FF0000]">*</b>
                    </p>
                    <div className="col-start-4 col-span-1">
                            <div className="flex flex-row">
                                <input type="radio" id="yes" name="authorization" value="Yes" onClick={onAuthrize}/>
                                <label className="pl-3 text-base font-bold">Yes</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="radio" id="no" name="authorization" value="No" onClick={onAuthrize} />
                                <label className="pl-3 text-base font-bold">No</label>
                            </div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-8 mt-4 flex justify-center">
                <input
                    type="button"
                    value="Submit Application"
                    className="lg:w-80 lg:h-12 bg-[#F38117] cursor-pointer lg:text-xl text-base p-3 border-none text-center rounded-2xl"
                    onClick={onSubmitApplication}
                />
            </div>
        </div>
        {
        resumeModalOpen ?
        <ReactModal
            isOpen={resumeModalOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            preventScroll={true}
            bodyOpenClassName={"ReactModal__Body--open"}
            htmlOpenClassName={"ReactModal__Html--open"}
            shouldFocusAfterRender={true}
            shouldReturnFocusAfterClose={true}
            ariaHideApp={false}
            parentSelector={() => document.body }
            className="resumeModal"
            overlayClassName="resumeOverlay"
            >
                <div>
                    <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                        <img src="assets/close.svg" alt="close"/>
                    </div>
                    <div className="flex flex-col justify-start lg:mt-6 mt-3 lg:mx-6 mx-3 lg:pb-6 pb-3 border-b-2 border-solid border-[#ACABAB]">
                        <p className="text-black text-3xl font-bold">Upload Resume</p>
                    </div>
                    <div className="lg:mx-6 mx-3 lg:mt-4 mt-2 lg:pb-6 pb-3 border-b-2 border-solid border-[#ACABAB]">
                        <p className="text-black text-base font-semibold">Upload a resume for this application</p>
                        {
                            !uploadbtn ?
                            <div className="grid lg:grid-cols-5 grid-cols-1 mt-1">
                                <div className="col-start-1 col-span-2">
                                    <input 
                                        accept=".doc, .docx, .pdf" 
                                        id="icon-button-file" 
                                        type="file"
                                        className="hidden"
                                        onChange={onFileUpload}
                                        required={true} 
                                    />
                                    <label htmlFor="icon-button-file">
                                        <div className="bg-white border-2 border-solid border-black rounded-sm">
                                            <p className="text-black font-bold text-base text-center p-3">Upload File</p>
                                        </div>
                                    </label>
                                </div>
                                <div className="col-start-3 col-span-3 bg-[#D9D9D9] rounded-sm" />
                            </div> :
                            <div className="mt-4">
                                <div className="flex flex-row">
                                    <p>{resume}</p>
                                    <input
                                        type="button"
                                        value="Delete"
                                        className="cursor-pointer underline ml-6"
                                    />
                                </div>
                                <div className="">
                                    <p>File Uploaded Successfully!</p>
                                </div>
                            </div>
                        }
                        <p className="text-base font-semibold mt-2">Supported file formats: pdf, doc, and docx. Maximum file size is 5MB.</p>
                    </div>
                    <div className="lg:mx-6 mx-3 lg:mt-4 mt-2 lg:mb-6 mb-3 flex justify-end">
                        {
                            uploadbtn ?
                            <input
                                type="button"
                                value="Upload Resume"
                                className="col-start-2 col-span-4 lg:w-80 lg:h-12 bg-[#F38117] cursor-pointer lg:text-xl text-base p-3 border-none text-center rounded-md"
                                onClick={lastUpload}
                            /> :
                            <input
                                type="button"
                                value="Upload Resume"
                                className="col-start-2 col-span-4 lg:w-80 lg:h-12 bg-[#D9D9D9] cursor-pointer lg:text-xl text-base text-white p-3 border-none text-center rounded-md"
                                onClick={lastUpload}
                                disabled
                            />
                        }
                    </div>
                </div>
        </ReactModal> : null
        }
        </>
    )
}

export default Application;