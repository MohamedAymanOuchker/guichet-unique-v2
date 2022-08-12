import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { ButtonGroup, FormControlLabel, Switch, Button } from "@mui/material";
import styles from "../styles/customStyle.module.css";

function DumComponent() {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4, "& .MuiTextField-root": { m: 1, width: "21ch" } }}
    >
      <Grid container>
        <Grid item xs={8}>
          <fieldset className={styles.fs}>
            <legend>Entete</legend>
            <FormControlLabel
              control={<Switch />}
              label="Combine"
              labelPlacement="top"
            />
            <FormControlLabel
              control={<Switch />}
              label="Declaration par anticipation"
              labelPlacement="top"
            />
            <div>
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
            </div>
            <div>
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
            </div>
          </fieldset>
        </Grid>
        <Grid item xs={4}>
          <fieldset className={styles.fs}>
            <legend>Entete</legend>
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
      <Grid item xs={8}>
        <fieldset className={styles.fs}>
          <legend>Facture</legend>
          <div>
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
          </div>
          <legend>Taux</legend>
          <div>
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
            <TextField
              id="outlined-helperText"
              label="Label"
              placeholder="Nom et prenom"
            />
          </div>
          <legend>Paiement</legend>
          <ButtonGroup variant="contained">
            <Button>One</Button>
            <Button>Two</Button>
          </ButtonGroup>
          <TextField
            id="outlined-helperText"
            label="Label"
            placeholder="Nom et prenom"
          />
        </fieldset>
      </Grid>
      <Grid item xs={8}>
        <fieldset className={styles.fs}>
          <legend>Localisation Marchandise</legend>
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
          <TextField
            id="outlined-helperText"
            label="Label"
            placeholder="Nom et prenom"
          />
        </fieldset>
      </Grid>
      <Grid item xs={8}>
        <fieldset className={styles.fs}>
          <legend>Document precedent</legend>
          <ButtonGroup variant="contained">
            <Button>One</Button>
            <Button>Two</Button>
          </ButtonGroup>
        </fieldset>
      </Grid>
      <Grid item xs={8}>
        <fieldset className={styles.fs}>
          <legend>Transbordement</legend>
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
    </Container>
  );
}

export default DumComponent;
