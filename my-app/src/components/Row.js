import React from "react";

export function Row({data}){
    return(
        <div className="w-full bg-white rounded-md flex flex-row p-2 justify-evenly"> 
        <p className="flex-1" >{data.rating}</p>
        <p className="flex-1" >{data.name}</p>
        <p className="flex-1">{data.location}</p>
        <p className="flex-1">{data.cuisine}</p>
        <p className="flex-1" >{data.price}</p>
        </div>

    )
}