import { LoginScreen, DashboardScreen, NotFoundScreen } from "./screens";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/providers/AuthProvider";
import RequireAuth from "./services/Auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route>
            <Route path='/' element={<LoginScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route
              path='/dashboard'
              element={
                <RequireAuth>
                  <DashboardScreen />
                </RequireAuth>
              }
            />
            <Route path='/*' element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
