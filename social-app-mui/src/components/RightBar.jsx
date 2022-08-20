import { Box, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
      </Box>
    </Box>
  );
};

export default RightBar;
