import { Outlet } from "react-router-dom";
import "./register.scss";
export default function RegisterRoot() {
  return (
    <div className="register__root">
      <Outlet />
    </div>
  );
}
