const PageWrapper = (props) => {
    return (
        <div
            style={{
                // borderWidth: "1rem",
                borderWidth: "1px",
                borderColor: "rgba(0,0,0,0.1)",
                // borderRadius: "2rem",
                borderRadius: "2px",
                color: "#484F51",
            }}
            className="font"
        >
            <div
                style={{
                    position: "relative",
                    // paddingTop: "30rem",
                    // paddingLeft: "30rem",
                    // paddingRight: "30rem",
                    paddingTop: "30px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                }}
                className={"printUnit page font"}
            >
                {props.children}
            </div>
        </div>
    );
};

export default PageWrapper;