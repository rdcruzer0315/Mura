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
        <div className="lg:px-12 lg:py-4 px-8 py-2">
            <div className="flex flex-col justify-start">
                <p className="text-black text-3xl font-bold">{role}</p>
                <p className="text-black text-normal font-normal italic lg:pb-4 pb-2 border-b-2 border-solid border-[#ACABAB]">Other Info Blurb</p>
            </div>
            <div className="overflow-auto mt-8">
                <p className="text-black text-xl font-bold">Job Description: </p>
                <p className="text-black text-base pt-3">{job_description[idx - 1].description}</p>
                <p className="text-black text-lg font-semibold pt-4">Requirements:</p>
                <div>
                    {
                        job_description[idx - 1].requirement.map((item) => {
                            return <p className="text-black text-base">{"-" + item}</p>
                        })
                    }
                </div>
                <p className="text-black text-lg font-semibold pt-4">Responsibilities:</p>
                <div>
                    {
                        job_description[idx - 1].responsibility.map((item) => {
                            return <p className="text-black text-base">{"-" + item}</p>
                        })
                    }
                </div>
            </div>
            <div className="lg:mt-8 mt-4 flex justify-center">
                <input
                    type="button"
                    value="APPLY NOW"
                    className="lg:w-80 lg:h-12 bg-[#F38117] cursor-pointer lg:text-xl text-base p-3 border-none text-center rounded-md"
                    onClick={nextStep}
                />
            </div>
        </div>
    )
}

export default Job_Description;