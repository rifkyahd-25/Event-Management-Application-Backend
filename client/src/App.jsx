import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Event } from "./pages/Event";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/event" element={<Event />} />
        <Route path="/profile" element={<Profile/>} />

      </Routes>
    
   </>
  );
}

export default App;
