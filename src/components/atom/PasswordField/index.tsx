import { TextField, Button, Box } from "@mui/material";
import { BsEyeFill } from "react-icons/bs";

interface Props {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean | undefined;
  helperText: string | undefined | boolean;
}
export default function PasswordField(props: Props) {
  const { name, placeholder, value, onChange, error, helperText } = props;

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <TextField
        type="password"
        fullWidth
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
        helperText={helperText}
      />
      <Button
        color="inherit"
        sx={{
          fontSize: "20px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "0",
        }}
      >
        <BsEyeFill />
      </Button>
    </Box>
  );
}
