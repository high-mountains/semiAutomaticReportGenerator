import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import Ability from "../../../../components/Pdf/PagesComponents/Merit/Ability";
import MeritIntro from "../../../../components/Pdf/PagesComponents/Merit/MeritIntro";
import MeritDemerit from "../../../../components/Pdf/PagesComponents/Merit/MeritDemerit";

import { useState } from "react";
import { useSelector } from "react-redux";

const Merit = () => {
    const [maincolor, setMaincolor] = useState(
        useSelector((state) => state.pdfData.detoxColor)
    );

    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "527",
                height: "322",
                imageURL: "bg/abilityDetox.svg",
                detoxStatus: true,
                contentFontSize: "10rem",
                descriptions: [
                    {
                        wrapperWidth: "269rem",
                        heading: "<span class='blue'>Cytoplasmic Detoxification</span>",
                        content:
                            "Plays a central role in managing oxidative stress within the body, essential for maintaining cellular and tissue health.\nRelated genes: SOD1",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            left: "0rem",
                            width: "269rem",
                        },
                        fontSize: 10,
                    },
                    {
                        wrapperWidth: "230rem",
                        heading: "Lung Detoxification",
                        content:
                            "Crucial for controlling oxidative stress and protecting tissues in the lungs.\nRelated genes: SOD3",
                        contentLineHeight: 1.448,
                        posInfo: {
                            top: "0rem",
                            right: "0rem",
                            width: "230rem",
                        },
                        fontSize: 10,
                    },
                    {
                        wrapperWidth: "169rem",
                        heading: "Liver Detoxification",
                        content:
                            "The primary detoxification organ in the body, metabolizing drugs and harmful substances to neutralize them.\nRelated genes: SULT1A1, UGT1A1, NAT1, NAT2, CYP450, PON1, etc.",
                        contentLineHeight: 1.448,
                        posInfo: {
                            top: "99rem",
                            right: "0rem",
                            width: "169rem",
                        },
                        fontSize: 10,
                        contentClassName: "tracking-tightest",
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "Kidney Detoxification",
                        content:
                            "Filters blood to produce urine, removing toxins and waste products from the body. Highly efficient at eliminating water-soluble substances.\nRelated genes: GPX3, NOX4",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "-5rem",
                            right: "0rem",
                            width: "240rem",
                        },
                        fontSize: 10,
                        contentClassName: "tracking-tightest",
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "Intestinal Detoxification",
                        content:
                            "Responsible for eliminating harmful substances absorbed from food. Gut microbiota also contributes to toxin metabolism.\nRelated genes: GPX2, NOX1",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "3rem",
                            left: "0rem",
                            width: "240rem",
                        },
                        fontSize: 10,
                        contentClassName: "tracking-tightest",
                    },
                    {
                        wrapperWidth: "173rem",
                        heading: "Mitochondrial Detoxification",
                        content:
                            "Prevents oxidative stress in tissues with high energy metabolism.\nRelated genes: SOD2",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "102rem",
                            left: "0rem",
                            width: "173rem",
                        },
                        fontSize: 10,
                        contentClassName: "tracking-tightest",
                    },
                ],
            },
        },
        {
            Component: MeritIntro,
            data: {
                maincolor: maincolor,
                content1:
                    "Advantages of High Detoxification and Disadvantages of Low Detoxification",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                commonStyle: {
                    gap: "5rem",
                },
                inCommonStyle: {
                    gap: "2rem",
                },
                contentStyle: {
                    fontSize: "10rem",
                    lineHeight: 1.444444,
                },

                merit: [
                    {
                        title: "Reduction in Inflammation",
                        content:
                            "Promoting toxin excretion helps reduce brain inflammation, preventing cognitive decline and mental disorders.",
                    },
                    {
                        title: "Lower Risk of Dementia",
                        content:
                            "Suppressing brain inflammation reduces the risk of developing dementia.",
                    },
                    {
                        title: "Mental Stability",
                        content:
                            "Decreased toxin accumulation improves mental health, alleviating anxiety and depressive symptoms.",
                    },
                ],
                demerit: [
                    {
                        title: "Neuroinflammation",
                        content:
                            "Toxin accumulation may cause brain inflammation, damaging nerve cells.",
                    },
                    {
                        title: "Hormonal Imbalance",
                        content:
                            "Exposure to environmental hormones can lead to irregular menstruation, infertility, worsening menopausal symptoms, and increased cancer risks.",
                    },
                ],
            },
        },
    ]);

    return (
        <>
            <PageWrapper>
                <PageHeader
                    subtitle={"Detoxification Type"}
                    mainTitle={"Detox Type"}
                />
                <EnhancedMerit />
                <PageNumber>19</PageNumber>
            </PageWrapper>
        </>
    );
};

export default Merit;
