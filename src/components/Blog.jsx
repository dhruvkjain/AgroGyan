import React from "react";
import "./Blog.css"
const Blog =({name})=>{
    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="rounded-3xl blog h-[500px] w-[360px] p-5 shadow-2xl bg-white bg-opacity-20 backdrop-blur-4xl">
            <p className="text-2xl">{name}</p>
            <div className=" overflow-y-auto overflow-x-hidden">
                    <p className="z-[0] translate-x-[-4%] h-[500px] w-[350px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa necessitatibus tempora aspernatur placeat cupiditate doloribus corporis veritatis, hic aut aliquid eaque porro similique expedita deserunt eligendi. Voluptates temporibus voluptas maiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque non nihil officia error aliquid? Ipsam, cum soluta. Voluptas tenetur voluptates, repudiandae laborum itaque eveniet distinctio omnis ipsa eos quos. Aliquid.</p>
                </div>
                <img className="person z-3 translate-y-[-100%] absolute rounded-3xl z-2 h-[500px] w-[360px]" src="https://gcm.co.nz/i/uploads/artist/johannes-young/51535/16954a1a443c27ca4fd28c4f0a6672dd.jpg"></img>
                <a href="" className="text-2xl rounded-md p-1 bg-white text-black mix-blend-screen absolute translate-y-[-320%] translate-x-[-124%]">ज्यादा जानें</a>
                <div className="text-2xl rounded-md p-1 bg-white text-black mix-blend-screen absolute translate-y-[-180%] translate-x-[10%]">होवर / क्लिक पढ़ने के लिए </div>
            </div>
        </div>
    )
}

export default Blog;