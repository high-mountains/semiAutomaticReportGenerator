import _ from "lodash";
import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import { toggleOpen } from "../features/common/sidebarSlice";
import { Tooltip } from 'antd';
import { logOut } from "../features/user/userSlice";
import UserImg from "../pages/common/userImg";
import NotifyPage from "./Notify";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.sidebar);
  // const { pageTitle } = useSelector((state) => state.page);
  const socket = useSelector(state => state.socket);
  const { user } = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState('');
  const [showDropdown, setShowDropdown] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );
  useEffect(() => {
    if (user) {
      setAvatar(user.avatar)
    }
  }, [user])
  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
    // 👆 false parameter is required for react project
  }, []);

  function logoutUser() {
    window.socket && window.socket.disconnect();
    dispatch(logOut());
    navigate("/login");
  }
  const onDropDownBtnClick = () => {
    setShowDropdown(!showDropdown)
  }
  return (
    <>
      <div className="z-10 flex justify-between shadow-md navbar bg-base-100 py-[8rem]">
        {/* Menu toogle for mobile view or small screen */}

        <div>
          {/* <input>
            Upload .csv
          </input> */}
          {/* <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <Bars3Icon className="inline-block w-5 h-5" />
          </label> */}

          {/* <a
            className="p-[20rem] transition-all rounded-full cursor-pointer hover:bg-base-300 text-base-content"
            onClick={() => {
              // if(isOpen)
              // dispatch(toggleOpen());
              if (window.innerWidth < 1024) {
                if (!isOpen) dispatch(toggleOpen());
                document.getElementById("left-sidebar-drawer").click();
              } else {
                dispatch(toggleOpen());
              }
            }}
          >
            <Bars3Icon className="inline-block w-[20rem] h-[20rem]" />
          </a> */}
          {/* <h1 className="ml-2 text-2xl font-semibold">{pageTitle ? pageTitle : 'Dashboard'}</h1> */}
        </div>

        <div className="order-last">
          {/* <Tooltip title="HR Notification v1.7">
            <a href={'/apps/HR Notification v1.7.exe'} download target="_blank" className="relative w-[32rem] h-[32rem] mr-[32rem] rounded-lg cursor-pointer hover:bg-base-300">
              <div className="absolute top-0 left-0 w-full h-full bg-red-300 rounded-full animate-pulse " >
                <img
                  src={'/favicon.ico'}
                  alt="Avatar"
                  className="absolute top-0 left-0 w-full h-full cursor-pointer"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-green-600 rounded-lg opacity-50 animate-ping" />
              </div>
              <div className="absolute bottom-[-2rem] right-[-30rem] font-extrabold text-red-600">v1.7</div>
            </a>
          </Tooltip> */}
          {/* <Tooltip title={socket.isConnected ? "Socket is connected." : "Socket is disconnected."}>
            <div className="px-4">
              {socket?.isConnected ? <img className="w-8 h-8" src="/assets/chat/network-wired.svg" /> : <img className="w-8 h-8" src="/assets/chat/network-wired-disconnected.svg" />}
            </div>
          </Tooltip> */}
          <label className="px-[10rem] swap">
            <input type="checkbox" />
            <SunIcon
              data-set-theme="light"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-[28rem] h-[28rem] " +
                (currentTheme === "dark" ? "swap-on" : "swap-off")
              }
            />
            <MoonIcon
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-[28rem] h-[28rem] " +
                (currentTheme === "light" ? "swap-on" : "swap-off")
              }
            />
          </label>

          <NotifyPage />

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="pt-[0rem] btn btn-ghost btn-full avatar h-[64rem]"
              onClick={onDropDownBtnClick}
            >
              <div className="w-[36rem] h-[36rem] mr-[4rem] rounded-full">
                {/* <img
                  src={
                    user?.avatar !== "user"
                      ? process.env.REACT_APP_FILE_URL +
                        "/download/" +
                        user?.avatar
                      : "/avatar.png"
                  }
                /> */}
                <UserImg src={
                  process.env.REACT_APP_FILE_URL +
                  "/download/" +
                  avatar
                } fallbackSrc='avatar.png'/>
              </div>
              <p className="text-[14rem]">
                {user?.userId || "unknown"}
              </p>
            </label>
            <ul
              tabIndex={0}
              className={showDropdown ? "menu menu-compact dropdown-content mt-[12rem] p-[8rem] shadow bg-base-100 rounded-box w-[208rem]" : 'hidden'}
            >
              <li className="justify-between" onClick={onDropDownBtnClick}>
                <Link to={`/user/${user?._id}`} className="text-[16rem]">
                  <p className="text-[14rem]">My Page</p>
                </Link>
                <Link to={"/settings/profile"} className="text-[16rem]">
                  <p className="text-[14rem]">Profile Settings</p>
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
              <li className="justify-between" onClick={onDropDownBtnClick}>
                <Link to={"/system/my-plan"} className="text-[16rem]">
                  <p className="text-[14rem]">My Plan</p>
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
              <div className="mt-0 mb-0 divider"></div>
              <li>
                <a onClick={logoutUser} className="text-[16rem]">
                  
                  Logout
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </div >
    </>
  );
}

export default Header;
