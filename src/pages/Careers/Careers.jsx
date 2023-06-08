import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postData, setResumeName } from "../../store/Career";

const Careers = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState("");
    const [subdata, setSubdata] = useState(null);

    const onName = (e) => {
        setName(e.target.value);
    }

    const onPosition = (e) => {
        setPosition(e.target.value);
    }

    const onPhone = (e) => {
        setPhone(e.target.value);
    }

    const onEmail = (e) => {
        setEmail(e.target.value);
    }

    const onFileUpload = (e) => {
        let files = e.target.files;
        setResume(files[0].name);
        dispatch(setResumeName(files[0].name));
        setSubdata(files[0]);
    }

    const resume_name = useSelector((state) => state.career.resume);

    const onSubmit = (e) => {
        if ( name === "" || phone === "" || email === "" || position === "") {

        } else {
            const formData = new FormData();
            formData.append("file", subdata);
            formData.append("name", name);
            formData.append("position", position);
            formData.append("phone", phone);
            formData.append("email", email);
            dispatch(postData(formData));
            setName("");
            setEmail("");
            setPhone("");
            setPosition("");
            setResume("");
            setSubdata("");
        }
    }

    return (
        <>
        <div style={{ fontFamily:"Gillsans" }} className="bg-[#F5ECE6] lg:pt-40 pt-20 flex lg:flex-row flex-col lg:mx-60 mx-6">
            <img className="lg:w-1/2 lg:mr-32 w-full rounded-xl" src="assets/careers.png" alt="careers" />
            <div className="lg:w-1/2 w-full flex flex-col justify-center lg:mt-0 mt-20">
                <p className="lg:text-4xl text-2xl mt-5 font-semibold lg:leading-12 leading-5 text-center tracking-widest">COME JOIN OUR TEAM</p>
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
        <div className="lg:mt-16 mt-8">
            <p className="lg:text-5xl text-3xl text-black font-bold text-center">Join Our Team</p>
            <div className="lg:mx-96 mx-2 lg:p-8 p-2 lg:mt-8 mt-4">
                <div className="w-full flex flex-row items-center justify-start">
                    <p className="w-1/4">Name:<b className="pl-1 text-[#FF0000]">*</b></p>
                    <input
                        type="text"
                        value={name}
                        onChange={onName}
                        className="w-full ml-3 bg-gray text-base p-2 border-none rounded-md"
                    />
                </div>
                <div className="w-full flex flex-row items-center justify-start mt-2">
                    <p className="w-1/4">Position:<b className="pl-1 text-[#FF0000]">*</b></p>
                    <input
                        type="text"
                        value={position}
                        onChange={onPosition}
                        className="w-full ml-3 bg-gray text-base p-2 border-none rounded-md"
                    />
                </div>
                <div className="w-full flex flex-row items-center justify-start mt-2">
                    <p className="w-1/4">Phone:<b className="pl-1 text-[#FF0000]">*</b></p>
                    <input
                        type="text"
                        value={phone}
                        onChange={onPhone}
                        className="w-full ml-3 bg-gray text-base p-2 border-none rounded-md"
                    />
                </div>
                <div className="w-full flex flex-row items-center justify-start mt-2">
                    <p className="w-1/4">Email:<b className="pl-1 text-[#FF0000]">*</b></p>
                    <input
                        type="text"
                        value={email}
                        onChange={onEmail}
                        className="w-full ml-3 bg-gray text-base p-2 border-none rounded-md"
                    />
                </div>
                <div className="w-full flex flex-row items-center justify-start mt-2">
                    <p className="w-1/4">Resume:<b className="pl-1 text-[#FF0000]">*</b></p>
                    <div className="w-full flex flex-row items-center ml-3 bg-white text-base lg:p-2 p-1 border-none rounded-md">
                        <div className="w-1/2">
                            <input 
                                accept=".doc, .docx, .pdf" 
                                id="icon-button-file" 
                                type="file"
                                className="hidden"
                                onChange={onFileUpload}
                                required={true} 
                            />
                            <label htmlFor="icon-button-file">
                                <div className="border border-solid border-black rounded">
                                    <p className="text-black text-base text-center p-1">Upload File</p>
                                </div>
                            </label>
                        </div>
                        <div className="w-1/2 bg-[#D9D9D9] rounded-sm flex justify-center items-center" >
                            <p className="text-center">{resume_name}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <button onClick={onSubmit} className="bg-black rounded-full lg:w-1/3 w-2/5 py-2 text-base text-white">SUBMIT</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Careers;