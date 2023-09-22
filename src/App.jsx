import { Component, useState } from 'react'
import './App.css'
import Blog from "./components/Blog";

class App extends Component{
  constructor(){
    super();
    this.state={};
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
            <a className='text-2xl font-["Mooli",sans-serif] bg-white bg-opacity-20 backdrop-blur-4xl text-black mix-blend-screen flex justify-center items-center' href='#about'>ABOUT</a>
          </section>
        <div id="first" className="first w-[99vw] h-screen ">
          <section className="absolute flex justify-center items-center p-16 h-screen">
          <div className="bg-[#4d908e] rounded-3xl h-[60vh]">
          <p className="text-5xl rounded-t-3xl bg-white text-black mix-blend-screen ">AGROGYAN</p>
          <div className='flex justify-center items-center'><video className=''autoplay loop src=""></video></div>
          <p className='p-5 font-["Mooli",sans-serif] text-3xl'>Connecting Science with Agriculture.</p>
          <p className="p-2 pb-0 text-xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam quasi sunt mollitia consequatur adipisci deleniti suscipit provident. Voluptatibus consequatur magni repellat deserunt quasi explicabo in magnam vero consequuntur quas!</p>
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
        <div id="about" className="h-screen w-screen third bg-[#d9ed92]">
          <section></section>
        </div>
      </div>
    )
  }
}

export default App
