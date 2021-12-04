import React,{useState, useEffect} from "react";
import Nav from "./components/Nav";
import "./App.css";
import NewsPage from "./components/NewsPage";
import {NewsProvider} from './components/NewsContext';



function App() {
  

  
  


  
  return (
    <NewsProvider>
    <div className="App">
      
      <Nav />
      <NewsPage/>
      
    </div>
    </NewsProvider>
  );
}

export default App;
