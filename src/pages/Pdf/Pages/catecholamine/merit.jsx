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
        useSelector((state) => state.pdfData.catecholamineColor)
    );

    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "525",
                height: "300",
                imageURL: "bg/abilityCatecholamine.svg",
                contentFontSize: "12rem", 
                descriptions: [
                    {
                        wrapperWidth: "240rem", 
                        heading: "Decomposition and metabolism of catecholamines",
                        content:
                            "This is an important process that\nbreaks down and metabolizes\ncatecholamines.\nRelated genes: COMT, MAOA",
                        contentLineHeight: 1.448333, 
                        posInfo: {
                            top: "0rem",
                            left: "0rem",
                            width: "240rem"
                        },
                        fontSize: 12, 
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "カテコラミン受容体",
                        content:
                            "Catecholamines bind and transmit signals to cells\n　　This triggers a variety of reactions in \n              the body.\n　　　　　　Related genes:DRD1, DRD2, \n　　         　　　DRD4,ADRA2A",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            right: "0rem",
                            width: "240rem"
                        },
                        fontSize: 12
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "　　　　 Nitric oxide (NO) \n　　　　synthesis",
                        content:
                            "　　　　Regulating blood vessel dilation and neurotransmission. Related genes: NOS2, NOS3",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "34rem",
                            right: "0rem",
                            width: "240rem"
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "Synthesis of \ncatecholamines",
                        content: `It is made from amino acids and is\nproduced in the brain and adrenal glands. Related genes: TH, GCH1, DHFR`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "26rem",
                            left: "0rem",
                            width: "240rem"
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
                content1: "The benefits of having high levels of histamine in the brain",
                content2: "Disadvantages of excess histamine in the brain",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                merit: [
                    {
                        title: "Improved concentration",
                        content:
                            "Catecholamines increase attention and focus, improving cognitive function."
                    },
                    {
                        title: "Improved explosiveness",
                        content:
                            "Catecholamines enhance rapid reaction and explosiveness under stressful situations, improving the ability to respond to emergencies."
                    },
                    {
                        title: "Increased motivation",
                        content:
                            "Dopamine motivates us to achieve our goals and drives our actions."
                    },
                ],
                demerit: [
                    {
                        title: "Emotional instability",
                        content:
                            "Too much norepinephrine and adrenaline can lead to irritability and aggressive behavior ([losing your temper])."
                    },
                    {
                        title: "Increased anxiety and stress",
                        content:
                            "High catecholamine levels can lead to chronic anxiety and stress, which can have a negative impact on your physical and mental health."
                    },
                    {
                        title: "Sleep disorders",
                        content:
                            "Excess catecholamines can keep you awake for too long and reduce the quality of your sleep."
                    },
                ],
            },
        },
    ]);
    return(<>
    <PageWrapper>
        <PageHeader 
            // subtitle={"Catecholamine Type"}
            mainTitle={"Catecholamine Type"}>
        </PageHeader>
        
        <EnhancedMerit />

        <PageNumber>
            10
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
