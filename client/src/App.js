import React from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import SharedContext from "./context/SharedContext";
import Login from "./components/Login/Login";
import Home from "./pages/Home.js";
import Register from "./components/Register/Register";


// import Post from "./components/Post.jsx";
export default function App() {
  return (
    <> 
     
   {/*  <GlobalStyles /> */}
     
    <SharedContext>
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path="/posts" element={<Post />}></Route> */}
          {/* <Route path="/join" element={<Join />}></Route> */}
        </Routes>
      </div>
    </SharedContext>
    </>
  );
}
