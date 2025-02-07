import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Notestate from "./context/notes/Notestate";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
    <Notestate>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">

       <Routes>
        <Route element={<Home showAlert={showAlert}/>} exact path="/"></Route>
        <Route element={<About/>} exact path="/about"></Route>
        <Route element={<Login showAlert={showAlert} />} exact path="/login"></Route>
        <Route element={<Signup showAlert={showAlert}/>} exact path="/signup"></Route>

         </Routes>
         </div>
      </Router>
      </Notestate>
    </>
  );
}

export default App;
