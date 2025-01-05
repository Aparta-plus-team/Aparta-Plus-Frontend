import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './autenticacion/login';
import SignUp from './autenticacion/signUp';
import Reset from './autenticacion/reset';
import Code from './autenticacion/code';
import Confirm from './autenticacion/confirm';
import Account from './user/useraccount';
import Screen from './home/screen';
import Header from './component/header';
import AccountSidebar from './component/accountSidebar/accountSidebar';
import GeneralSidebar from './component/generalSidebar/generalsidebar';

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

        {/* testing header */}
        <Route path="/header" element={<Header />} /> 
        <Route path="/accountsidebar" element={<AccountSidebar />} /> 
        <Route path="/generalsidebar" element={<GeneralSidebar />} /> 


      </Routes>
    </BrowserRouter>
  );
}

export default App;