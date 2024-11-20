import { useEffect, useState } from "react";
import Text from "../../components/Pdf/Text";
import PageNumber from "../../components/Pdf/PageNumber";
import pdfData from "../../utils/dummyPdf.json";
import SpiderChart from "../../components/Pdf/SpiderChart";

function Page3() {
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
                className={`page font border-[1rem] border-[rgba(0,0,0,0.1)] rounded-[2rem] relative printUnit`}
            >
                <div>
                    <div
                        style={{
                            marginTop: "30rem",
                            marginRight: "30rem",
                            marginLeft: "30rem",
                        }}
                    >
                        <Text
                            textContent={"Genetic Types"}
                            textColor={`${data.mainColor}`}
                            fontSize={14}
                            className={"font-bold"}
                        />
                        <Text
                            textContent={"あなたの遺伝子タイプ"}
                            fontSize={32}
                            className={"font-bold"}
                            style={{
                                lineHeight: 1.25,
                                marginBottom: "20rem",
                            }}
                        />
                        <Text
                            textContent={"あなたの遺伝子タイプは...."}
                            style={{
                                lineHeight: 1.448125,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "30rem",
                                    backgroundColor: "#F8F8F8",
                                    paddingTop: "11.5rem",
                                    paddingBottom: "11.5rem",
                                }}
                                className={"whitespace-pre-wrap"}
                            >
                                <Text
                                    textContent={
                                        "グルタメートタイプ\nカテコラミンタイプ\nヒスタミンタイプ "
                                    }
                                    className={"whitespace-pre-wrap font-bold"}
                                    fontSize={20}
                                    style={{
                                        lineHeight: 1.448,
                                    }}
                                />
                                <Text
                                    textContent={
                                        "ミトコンドリアタイプ\nデトックスタイプ\nメチレーションタイプ "
                                    }
                                    className={"whitespace-pre-wrap font-bold"}
                                    fontSize={20}
                                    style={{
                                        lineHeight: 1.448,
                                    }}
                                />
                            </div>
                        </Text>
                    </div>

                    <div className="h-[315rem] pt-[20rem] flex flex-col items-center relative">
                        <SpiderChart />
                        <p className="absolute bottom-[20rem] right-[30rem] text-[9rem] text-[#484F51]">
                            ※点数が高いほど、タイプとしての特徴がより強い傾向にあります。
                        </p>
                    </div>

                    <div
                        style={{
                            backgroundColor: "#F8F8F8",
                            paddingTop: "15rem",
                            paddingLeft: "35rem",
                            paddingRight: "35rem",
                            paddingBottom: "39.75rem",
                            marginBottom: "",
                        }}
                    >
                        <Text
                            sidebar={1}
                            sidebarColor={"#00C3D0"}
                            textContent="遺伝子とは？"
                        />
                        <div
                            className="flex flex-row items-center justify-center mt-[10rem] mb-[11.47rem]"
                            style={{
                                height: "180rem",
                                gap: "41rem",
                                backgroundColor: "#FFF",
                            }}
                        >
                            <Text
                                textContent={
                                    "身体の特徴を左右する「人体の設計図」です。遺伝子によって、人それぞれの特性が異なることが分かっています。\n たとえば、遺伝子の違いによって、ある人は食べ物の消化が得意だったり、ストレスに強かったりするかもしれません。また、遺伝子の情報を知ることで、より効果的な健康管理や病気の予防ができる可能性があります。"
                                }
                                bgColor={"FFF"}
                                fontSize={14}
                                className={"whitespace-pre-wrap font-normal"}
                                style={{
                                    width: "308rem",
                                    height: "159rem",
                                }}
                            />
                            <div
                                style={{
                                    width: "150rem",
                                    height: "175rem",
                                }}
                            >
                                <img
                                    className="w-full h-full"
                                    src="./bg/woman115.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <PageNumber bottom={11.75}>03</PageNumber>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page3;
