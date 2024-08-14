import Header from "./components/Header";
import Card from "./components/Card";
import Tododcontainer from "./components/Todocontainer";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  const [creds, setcreds] = useState([
    {
      uname: "raks",
      pwd: "123"
    }
  ])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login creds={creds} setcreds={setcreds} />} ></Route>
        <Route path='/signup' element={<Signup creds={creds} setcreds={setcreds} />} ></Route>
        <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
