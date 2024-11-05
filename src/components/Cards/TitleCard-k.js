import Subtitle from "../Typography/Subtitle"


function TitleCard({ title, children, topMargin, TopSideButtons }) {
  return (
    <div className={"card h-full w-full p-6 bg-base-100 shadow-xl "}>

        {/* Title for Card */}
        <Subtitle styleClass={TopSideButtons ? "inline-block flex justify-between" : ""}>
          {title}

          {/* Top side button, show only if present */}
          {
            TopSideButtons && <div className="inline-block float-right">{TopSideButtons}</div>
          }
        </Subtitle>

        <div className="divider my-2"></div>

        <div className='w-full h-full overflow-auto'>
          {children}
        </div>
    </div>
  )
}


export default TitleCard