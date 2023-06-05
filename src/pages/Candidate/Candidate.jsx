import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadResume, getData } from "../../store/Admin";

const Candidate = () => {

    const dispatch = useDispatch();
    const sign_state = useSelector((state) => state.admin.isSign);

    useEffect(() => {
        dispatch(getData());
    }, []);

    useEffect(() => {
        if (!sign_state)
            window.location.href = "/";
    }, [sign_state])

    const data = useSelector((state) => state.admin.candidates);

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
                        <th className="border border-slate-300">Name</th>
                        <th className="border border-slate-300">Position</th>
                        <th className="border border-slate-300">Phone</th>
                        <th className="border border-slate-300">Email</th>
                        <th className="border border-slate-300">Resume</th>
                    </tr>
                </thead>
                <tbody className="bg-[#F5ECE6]">
                {
                    data.map((item, key) => {
                    return <tr className="lg:text-lg text-normal">
                        <td className="border border-slate-300">{key + 1}</td>
                        <td className="border border-slate-300">{item.name}</td>
                        <td className="border border-slate-300">{item.position}</td>
                        <td className="border border-slate-300">{item.phone}</td>
                        <td className="border border-slate-300">{item.email}</td>
                        <td className="border border-slate-300 cursor-pointer underline" onClick={() => onDownload(item.path)}>Download</td>
                    </tr>
                    })
                }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Candidate;