// All components mapping with path for internal routes

import { lazy } from "react";

// Admin
const AdminRoles = lazy(() => import("../pages/Admin/Roles"));
const AdminUsers = lazy(() => import("../pages/Admin/Users"));

// user

const PDF = lazy(() => import("../pages/Pdf"));
const Profile = lazy(() => import("../pages/Setting/Profile"));

const routes = [
    {
        title: "PDF",
        path: "/pdf",
        component: PDF,
    },

    {
        title: "Profile",
        path: "/settings/profile",
        component: Profile,
    },
];

export default routes;
