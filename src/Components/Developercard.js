const DeveloperCard = ({ data }) => {
    return (
        <div className="h-[400px] w-[350px] bg-pink-100 border rounded-xl flex flex-col justify-center items-center shadow-xl">
            <div className="h-1/4 w-28 m-4">
                <img src={data?.avatar_url} alt="Pic" className="rounded-full" />
            </div>
            <div className="m-4 text-center"> 
                <h3 className="font-bold text-2xl text-blue-700">{data?.name}</h3>
                <h5 className="text-l">{data?.bio}</h5>
                <div className="my-4">
                    <h4 className="font-bold text-lg">💻{data?.company}</h4>
                    <h5 className="font-bold text-lg">📍{data?.location}</h5>
                </div>
            </div>
        </div>
    )
}

export default DeveloperCard;