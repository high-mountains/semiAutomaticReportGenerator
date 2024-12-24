
function LandingIntro() {
    return (
        <div
            className="hero"
            style={{
                minHeight: "100%",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
                backgroundColor: "#f5f5f5"
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
                        display: "flex",
                        flexDirection: "column",
                        color: "#00C3D0"
                    }}
                >
                    <h1
                        style={{
                            fontSize: "30px",
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                    >
                        DNA報告書
                        <br />
                        半自動生成システム{" "}
                    </h1>

                    <span className="text-[20px]" style={{
                        alignSelf:"center"
                    }}>(Version 2.0)</span>

                    <div
                        style={{
                            textAlign: "center",
                            // marginTop: "15px"
                        }}
                    >
                        <img
                            src="./bg/version2_banner.png"
                            alt="Dashwind Admin Template"
                            style={{
                                width: "90%",
                                height: "90%",
                                display: "inline-block",
                            }}
                        ></img>
                    </div>

                    {/* Importing pointers component */}
                </div>
            </div>
        </div>
    );
}

export default LandingIntro;
