
function LandingIntro() {
    return (
        <div
            className="hero"
            style={{
                minHeight: "100%", 
                borderTopLeftRadius: "12px", // Equivalent to rounded-l-[12px]
                borderBottomLeftRadius: "12px", // Equivalent to rounded-l-[12px]
                backgroundColor: "#f5f5f5", // Replace with the actual bg-base-100 color
            }}
        >
            <div
                style={{
                    zIndex: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "80%",
                    gap: "1px",
                    padding: "1px",
                    paddingTop: "48px",
                    paddingBottom: "48px",
                }}
            >
                <div
                    style={{
                        maxWidth: "448px", 
                    }}
                >
                    <h1
                        style={{
                            fontSize: "30px",
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                    >
                        Genetic Analysis Report
                        <br />
                        semi-automatic export system{" "}
                    </h1>

                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "48px"
                        }}
                    >
                        <img
                            src="./bg/SocialNoFriends.png"
                            alt="Gene DNA"
                            style={{
                                width: "192px",
                                display: "inline-block"
                            }}
                        ></img>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LandingIntro;
