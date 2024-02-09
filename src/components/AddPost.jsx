import { useTheme } from "@emotion/react";
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function AddPost() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Tooltip
        sx={{ position: "fixed", bottom: "20px", left: "22px" }}
        title="Add Post"
      >
        <Fab
          onClick={() => {
            setIsOpen(true);
          }}
          color="primary"
        >
          <Add />{" "}
        </Fab>
      </Tooltip>

      <Modal
        sx={{}}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: { xs: "96%", sm: 357 },
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            position: "fixed",
            padding: "22px",
            borderRadius: "6px",
            bgcolor: theme.palette.background.default,
          }}
        >
          <Typography
            sx={{ textAlign: "center", mb: 2 }}
            variant="h6"
            component="h2"
          >
            Create a Post
          </Typography>
          <Stack alignItems="center" direction="row">
            <Avatar
              sx={{ mr: "13px" }}
              src="https://images.pexels.com/photos/11877048/pexels-photo-11877048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography variant="body1">Ilizabeth</Typography>
          </Stack>

          <TextField
            sx={{ width: "100%", mt: "22px" }}
            multiline
            rows={4}
            placeholder="what is in your mind"
            variant="standard"
          />

          <Stack direction={"row"} spacing={1} my={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
            sx={{ width: "100%" }}
            variant="contained"
            aria-label="Basic button group"
          >
            <Button sx={{ flexGrow: 1 }}>Post</Button>
            <Button>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}
