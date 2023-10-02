import { Routes, Route } from "react-router";
import RegisterRoot from "../pages/register";
import LoginPage from "../pages/register/login";
import SignupPage from "../pages/register/signup";
import ResetPassword from "../pages/register/resetPassword";
import OtpForm from "../pages/register/otpForm";
import Dashboard from "../pages/dashboard";

export default function RouteCollection(): JSX.Element {
  return (
    <Routes>
      <Route path="/register" element={<RegisterRoot />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="otp" element={<OtpForm />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
