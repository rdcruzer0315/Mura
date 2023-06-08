import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBarImages } from "../../../store/Bar";

const Bar = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBarImages());
    }, []);

    const items = useSelector((state) => state.bar.images);

    return (
        <>
        <div className='bg-[#F5ECE6] xl:mx-60 lg:mx-20 mx-4'>
            <div className="lg:mt-24 mt-10 flex lg:flex-row flex-col justify-center items-center">
                <div className="lg:w-1/2 w-full lg:pr-5">
                    <p className="lg:text-4xl text-2xl font-bold">Browse Bar Menu</p>
                    <p className="lg:text-xl text-lg font-medium lg:pt-10 pt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque. 
                    </p>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-5 lg:pt-0 pt-5">
                    <img className="rounded-lg" src="assets/Menu/Bar/bar1.png" alt="bar_logo" />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:mt-10 mt-5">
            {
                items.map((image) => {
                    return <img className="w-full xl:p-16 lg:p-6 p-3" src={`data:image/png;base64,${image.data}`} alt={image.name} />
                })
            }
            </div>
        </div>
        </>
    )
}

export default Bar;