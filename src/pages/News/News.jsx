
const News = () => {
    return (
        <>
        <div className="bg-[#F5F5F5] grid lg:grid-cols-9 grid-cols-7">
            <p className="lg:mt-20 mt-12 lg:col-start-4 lg:col-span-3 col-start-3 col-span-3 text-center lg:text-3xl text-2xl text-black font-bold">Coming soon!</p>
            <p className="lg:mt-8 mt-4 lg:col-start-4 lg:col-span-3 col-start-3 col-span-3 text-center lg:text-2xl text-xl text-black font-normal">
                We have some exciting events that will be announced soon.
            </p>
            <p className="lg:mt-4 mt-2 lg:col-start-3 lg:col-span-5 col-start-3 col-span-3 text-center lg:text-2xl text-xl text-black font-normal">
                Please sign up for our newsletter to receive upcoming events and special offers!
            </p>
            <div className="lg:mt-8 lg:col-start-4 lg:col-span-3 col-start-3 col-span-3 grid lg:grid-cols-2 grid-cols-1 pb-20 lg:border-b-2 lg:border-[#797979]">
                <input
                    type="email"
                    placeholder="youremail@email.com"
                    className="mt-3 border-1 border-solid border-black text-black text-lg lg:w-full w-full px-5 py-3 rounded-md"
                />
                <input
                    type="button"
                    value="Notify Me"
                    className="cursor-pointer mt-3 bg-[#797979] border-1 border-solid border-black text-black text-lg lg:w-full w-full px-5 py-3 rounded-md"
                />
            </div>
        </div>
        </>
    )
}

export default News;