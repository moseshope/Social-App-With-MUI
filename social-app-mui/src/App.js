import * as React from "react";
import { Button, ThemeProvider, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Add } from "@mui/icons-material";
import { styled } from '@mui/material';
import { theme } from './theme';

function App() {

  const CustomButton = styled(Button)(({theme})=> ({
    backgroundColor: "#FF00FF",
    color: "white",
    "&:hover": {
      backgroundColor: "#808000",
      color: "black",
    }
  }));

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button startIcon={<SettingsIcon/>} variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="error">error</Button>
        <CustomButton>Custom Button</CustomButton>
      </div>
    </ThemeProvider>
  )
}

export default App;
