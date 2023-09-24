import React from "react";
import "./Blog.css"
const Blog =({name,articlelink,imglink,blog})=>{
    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="rounded-3xl blog h-[500px] w-[360px] p-5 shadow-2xl bg-white bg-opacity-20 backdrop-blur-4xl">
            <p className="text-2xl">{name}</p>
            <div className=" overflow-y-auto overflow-hidden ">
                    <p className="z-[0] h-[500px] w-[300px]">{blog}</p>
                </div>
                <img className="person z-3 translate-y-[-100%] absolute rounded-3xl z-2 h-[500px] w-[360px]" src={imglink}></img>
                <a href={articlelink} className="text-2xl rounded-md p-1 bg-white text-black mix-blend-screen absolute translate-y-[-320%] translate-x-[-124%]">ज्यादा जानें</a>
                <div className="text-2xl rounded-md p-1 bg-white text-black mix-blend-screen absolute translate-y-[-180%] translate-x-[10%]">होवर / क्लिक पढ़ने के लिए </div>
            </div>
        </div>
    )
}

export default Blog;