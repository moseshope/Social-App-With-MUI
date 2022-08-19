import { Box, Stack } from '@mui/material';
import React from 'react'
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import RightBar from './components/RightBar';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <Box>
    <NavBar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar/>
      <Feed/>
      <RightBar/>
    </Stack>
    </Box>
  )
}

export default App;
