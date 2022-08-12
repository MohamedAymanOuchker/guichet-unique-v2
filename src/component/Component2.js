import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function preventDefault(event) {
  event.preventDefault();
}

const theme = createTheme({
  palette: {
    secondary: {
      main: "#fff",
    },
  },
});

export default function Component1() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Title>Dédouanement / Déclarations DUM</Title>
        <Typography variant="caption" color="secondary" sx={{ flex: 1 }}>
          <Link color="secondary" href="#" onClick={preventDefault}>
            Acceuil
          </Link>
          {" > "}
          <Link color="secondary" href="#" onClick={preventDefault}>
            Dédouanement
          </Link>
          {" > "}
          <Link color="secondary" href="#" onClick={preventDefault}>
            Déclarations douanières
          </Link>
          {" > "}
          <Link color="secondary" href="#" onClick={preventDefault}>
            Déclarations DUM
          </Link>
        </Typography>
      </ThemeProvider>
    </React.Fragment>
  );
}
