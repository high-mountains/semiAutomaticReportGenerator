import { useEffect, useState } from "react";
import Text from "../../components/Pdf/Text";
import pdfData from "../../utils/dummyPdf.json";

function Page2() {
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
                    className="flex flex-col items-center"
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
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"1.Your Genotype"}
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
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"About our genetic testing"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
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
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"Glutamate type"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
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
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"Catecholamine type"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
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
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"Histamine type"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
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
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"Mitochondrial type"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
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
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"Detox type"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
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
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"Methylation type"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
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
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={
                                "2. Recommended supplements and lifestyle for you"
                            }
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P24"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"Supplemental Plan Chart"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P25"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={
                                "Categories of genes with mutations and the degree of mutation"
                            }
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P26"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>

                    {/* Title Page 3 */}
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"3. Your genetic information"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P41"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"Gene categories, features and mutation levels"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                                marginLeft: "11rem",
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P41"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>

                    <div
                        className="flex justify-between"
                        style={{ width: "505rem" }}
                    >
                        <Text
                            textContent={"4.References"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                        <span className="dots"></span>
                        <Text
                            textContent={"P160"}
                            textColor={`${data.mainTextColor}`}
                            fontSize={16}
                            className={"font-bold"}
                            style={{
                                lineHeight: 2,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page2;
