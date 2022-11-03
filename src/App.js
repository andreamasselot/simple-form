import './App.css';
import Form from './components/Form';
import Footer from './components/Footer';

import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="App">
      <Form />
      <Footer />
    </div>
  );
}

export default App;
