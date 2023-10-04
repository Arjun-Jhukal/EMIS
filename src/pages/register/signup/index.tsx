import { Box, Grid, Typography, TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import PasswordField from "../../../components/atom/PasswordField";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LoginInitialState, SignupInitialState } from "../../../interface/register";
import LoadingButton from "../../../components/atom/LoadingButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hook";
import { PATH } from "../../../routes/PATH";
export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("User name is required"),
    email: Yup.string().required("email is Required"),
    phoneNumber: Yup.string().required("Phone Number is requied"),
    enterPassword: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: SignupInitialState,
    validationSchema,
    onSubmit: (values) => {
      const formattedValues = {
        ...values,
        phoneNumber: `+977${values.phoneNumber}`,
      };

      try {
        console.log("Sign up Clicked");
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
            Sign Up
          </Typography>
          <Box mb="15px">
            <Typography>Name</Typography>
            <TextField
              fullWidth
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && !!formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box mb="15px">
            <Typography>Email</Typography>
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
          <Box mb="15px">
            <Typography>Phone Number</Typography>
            <TextField
              fullWidth
              name="phoneNumber"
              placeholder="Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
          </Box>
          <Box mb="15px">
            <Typography>New Password</Typography>
            <PasswordField
              name="enterPassword"
              placeholder="New Password"
              value={formik.values.enterPassword}
              onChange={formik.handleChange}
              error={formik.touched.enterPassword && !!formik.errors.enterPassword}
              helperText={formik.touched.enterPassword && formik.errors.enterPassword}
            />
          </Box>
          <Box>
            <Typography>Confirm Password</Typography>
            <PasswordField
              name="confirmPassword"
              placeholder="New Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
          </Box>
          <Box>
            <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the terms & conditions" />
          </Box>
          <Box my="30px">
            <LoadingButton disabled={!formik.dirty} variant="contained" color="primary" onClick={formik.handleSubmit}>
              Create Account
            </LoadingButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Already have an account ?</Typography>
            <Button
              variant="text"
              onClick={() => {
                navigate(PATH.REGISTER.LOGIN.ROOT);
              }}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
