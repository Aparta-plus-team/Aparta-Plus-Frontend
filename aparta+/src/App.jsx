import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './autenticacion/login';
import SignUp from './autenticacion/signUp';
import Reset from './autenticacion/reset';
import Code from './autenticacion/code';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />        
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/reset" element={<Reset />} /> 
        <Route path="/code" element={<Code />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;