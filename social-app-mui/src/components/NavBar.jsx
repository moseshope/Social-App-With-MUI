import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  Modal,
  Box,
  Drawer,
  ListItem,
  List,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0, 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled("div")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false); //State for opening Menu Items onClick avatar icon
  // Drawer State
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);
  // Message State
  const [openMessage, setOpenMessage] = useState(false); //State for message modal onClick
  const handleOpenMessage = () => setOpenMessage(true);
  const handleCloseMessage = () => setOpenMessage(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Social
          </Typography>
        </Link>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error" onClick={handleOpenMessage}>
            <Mail />
          </Badge>
          <Badge
            badgeContent={4}
            color="error"
            onClick={handleDrawerOpen}
          >
            <Notifications />
          </Badge>
          <Avatar
            sx={{ height: "30px", width: "30px" }}
            alt="RemyMartin"
            onClick={(e) => setOpen(true)}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ height: 30, width: 30 }}
            onClick={(e) => setOpen(true)}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          <Typography variant="span" onClick={(e) => setOpen(true)}>
            John
          </Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Add post</MenuItem>
          <MenuItem>Login</MenuItem>
        </Menu>
      </StyledToolBar>
      {/* Modal for message modal pop up */}
      <Modal
        open={openMessage}
        onClose={handleCloseMessage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      {/* Drawer for Notifications */}
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem>The longer the Nofitications the longer the drawer</ListItem>
          <ListItem>The longer the Nofitications the longer the drawer</ListItem>
          <ListItem>The longer the Nofitications the longer the drawer</ListItem>
          <ListItem>Nofitications</ListItem>
          <ListItem>The longer the Nofitications the longer the drawer</ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
