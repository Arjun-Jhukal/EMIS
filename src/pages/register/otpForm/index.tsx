import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import PasswordField from "../../../components/atom/PasswordField";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LoginInitialState } from "../../../interface/register";
import LoadingButton from "../../../components/atom/LoadingButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hook";
import { PATH } from "../../../routes/PATH";
export default function OtpForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required("Phone Number is required"),
  });

  const formik = useFormik({
    initialValues: { phoneNumber: "" },
    validationSchema,
    onSubmit: (values) => {
      const formattedValues = {
        ...values,
        phoneNumber: `+977${values.phoneNumber}`,
      };
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
          <Box mb="15px">
            <Typography variant="h3" color="primary" mb="30px">
              Forget Password
            </Typography>
            <Typography>Please enter your registered phone number and we will send you a 4 digit code which will be valid for 5 min</Typography>
          </Box>
          <Box mb="15px">
            <Typography>Phone Number</Typography>
            <TextField
              fullWidth
              name="phoneNumber"
              placeholder="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
          </Box>

          <Box my="30px">
            <LoadingButton disabled={!formik.dirty} variant="contained" color="primary" onClick={formik.handleSubmit}>
              Send OTP
            </LoadingButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                navigate(PATH.REGISTER.LOGIN.ROOT);
              }}
              fullWidth
            >
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
