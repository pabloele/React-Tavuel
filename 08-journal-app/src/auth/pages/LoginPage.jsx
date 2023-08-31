import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/authLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const { email, password, onInputChange, onResetForm } = useForm({
    email: "juan@perez.com",
    password: "qwerty",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password })
    dispatch(startLoginWithEmailPassword({ email, password }));
  };
  const onGoogleSignIn = (e) => {
    e.preventDefault();
    dispatch(startGoogleSignIn());
  };
  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              onChange={onInputChange}
              value={password}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
            <Alert severity="error">{errorMessage}</Alert>{" "}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticating}
              type="submit"
              variant="contained"
              fullWidth
            >
              <Typography sx={{ ml: 1 }}>Login</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticating}
              variant="contained"
              fullWidth
              onClick={onGoogleSignIn}
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container direction="row" justifyContent="end">
        <Link component={RouterLink} color="inherit" to="/auth/register">
          Crear una cuenta
        </Link>
      </Grid>
    </AuthLayout>
  );
};
