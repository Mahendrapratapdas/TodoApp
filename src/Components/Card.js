const Card = ({ data, updateTodo, deleteTodo }) => {
    return (
        <div className={`${data?.completed ? "bg-slate-200" : "bg-pink-200"} h-[250px] w-[250px] rounded-lg flex flex-col justify-center text-center shadow-lg`}>
            <h2 className={` font-bold text-xl ${data.completed ? "line-through text-gray-400" : ""}`}>{data?.title}</h2>
            <div className="m-6">
                <h2><span className="font-bold" >Desc-: </span>{data?.descriptions}</h2>
                <h2><span className="font-bold">Created-:</span>
                    {data?.created_date
                        ? new Date(data.created_date).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hour12: true,
                        })
                        : "N/A"}
                </h2>
                {/* <h2>{data?.completed}</h2> */}
                <div className="flex justify-between mt-5">
                    <button className="bg-yellow-200 w-24 h-10 rounded-md" onClick={updateTodo}><span className="font-bold text-sm">{data?.completed ? "In-Complete" : "Complete"}</span></button>
                    <button className="bg-red-400 w-24 h-10 rounded-md" onClick={deleteTodo}><span className="font-bold text-sm" >Delete</span></button>
                </div>
            </div>
        </div>
    )
}

export default Card;