import routes from "../routes/sidebar";
import { NavLink, Link, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import Icons from "../components/Icons";
import { useSelector } from "react-redux";
import { GitVersion } from "./SvnVersion";
import { useEffect, useState } from "react";

function LeftSidebar() {
  const location = useLocation();
  const unread = useSelector(store => store.unread);
  const { user } = useSelector(state => state.user)
  const { isOpen } = useSelector((store) => store.sidebar);
  const { menu } = useSelector((store) => store.user);
  const [className, setClassName] = useState('drawer-side');
  const close = (e) => {
    document.getElementById("left-sidebar-drawer").click();
  };
  useEffect(() => {
    setClassName(`${isOpen === true ? "drawer-side" : "hidden"}`);
    console.log(`${isOpen === true ? "drawer-side" : "hidden"}`);
  }, [isOpen])
  return (
    <div className={className}>
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay "></label>
      <ul className="menu pt-2 w-72 bg-base-100 text-base-content">
        <li className="mb-2 font-semibold text-lg ">
          <Link to={"/dashboard"}>
            <img
              className=" w-10"
              src="/bg/SocialNoFriends.png"
              alt="DashWind Logo"
            />
            <div>
              HR Manangement
              <GitVersion />
            </div>
          </Link>{" "}
        </li>
        {menu.map((route, k) => {
          const LinkIcon = Icons[route.icon || "Squares2X2Icon"];
          return (
            <li key={k}>
              {route.children ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    `${isActive ? "font-semibold  bg-base-200" : "font-normal"}`
                  }
                >
                  {<LinkIcon className="w-6 h-6" />} {route.title}

                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LeftSidebar;
