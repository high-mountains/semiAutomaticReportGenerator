import { useEffect, useState } from "react";
import Text from "../../components/Pdf/Text";
import pdfData from "../../utils/dummyPdf.json";

function Page1() {
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

    return (
        <>
            <div
                className="page outline outline-1 flex flex-col items-center justify-center printUnit"
                style={{ outlineColor: `${data.mainColor}` }}
            >
                <div
                    className={`w-full h-[30rem] bg-[#${data.mainColor}] mb-[243rem]`}
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
                    textContent={`${data.clientName}様 (ID:${data.clientId}) \n 検査結果通知日：2024年10月1日`}
                    textColor={`${data.mainColor}`}
                    className={
                        "font-bold text-center mb-[162rem] pt-[21rem] whitespace-pre-wrap"
                    }
                />

                <div
                    className={`border-[1px] rounded-[12rem] w-[500rem] mb-[67rem] flex flex-col items-center justify-center px-52 py-[19rem]`}
                    style={{
                        borderSize: `${data.mainColor}`,
                        borderColor: `${data.mainColor}`,
                    }}
                >
                    <Text
                        textContent={
                            "本ゲノム検査は医療行為ではありません。\nまた従って診断確定に用いることもできません。\n見つかった遺伝子変異に関連する疾患の情報は教育目的で提供するもので、特定の人物についての発症の有無や症状の進展、治療法等について医師が提供する情報に代わるものではありません。\n気になる変異が見つかった場合には、本レポートを参考に主治医、かかりつけ医などの医療機関にお持ちするなど、医療的な診断を受けることを勧めています。"
                        }
                        className={
                            "font-normal whitespace-pre-wrap w-[473rem] leading-tight"
                        }
                        fontSize={12}
                        style={{
                            lineHeight: "1.41733",
                        }}
                    />
                </div>

                <div className="mb-[16rem]">
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
        </>
    );
}

export default Page1;
