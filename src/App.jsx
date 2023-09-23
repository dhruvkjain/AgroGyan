import { Component, useState } from 'react'
import './App.css'
import Blog from "./components/Blog";
import Form from "./components/Form";
import Data from "./components/User";
import v1 from "./assets/v1.mp4";
// import DyteProvider from "dytesdk/react-web-core";
import { useEffect } from 'react';
import { useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';






var i=10;
var name="" , email="" , phoneno="";

class App extends Component{
  constructor(){
    super();
    this.state={Data};
  }

  componentDidUpdate(){
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: 'Basic NWE5ZTdhNTEtNjEwNS00NGRjLThlZGEtN2U1OGFlOTA0OGUzOjdiOTc2ZGM2YTY2ZjY5ZWI1NWZi'},
      body: '{"title":"string","preferred_region":"ap-south-1","record_on_start":false,"live_stream_on_start":false,"recording_config":{"max_seconds":60,"file_name_prefix":"string","video_config":{"codec":"H264","width":1280,"height":720,"watermark":{"url":"http://example.com","size":{"width":1,"height":1},"position":"left top"}},"audio_config":{"codec":"AAC","channel":"stereo"},"storage_config":{"type":"aws","access_key":"string","secret":"string","bucket":"string","region":"us-east-1","path":"string","auth_method":"KEY","username":"string","password":"string","host":"string","port":0,"private_key":"string"},"dyte_bucket_config":{"enabled":true},"live_streaming_config":{"rtmp_url":"rtmp://a.rtmp.youtube.com/live2"}}}'
    };
    
    fetch('https://api.dyte.io/v2/meetings', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    
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

  render(){
    return(
      <div className="main">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Mooli&family=Orbitron&family=Poppins:wght@300&family=Rubik+Iso&family=Space+Grotesk:wght@300&display=swap');
        </style>
        <section className='fixed h-fit z-10 grid grid-cols-5'>
            <p className='text-4xl font-["Mooli",sans-serif]  bg-white bg-opacity-20 backdrop-blur-4xl text-black mix-blend-screen col-span-2 flex justify-start'>AGROGYAN</p>
            <a className='text-2xl font-["Mooli",sans-serif] bg-white bg-opacity-20 backdrop-blur-4xl text-black mix-blend-screen flex justify-center items-center' href='#first'>HOME</a>
            <a className='text-2xl font-["Mooli",sans-serif] bg-white bg-opacity-20 backdrop-blur-4xl text-black mix-blend-screen flex justify-center items-center' href='#slider'>BLOGS</a>
            <a className='text-2xl font-["Mooli",sans-serif] bg-white bg-opacity-20 backdrop-blur-4xl text-black mix-blend-screen flex justify-center items-center' href='#contacts'>CONTACTS</a>
          </section>
        <div id="first" className="first w-[99vw] h-screen ">
          <section className="absolute flex justify-center items-center p-16 h-screen">
          <div className="bg-[#4d908e] rounded-3xl ">
          <p className="text-5xl rounded-t-3xl bg-white text-black mix-blend-screen ">AGROGYAN</p>
          <div className='flex justify-center items-center'><video className='rounded-t-3xl ' autoPlay loop src="https://video.wixstatic.com/video/11062b_d578b9d4ffba48c68d086ec29fe9e6f0/1080p/mp4/file.mp4" ></video></div>
          <p className='p-5 w-screen h-screen flex justify-center items-center translate-y-[-70%] translate-x-[-20%] absolute font-["Mooli",sans-serif] text-3xl'>Connecting Science with Agriculture.</p>
          <p className="p-2 w-screen h-screen flex justify-center items-center translate-y-[-60%] translate-x-[-25%] absolute pb-0 text-xl">Lorem ipsum dolor sit amet!</p>
          </div>
          </section>
        </div>
        
        <div id="slider" className="slider w-screen second bg-[#ff99c8]">
          <div className='buttons flex z-10 absolute w-screen h-100vh'>
            {/* <button onClick={this.moveLeft}  className='rbtn pt-6 w-[100px] h-[100px]'><img src="leftarrow.png"></img></button> */}
            {/* <button onClick={this.moveRight} className='lbtn pt-6 w-[100px] h-[100px]'><img src="rightarrow.png"></img></button> */}
          </div>
          <section className=" bg-teal-600">
            <Blog name={"NAME"}/>
          </section>
          <section className='flex justify-center items-center bg-purple-500'>
          <Blog name={"NAME"}/>
          </section>
          <section className='flex justify-center items-center bg-slate-600'>
          <Blog name={"NAME"}/>
          </section>
          <section className='flex justify-center items-center bg-[#1e6091]'>
          <Blog name={"NAME"}/>
          </section>
          <section className='flex justify-center items-center bg-[#fe7f2d]'>
          <Blog name={"NAME"}/>
          </section>
        </div>
        <div id="contacts" className="h-screen w-screen third bg-white">
          <Form name={this.saveName} email={this.saveEmail} phoneno={this.savePhoneno} submit={this.submitClick}/>
        </div>
      </div>
    )
  }
}

export default App
