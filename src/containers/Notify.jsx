import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  Link,
} from "react-router-dom";


import { Badge } from "antd";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import axios from "axios";

Notification.propTypes = {
};

Notification.defaultProps = {
};

const NotifyPage = () => {
  const dispatch = useDispatch()
  const [sNotifications, setNotifcations] = useState([])
  const [menu, setMenu] = useState([])
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    if (window.socket) {
      window.socket.removeListener("S2C_NOTIFICATION_BROADCAST");
      window.socket.on("S2C_NOTIFICATION_BROADCAST", (data) => {
        setNotifcations(data)
      });
    }
  }, [window.socket])

  useEffect(() => {
    const groupedNotifications = _.groupBy(sNotifications, 'type')
    const newMenu = []
    let totalCount = 0
    _.map(groupedNotifications, (notifies, index) => {
      let count = 0
      _.map(notifies, notify => {
        count += notify.count
      })
      totalCount += count
      newMenu.push(
        {
          label: notifies[0].title,
          count: count,
          url: notifies[0].url,
        }
      )
    })
    setMenu(newMenu)
    setTotalCount(totalCount)
  }, [sNotifications])

  useEffect(() => {
    const load = async () => {
      try {
      } catch (err) {

      }
    }
    load();
  }, [])

  return (
    <div className="dropdown dropdown-end">
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-[12rem] p-[8rem] shadow bg-base-100 rounded-box w-[208rem]"
      >
        {
          menu.length ? menu.map((item, index) => (
            <li key={index} className="justify-between">
              <Link to={item.url}>
                {
                  item.label
                }
                <Badge count={item.count} />
              </Link>
            </li>
          )) :
            <li className="justify-between p-3">
              No New Notification...
            </li>
        }
      </ul>
    </div >
  )
}

export default NotifyPage