import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { useEffect, useState } from "react";
import Icons from "../components/Icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


function SidebarSubmenu({ children, title, icon }) {
  const location = useLocation();
  const unread = useSelector(store => store.unread);
  const [isExpanded, setIsExpanded] = useState(false);

  /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
  useEffect(() => {
    if (
      children.filter((m) => {
        return m.path === location.pathname;
      })[0]
    )
      setIsExpanded(true);
  }, []);

  const LinkIcon = Icons[icon || "Squares2X2Icon"];
  const SubMenuIcon = <LinkIcon className="w-6 h-6  inline" />;
  return (
    <div className="flex-col">
      {/** Route header */}
      <div className="w-full h-full" onClick={() => setIsExpanded(!isExpanded)}>
        {SubMenuIcon} {title}
        <ChevronDownIcon
          className={
            "w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  " +
            (isExpanded ? "rotate-180" : "")
          }
        />
      </div>

      {/** Submenu list */}
      <div className={` w-full ` + (isExpanded ? "" : "hidden")}>
        <ul className={`menu menu-compact`}>
          {children.map((m, k) => {
            const LinkIcon = Icons[m.icon || "Squares2X2Icon"];
            return (
              m.path !== '/user/:_id' && <li key={k}>
                <Link to={m.path} className="py-3">
                  {<LinkIcon className="h-6 w-6" />} {m.title}
                  {unreadObj[m.title] && unread[unreadObj[m.title]] > 0 && <span className='bg-red-600 px-2 py-[1px] rounded-full ml-4 text-white'>{unread[unreadObj[m.title]] > 99 ? '99+' : unread[unreadObj[m.title]]}</span>}
                  {location.pathname.indexOf(m.path) > -1 ? (
                    <span
                      className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div >
  );
}

export default SidebarSubmenu;
