import React from "react";
import { Box, Stack } from "@mui/material";
import ProfileRightSide from './ProfileRightSide';
import MainProfile from './MainProfile';
import ProfileLeftSide from './ProfileLeftSide';

const ProfilePage = () => {
  return (
    <React.Fragment>
      <Box sx={{margin: "8px"}}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <ProfileRightSide/>
          <MainProfile/>
          <ProfileLeftSide/>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default ProfilePage;
