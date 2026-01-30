const ServiceCards = ({ cardDetail }) => {
    return (
        <>
            <div className=" p-8 bg-[#2a2727] rounded-xl group shadow-[#2a2727]   hover:shadow-xl transition ease-in duration-300 hover:shadow-[#d21a1a]  hover:border-0">
                <div className="bg-[#d21a1a] mb-4 h-10 w-10 rounded flex items-center justify-center">
                    {cardDetail.icon}
                </div>
                <h2 className="text-white text-lg font-medium font-syne mb-2">
                    {cardDetail.name}

                </h2>
                <p className="font-outfit leading-tight text-sm text-gray-400">
                    {cardDetail.description}
                </p>
                <div className="flex gap-2 my-6 transition duration-300 ease-in-out lg:opacity-0 lg:group-hover:opacity-100 text-[#d21a1a]">
                    <a href="">
                        {cardDetail.button}
                    </a>
                    {cardDetail.icon2}
                </div>
            </div>

        </>
    )
}

export default ServiceCards;
