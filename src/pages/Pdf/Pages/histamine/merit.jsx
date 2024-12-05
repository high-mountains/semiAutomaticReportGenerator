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
        useSelector((state) => state.pdfData.histamineColor)
    );
    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "540.91",
                height: "345",
                imageURL: "bg/abilityHistamine.svg",
                contentFontSize: "12rem",  
                descriptions: [
                    {
                         
                        wrapperWidth: "177rem",  
                        heading: "Histamine synthesis",
                        content:
                            "It synthesizes histamine by converting the amino acid histidine into histamine. Related gene: HDC",
                        contentLineHeight: 1.448333,  
                        posInfo: {
                            top: "13.4rem",
                            left: "76rem",
                            width: "177rem",
                        },
                        fontSize: 12
                    },
                    {
                         
                        wrapperWidth: "160.79rem",
                        heading: "Anti-inflammatory properties",
                        content:
                            "Produces steroids. Related genes: CYP21A2",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "11rem",
                            right: "106.12rem",
                            width: "160.79rem"
                       },
                         
                         
                        fontSize: 12,
                    },
                    {
                         
                        wrapperWidth: "177rem",
                        heading: "Histamine metabolism and decomposition",
                        content:
                            "By neutralizing and excreting histamine, the histamine level in the body is appropriately adjusted. Related genes: HNMT, NAT2, ALDH2, UGT1A4",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "126rem",
                            right: "0rem",
                            width: "177rem"
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                    {
                         
                        wrapperWidth: "304.54rem",
                        heading: "Gluten sensitivity/lactose intolerance/electromagnetic sensitivity",
                        content: `Causes sensitivity or intolerance to gluten and dairy products. Related genes: HLA-DQ2.2, HLA-DQ2.5, HLA-DQ8, MCM6, CACNA1C`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "1rem",
                            right: "87.46rem",
                            width: "304.54rem"
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        wrapperWidth: "181.54rem",
                        heading: "Receptor-related pathways that mediate the effects of histamine",
                        content: `By binding to specific receptors, it induces various physiological responses, including allergic reactions. Related genes: HRH1, HRH2, HRH3, HRH4`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "75rem",
                            left: "0rem",
                            width: "181.54rem"
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    }
                ],
            },
        },
        {
            Component: MeritIntro,
            data: {
                maincolor: maincolor,
                content1: "The benefits of having high levels of histamine in the brain",
                content2: "Disadvantages of excess histamine in the brain"
            },
        },
        {
            Component: MeritDemerit,
            data: {
                merit: [
                    {
                        title: "Increased alertness and attention",
                        content:
                            "Histamine keeps you awake and increases your alertness and concentration."
                    },
                    {
                        title: "Supports memory and learning",
                        content:
                            "Histamine affects synaptic plasticity in the brain, aiding in memory formation and learning ability."
                    }
                ],
                demerit: [
                    {
                        title: "Nervous system effects",
                        content:
                            "Excess histamine can cause anxiety, headaches, and sleep problems.",
                        className: "tracking-tightest",
                        contentStyle: {
                            letterSpacing: "-0.6rem"
                        }
                    },
                    {
                        title: "Worsening allergic reactions",
                        content:
                            "Too much histamine can cause excessive allergic reactions and worsen symptoms such as chronic rhinitis, dermatitis, and asthma."
                    },
                    {
                        title: "Worsening gastrointestinal symptoms",
                        content:
                            "Excessive secretion of histamine increases stomach acid, which increases the risk of stomach pain, gastritis, and stomach ulcers.",
                            className: "tracking-tightest",
                            contentStyle: {
                                letterSpacing: "-0.6rem"
                            }
                        }
                ],
            },
        },
    ]);
    return(<>
    <PageWrapper>
        <PageHeader 
            // subtitle={"Histamine Type"}
            mainTitle={"Histamine Type"}>
        </PageHeader>
        <EnhancedMerit />
        <PageNumber>
            13
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
