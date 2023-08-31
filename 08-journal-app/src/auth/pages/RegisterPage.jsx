import React, { useMemo, useState } from "react"; // Don't forget to import React
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/authLayout";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  displayName: "Juan",
  email: "juan@perez.com",
  password: "qwerty",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener una arroba."],
  password: [
    (value) => value.length >= 6,
    "El password debe tener más de seis caracteres.",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations);
  const dispatch = useDispatch();
  const { errorMessage, status } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Juan Perez"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid}
              helperText={passwordValid}
            />
          </Grid>
        </Grid>
        <Grid
          display={!!errorMessage ? "" : "none"}
          container
          spacing={2}
          sx={{ mb: 2, mt: 1 }}
        >
          <Grid item xs={12}>
            <Alert severity="error">{errorMessage}</Alert>{" "}
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
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
