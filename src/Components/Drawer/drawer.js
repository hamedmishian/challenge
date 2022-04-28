import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Boxsection from "../Box/box";
import AppsIcon from "@mui/icons-material/Apps";
import CookieIcon from "@mui/icons-material/Cookie";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Switch from "../Switch/switch";

const drawerWidth = 240;

export default function ResponsiveDrawer(props) {
  const {
    window,
    pluginsItems,
    tabData,
    pathname,
    setPathname,
    active,
    inactive,
    disabled,
    plugins,
    data,
    setData
  } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [checked, setChecked] = useState(true);
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  console.log(pluginsItems);
  const drawer = (
    <div>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5" fontWeight={600} color={"darkgray"}>
          Data
        </Typography>
        <Typography variant="h5" fontWeight={800} color={"gray"}>
          Guard
        </Typography>
      </Toolbar>

      <List sx={{ padding: "0" }}>
        {tabData &&
          tabData.map((item, index) => (
            <ListItem
              button
              key={item?.title}
              onClick={() => {
                setPathname(`/${item?.title.toLowerCase()}`);
                history.push(`/${item?.title.toLowerCase()}`);
              }}
              selected={
                item?.title?.toLowerCase() ===
                pathname?.toLowerCase().substring(1)
              }
            >
              <ListItemIcon>
                {item?.title === "Marketing" ? (
                  <AppsIcon />
                ) : item?.title === "Finance" ? (
                  <CookieIcon />
                ) : (
                  <AccountBoxIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={item?.title} />
            </ListItem>
          ))}
        <ListItem
          style={{
            padding: "0",
            marginTop: "441px",
            height: "100px",
            justifyContent: "space-evenly",

            background:
              "linear-gradient(180deg, rgba(235,234,234) 50%, rgba(15,250,34,1) 100%)"
          }}
        >
          <Typography variant="body1">All plugins enabled</Typography>
          <Switch />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",

          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "white"
          }}
        >
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color={"black"}>
            {`${
              pathname && pathname.substring(1).charAt().toUpperCase()
            }${pathname.substring(2)} Plugins`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          "& .MuiDrawer-docked .MuiDrawer-paper": {
            backgroundColor: "#E9EAEB"
          },
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: "#E9EAEB"
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: "#E9EAEB",
            "& .MuiList-root .Mui-selected": {
              borderLeft: `7px solid red`,
              backgroundColor: "white"
            },
            "& .MuiDrawer-paper": {
              backgroundColor: "#E9EAEB",
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor: "#E9EAEB",
            "& .MuiList-root .Mui-selected": {
              borderLeft: `7px solid red`,
              backgroundColor: "white"
            },
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              backgroundColor: "#E9EAEB",
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            padding: 0,
            paddingLeft: "24px"
          }
        }}
      >
        <Toolbar />

        <Boxsection
          checked={checked}
          setChecked={setChecked}
          active={active}
          disabled={disabled}
          inactive={inactive}
          setPathname={setPathname}
          setData={setData}
          data={data}
          plugins={plugins}
          pluginsItems={pluginsItems && pluginsItems}
          tabData={tabData && tabData}
        />
      </Box>
    </Box>
  );
}
