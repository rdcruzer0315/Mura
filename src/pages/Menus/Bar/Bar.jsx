const items = [ 
    { name: "assets/Menu/Bar/bar2.png" },
    { name: "assets/Menu/Bar/bar3.png" },
    { name: "assets/Menu/Bar/bar4.png" },
    { name: "assets/Menu/Bar/bar5.png" },
    { name: "assets/Menu/Bar/bar6.png" },
    { name: "assets/Menu/Bar/bar7.png" },
    { name: "assets/Menu/Bar/bar8.png" },
    { name: "assets/Menu/Bar/bar9.png" },
    { name: "assets/Menu/Bar/bar10.png" },
];

const Bar = () => {
    return (
        <>
        <div className='bg-[#F5ECE6] lg:mx-48 mx-4'>
            <div className="lg:mt-24 mt-10 flex lg:flex-row flex-col justify-center items-center">
                <div className="lg:w-1/2 w-full lg:pr-5">
                    <p className="lg:text-4xl text-2xl font-bold">Browse bar Menu</p>
                    <p className="lg:text-xl text-lg font-medium lg:pt-10 pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mi, aliquet ut consequat eu, fermentum non enim. Praesent felis ex, tempor ac pellentesque mollis, pulvinar sit amet nunc. Morbi lacinia viverra arcu at pellentesque. </p>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-5 lg:pt-0 pt-5">
                    <img src="assets/Menu/Bar/bar1.png" />
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

export default Bar;