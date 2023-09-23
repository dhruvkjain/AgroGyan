import { Component, useState } from 'react'
import './First.css'

import Blog from "./Blog";
import Form from "./Form";
import Data from "./User";
// import v1 from "./assets/v1.mp4";
// import DyteProvider from "@dytesdk/react-web-core";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


var i=10;
var name="" , email="" , phoneno="" ;

class First extends Component{
  constructor(){
    super();
    this.state={Data};
  }

  
  saveName=(event)=>{
    name = event.target.value;
  }

  saveEmail=(event)=>{
    email= event.target.value;
  }

  savePhoneno=(event)=>{
    phoneno= event.target.value;
  }

  submitClick=()=>{
    console.log(name);
    console.log(email);
    console.log(phoneno);
    const detail = {
        id: ++i ,
        name:name,
        email:email,
        phone:phoneno,
    }
    // alert("Submitted Successfully !");
    this.setState({Data : Data.push(detail)});
      name="";
      email="";
      phoneno="";
      console.log(Data);
  }
   
  menuShow=()=>{
    let home = document.getElementsByClassName("home")[0];
    let articles = document.getElementsByClassName("articles")[0];
    let contacts = document.getElementsByClassName("contacts")[0];
    home.classList.toggle("show");
    articles.classList.toggle("show");
    contacts.classList.toggle("show");
  }

  render(){
    return(
      <div className="main">
       <style>
            @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Kenia&family=Mooli&family=Orbitron&family=Poppins:wght@300&family=Rubik+Iso&family=Space+Grotesk:wght@300&display=swap');
        </style>
        <section className='grider'>
            <p className='helper help font-["Mooli",sans-serif]  bg-white bg-opacity-20 backdrop-blur-4xl text-black mix-blend-screen col-span-2 flex justify-start'>AGROGYAN</p>
            <a className='helper home font-["Mooli",sans-serif] bg-white bg-opacity-20 backdrop-blur-4xl text-black mix-blend-screen flex justify-center items-center' href='#first'>होम</a>
            <a className='helper articles font-["Mooli",sans-serif] bg-white bg-opacity-20 backdrop-blur-4xl text-black mix-blend-screen flex justify-center items-center' href='#slider'>लेख</a>
            <a className='helper contacts font-["Mooli",sans-serif] bg-white bg-opacity-20 backdrop-blur-4xl text-black mix-blend-screen flex justify-center items-center' href='#contacts'>संपर्क</a>
          </section>
          <img onClick={this.menuShow} className="cursor-pointer menu w-[40px] h-[40px] fixed" src="https://cdn-icons-png.flaticon.com/128/56/56763.png"></img>
        <div id="first" className="first w-[99vw] h-screen ">
          <section className="absolute flex justify-center items-center p-16 h-screen">
          <div className=" rounded-3xl ">

          {/* bg-white text-black mix-blend-screen  */}
          <div className='flex justify-center items-center'>
          <div className='mainfont rounded-3xl w-fit'>
          <p className="font1 rounded-3xl bg-white text-black mix-blend-screen">AGROGYAN</p>
          </div>
          </div>
          
          <p className='p-5 text-2xl'>भारतीय किसानों को विज्ञान के साथ सशक्त बनाना। हम अकादमिक लेखों का हिंदी में अनुवाद और सरलीकरण करते हैं, जिससे उन्नत तरीके सुलभ हो जाते हैं। खेती की व्यावहारिक जानकारी के लिए हमसे जुड़ें।</p>
          
          {/* <div className='flex justify-center items-center'><video className='rounded-t-3xl ' autoPlay loop src="https://video.wixstatic.com/video/11062b_d578b9d4ffba48c68d086ec29fe9e6f0/1080p/mp4/file.mp4" ></video></div> */}
          {/* <p className='p-5 w-screen h-screen flex justify-center items-center translate-y-[-70%] translate-x-[-20%] absolute font-["Mooli",sans-serif] text-3xl'>Connecting Science with Agriculture.</p> */}
          {/* <p className="p-2 w-screen h-screen flex justify-center items-center translate-y-[-60%] translate-x-[-25%] absolute pb-0 text-xl">Lorem ipsum dolor sit amet!</p> */}
          </div>
          </section>
        </div>
        
        <div id="slider" className="slider w-screen second bg-[#ff99c8]">
          <div className='buttons flex z-10 absolute w-screen h-100vh'>
            {/* <button onClick={this.moveLeft}  className='rbtn pt-6 w-[100px] h-[100px]'><img src="leftarrow.png"></img></button> */}
            {/* <button onClick={this.moveRight} className='lbtn pt-6 w-[100px] h-[100px]'><img src="rightarrow.png"></img></button> */}
          </div>
          <section className=" bg-teal-600">
            <Blog name={"नाम"}/>
          </section>
          <section className='flex justify-center items-center bg-[#c1b699]'>
          <Blog name={"नाम"}/>
          </section>
          <section className='flex justify-center items-center bg-slate-600'>
          <Blog name={"नाम"}/>
          </section>
          <section className='flex justify-center items-center bg-[#1e6091]'>
          <Blog name={"नाम"}/>
          </section>
          <section className='flex justify-center items-center bg-[#ff9770]'>
          <Blog name={"नाम"}/>
          </section>
        </div>
        <div id="contacts" className="h-screen w-screen third bg-white">
          <Form name={this.saveName} email={this.saveEmail} phoneno={this.savePhoneno} submit={this.submitClick}/>
        </div>
      </div>
    )
  }
}

export default First
