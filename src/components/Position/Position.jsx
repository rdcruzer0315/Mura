
const Position = ({ role, type, idx,  uploadResume, saveRole }) => {

    return (
        <>
        <div className="bg-[#797979] rounded py-4 px-12 cursor-pointer w-72 flex flex-col justify-center mt-8" onClick={(e) => {uploadResume(); saveRole(role, type, idx);}}>
            <p className="text-white underline font-normal text-xl p-1">{role}</p>
            <p className="text-white font-normal text-xl p-1">{type}</p>
        </div>
        </>
    )
}

export default Position;