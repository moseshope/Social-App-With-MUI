import {
  Add,
  AddPhotoAlternate,
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AddPost = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    marginTop: "3px",
  });

  return (
    <>
      <Tooltip title="Add Post" mt={2} onClick={(e) => setOpen(true)}>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={3}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="gray"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Martin"
              src="https://source.unsplash.com/random"
            />
            <Typography variant="span" fontWeight={500}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="filled-multiline-static"
            label="What's on your mind?"
            multiline
            rows={4}
            variant="filled"
          />
          <Stack direction="row" gap={1} mt={1} mb={3}>
            <EmojiEmotions color="primary" />
            <AddPhotoAlternate color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <Button variant="contained" sx={{ width: "100%" }}>
            Post
          </Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
