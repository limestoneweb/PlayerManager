import React, { useState, useEffect, useRef, useCallback } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useStyles } from "./styles";
import LoginForm from "./LoginForm";

const initialState = { username: "", password: "" };

// Snackbar component
const AlertSnackbar = ({ open, message, onClose }) => (
  <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
    <MuiAlert elevation={6} variant="filled" severity="error" onClose={onClose}>
      {message}
    </MuiAlert>
  </Snackbar>
);

/**
 * Login component handles user authentication by providing
 * a login form. It allows users to enter their credentials
 * and navigate to the application upon successful login.
 *
 * @returns {JSX.Element} The rendered Login component.
 */
function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleChange = useCallback(
    (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );

  const handleSignIn = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        await login(formData, navigate, dispatch);
        if (isMounted.current) {
          setLoading(false);
        }
      } catch (error) {
        if (isMounted.current) {
          setLoading(false);
          setSnackbarOpen(true);
          console.error("Login failed:", error.message);
          setSnackbarMessage(error.message || "Login failed");
        }
      }
    },
    [formData, navigate, dispatch, isMounted, login]
  );

  const handleShowPassword = useCallback(
    () => setShowPassword((prevShowPassword) => !prevShowPassword),
    []
  );

  const handleCloseSnackbar = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={10} className={classes.paper} component="div">
        <Avatar component="div" className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h5">
          Sign In
        </Typography>
        <LoginForm
          handleChange={handleChange}
          handleSignIn={handleSignIn}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
          loading={loading}
        />
        <AlertSnackbar
          open={snackbarOpen}
          message={snackbarMessage}
          onClose={handleCloseSnackbar}
        />
      </Paper>
    </Container>
  );
}

export default Login;
