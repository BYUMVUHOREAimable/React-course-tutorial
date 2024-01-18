//import TheUseOfProps from "./Components/TheUseOfProps";
//import TheUseOfState from "./Components/TheUseOfState";
//import Login from "./Components/Login";
//import "./App.css";
//import TernaryOperator from "./Components/TernaryOperator";

//import Task from "./Components/Task";
//import Form from "./Components/Form";
//import ToDoList from "./Components/ToDoList";

//import TheUseOfEfcolorRed}; from "./Components/TheUseOfEffect";

//import TheUseOfRef from "./Components/TheUseOfRef";

//import { ButtonRed, ButtonBlue, ButtonGreen } from "./Components/Buttons";

//import React, {useState,useEffect} from "react";
//import { Button } from "./Components/Subscribe";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
      
      
      
      
       {/* <Button color={"blue"} darkColor={"darkblue"} large>
        Subscribe
      </Button>
      */}

      {/* 
      <ButtonRed>This is a styled 
       red button</ButtonRed>
      <ButtonBlue>This is a styled blue button</ButtonBlue>
       <ButtonGreen>This is a styled green button</ButtonGreen>
       */}
      

      {/*<Form/>*/}
      {/*<ToDoList />*/}

      {/*<TheUseOfRef />*/}

      {/*
    <TheUseOfEffect />
  */}

      {/*
       <TernaryOperator />
  */}

      {/*
     <Login />
    */}

      {/*
      <TheUseOfState / >
      * /}

      {/* 
      <TheUseOfProps firstname="Aimable" lastname="BYUMVUHORE" email="aimablebyumvuhore@gmail.com"/>
      <TheUseOfProps lastname="IRADUKUNDA" email="celeverieniradukunda@gmail.com" firstname="Celeverien"/>
      <TheUseOfProps firstname="Brandine" lastname="TUYISENGE" email="tuyisengebrandine@gmail.com"/>
  */}
    </div>
  );
}

export default App;
