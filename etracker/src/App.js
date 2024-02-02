import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LP from "./Components/LP";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import SignupForm from "./Components/Authentication/SignupForm.jsx";
import LoginEmail from "./Components/Authentication/LoginEmail";
import ExpenseForm from "./Components/ExpenseForm";
import Test from "./Components/Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LP />} />
          <Route path="/member" element={<SignupForm />} />
          <Route path="/login-via-email" element={<LoginEmail />} />
          <Route path="/about" element={<About />} />
          <Route path="/expense" element={<ExpenseForm />} />
          <Route path="/dashboard" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
