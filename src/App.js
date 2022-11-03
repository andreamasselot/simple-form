import './App.css';
import Form from './components/Form';
import Footer from './components/Footer';
import StepTwo from './components/StepTwo';

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [samePassword, setSamePassword] = useState("");
  const [form, setForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(password && samePassword && password === samePassword) {
       setForm(true);
    } else {
      alert("Les mots de passe ne sont pas identiques");
    }
  };

  return (
    <div className="App">

{form ? <StepTwo name={name} email={email} password={password} setForm={setForm} /> : 

        <Form
        handleSubmit={handleSubmit}
        name={name} setName={setName}
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        samePassword={samePassword} setSamePassword={setSamePassword}
          /> }

      


      

      <Footer />


    </div>
  );
}

export default App;
