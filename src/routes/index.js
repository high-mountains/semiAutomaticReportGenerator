// All components mapping with path for internal routes

import { lazy } from "react";

// Admin
const AdminRoles = lazy(() => import('../pages/Admin/Roles'))
const AdminUsers = lazy(() => import('../pages/Admin/Users'))

// user

const PDF = lazy(() => import("../pages/Pdf"))
const Profile = lazy(() => import("../pages/Setting/Profile"));
const Test = lazy(() => import("../pages/Test"))

const routes = [
  {
    title: "PDF",
    path: "/pdf", // the url
    // role: ['admin', 'guest'],
    component: PDF, // view rendered
  },
  {
    title: "Test",
    path: "/test", // the url
    // role: ['admin', 'guest'],
    component: Test, // view rendered
  },
  
  {
    title: "Profile",
    path: "/settings/profile",
    component: Profile,
  },
  
  //article route
  
  {
    title: "Admin Role Manage",
    path: "/admin/roles",
    component: AdminRoles,
  },
 
  {
    title: 'Admin Users Manage',
    path: '/admin/users',
    component: AdminUsers,
  },
];

export default routes;
