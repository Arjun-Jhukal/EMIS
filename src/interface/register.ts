export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const LoginInitialState: Login = {
  email: "",
  password: "",
};

export interface Signup {
  name: string;
  email: string;
  phoneNumber: string;
  enterPassword: string;
  confirmPassword: string;
}
export const SignupInitialState: Signup = {
  name: "",
  email: "",
  phoneNumber: "",
  enterPassword: "",
  confirmPassword: "",
};
