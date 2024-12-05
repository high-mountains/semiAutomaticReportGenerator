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
        useSelector((state) => state.pdfData.mitochodrialColor)
    );
    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "525",
                height: "305",
                imageURL: "bg/abilityMitochondrial.svg",
                contentFontSize: "12rem",
                descriptions: [
                    {
                        wrapperWidth: "229rem",
                        heading: "Energy metabolism and production",
                        content:
                            "A gene that produces the enzymes and proteins necessary to make energy (ATP) in mitochondria. Related genes: NDUFA1, NDUFS1, ATP5F1A",
                        contentLineHeight: 1.448333,  
                        posInfo: {
                            top: "-15rem",
                            left: "0rem",
                            width: "229rem"
                        },
                        fontSize: 12
                    },
                    {
                        wrapperWidth: "230rem",
                        heading: "Citric Acid Cycle (TCA Cycle)",
                        content:
                            "A gene involved in the <span class='blue'>citric acid cycle</span>, which produces energy for cells. \n　Related gene: OGDH",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            right: "13rem",
                            width: "230rem",
                       },
                        fontSize: 12,
                    },
                    {
                        wrapperWidth: "167rem",
                        heading: "Fatty acid and sugar metabolism",
                        content:
                            "A gene involved in the process of breaking down fats and sugars and turning them into energy. Related genes: PANK2, G6PD, ACAT1",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "52rem",
                            right: "-25rem",
                            width: "171rem",
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        wrapperWidth: "398rem",
                        heading: "Oxidative phosphorylation and electron transport",
                        content: `A gene involved in the process of generating energy using oxygen (electron transport chain). Related genes: COX4I2, CYC1, SDHB`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "-20rem",
                            right: "34rem",
                            width: "398rem",
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        wrapperWidth: "170rem",
                        heading: "Coenzyme Q synthesis",
                        content: `A gene that produces coenzyme Q (ubiquinone), which helps generate energy in mitochondria. Related genes: COQ2, COQ7`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "137rem",
                            left: "-9rem",
                            width: "182rem",
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
                content1: "Benefits of improving mitochondrial energy production",
                content2: "Disadvantages of reduced mitochondrial energy production",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                commonStyle:{
                    gap: "2rem",
                },
                inCommonStyle:{
                    gap: "1rem",
                    fontSize: 1.4477
                },
                titleStyle:{
                    fontSize: "12rem",
                },
                contentStyle:{
                    fontSize: "9rem",
                    lineHeight:1.444444,
                },

                merit: [
                    {
                        title: "Improved cognitive function",
                        content:
                            "Improved energy supply improves concentration, memory and thinking.",
                    },
                    {
                        title: "Mood stability",
                        content:
                            "By providing sufficient energy, mental stability is maintained and anxiety and depression symptoms are expected to be reduced.",
                    },
                    {
                        title: "Reduce fatigue",
                        content:
                            "Increasing brain energy helps alleviate chronic fatigue and symptoms of brain fog.",
                    },
                    {
                        title: "Improving immunity",
                        content:
                            "It provides energy to immune cells and boosts immunity.",
                            contentStyle:{
                                letterSpacing: "-0.09rem"
                            }
                    },
                    {
                        title: "Improved metabolic function",
                        content:
                            "It improves metabolism, which is important for the body's mechanisms, such as neurotransmitter metabolism, hormone metabolism, and detoxification metabolism, making it easier to exert your true potential.",
                    },
                ],
                demerit: [
                    {
                        title: "ATP deficiency",
                        content:
                            "Since all bodily movement and metabolic activity depends on ATP, this has a negative impact on overall bodily function.",
                    },
                    {
                        title: "Muscle weakness",
                        content:
                            "Lack of energy in muscles leads to decreased strength and reduced exercise tolerance.",
                    },
                    {
                        title: "Cognitive decline",
                        content:
                            "The detoxification process is a vital physiological function, particularly in the liver, which requires energy to detoxify and eliminate harmful substances from the body.",
                    },
                ],
            },
        },
    ]);
    return(<>
    <PageWrapper>
        <PageHeader 
            subtitle={"Mitochondrial Type"}
            mainTitle={"Mitochondrial Type"}>
        </PageHeader>
        <EnhancedMerit />
        <PageNumber>
            16
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
