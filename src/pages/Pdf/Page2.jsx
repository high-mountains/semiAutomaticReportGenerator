import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Text from "../../components/Pdf/Text";
import pdfData from "../../utils/dummyPdf.json";

function Page2() {
    const { clientName, clientId, articleCategoriesForPath, mainTextColor } = useSelector((state) => state.pdfData);
    // const { clientName, clientId, articleCategoriesForPath, mainTextColor } = pdfData;
    const initialData = {
        clientName: pdfData.clientName,
        clientId: pdfData.clientId,
        mainColor: pdfData.mainColor,
        mainTextColor: pdfData.mainTextColor,
    };
    const [data, setData] = useState(initialData);

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

    return(
        <>
            <div className={`page font border-[1rem] border-[rgba(0,0,0,0.1)] rounded-[2rem] printUnit`}>
                <div className="flex flex-col items-center" style={{marginTop: "175.5rem", marginBottom: "175.5rem"}}>
                    <Text
                        textContent={"目次"}
                        textColor={`${data.mainColor}`}
                        fontSize={32}
                        className={"font-bold flex items-center"}
                        style={{
                            lineHeight: 1.25,
                            width: "505rem",
                        }}
                    />
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"1.あなたの遺伝子タイプ"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P03"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"私たちの遺伝子検査について"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P04"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"グルタメートタイプ"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P05"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"カテコラミンタイプ"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P08"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"ヒスタミンタイプ"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P11"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"ミトコンドリアタイプ"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P14"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"デトックスタイプ"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P17"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"メチレーションタイプ"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P20"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    
                    {/* Title Page 2 */}
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"2.あなたにおすすめのサプリメントや生活習慣"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P00"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"サプリメント計画表"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P20"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"変異のある遺伝子のカテゴリーと変異度合い"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P20"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>

                    {/* Title Page 3 */}
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"3.あなたの遺伝子情報"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P00"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"遺伝子のカテゴリーと働きと変異度合い"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem"
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P20"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>

                    <div className="flex justify-between" style={{ width: "505rem"}}>
                        <Text
                            textContent={"4.参考・引用論文"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P00"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                </div>
                

{/* あなたの遺伝子タイプ */}
            </div>
        </>
    )
}

export default Page2;