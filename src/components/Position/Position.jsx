
const Position = ({ role, type, idx,  uploadResume, saveRole }) => {

    return (
        <>
        <div className="bg-[#797979] rounded py-4 lg:px-12 px-2 cursor-pointer lg:w-72 w-36 flex flex-col justify-center mt-8" onClick={(e) => {uploadResume(); saveRole(role, type, idx);}}>
            <p className="text-white underline font-normal lg:text-xl text-lg p-1 text-center">{role}</p>
            <p className="text-white font-normal text-xl p-1 text-center">{type}</p>
        </div>
        </>
    )
}

export default Position;