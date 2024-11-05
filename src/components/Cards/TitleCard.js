import Subtitle from "../Typography/Subtitle";

function TitleCard({ title, children, CenterSide, TopSideButtons }) {
  return (
    <div
      className={
        "rounded-md flex flex-col h-full w-full p-4 bg-base-100 shadow-xl "
      }
    >
      {/* Title for Card */}
      <Subtitle
        styleClass={
          TopSideButtons ? "inline-block flex justify-between items-center" : ""
        }
      >
        <div className="text-xl px-1 py-1">{title}</div>
        {CenterSide && <div className="inline-block">{CenterSide}</div>}
        {/* Top side button, show only if present */}
        {TopSideButtons && <div className="inline-block">{TopSideButtons}</div>}
      </Subtitle>

      <div className="divider my-2"></div>

      <div className="w-full h-full overflow-auto flex justify-center">
        {children}
      </div>
    </div>
  );
}

export default TitleCard;
