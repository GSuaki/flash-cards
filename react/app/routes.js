import Login from "./pages/Login/Login";
import Collection from "./pages/Collection/Collection";
import FlashCard from "./pages/FlashCard/FlashCard";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

import { withAuthRequired, withUnauthRequired } from "./components/Hoc/AuthManager";

export default [
    {
        path: "/",
        component: withAuthRequired(Collection),
        exact: true,
    },
    {
        path: "/collections",
        component: withAuthRequired(Collection),
        exact: true,
    },
    {
        path: "/collections/:id/flash-cards",
        component: withAuthRequired(FlashCard),
        exact: true,
    },
    {
        path: "/login",
        component: withUnauthRequired(Login),
        exact: true,
    },
    {
        path: "/forgot-password",
        component: withUnauthRequired(ForgotPassword),
        exact: true,
    },
    {
        path: "/create-account",
        component: withUnauthRequired(CreateAccount),
        exact: true,
    },
];
