import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthRoutes from "./components/Auth/ProtectedRoutes/AuthRoutes";
import Profile from "./components/Profile/Profile";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Home from "./components/Layout/Layout";
import NotFound from "./components/404/404";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path="/profile" element={<Profile name="christian" />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
