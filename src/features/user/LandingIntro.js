// import TemplatePointers from "./components/TemplatePointers"

function LandingIntro() {
    return (
        <div
            className="hero"
            style={{
                minHeight: "100%", // Equivalent to min-h-full
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
                        maxWidth: "448px", // Equivalent to max-w-[448px]
                    }}
                >
                    <h1
                        style={{
                            fontSize: "30px", // Equivalent to text-[30px]
                            textAlign: "center", // Equivalent to text-center
                            fontWeight: "bold", // Equivalent to font-bold
                        }}
                    >
                        DNA報告書
                        <br />
                        半自動生成システム{" "}
                    </h1>

                    <div
                        style={{
                            textAlign: "center", // Equivalent to text-center
                            marginTop: "48px", // Equivalent to mt-[48px]
                        }}
                    >
                        <img
                            src="./bg/SocialNoFriends.png"
                            alt="Dashwind Admin Template"
                            style={{
                                width: "192px", // Equivalent to w-[192px]
                                display: "inline-block", // Equivalent to inline-block
                            }}
                        ></img>
                    </div>

                    {/* Importing pointers component */}
                    {/* <TemplatePointers /> */}
                </div>
            </div>
        </div>
    );
}

export default LandingIntro;
