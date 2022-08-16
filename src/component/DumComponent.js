import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import {
  ButtonGroup,
  FormControlLabel,
  Switch,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../styles/customStyle.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#242b59",
    },
  },
});

function DumComponent() {
  const [value, setValue] = React.useState("one");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4, "& .MuiTextField-root": { m: 1, width: "21ch" } }}
    >
      <ThemeProvider theme={theme}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          textColor="primary"
          indicatorColor="primary"
          sx={{ mb: 4 }}
        >
          <Tab value="one" label="Importateur/Exportateur" />
          <Tab value="two" label="Titre de change" />
          <Tab value="three" label="Preapurement DS" />
          <Tab value="four" label="Entete" />
          <Tab value="five" label="Caution" />
          <Tab value="six" label="Articles" />
          <Tab value="seven" label="Demandes diverses" />
          <Tab value="eight" label="Imputation compte RED" />
          <Tab value="nine" label="Moyens de transport" />
          <Tab value="ten" label="Devis/Documents" />
        </Tabs>
      </ThemeProvider>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <ButtonGroup variant="contained">
              <Button>Comptant</Button>
              <Button>Credit d'enlevement</Button>
            </ButtonGroup>
            <TextField
              id="outlined-helperText"
              label="Label"
              placeholder="Nom et prenom"
            />
          </div>
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
            <Button>DUM</Button>
            <Button>Type 2</Button>
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
