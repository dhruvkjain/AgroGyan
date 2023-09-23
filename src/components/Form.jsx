import React from "react";
import "./Form.css";

const Form =({name,email,phoneno,submit})=>{
    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="grid grid-rows-5 bg-transparent">
                <div onInput={name} className="m-5"><input className="w-[60vw] text-black input outline-none text-xl placeholder-black bg-transparent border-t-2 border-b-2 border-black" placeholder="Full Name" type="text"></input></div>
                <div onInput={email} className="m-5"><input className="w-[60vw] text-black input outline-none text-xl placeholder-black bg-transparent border-t-2 border-b-2 border-black" placeholder="Email" type="email"></input></div>
                <div onInput={phoneno} className="m-5"><input className="w-[60vw] text-black input outline-none text-xl placeholder-black bg-transparent border-t-2 border-b-2 border-black" placeholder="Phone no." type="number"></input></div>
                <div onClick={submit} className="flex justify-center items-center"><button className="w-[30vw] h-[8vh] bg-black">SUBMIT</button></div>
            </div>
        </div>
    )
}

export default Form;