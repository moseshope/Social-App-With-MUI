import { AccountBox, Article, Groups, Home, ModeNight, Person, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import AddPost from "./AddPost";

const SideBar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display: { xs: "none", sm: "block"}}}>
      <Box position="fixed">
      <List>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Homepage" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <Article />
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <Groups />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <Storefront />
        </ListItemIcon>
        <ListItemText primary="MarketPlace" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <AccountBox />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <ModeNight/>
        </ListItemIcon>
          <Switch onChange={(e)=> setMode(mode === "light" ? "dark" : "light" )}/>
      </ListItemButton>
      </ListItem>
      </List>
      <AddPost/>
      </Box>
    </Box>
  );
};

export default SideBar;
