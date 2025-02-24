import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Event } from "./pages/Event";
import { Profile } from "./pages/Profile";
import { Dashboard } from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { EventDetails } from "./pages/EventDetails";
import { Footer } from "./components/Footer";
import { EventCreate } from "./pages/EventCreate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Event />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events/:eventId" element={<EventDetails />} />


        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/eventcreate" element={<EventCreate />} />
        </Route>
        {/* <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
     
    
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
