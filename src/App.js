
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import PostsPage from './components/PostsPage';
function App() {
  const [token,setToken] = useState();
  function addToken(auth_token){
    setToken(auth_token);
  }
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/login' element={<LoginPage addToken={addToken}/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/' element={<Navbar token={token}/>}>
          <Route path ="posts" element={<PostsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
