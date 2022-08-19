import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        RightBar
      </Box>
    </Box>
  );
};

export default RightBar;
