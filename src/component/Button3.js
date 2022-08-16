import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Button3() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Stack spacing={2} direction="row">
        {/* <Button size="small" variant="outlined">
          Nouvelle déclaration
        </Button>
        <Button size="small" variant="outlined">
          Nouvelle déclaration
        </Button> */}
        <Button
          size="small"
          variant="outlined"
          onClick={handleClick}
          sx={{ mt: 2, mb: 2, mr: 28 }}
          color="primary"
        >
          Entete
        </Button>
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <Link to={"./"}>...</Link>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <Link to={"./"}>...</Link>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <Link to={"./"}>...</Link>
          </MenuItem>
        </Menu>
      </Stack>
    </React.Fragment>
  );
}
