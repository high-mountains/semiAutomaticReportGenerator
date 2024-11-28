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
            // optional cleanup code (only if needed)
        };
    }, [pdfData]);

    return (
        <>
            <div
                style={{
                    borderWidth: "1rem",
                    borderColor: "rgba(0,195,208,0.8)",
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
                    {/* Top Nav */}
                    <div
                        className={`w-full h-[30rem] mb-[243rem]`}
                        style={{ backgroundColor: `${data.mainColor}` }}
                    ></div>

                    <Text
                        textContent={"遺伝子検査レポート"}
                        textColor={`${data.mainColor}`}
                        fontSize={32}
                        className={"font-bold text-center"}
                        style={{
                            lineHeight: 1.25,
                        }}
                    />

                    <Text
                        textContent={`${data.clientName}様 (ID:${data.clientId})\n検査結果通知日：2024年10月1日`}
                        textColor={`${data.mainColor}`}
                        className={
                            "font-bold text-center mb-[162rem] pt-[21rem] whitespace-pre-wrap"
                        }
                    />

                    <Text
                        textContent={
                            "本ゲノム検査は医療行為ではありません。\nまた従って診断確定に用いることもできません。\n見つかった遺伝子変異に関連する疾患の情報は教育目的で提供するもので、特定の人物についての発症の有無や症状の進展、治療法等について医師が提供する情報に代わるものではありません。\n気になる変異が見つかった場合には、本レポートを参考に主治医、かかりつけ医などの医療機関にお持ちするなど、医療的な診断を受けることを勧めています。"
                        }
                        fontSize={12}
                        style={{
                            lineHeight: "1.41733",
                            width: "500rem",
                            lineHeight: 1.25,
                            fontWeight: 400,
                            whiteSpace: "pre-wrap",
                            borderWidth: "1rem",
                            borderColor: "#00C3D0",
                            borderRadius: "12rem",
                            paddingRight: "13rem",
                            paddingLeft: "14rem",
                            paddingBottom: "12rem",
                            color: "#484F51",
                            ...(!deliveryFlag && { paddingTop: "12rem" }),
                        }}
                    />

                    <div className="mb-[16rem] w-[176rem] h-[33rem]">
                        <img
                            src="/bg/JENE_Logo.svg"
                            alt="JENE仮ロゴ横_0604 1"
                        />
                    </div>

                    <div
                        className={`w-full h-[30rem] `}
                        style={{ backgroundColor: `${data.mainColor}` }}
                    ></div>
                </div>
            </div>
        </>
    );
}

export default Page1;
