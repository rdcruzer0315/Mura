import { useSelector, useDispatch } from "react-redux";
import { step_forward } from "../../../store/Career";

const Job_Description = () => {
    const job_description = new Array(
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque.",
            requirement: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim."
            ],
            responsibility: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
            ]
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque.",
            requirement: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim."
            ],
            responsibility: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
            ]
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque.",
            requirement: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim."
            ],
            responsibility: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
            ]
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque.",
            requirement: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim."
            ],
            responsibility: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
            ]
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque.",
            requirement: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim."
            ],
            responsibility: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
            ]
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque.",
            requirement: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim."
            ],
            responsibility: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
            ]
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque.",
            requirement: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim."
            ],
            responsibility: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
            ]
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque.",
            requirement: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim."
            ],
            responsibility: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
            ]
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque.",
            requirement: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim."
            ],
            responsibility: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim.",
            ]
        },
    )

    const role = useSelector((state) => state.career.role);
    const type = useSelector((state) => state.career.type);
    const idx = useSelector((state) => state.career.idx);
    const dispatch = useDispatch();

    const nextStep = () => {
        dispatch(step_forward());
    }

    return (
        <div className="lg:px-12 px-4 lg:py-4 px-8 py-2">
            <div className="flex flex-col justify-start">
                <p className="text-black lg:text-3xl text-2xl font-bold">{role}</p>
                {
                    type === "Full Time" ? 
                    <div className="mt-3 flex flex-row">
                        <p className="lg:w-1/5 w-1/2 p-1 text-center border border-2 border-black rounded-full bg-[#FFCCC3] text-[#FF0000] text-sm font-normal">Full Time</p>
                        <p className="lg:w-1/5 w-1/2 p-1 ml-3 text-center border border-none rounded-full bg-[#FFDEC3] text-[#CC5F09] text-sm font-normal">Part Time</p>
                    </div> :
                    <div className="mt-3 flex flex-row">
                        <p className="lg:w-1/5 w-1/2 p-1 text-center border border-none rounded-full bg-[#FFCCC3] text-[#FF0000] text-sm font-normal">Full Time</p>
                        <p className="lg:w-1/5 w-1/2 p-1 ml-3 text-center border border-2 border-black rounded-full bg-[#FFDEC3] text-[#CC5F09] text-sm font-normal">Part Time</p>
                    </div>
                }
            </div>
            <div className="mt-6 pt-4 border-t-2 border-slate-500">
                <p className="text-black text-xl font-bold">Job Description: </p>
                <p className="text-black text-base pt-3 font-medium">{job_description[idx - 1].description}</p>
                <p className="text-black text-lg font-semibold pt-4">Requirements:</p>
                <div>
                    {
                        job_description[idx - 1].requirement.map((item, key) => {
                            return <div className="flex flex-row font-medium"><p className="text-black text-base">-</p><p className="text-black text-base">{item}</p></div>
                        })
                    }
                </div>
                <p className="text-black text-lg font-semibold pt-4">Responsibilities:</p>
                <div>
                    {
                        job_description[idx - 1].responsibility.map((item, key) => {
                            return <div className="flex flex-row font-medium"><p className="text-black text-base">-</p><p className="text-black text-base">{item}</p></div>
                        })
                    }
                </div>
            </div>
            <div className="lg:mt-8 mt-4 flex justify-center">
                <input
                    type="button"
                    value="APPLY NOW"
                    className="bg-black rounded-full lg:w-1/3 w-3/5 lg:py-4 py-2 text-base text-white"
                    onClick={nextStep}
                />
            </div>
        </div>
    )
}

export default Job_Description;