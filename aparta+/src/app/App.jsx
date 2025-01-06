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
import Searchbar from '../components/searchbar';

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

        {/* testing components */}
        <Route path="/header" element={<Header />} /> 
        <Route path="/accountsidebar" element={<AccountSidebar />} /> 
        <Route path="/generalsidebar" element={<GeneralSidebar />} /> 
        <Route path="/searchbar" element={<Searchbar />} /> 


      </Routes>
    </BrowserRouter>
  );
}

export default App;