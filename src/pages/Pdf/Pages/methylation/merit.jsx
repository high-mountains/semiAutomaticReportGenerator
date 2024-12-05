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
        useSelector((state) => state.pdfData.methylationColor)
    );
    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "525",
                height: "269",
                imageURL: "bg/abilityMethylation.svg",
                contentFontSize: "10rem",  
                descriptions: [
                    {
                        wrapperWidth: "240rem",
                        heading: "Methylation Cycle",
                        content:
                            "Genes that assist in producing methionine, an amino acid, from homocysteine as part of the methylation cycle.\nRelated Genes: MTHFR, MTRR, MTR, DHFR, SHMT1",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            left: "0rem",
                            width: "240rem",
                        },
                        fontSize: 12,
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "Homocysteine Metabolism",
                        content:
                            "Genes involved in transforming homocysteine into other substances to maintain balance in the body.\nRelated Genes: AHCY, BHMT, CBS",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            right: "0rem",
                            width: "240rem",
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest leading-[1.4483]"
                    },
                    {
                        wrapperWidth: "242rem",
                        heading: "Sulfur Amino Acid Metabolism",
                        content:
                            "Genes that assist in producing cysteine, an amino acid, from cystathionine, maintaining sulfur-containing amino acid balance.\nRelated Genes: CTH",
                        contentLineHeight: 1.448,
                        posInfo: {
                            bottom: "8rem",
                            right: "0rem",
                            width: "240rem",
                        },
                        fontSize: 12,
                        contentClassName: "tracking-[-0.5rem] leading-[1.4483]"
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "Folate Absorption and Metabolism",
                        content:
                            "Genes that help absorb and utilize folate, an essential vitamin.\nRelated Genes: FOLR1, FOLR2, SLC19A1",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "25rem",
                            left: "0rem",
                            width: "240rem",
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                ],
            },
        },
        {
            Component: MeritIntro,
            data: {
                maincolor: maincolor,
                content1: "Benefits of Improved Methylation",
                content2: "Challenges from Reduced Methylation",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                commonStyle: {
                    gap: "5rem",
                },
                contentStyle: {
                    fontSize: "10rem",
                    lineHeight: 1.444444,
                },
                inCommonStyle: {
                    gap: "2rem",
                },
                wrapperStyle: {
                    gap: "5rem",
                },
                merit: [
                    {
                        title: "Enhanced Cognitive Function",
                        content:
                            "Methylation contributes to the synthesis of neurotransmitters, improving cognitive abilities.",
                    },
                    {
                        title: "Mood Stabilization",
                        content:
                            "Proper methylation helps balance neurotransmitters like serotonin and dopamine, promoting emotional stability.",
                    },
                    {
                        title: "Improved Stress Resistance",
                        content:
                            "Enhanced methylation regulates hormone balance, increasing resilience to stress.",
                    },
                    {
                        title: "Boosted Immune Function",
                        content:
                            "Methylation supports the development and function of immune cells like T-cells and B-cells, strengthening immunity.",
                    },
                ],
                demerit: [
                    {
                        title: "Neurological Dysfunction",
                        content:
                            "Insufficient synthesis of neurotransmitters can lead to cognitive decline and mood instability.",
                    },
                    {
                        title: "Reduced Hormone Production",
                        content:
                            "Hormonal imbalances may cause issues like irregular menstruation or menopausal symptoms.",
                    },
                    {
                        title: "Decreased Detoxification Capacity",
                        content:
                            "Methylation plays a role in liver detoxification, and reduced activity can lead to toxin accumulation.",
                    },
                    {
                        title: "Weakened Resistance to Infections",
                        content:
                            "Improper methylation of immune-related genes can impair immune responses, increasing infection risks.",
                    },
                    {
                        title: "Chronic Inflammation",
                        content:
                            "Affects the generation of <span class='blue'>cytokines</span>, leading to prolonged or excessive inflammatory responses.",
                    },
                ],
            },
        },
    ]);

    return (
        <>
            <PageWrapper>
                <PageHeader
                    subtitle={"Methylation Type"}
                    mainTitle={"Methylation Type"}
                ></PageHeader>
                <EnhancedMerit />
                <PageNumber>22</PageNumber>
            </PageWrapper>
        </>
    );
};

export default Merit;
