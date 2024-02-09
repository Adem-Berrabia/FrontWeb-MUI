import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import AppBarr from "components/AppBarr";
import Listt from "components/Listt";
import Posts from "./components/Posts.jsx";

import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";
import RightBar from "components/RightBar.jsx";
import AddPost from "components/AddPost.jsx";

function App() {
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setshowList] = useState("none");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box className={theme.palette.mode}>
        <AppBarr showList={showList} setshowList={setshowList} />

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ flexDirection: "row" }}
        >
          <Listt {...{ setMyMode, theme, showList, setshowList }} />

          <Posts />

          <RightBar theme={theme} />
        </Stack>

        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
