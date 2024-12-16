import { useEffect, useState } from "react";
import Text from "../../components/Pdf/Text";
import pdfData from "../../utils/dummyPdf.json";
import { useSelector } from "react-redux";
import { update } from "lodash";

function Page2({extraSupplementsLength}) {
    const initialData = {
        clientName: pdfData.clientName,
        clientId: pdfData.clientId,
        mainColor: pdfData.mainColor,
        mainTextColor: pdfData.mainTextColor,
    };
    const [data, setData] = useState(initialData);

    const [deltaPage, setDeltaPage] = useState(
            useSelector((state) => state.pdfData.deltaPage)
        );
    const flagDeltaPage = useSelector((state) => state.pdfData.deltaPage);

    useEffect(() => {
        setDeltaPage(flagDeltaPage);
    }, [flagDeltaPage]);

    const [pageContent, setPageContent] = useState(["P03", "P04", "P05", "P08", "P11", "P14", "P17", "P20", "P23", "P24", "P25", "P40", "P142", "P144"]);
    
    useEffect(() => {
        // Update the fourth element of the array
        setPageContent((prevContent) => {
          const updatedContent = [...prevContent];  // Create a shallow copy of the array
          updatedContent[10] = "P" + (25 + extraSupplementsLength); // Update the fourth element (index 3)
          updatedContent[11] = "P" + (40 + deltaPage);
          updatedContent[12] = "P" + (142 + deltaPage);
          updatedContent[13] = "P" + (144 + deltaPage);
          return updatedContent;
        });
      }, [extraSupplementsLength, deltaPage]);

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
            // optional cleanup code (only if needed)
        };
    }, [pdfData]);

    return (
        <div
            style={{
                borderWidth: "1rem",
                borderColor: "rgba(0,0,0,0.1)",
                borderRadius: "2rem",
                color: "#484F51",
            }}
            className="font"
        >
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: "-2rem",
                    paddingRight: "-2rem",
                }}
                className={"printUnit page font"}
            >
                <div
                    className="flex flex-col items-start"
                    style={{ marginTop: "175.5rem", marginBottom: "175.5rem" }}
                >
                    <Text
                        textContent={"目次"}
                        textColor={`${data.mainColor}`}
                        fontSize={32}
                        className={"font-bold flex items-center"}
                        style={{
                            lineHeight: 1.25,
                            width: "505rem",
                            marginBottom: "15rem",
                        }}
                    />
                    <div className="flex flex-row align-top">
                        <div className="flex flex-col">
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"1.あなたの遺伝子タイプ"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                    }}
                                />
                                <span className="dots grow"></span>
                                
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"私たちの遺伝子検査について"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                        marginLeft: "11rem",
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"グルタメートタイプ"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                        marginLeft: "11rem",
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"カテコラミンタイプ"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                        marginLeft: "11rem",
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"ヒスタミンタイプ"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                        marginLeft: "11rem",
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"ミトコンドリアタイプ"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                        marginLeft: "11rem",
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"デトックスタイプ"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                        marginLeft: "11rem",
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"メチレーションタイプ"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                        marginLeft: "11rem",
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>

                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"2.遺伝子カテゴリー"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={
                                        "おすすめのサプリメントや栄養素"
                                    }
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                        marginLeft: "11rem",
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"避けるべき生活習慣"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                        marginLeft: "11rem",
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>

                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"3.あなたの遺伝子情報一覧"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                    }}
                                />
                                {/* SVG Dashed Line */}
                                <span className="dots grow"></span>
                            </div>

                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"4.用語集"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                            <div
                                className="flex justify-between items-center"
                                style={{ width: "451rem" }}
                            >
                                <Text
                                    textContent={"5.タイプ経路図"}
                                    textColor={`${data.mainTextColor}`}
                                    fontSize={16}
                                    className={"font-bold"}
                                    style={{
                                        lineHeight: 2,
                                    }}
                                />
                                <span className="dots grow"></span>
                            </div>
                        </div>
                        <div>
                            {pageContent && pageContent.map((item, index) => <Text
                                key={index}
                                textContent={item}
                                textColor={`${data.mainTextColor}`}
                                fontSize={16}
                                className={"font-bold"}
                                style={{
                                    lineHeight: 2,
                                }}
                            />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page2;
