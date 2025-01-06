import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '~/login';
import SignUp from '~/signUp';
import Reset from '~/reset';
import Code from '~/code';
import Confirm from '~/confirm';
import Account from '~/useraccount';
import Homepage from '~/homepage';
import Header from '*/header';
import AccountSidebar from '*/accountSidebar';
import GeneralSidebar from '*/generalsidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Autenticacion */}
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />        
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