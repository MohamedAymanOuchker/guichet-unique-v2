import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from "../styles/customStyle.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#242b59",
    },
  },
});

export default function Button2() {
  return (
    <React.Fragment>
      <Stack spacing={2} direction="row" sx={{ p: 2 }}>
        <ThemeProvider theme={theme}>
          <Button size="small" variant="outlined" color="primary">
            Création
          </Button>
          <Button size="small" variant="outlined">
            Validation
          </Button>
          <Button size="small" variant="outlined">
            Enregistrement
          </Button>
          <div className={styles.vl}></div>
          <Button size="small" variant="outlined">
            Annuler
          </Button>
          <Button size="small" variant="contained">
            Enregistrer
          </Button>
        </ThemeProvider>
      </Stack>
    </React.Fragment>
  );
}
