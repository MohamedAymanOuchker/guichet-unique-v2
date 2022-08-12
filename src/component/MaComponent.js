import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import styles from "../styles/customStyle.module.css";

export default function MaComponent() {
  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "34ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <fieldset className={styles.fs}>
              <legend>Regime douanier</legend>
              <TextField
                id="outlined-helperText"
                label="Label"
                placeholder="Nom et prenom"
              />
            </fieldset>
          </Grid>
          <Grid item xs={12}>
            <fieldset className={styles.fs}>
              <legend>Destinataire / Importateur / Cessionnaire</legend>
              <TextField
                id="outlined-helperText"
                label="Label"
                placeholder="Nom et prenom"
              />
              <TextField
                id="outlined-helperText"
                label="Label"
                placeholder="Nom et prenom"
              />
              <TextField
                id="outlined-helperText"
                label="Label"
                placeholder="Nom et prenom"
              />
            </fieldset>
          </Grid>
          <Grid item xs={12}>
            <fieldset className={styles.fs}>
              <legend>Expediteur / Exportateur / Cedant</legend>
              <TextField
                id="outlined-helperText"
                label="Label"
                placeholder="Nom et prenom"
              />
              <TextField
                id="outlined-helperText"
                label="Label"
                placeholder="Nom et prenom"
              />
              <TextField
                id="outlined-helperText"
                label="Label"
                placeholder="Nom et prenom"
              />
            </fieldset>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
