import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  IconButton,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import { useInputValidation,useFileHandler } from "6pp";

import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisualHiddenInput } from "../components/styles/StyledComponent";
import { userNameValidator } from "../utils/validator";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(false);
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", userNameValidator);
  const password = useInputValidation("");
  const avatar=useFileHandler("single");

  const handleLogin=(e)=>{
        e.preventDefault();
  }
  const handleSignup=(e)=>{
    e.preventDefault();
}
  return (
    <div
    style={{
      backgroundImage:
      "linear-gradient(rgba(255,209,255,0.5),rgba(249,159,159,0.5))"
    }}
    >
      
   
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="hs">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="User name"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                SignIn
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                variant="text"
                fullWidth
                onClick={() => setIsLogin(false)}
              >
                Signup Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="hs">Signup</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignup}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
                      {avatar.error && (
                <Typography color="error" variant="caption">
                  {avatar.error}
                </Typography>
              )}
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                  
                >

                  <>
                    <CameraAltIcon />
                    <VisualHiddenInput type="file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
        
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                SignUp
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button variant="text" fullWidth onClick={() => setIsLogin(true)}>
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;
