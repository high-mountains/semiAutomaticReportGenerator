import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSet } from "../features/common/sidebarSlice";

const AppContainer = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  useEffect(() => {
    user &&
      window.socket &&
      window.socket.emit("C2S_LOGGED_USERINFO", {
        page: props.title || "unKnown",
        _id: user._id,
      });
    dispatch(toggleSet(props.sideBar));
  }, [props.title]);

  return (
    <div className={`flex h-full w-full ${props.fullScreen ? "p-0" : "p-4"}`}>
      <props.element />
    </div>
  );
};

AppContainer.propTypes = {};

export default AppContainer;
