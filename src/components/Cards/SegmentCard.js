import { Button } from "antd";
import Subtitle from "../Typography/Subtitle";
import { Link } from "react-router-dom";

function TitleCard({ title, children, setVisible, TopSideButtons }) {
  return (
    <div
      className={
        "rounded-md flex flex-col h-full w-full p-4 bg-base-100 shadow-xl "
      }
    >
      {/* <div className="flex justify-between items-center"> */}
      {/* Title for Card */}
      <Subtitle styleClass={"inline-block flex justify-between items-center"}>
        <div className="text-xl px-1 py-1">{title}</div>

        {/* {title} */}
        {/* Top side button, show only if present */}
        {TopSideButtons && (
          <div className="inline-block float-right">{TopSideButtons}</div>
        )}
        <Button className="h-7 rounded px-1 border" onClick={() => setVisible(true)}>
          More
        </Button>
      </Subtitle>
      {/* <div className="border rounded px-1"> */}
      {/* <Link to={`/notification`}>View All</Link> */}
      {/* </div> */}
      {/* </div> */}
      <div className="divider my-2"></div>
      <div className="w-full h-full overflow-auto">{children}</div>
    </div>
  );
}

export default TitleCard;
