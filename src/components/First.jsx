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
      <div className="main overflow-x-hidden">
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
            <Blog name={"नाम"} 
            articlelink={"https://www.scirp.org/journal/paperinformation.aspx?paperid=127671"}
            imglink={"https://th.bing.com/th/id/OIP.JrKXk3hSLV_NJ35YjPzAZwAAAA?pid=ImgDet&rs=1"}
            blog={"इस अध्ययन से पता चलता है कि कवक 'एम एनीसोप्लिया' किसानों के लिए अपने मीठे आलू को कुछ कीड़े से बचाने के लिए एक सहायक उपकरण हो सकता है, लेकिन यह सुनिश्चित करने के लिए अधिक शोध की आवश्यकता है कि क्या यह अन्य बग के लिए भी काम कर सकता है। वैज्ञानिकों को हमारी फसलों को कीटों से सुरक्षित रखने के नए तरीके खोजते हुए देखना रोमांचक है।"}/>
          </section>
          <section className='flex justify-center items-center bg-[#c1b699]'>
          <Blog name={"नाम"} 
          articlelink={"https://www.scirp.org/journal/paperinformation.aspx?paperid=127863"}
          imglink={"https://media.licdn.com/dms/image/D4E03AQGgjszN18VqYA/profile-displayphoto-shrink_800_800/0/1680838833889?e=2147483647&v=beta&t=CCYsU_dTcOBFZx5q-XySer1Z_CwZ09BxUDdzWt6b7H0"}
          blog={"यदि लक्ष्य टमाटर के पौधों के विकास को बढ़ावा देना और सबसे अधिक टमाटर प्राप्त करना है, तो चिकन खाद इन तीन प्रकार की खाद में सबसे अच्छा विकल्प है। ऐसा इसलिए है क्योंकि यह नाइट्रोजन, फास्फोरस और पोटेशियम जैसे महत्वपूर्ण पोषक तत्व प्रदान करता है, जो पौधे के विकास के लिए आवश्यक हैं। ये पोषक तत्व टमाटर के पौधों द्वारा आसानी से अवशोषित हो जाते हैं जब उन्हें मिट्टी में चिकन खाद के साथ मिलाया जाता है।"}/>
          </section>
          <section className='flex justify-center items-center bg-slate-600'>
          <Blog name={"नाम"}
          articlelink={"https://www.scirp.org/journal/paperinformation.aspx?paperid=127859"} 
          imglink={"https://www.cifor-icraf.org/wp-content/uploads/2021/08/Vijay_Kumar-300x300.png"}
          blog={"यह अध्ययन प्रारंभिक सबूत प्रदान करता है कि रासायनिक खेती की तुलना में जलवायु परिवर्तन के नकारात्मक प्रभावों को कम करने में प्राकृतिक खेती अधिक लचीला हो सकती है। हालांकि, यह विभिन्न प्राकृतिक कृषि सिद्धांतों और प्रतिकूल जलवायु परिस्थितियों में उनकी प्रभावशीलता के बीच कारण और प्रभाव संबंधों को पूरी तरह से समझने के लिए आगे दीर्घकालिक प्रयोगों की आवश्यकता को स्वीकार करता है।"}/>
          </section>
          <section className='flex justify-center items-center bg-[#1e6091]'>
          <Blog name={"नाम"}
          articlelink={"https://www.scirp.org/journal/paperinformation.aspx?paperid=127759"} 
          imglink={"https://i1.rgstatic.net/ii/profile.image/11431281103283894-1669643936483_Q512/Kwadwo-Gyasi-Santo.jpg"}
          blog={"यह अध्ययन इस बात पर प्रकाश डालता है कि मक्का और मूंगफली को एक साथ मिलाकर और मूंगफली को जल्दी लगाने से खेती कैसे बेहतर हो सकती है। किसान इन विचारों का उपयोग अधिक फसल उगाने और अपने खेतों को बेहतर बनाने के लिए कर सकते हैं। विभिन्न स्थानों में इसकी खोज करके और विभिन्न व्यवस्थाओं को आजमाकर, हम और भी अधिक किसानों की मदद कर सकते हैं और दुनिया भर में खेती को स्मार्ट बना सकते हैं।"}/>
          </section>
          <section className='flex justify-center items-center bg-[#ff9770]'>
          <Blog name={"नाम"} 
          articlelink={"https://www.scirp.org/journal/paperinformation.aspx?paperid=127520"}
          imglink={"https://i1.rgstatic.net/ii/profile.image/726369508007938-1550191394828_Q128/Ame-Thiombiano.jpg"}
          blog={"यह अध्ययन प्रोटीन के समृद्ध स्रोत के रूप में बम्बरा मूंगफली की क्षमता पर प्रकाश डालता है। विभिन्न भूमि प्रजातियों के बीच प्रोटीन सामग्री में मामूली बदलाव हमें याद दिलाते हैं कि इस अद्भुत फसल के बारे में अभी भी बहुत कुछ खोजना बाकी है। यह शोध न केवल बम्बरा मूंगफली के बारे में हमारे ज्ञान को बढ़ाता है, बल्कि इस अक्सर कम आंकी गई फसल की आगे की खोज की आवश्यकता पर भी जोर देता है। इसमें खाद्य और पोषण चुनौतियों से निपटने में हमारी मदद करने की शक्ति है, खासकर उन क्षेत्रों में जहां वे सबसे कठिन हैं।"}/>
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
