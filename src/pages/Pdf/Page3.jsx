import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Text from "../../components/Pdf/Text";
import PageNumber from "../../components/Pdf/PageNumber";
import pdfData from "../../utils/dummyPdf.json";
import SpiderChart from "../../components/Pdf/SpiderChart";

function Page3() {
    
    const highlightState = useSelector((state) => state.pdfData.typeHighlight);
    const initialData = {
        mainColor: pdfData.mainColor,
        mainTextColor: pdfData.mainTextColor,
        highlightState: highlightState
    };

    const [data, setData] = useState(initialData);

    useEffect(() => {
        setData((pervState) => {
            return {
                ...pervState,
                mainColor: pdfData.mainColor,
                mainTextColor: pdfData.mainTextColor,
                highlightState: highlightState
            };
        });
        
        return () => {};
    }, [pdfData, highlightState]);

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    return (
        <>
            <div>
                <div
                    style={{
                        position: "relative",
                        borderWidth: "1rem",
                        borderColor: "rgba(0,0,0,0.1)",
                        borderRadius: "2rem",
                        color: "#484F51"
                    }}
                    className="font"
                >
                    <div
                        style={{
                            paddingTop: "30rem"
                        }}
                        className={"printUnit page font "}
                    >
                        <div>
                            <Text
                                textContent={"Genetic Types"}
                                textColor={`${data.mainColor}`}
                                fontSize={14}
                                className={""}
                                style={{
                                    marginLeft: "30rem",
                                }}
                            />
                            <Text
                                textContent={"あなたの遺伝子タイプ"}
                                fontSize={32}
                                className={"font-bold"}
                                style={{
                                    lineHeight: 1.25,
                                    marginBottom: "20rem",
                                    marginLeft: "30rem",
                                }}
                            />
                            <Text
                                textContent={"あなたの遺伝子タイプは...."}
                                style={{
                                    lineHeight: 1.448125,
                                    marginLeft: "35rem",
                                    marginBottom: "7rem"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "30rem",
                                        backgroundColor: "#F8F8F8",
                                        marginLeft: "35rem",
                                        marginRight: "35rem",
                                        paddingBottom: "11.5rem",
                                    }}
                                    className={"whitespace-pre-wrap"}
                                >
                                    <Text
                                        textContent={
                                            `<span ${data.highlightState[0]==1 ? 'class="opacity-50"' : ''}}>グルタメートタイプ</span><br/><span ${data.highlightState[1]==1 ? 'class="opacity-50"' : ''}>カテコラミンタイプ</span><br/><span ${data.highlightState[2]==1 ? 'class="opacity-50"' : ''}>ヒスタミンタイプ</span>`
                                        }
                                        className={
                                            "whitespace-pre-wrap font-bold"
                                        }
                                        fontSize={20}
                                        style={{
                                            lineHeight: 1.448,
                                            marginTop: `${ renderedPdfFlag ? '-8' : '11.5' }rem`,
                                        }}
                                    />
                                    <Text
                                        textContent={
                                            `<span ${data.highlightState[3]==1 ? 'class="opacity-50"' : ''}>ミトコンドリアタイプ</span><br/><span ${data.highlightState[4]==1 ? 'class="opacity-50"' : ''}>デトックスタイプ</span><br/><span ${data.highlightState[5]==1 ? 'class="opacity-50"' : ''}>メチレーションタイプ</span> `
                                        }
                                        className={
                                            "whitespace-pre-wrap font-bold"
                                        }
                                        fontSize={20}
                                        style={{
                                            lineHeight: 1.448,
                                            marginTop: `${ renderedPdfFlag ? '-8' : '11.5' }rem`,
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
                                paddingLeft: "35rem",
                                paddingRight: "35rem",
                                paddingTop: "15rem",
                                width: "100%",
                                height: "274.75rem",
                                position: "absolute",
                                bottom: 0,
                            }}
                        >
                            <Text
                                sidebar={1}
                                sidebarColor={"#00C3D0"}
                                textContent="遺伝子とは？"
                                style={{
                                    marginBottom: `${ renderedPdfFlag ? '' : '10.5' }rem`,
                                }}
                            />
                            <div
                                className="flex flex-row items-start justify-center mt-[10rem] mb-[11.47rem]"
                                style={{
                                    height: "180rem",
                                    gap: "41rem",
                                    backgroundColor: "#FFF"
                                }}
                            >
                                <Text
                                    textContent={
                                        "身体の特徴を左右する「人体の設計図」です。遺伝子によって、人それぞれの特性が異なることが分かっています。\nたとえば、遺伝子の違いによって、ある人は食べ物の消化が得意だったり、ストレスに強かったりするかもしれません。また、遺伝子の情報を知ることで、より効果的な健康管理や病気の予防ができる可能性があります。"
                                    }
                                    bgColor={"FFF"}
                                    fontSize={14}
                                    className={
                                        "whitespace-pre-wrap font-normal"
                                    }
                                    style={{
                                        width: "308rem",
                                        height: "159rem",
                                        lineHeight: 1.4478,
                                        marginTop: `${ renderedPdfFlag ? '1' : '10.5' }rem`,
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
            </div>
        </>
    );
}

export default Page3;
