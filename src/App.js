import { Navbar } from "./components/Navbar";
import { JobsContainer } from "./components/JobsContainer";
import  Footer  from "./components/Footer";
import './App.css';
import {Routes , Route } from "react-router-dom"
import { Register } from "./components/Register";
import { EmployerRegister } from "./components/EmployerRegister";
import { CreateJob } from "./components/CreateJob";
import { Login } from "./components/Login";
import { ViewJob } from "./components/ViewJob";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import  Piechart  from "./components/Piechart";
import  Barchart  from "./components/Barchart";
import { EmployerLogin } from "./components/EmployerLogin";




function App() {
  return (
    <div className="App">
   
      <Navbar/>

     <Routes>

        
        <Route path="/" element={<JobsContainer/>} />
        <Route path="/create" element={<CreateJob/>} />
        <Route path="/piechart" element={<Piechart/>} />
        <Route path="/viewjob" element={<ViewJob/>} />
        <Route path="/barchart" element={<Barchart/>} />
        <Route path="/createjob" element={<CreateJob/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/employerlogin" element={<EmployerLogin/>} />
        
        <Route path="/register" element={<Register/>} />
        <Route path="/employerregister" element={<EmployerRegister/>} />
        {/* <Route path="signupg" element={<SignUpg/>} /> */}
        <Route path="products" >
          <Route path=":id" element={<ViewJob/>}/>
        </Route>

      </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default App;
