import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox, Menu, MenuItem } from "@mui/material";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export default function Posts() {
  const myCard = [
    {
      letter: "A",
      Color: "#a020f0",
      username: "Adem ",
      imgLink:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "C",
      Color: "#008080",
      username: "Chadi ",
      imgLink:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "H",
      Color: "#053ea8",
      username: "Halim ",
      imgLink:
        "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "D",
      Color: "#097ea8",
      username: "Dhouha",
      imgLink:
        "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      letter: "S",
      Color: "#FFD700",
      username: "Salwaaa",
      imgLink:
        "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  //   const [cardMenu, setcardMenu] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );
  const theme = useTheme();
  return (
    <Box component="main" sx={{ flexGrow: "3", variant: "6" }}>
      {myCard.map((item) => {
        return (
          <Card
            key={item.letter}
            sx={{ maxWidth: { xs: "97%", sm: 444 }, mx: "auto", my: 5 }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    color: theme.palette.getContrastText(item.Color),
                    bgcolor: item.Color,
                  }}
                  aria-label="recipe"
                >
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.username}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Box flexGrow={1} />
              <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </CardActions>
          </Card>
        );
      })}
      {renderMenu}
    </Box>
  );
}
