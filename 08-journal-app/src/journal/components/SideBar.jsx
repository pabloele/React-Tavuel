import { LogoutOutlined, MenuOutlined, TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "block" },
          "& .MultiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      > */}
      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth, // Establecer el ancho del Drawer
          flexShrink: 0, // Evitar que se encoja
          "& .MuiDrawer-paper": {
            width: drawerWidth, // Establecer el ancho del papel (contenido) del Drawer
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Juan Perez
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["enero", "Febrero", "Marzo", "Abril"].map((t) => (
            <ListItem key={t} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={t} />
                  <ListItemText secondary="Culpa sit excepteur sunt veniam proident id occaecat pariatur et laboris." />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
