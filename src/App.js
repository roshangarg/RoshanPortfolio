import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Project from "./components/Project";
import Layout from "./Layout";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Layout>
        <Routes path= '/'>
          <Route index element={<Home/>}/>
          <Route exact path={"/about"} element={<About/>}/>
          <Route exact path={"/navbar"} element={<Navbar/>}/>
          <Route exact path={"/contact"} element={<Contact/>}/>
          <Route exact path={"/project"} element={<Project/>}/>
          <Route path="*" element={NotFound} />
         
          

        </Routes>
        </Layout>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
