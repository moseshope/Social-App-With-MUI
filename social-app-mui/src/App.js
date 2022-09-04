import { createTheme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage';
import NavBar from './components/NavBar';
import Home from './components/Home'

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
      </Routes>
    </ThemeProvider>
  )
}

export default App;
