// All components mapping with path for internal routes

import { lazy } from "react";

// Admin

export default {
  AdminUsers: {
    component: lazy(() => import("../pages/Admin/Users")),
    permissions: [],
  },
 
  // user

  UsersInfo: {
    component: lazy(() => import("../pages/UsersInfo")),
    permissions: [],
  },
  
  Profile: {
    component: lazy(() => import("../pages/Setting/Profile")),
    permissions: [],
  },
};
