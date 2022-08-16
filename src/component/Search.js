import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "../styles/customStyle.module.css";

export default function Search() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <fieldset className={styles.fs}>
        <legend>Recherche</legend>
        <div style={{ display: "flex", alignItems: "center" }}>
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
          <Button variant="contained">Rechercher</Button>
        </div>
      </fieldset>
    </Box>
  );
}
