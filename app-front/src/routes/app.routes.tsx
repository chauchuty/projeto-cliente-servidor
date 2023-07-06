import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login.page";
import SignupPage from "../pages/signup.page";
import HomePage from "../pages/home.page";
import DashboardPage from "../pages/dashboard.page";
import OcurrencePages from "../pages/ocurrence/occurrence.page";
import ProfilePage from "../pages/profile.page";
import ProtectedRoute from "./protected.routes";
import NewOcurrencePage from "../pages/ocurrence/new.ocurrence.page";
import MineOccurrence from "../pages/ocurrence/mine.occurrence.page";
import EditOccurencePage from "../pages/ocurrence/edit.occurrence.page";

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
        path: "/ocurrences/new",
        element: <ProtectedRoute
            page={<NewOcurrencePage />}
        />
    },
    {
        path: "/ocurrences/edit",
        element: <ProtectedRoute
            page={<EditOccurencePage />}
        />
    },
    {
        path: "/mineocurrences",
        element: <ProtectedRoute
            page={<MineOccurrence />}
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