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
        useSelector((state) => state.pdfData.glutamateColor)
    );

    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "525",
                height: "300",
                imageURL: "bg/abilityGlutamate.svg",
                contentFontSize: "12rem",  
                descriptions: [
                    {
                        wrapperWidth: "240rem",  
                        heading: "GABA (γ-aminobutyric acid) metabolism",
                        content:
                            "It converts glutamate into GABA, and regulates brain excitation through \ninhibition of neurotransmission. \nRelated genes: GAD1, GABRA1,\n GABRA2, GABRG2, ALDH5A1",
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
                        heading: "Glutamate Metabolism",
                        content:
                            "It converts and regenerates\nglutamate for use in energy \nproduction and neurotransmission, supporting brain function and cellular metabolic activity. Related genes: GLS2, GLUL, GLUD1, SLC1A1s",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "11rem",
                            left: "0rem",
                            width: "240rem",
                        },
                        etcClassName: "",
                        fontSize: 12,
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "Regulation of glutamate metabolism",
                        content:
                            "It regulates glutamate levels, prevents\n                  excessive neuroexcitation, and\n                       maintains chemical balance in the \n                           brain. Related genes: DAO,  \n                                 DAOA",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            right: "0rem",
                            width: "240rem"
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "                    Homocysteine \n                    ​​metabolism",
                        content: `                    It converts homocysteine ​​into other \n             substances and supports the balance \n    of sulfur-containing amino acids in the body and the methylation process. Related genes: CBS, CTH`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "5rem",
                            right: "0rem",
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
                content1: "The benefits of having a lot of glutamate in the brain",
                content2: "The downsides of having too much glutamate in the brain",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                merit: [
                    {
                        title: "Improved memory",
                        content:
                            "Glutamate increases <span class='blue'>synaptic plasticity</span>, strengthening both short-term and long-term memory.",
                    },
                    {
                        title: "Improve learning ability",
                        content:
                            "It contributes to the formation and strengthening of neural networks necessary for learning.",
                    },
                    {
                        title: "Improved concentration",
                        content:
                            "Glutamate increases attention and improves the speed of information processing.",
                    },
                ],
                demerit: [
                    {
                        title: "Overstimulation of nerve cells",
                        content:
                            "Excessive secretion of glutamate can cause hyperexcitation of nerve cells and ultimately cell death (excitotoxicity).",
                    },
                    {
                        title: "Risk of neurodegenerative diseases",
                        content:
                            "Over the long term, excess glutamate can increase the risk of neurodegenerative diseases such as Alzheimer's and Parkinson's.",
                    },
                    {
                        title: "Mental health issues",
                        content:
                            "It can contribute to worsening mental health problems such as anxiety, stress, and depression.",
                    },
                ],
            },
        },
    ]);

    return (
        <>
            <PageWrapper>
                <PageHeader
                    // subtitle={"Glutamate Type"}
                    mainTitle={"Glutamate Type"}
                />
                <EnhancedMerit />
                <PageNumber>07</PageNumber>
            </PageWrapper>
        </>
    );
};

export default Merit;
