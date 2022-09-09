import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const MainProfile = () => {
  return (
    <React.Fragment>
      <Box flex={2} sx={{ backgroundColor: "pink" }}>
        <Box>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="cover_image"
            height="194px"
            width="663px"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: "red", height: 150, width: 150}} aria-label="recipe">
            PROFILE IMAGE
          </Avatar>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 0.5 }}>
          <Typography variant="h6">Peter Thiel</Typography>
        </Box>
        <Box sx={{ marginTop: 3, paddingLeft: 1}}>
          <Typography variant="h6">Work Connections</Typography>
          <Typography variant="p">546 connects</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MainProfile;
