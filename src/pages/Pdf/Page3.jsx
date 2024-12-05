import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
        return () => {};
    }, [pdfData]);

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
                                className={"font-bold"}
                                style={{
                                    marginLeft: "30rem",
                                }}
                            />
                            <Text
                                textContent={"Your Genotype"}
                                fontSize={32}
                                className={"font-bold"}
                                style={{
                                    lineHeight: 1.25,
                                    marginBottom: "20rem",
                                    marginLeft: "30rem",
                                }}
                            />
                            <Text
                                textContent={"Your genotype is...."}
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
                                            "Glutamate type\nCatecholamine type\nHistamine type"
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
                                            "Mitochondrial type\nDetox type\nMethylation type"
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
                                ※The higher the score, the stronger the characteristics as a type tend to be.
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
                                textContent="What are genes?"
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
                                        "It is the “Blueprint of the human body” that determines physical characteristics. It is known that each person's characteristics differ according to his or her genes.\nFor example, different genes may make one person better at digesting food or more resilient to stress."
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
                                        marginTop: `${ renderedPdfFlag ? '1' : '15.5' }rem`,
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
