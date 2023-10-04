import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import PasswordField from "../../../components/atom/PasswordField";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LoginInitialState } from "../../../interface/register";
import LoadingButton from "../../../components/atom/LoadingButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hook";
import { PATH } from "../../../routes/PATH";
export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("User name is required"),
    password: Yup.string().min(2, "Password must be minimun 2 character long").required("Password is required"),
  });

  const formik = useFormik({
    initialValues: LoginInitialState,
    validationSchema,
    onSubmit: (e) => {
      try {
        console.log("login Clicked");
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <Box width="100%" height="100%">
      <Grid container justifyContent="center" alignItems="center" height="100%">
        <Grid
          item
          xs={10}
          sm={8}
          md={6}
          lg={4}
          sx={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h3" color="primary" mb="30px">
            Login
          </Typography>
          <Box mb="15px">
            <Typography>Username</Typography>
            <TextField
              fullWidth
              name="email"
              placeholder="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box>
            <Typography>Password</Typography>
            <PasswordField
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && !!formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
          <Box textAlign="right">
            <Button>Forget Password ?</Button>
          </Box>
          <Box my="30px">
            <LoadingButton disabled={!formik.dirty} variant="contained" color="primary" onClick={formik.handleSubmit}>
              Login
            </LoadingButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Don't have an account ?</Typography>
            <Button
              variant="text"
              onClick={() => {
                navigate(PATH.REGISTER.SIGNUP.ROOT);
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
