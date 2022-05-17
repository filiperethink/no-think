import React from "react";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

function useAuth() {
  return React.useContext(AuthContext);
}

const AuthContext = React.createContext<AuthContextType>(null!);
export { AuthContext, useAuth };
