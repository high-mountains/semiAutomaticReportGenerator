import { useEffect, useState } from "react";
import Text from "../../components/Pdf/Text";
import pdfData from "../../utils/dummyPdf.json";
import { useSelector } from "react-redux";

function Page1() {
    const initialData = {
        clientName: pdfData.clientName,
        clientId: pdfData.clientId,
        mainColor: pdfData.mainColor,
        mainTextColor: pdfData.mainTextColor,
    };

    const [data, setData] = useState(initialData);
    const renderFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [deliveryFlag, setDeliveryFlag] = useState("");

    useEffect(() => {
        setDeliveryFlag(renderFlag);
    }, [renderFlag]);

    useEffect(() => {
        setData((pervState) => {
            return {
                ...pervState,
                clientName: pdfData.clientName,
                clientId: pdfData.clientId,
                mainColor: pdfData.mainColor,
                mainTextColor: pdfData.mainTextColor,
            };
        });
        return () => {
        };
    }, [pdfData]);

    return (
        <>
            <div
                style={{
                    outlineWidth: "1rem",
                    outlineColor: "rgba(0,195,208,0.8)",
                    outlineStyle: "solid",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#484F51",
                    width: "595px",
                    height: "841px",
                    borderRadius: "2px"
                }}
                className="font printUnit"
            >
                {/* Top Nav */}
                <div
                    className="w-full h-[30rem] mb-[203rem]"
                    style={{ backgroundColor: "#00C3D0" }}
                ></div>

                <Text
                    textContent={"Genetic Analysis Report"}
                    textColor={"#00C3D0"}
                    fontSize={32}
                    className={"font-bold text-center"}
                    style={{
                        lineHeight: 1.25,
                    }}
                />

                <Text
                    textContent={`Mr/Mrs${data.clientName}   (ID:${data.clientId})\nInspection Result Notification Date ：10/01/2024`}
                    textColor={"#00C3D0"}
                    className={
                        "font-bold text-center mb-[162rem] pt-[21rem] whitespace-pre-wrap"
                    }
                />

                <Text
                    textContent={
                        "  This genomic testing is not a medical procedure.\n  Therefore, it cannot be used to confirm a diagnosis.\n  Information on diseases associated with the genetic mutations found is provided for educational purposes only, and is not intended to replace information provided by a physician on whether or not a particular person has the disease, the progression of symptoms, or treatment options.\n  Information on diseases associated with the genetic mutations found is provided for educational purposes only, and is not intended to replace information provided by a physician on whether or not a particular person has the disease, the progression of symptoms, or treatment options."
                    }
                    fontSize={12}
                    style={{
                        width: "500rem",
                        lineHeight: 1.4483,
                        fontWeight: 400,
                        whiteSpace: "pre-wrap",
                        borderWidth: "1rem",
                        borderColor: "#00C3D0",
                        borderRadius: "12rem",
                        paddingRight: "13rem",
                        paddingLeft: "14rem",
                        marginBottom: "67rem",
                        color: "#484F51",
                        ...(!deliveryFlag ? { paddingTop: "19rem", paddingBottom: "19rem" } : { paddingTop: "14rem", paddingBottom: "24rem" }),
                    }}
                />

                <div className="mb-[16rem] w-[176rem] h-[33rem]">
                    {/* <img src="/bg/JENE_Logo.svg" alt="JENE仮ロゴ横_0604 1" /> */}
                </div>

                <div
                    className={`w-full h-[30rem] `}
                    style={{ backgroundColor: "#00C3D0" }}
                ></div>
            </div>
        </>
    );
}

export default Page1;
