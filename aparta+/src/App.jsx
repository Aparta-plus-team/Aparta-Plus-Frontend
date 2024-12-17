import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './autenticacion/login';
import SignUp from './autenticacion/signUp';
import Reset from './autenticacion/reset';
import Code from './autenticacion/code';
import Confirm from './autenticacion/confirm';
import Screen from './home/screen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/screen" element={<Screen />} />
        <Route path="/Login" element={<Login />} />        
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/reset" element={<Reset />} /> 
        <Route path="/code" element={<Code />} /> 
        <Route path="/confirm" element={<Confirm />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;