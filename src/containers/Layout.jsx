import PageContent from "./PageContent";
import { useSelector, useDispatch } from "react-redux";
import RightSidebar from "./RightSidebar";
import { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import ModalLayout from "./ModalLayout";
import { useLocation,useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const emitPageUrl = (aUrl) => {
    if (window.socket) {
      window.socket.emit('C2S_AUTH_REGISTERPAGEURL', { pageUrl: aUrl });
    }
  }
  const location = useLocation()
  useEffect(() => {
    if(location.pathname === '/'){
      navigate('/dashboard');
      return;
    }
    emitPageUrl(location.pathname)
  }, [location])

  const { isOpen } = useSelector((store) => store.sidebar);

  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer drawer-mobile">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent />
        {/* {<LeftSidebar />} */}
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />

      {/** Notification layout container */}
      <NotificationContainer />

      {/* Modal layout container */}
      <ModalLayout />
    </>
  );
}

export default Layout;
