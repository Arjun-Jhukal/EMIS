import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
interface Props {
  children: JSX.Element | string;
  isLoading?: boolean;
  onClick: () => void;
  variant: string;
  color: string;
  disabled: boolean;
}
export default function LoadingButton(props: Props) {
  const { children, isLoading = true, onClick, variant, color, disabled } = props;
  return (
    <Button disabled={disabled} variant={variant} color={color} onClick={async () => await onClick()} fullWidth>
      {isLoading ? children : <CircularProgress size="30px" />}
    </Button>
  );
}
