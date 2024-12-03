import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Outline from "../../../../components/Pdf/PagesComponents/Concept/Outline";
import Explanation from "../../../../components/Pdf/PagesComponents/Concept/Explanation";
import Quality from "../../../../components/Pdf/PagesComponents/Concept/Quality";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";

const Concept = () => {
    const [maincolor, setMaincolor] = useState(
        useSelector((state) => state.pdfData.glutamateColor)
    );

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    const EnhacedConcept = withPeriodanalyze([
        {
            Component: PageHeader,
            data: {
                // subtitle: "Glutamate Type",
                mainTitle: "Glutamate Type"
            }
        },
        {
            Component: Outline,
            data: {
                imageURL: "./bg/Glutamate_Avatar.png",
                concept:
                    "<span style='color: #007AFF;'>Glutamate</span>Type is",
                description:
                    "This type of disorder makes it difficult for the metabolism and regulation of glutamate, a stimulant substance in the brain, to function smoothly, and tends to have an excess of glutamate in the brain."
            }
        },
        {
            Component: Explanation,
            data: {
                question: "What is Glutamate Type",
                answer: "Glutamate is one of the excitatory neurotransmitters in the brain that is said to promote signal transmission in the brain and play an important role in learning and memory formation. It is thought to be deeply involved in communication between the brain's <span style='color: #007AFF;'>neurons</span>, and many people with quick minds and excellent memories may belong to this glutamate type. However, if glutamate increases excessively in the brain, it becomes difficult to relax, people tend to feel fatigued, and the risk of mental illness increases. In the future, the increased strain on the brain may increase the risk of neurodegenerative diseases, so a balanced diet and proper stress management are important.",
                sidebarColor: maincolor
            }
        },
        {
            Component: Quality,
            data: {
                wrapperWidth: "535rem",
                sidebarColor: maincolor,
                description:
                    "Catecholamine-type properties may include the following:",
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Strong desire to learn and have knowledge</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Immerse yourself in things that interest you</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Good memory</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Quick-witted genius type</p>`
                    }
                ],
                qualities2: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Difficulty relaxing</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Prone to insomnia</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Not paying attention to the surroundings</p>`
                    }
                ],
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "05"
            }
        },
    ]);
    return (
            <PageWrapper>
                <EnhacedConcept />
            </PageWrapper>
    );
};

export default Concept;
