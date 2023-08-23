import { Navigate, Route, Routes, Link } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./Login";
import { Navbar } from "./Navbar";
import { UserProvider } from "./UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="/*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  );
};
