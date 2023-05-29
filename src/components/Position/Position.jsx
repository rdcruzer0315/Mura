
const Position = ({ role, type, time, idx,  uploadResume, saveRole }) => {

    return (
        <>
        <div className="lg:mx-4 mx-0 lg:my-4 my-2 bg-[#F5ECE6] border border-black rounded-lg p-5">
            <p className="text-black lg:text-3xl text-2xl font-bold">{ role }</p>
            {
                type === "Full Time" ? 
                <div className="mt-3 flex flex-row">
                    <p className="w-1/3 p-1 text-center border border-2 border-black rounded-full bg-[#FFCCC3] text-[#FF0000] text-sm font-normal">Full Time</p>
                    <p className="w-1/3 p-1 ml-3 text-center border border-none rounded-full bg-[#FFDEC3] text-[#CC5F09] text-sm font-normal">Part Time</p>
                </div> :
                <div className="mt-3 flex flex-row">
                    <p className="w-1/3 p-1 text-center border border-none rounded-full bg-[#FFCCC3] text-[#FF0000] text-sm font-normal">Full Time</p>
                    <p className="w-1/3 p-1 ml-3 text-center border border-2 border-black rounded-full bg-[#FFDEC3] text-[#CC5F09] text-sm font-normal">Part Time</p>
                </div>
            }
            <div className="flex flex-row justify-between py-3">
                <p className="text-black text-xl font-bold">Myrtle Beach, SC</p>
                <p className="text-black text-base flex items-center">{ time }</p>
            </div>
            <div className="pt-6 flex justify-center border-t-2 border-slate-400">
                <button onClick={(e) => {uploadResume(); saveRole(role, type, idx);}} className="bg-black rounded-full w-1/2 py-2 text-base text-white">APPLY NOW</button>
            </div>
        </div>
        </>
    )
}

export default Position;