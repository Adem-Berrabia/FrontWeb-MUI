const { purple } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          bug: { main: purple[700] },
          favColor: { main: "rgb(247,247,247)" },
        }
      : {
          // palette values for dark mode
          bug: { main: "teal" },
          favColor: { main: null },
        }),
  },
});
export default getDesignTokens;
