import React from "react";
import { Box, Stack } from '@mui/material';
import Feed from './Feed';
import RightBar from './RightBar';
import SideBar from './SideBar';

const Home = ({mode, setMode}) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar setMode={setMode} mode={mode} />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default Home;

