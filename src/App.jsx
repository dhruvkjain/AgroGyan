import { Component, useState } from 'react'
import './App.css'
import Layout from "./components/Layout";
import NoPage from './components/NoPage';
import First from './components/First';

import Blog from "./components/Blog";
import Form from "./components/Form";
import Data from "./components/User";
import v1 from "./assets/v1.mp4";
// import DyteProvider from "@dytesdk/react-web-core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videochat from "./components/Videochat";
// import defaultimg from "./assets/default.png";

// var i=10;
// var name="" , email="" , phoneno="" , auth_token="";


class App extends Component {
  constructor() {
    super();
    this.state = { auth_token: "", auth_token2: "", meeting_id: "" };
  }

  // saveName=(event)=>{
  //   name = event.target.value;
  // }

  // saveEmail=(event)=>{
  //   email= event.target.value;
  // }

  // savePhoneno=(event)=>{
  //   phoneno= event.target.value;
  // }

  // submitClick=()=>{
  //   console.log(name);
  //   console.log(email);
  //   console.log(phoneno);
  //   const detail = {
  //       id: ++i ,
  //       name:name,
  //       email:email,
  //       phone:phoneno,
  //   }
  //   // alert("Submitted Successfully !");
  //   this.setState({Data : Data.push(detail)});
  //     name="";
  //     email="";
  //     phoneno="";
  //     console.log(Data);
  //     const options = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Basic NWE5ZTdhNTEtNjEwNS00NGRjLThlZGEtN2U1OGFlOTA0OGUzOjdiOTc2ZGM2YTY2ZjY5ZWI1NWZi'
  //       },
  //       body: '{"name":"Mary Sue","picture":"https://i.imgur.com/test.jpg","preset_name":"group_call_host","custom_participant_id":"host"}'
  //     };

  //     fetch('https://api.dyte.io/v2/meetings/bbb88f5f-7300-4284-9ca9-4ba8f22ccdf8/participants', options)
  //       .then(response => response.json())
  //       .then(response => {
  //         console.log(response);
  //         auth_token = response.data.token;
  //         console.log(auth_token);
  //       })
  //       .catch(err => console.error(err));
  // }

  componentDidMount() {

    let ran = Math.random().toString();
    console.log(typeof (ran));
    let body = {
      name: "You name",
      picture: "https://th.bing.com/th?id=OIP.OesLvyzDO6AvU_hYUAT4IAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      preset_name: "group_call_host",
      custom_participant_id: ran
    }

    const options1 = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic NWE5ZTdhNTEtNjEwNS00NGRjLThlZGEtN2U1OGFlOTA0OGUzOjdiOTc2ZGM2YTY2ZjY5ZWI1NWZi'
      },
      body:JSON.stringify(body)
    };

    fetch('https://api.dyte.io/v2/meetings/bbb88f5f-7300-4284-9ca9-4ba8f22ccdf8/participants', options1)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ auth_token: response.data.token });
        console.log(this.state.auth_token);
        this.setState({ meeting_id: response.data.id });
      })
      .catch(err => console.error(err));


    const options2 = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic NWE5ZTdhNTEtNjEwNS00NGRjLThlZGEtN2U1OGFlOTA0OGUzOjdiOTc2ZGM2YTY2ZjY5ZWI1NWZi'
      },
      body: '{"name":"Your Name","picture":"https://th.bing.com/th?id=OIP.OesLvyzDO6AvU_hYUAT4IAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2","preset_name":"group_call_participant","custom_participant_id":"1"}'
    };

    fetch('https://api.dyte.io/v2/meetings/bbb88f5f-7300-4284-9ca9-4ba8f22ccdf8/participants', options2)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ auth_token2: response.data.token });
        console.log(this.state.auth_token2);
      })
      .catch(err => console.error(err));

  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<First />} />
            <Route path="videochat" element={<Videochat authtoken={this.state.auth_token} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App