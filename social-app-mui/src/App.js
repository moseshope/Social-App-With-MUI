import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import RightBar from './components/RightBar';
import SideBar from './components/SideBar';

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}> 
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar setMode={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>
      </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App;
