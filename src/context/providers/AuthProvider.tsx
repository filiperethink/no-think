import React from "react";
import { AuthContext } from "../AuthContext";

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);
    localStorage.setItem("@nothink:user", newUser);
    callback();
  };
  let signout = (callback: VoidFunction) => {
    setUser(null);
    localStorage.removeItem("@nothink:user");
    callback();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
