const items = [ 
    { name: "assets/Menu/Cafe/cafe2.png" },
    { name: "assets/Menu/Cafe/cafe3.png" },
    { name: "assets/Menu/Cafe/cafe4.png" },
    { name: "assets/Menu/Cafe/cafe5.png" },
    { name: "assets/Menu/Cafe/cafe6.png" },
    { name: "assets/Menu/Cafe/cafe7.png" },
    { name: "assets/Menu/Cafe/cafe8.png" },
    { name: "assets/Menu/Cafe/cafe9.png" },
    { name: "assets/Menu/Cafe/cafe10.png" },
];

const Cafe = () => {
    return (
        <>
        <div className='bg-[#F5ECE6] lg:mx-48 mx-4'>
            <div className="lg:mt-24 mt-10 flex lg:flex-row flex-col justify-center items-center">
                <div className="lg:w-1/2 w-full lg:pr-5">
                    <p className="lg:text-4xl text-2xl font-bold">Browse Cafe Menu</p>
                    <p className="lg:text-xl text-lg font-medium lg:pt-10 pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque. </p>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-5 lg:pt-0 pt-5">
                    <img src="assets/Menu/Cafe/cafe1.png" />
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

export default Cafe;