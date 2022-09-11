import { createTheme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/Profile/ProfilePage';
import NavBar from './components/NavBar';
import Home from './components/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}> 
     <NavBar />
      <Routes>
        <Route path='/' element={<Home mode={mode} setMode={setMode}/>}/>
        <Route path='/profilepage' element={<ProfilePage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App;
