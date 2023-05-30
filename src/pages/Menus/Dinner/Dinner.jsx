const items = [ 
    { name: "assets/Menu/Dinner/dinner2.png" },
    { name: "assets/Menu/Dinner/dinner3.png" },
    { name: "assets/Menu/Dinner/dinner4.png" },
    { name: "assets/Menu/Dinner/dinner5.png" },
    { name: "assets/Menu/Dinner/dinner6.png" },
    { name: "assets/Menu/Dinner/dinner7.png" },
    { name: "assets/Menu/Dinner/dinner8.png" },
    { name: "assets/Menu/Dinner/dinner9.png" },
    { name: "assets/Menu/Dinner/dinner10.png" },
];

const Dinner = () => {
    return (
        <>
        <div className='bg-[#F5ECE6] lg:mx-48 mx-4'>
            <div className="lg:mt-24 mt-10 flex lg:flex-row flex-col justify-center items-center">
                <div className="lg:w-1/2 w-full lg:pr-5">
                    <p className="lg:text-4xl text-2xl font-bold">Browse dinner Menu</p>
                    <p className="lg:text-xl text-lg font-medium lg:pt-10 pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque. </p>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-5 lg:pt-0 pt-5">
                    <img src="assets/Menu/Dinner/dinner1.png" />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:mt-10 mt-5">
            {
                items.map((item, key) => {
                    return <img className="w-full lg:p-5 p-3" src={item.name} />
                })
            }
            </div>
        </div>
        </>
    )
}

export default Dinner;