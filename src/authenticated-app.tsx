import { useAuth } from "context/auth-context";
import { ProgectListScreen } from "screens/progect-list";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>退出</button>
      <ProgectListScreen />
    </div>
  );
};
