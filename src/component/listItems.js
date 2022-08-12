import * as React from "react";
// eslint-disable-next-line
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LayersIcon from "@mui/icons-material/Layers";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import styles from "../styles/customStyle.module.css";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingBagIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Achat de forfait" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocalPoliceIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ p: 0}}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Starred" className={styles.gray}/>
          </ListItemButton>
          <ListItemButton sx={{ p: 0}}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Starred" className={styles.gray}/>
          </ListItemButton>
        </List>
      </Collapse>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <ImportExportIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="DAP" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <ImportExportIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Manifestes" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <LoginIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Importation" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Exportation" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <LocalPoliceIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Douane" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <ImportExportIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Programmation des conteneurs" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <ViewStreamIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Consultations" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <ImportExportIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="EDIFACT" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <ImportExportIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Paramétrage" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <FactCheckIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Factures" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <DesktopWindowsIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Web service" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="MEAD" />
      </ListItemButton>
      <Divider className={styles.Line} sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon className={styles.white} />
        </ListItemIcon>
        <ListItemText primary="Autres options" />
      </ListItemButton>
    </React.Fragment>
  );
}
