import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import LP from "./Components/LP";
// import {BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./Components/About";
// import ContactUs from "./Components/ContactUs";
// import SignupForm from "./Components/Authentication/SignupForm.jsx";
// import LoginEmail from "./Components/Authentication/LoginEmail";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Footer from "./Components/Footer";
// import ExpenseForm from './Components/ExpenseForm'
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LP />} />
          <Route path="/member" element={<SignupForm />} />
          <Route path="/login-via-email" element={<LoginEmail />} />
          <Route path="/about" element={<About />} />
          <Route path="/expense" element={<ExpenseForm/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter> */}

      <Dashboard/>
    </div>
  );
}

export default App;
