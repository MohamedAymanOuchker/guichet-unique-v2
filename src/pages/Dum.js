import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LogoutIcon from "@mui/icons-material/Logout";
import CircleIcon from "@mui/icons-material/Circle";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import NestedList from "../component/listItems";
import Component2 from "../component/Component2";
import Button2 from "../component/Button2";
import DumComponent from "../component/DumComponent";
import styles from "../styles/customStyle.module.css";
import Logo from "../images/portnet.svg";
import Profile from "../images/profile.svg";
import Button3 from "../component/Button3";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Copyright © 2021, Portnet Groupe
    </Typography>
  );
}

const drawerWidth = 340;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#242b59",
    },
  },
});

const mdTheme = createTheme();

function MaContent() {
  // eslint-disable-next-line
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box className={styles.Display}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            rowSpacing={2}
            className={styles.listColor}
          >
            <Grid item xs={1}>
              <img src={Logo} alt="Logo" />
            </Grid>
            <Grid item xs={1}>
              <Avatar sx={{ height: 102, width: 102 }}>
                <img src={Profile} alt="Profile" />
              </Avatar>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h5">Hicham OUARDI</Typography>
            </Grid>
            <Grid>
              <Typography variant="caption">H.ouardi@gmail.com</Typography>
            </Grid>
            <Grid item xs={1}>
              <CircleIcon className={styles.lightGreen} />
              <CircleIcon className={styles.darkGreen} />
              <CircleIcon className={styles.white} />
            </Grid>
          </Grid>
          <List component="nav" className={styles.listColor} sx={{ pb: 6 }}>
            <NestedList />
          </List>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 340,
              height: 70,
              backgroundColor: "#E6E6E6",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon sx={{ color: "#242B59" }} />
              </ListItemIcon>
              <ListItemText primary="Déconnecter" />
            </ListItemButton>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              width: "1100px",
              height: "100px",
              backgroundColor: "#242b59",
              color: '#fff',
            }}

          >
            <Component2 />
          </Paper>
          {/* <Toolbar /> */}
          <Container maxWidth="lg">
            <Grid container>
              {/* Component2 */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    width: "1068px",
                    height: "80px",
                    backgroundColor: "#E6E6E6",
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <Button3 />
                  </ThemeProvider>
                  <h5 className={styles.ep}>Envoyer pour: </h5>
                  <Button2 />
                </Paper>
              </Grid>
              {/* Component3 */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    width: "1068px",
                    height: "100%",
                    // borderRadius: "34px",
                  }}
                >
                  <DumComponent />
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={42} sx={{ pt: 4 }}>
              <Grid item xs={8}>
                <Copyright />
              </Grid>
              <Grid item xs={4}>
                <YouTubeIcon />
                <LinkedInIcon />
                <FacebookIcon />
                <TwitterIcon />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function MaC() {
  return <MaContent />;
}
