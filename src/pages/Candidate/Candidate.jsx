import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import { downloadResume, getData, hideCoverletterModal, showCoverletterModal } from "../../store/Admin";
import "./Candidate.css";

const Candidate = () => {

    const dispatch = useDispatch();
    const sign_state = useSelector((state) => state.admin.isSign);
    const coverletter_modal = useSelector((state) => state.admin.coverletter_modal);
    const coverletter = useSelector((state) => state.admin.coverletter);

    useEffect(() => {
        dispatch(getData());
    }, []);

    useEffect(() => {
        if (!sign_state)
            window.location.href = "/";
    }, [sign_state])

    const data = useSelector((state) => state.admin.candidates);

    const onCoverletter = (content) => {
        dispatch(showCoverletterModal(content));
    }

    const onClose = (e) => {
        dispatch(hideCoverletterModal());
    }

    const onDownload = (path) => {
        let param = { path: path }
        dispatch(downloadResume(param));
    }

    return (
        <>
        <div className="flex items-center justify-center mt-8">
            <table className="border-collapse border border-slate-400 lg:w-5/6 w-full text-center">
                <caption className="caption-top text-2xl underline mb-3">
                    All Candidates
                </caption>
                <thead className="bg-[#F5ECE6]">
                    <tr className="lg:text-xl text-base">
                        <th className="border border-slate-300">No</th>
                        <th className="border border-slate-300">Email</th>
                        <th className="border border-slate-300">Phone</th>
                        <th className="border border-slate-300">CV</th>
                        <th className="border border-slate-300">Auth</th>
                        <th className="border border-slate-300">Resume</th>
                    </tr>
                </thead>
                <tbody className="bg-[#F5ECE6]">
                {
                    data.map((item, key) => {
                    return <tr className="lg:text-lg text-normal">
                        <td className="border border-slate-300">{key + 1}</td>
                        <td className="border border-slate-300 cursor-pointer">{item.email}</td>
                        <td className="border border-slate-300">{item.phone}</td>
                        <td className="border border-slate-300 cursor-pointer underline" onClick={() => onCoverletter(item.coverletter)}>View</td>
                        <td className="border border-slate-300">{item.authorize}</td>
                        <td className="border border-slate-300 cursor-pointer underline" onClick={() => onDownload(item.path)}>Download</td>
                    </tr>
                    })
                }
                </tbody>
            </table>
        </div>
        {
        coverletter_modal ?
        <ReactModal
            isOpen={coverletter_modal}
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
            className="CVModal"
            overlayClassName="overlayCVModal"
        >
            <div className="bg-white">
                <div className="lg:px-10 px-0 py-6 flex flex-col items-center">
                    <p className="font-bold text-black lg:text-3xl text-xl text-center">
                        Coverletter
                    </p>
                    <textarea
                        className="text-xl resize-none w-11/12 h-40 border-2 p-2 overflow-auto mt-4"
                        value={coverletter}
                        readOnly
                    />
                    <input
                        type="button"
                        value="Close"
                        className="lg:mt-6 mt-4 lg:w-60 lg:h-12 bg-[#F38117] cursor-pointer lg:text-xl text-white text-base p-3 border-none text-center rounded-md"
                        onClick={onClose}
                    />
                </div>
            </div>
        </ReactModal> : null
        }
        </>
    )
}

export default Candidate;