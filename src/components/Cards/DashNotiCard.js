import Subtitle from "../Typography/Subtitle"
import { Link } from "react-router-dom";
import { Badge } from "antd";

function TitleCard({ title, children, topMargin, TopSideButtons, count }) {
  return (
    <div className={"rounded-md flex flex-col h-full w-full p-4 bg-base-100 shadow-xl "}>
      <div className="flex justify-between items-center">
        {/* Title for Card */}
        <Subtitle styleClass={TopSideButtons ? "inline-block flex justify-between" : ""}>
          <div className="flex items-center">
            <span className="text-xl px-1 py-1">{title}</span>
            <Badge count={count} title={count} showZero={false} />
          </div>

          {/* Top side button, show only if present */}
          {
            TopSideButtons && <div className="inline-block float-right">{TopSideButtons}</div>
          }
        </Subtitle>
        
        <div className="border rounded px-1">
          <Link to={`/notification`}>
            View All
          </Link>
        </div>
      </div>
      <div className="divider my-2"></div>

      <div className='w-full h-full overflow-auto flex justify-center'>
        {children}
      </div>
    </div>
  )
}


export default TitleCard