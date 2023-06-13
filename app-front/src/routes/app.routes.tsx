import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login.page";
import SignupPage from "../pages/signup.page";
import HomePage from "../pages/home.page";
import DashboardPage from "../pages/dashboard.page";
import OcurrencePages from "../pages/ocurrence/occurrence.page";
import ProfilePage from "../pages/profile.page";
import ProtectedRoute from "./protected.routes";
import NewOcurrencePage from "../pages/ocurrence/new.ocurrence.page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignupPage />
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute
            page={<DashboardPage />}
        />
    },
    {
        path: "/ocurrences",
        element: <ProtectedRoute
            page={<OcurrencePages />}
        />
    },
    {
        path: "/ocurrences/:id",
        element: <ProtectedRoute
            page={<NewOcurrencePage />}
        />
    },
    {
        path: "/profile",
        element: <ProtectedRoute
            page={<ProfilePage />}
        />
    },
]);

export default router