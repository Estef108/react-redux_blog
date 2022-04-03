import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";
import Menu from "./components/Menu";
import './App.css';

function App() {
  return (
    <Router>
    <Menu/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/posts" element={<Posts/>} />
        <Route exact path="/posts/:postId" element={<PostPage/>} />
      </Routes>
      {/* <Navigate to="/" /> */}
    </Router>
  );
}

export default App;
