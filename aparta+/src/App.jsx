import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './autenticacion/login';
import SignUp from './autenticacion/signUp';
import Reset from './autenticacion/reset';
import Code from './autenticacion/code';
import Confirm from './autenticacion/confirm';
import Account from './user/useraccount';
import Screen from './home/screen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Autenticacion */}
        <Route path="/screen" element={<Screen />} />
        <Route path="/Login" element={<Login />} />        
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/reset" element={<Reset />} /> 
        <Route path="/code" element={<Code />} /> 
        <Route path="/confirm" element={<Confirm />} /> 

        {/* Account */}
        <Route path="/account" element={<Account />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;