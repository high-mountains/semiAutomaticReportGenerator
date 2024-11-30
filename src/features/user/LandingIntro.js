// import TemplatePointers from "./components/TemplatePointers"

function LandingIntro() {
    return (
        <div
            className="hero"
            style={{
                minHeight: "100%", // Equivalent to min-h-full
                borderTopLeftRadius: "12rem", // Equivalent to rounded-l-[12rem]
                borderBottomLeftRadius: "12rem", // Equivalent to rounded-l-[12rem]
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
                    gap: "1rem",
                    padding: "1rem",
                    paddingTop: "48rem",
                    paddingBottom: "48rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "448rem", // Equivalent to max-w-[448rem]
                    }}
                >
                    <h1
                        style={{
                            fontSize: "30rem", // Equivalent to text-[30rem]
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
                            marginTop: "48rem", // Equivalent to mt-[48rem]
                        }}
                    >
                        <img
                            src="./bg/SocialNoFriends.png"
                            alt="Dashwind Admin Template"
                            style={{
                                width: "192rem", // Equivalent to w-[192rem]
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
