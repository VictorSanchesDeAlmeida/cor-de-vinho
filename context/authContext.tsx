import { createContext, useContext } from "react";

interface AuthContextType {
  user: {
    id: string;
    email: string;
  } | null;
  first_name: string | null;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    first_name: null,
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;