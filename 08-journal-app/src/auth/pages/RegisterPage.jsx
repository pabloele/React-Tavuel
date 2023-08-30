import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/authLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Juan Perez"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              <Typography sx={{ ml: 1 }}>Crear cuenta</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container direction="row" justifyContent="end">
        <Typography sx={{ ml: 1, mr: 1 }}>¿Ya tenés una cuenta?</Typography>
        <Link component={RouterLink} color="inherit" to="/auth/login">
          Ingresar
        </Link>
      </Grid>
    </AuthLayout>
  );
};
