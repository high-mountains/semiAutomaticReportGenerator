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
        useSelector((state) => state.pdfData.methylationColor)
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
                subtitle: "Methylation Type",
                mainTitle: "Methylation Type"
            }
        },
        {
            Component: Outline,
            data: {
                imageURL: "./bg/methylation.png",
                concept: "The Methylation Type is characterized by",
                description:
                    "a tendency for reduced methylation function, which is an essential system in the body, making it challenging to maintain hormonal balance."
            }
        },
        {
            Component: Explanation,
            data: {
                question: "What is the Methylation Type?",
                answer: "Methylation is a chemical reaction that plays a crucial role in the body, including <span class='blue'>DNA regulation</span> and <span class='bold'>neurotransmitter production</span>. When methylation functions normally, mental and physical balance is maintained, contributing to emotional stability and mental clarity.\nHowever, individuals with genes associated with weaker methylation may experience hormonal imbalances and increased sensitivity, leading to <span class='bold'>mental stress</span>. Additionally, there may be risks associated with the <span class='bold'>cardiovascular system</span> and <span class='bold'>cancer</span>. This type of person may experience frequent mood swings and high emotional sensitivity, which can also highlight strengths such as <span class='bold'>creative thinking</span> and <span class='bold'>strong sensitivity</span>. To manage emotional fluctuations, supporting methylation through lifestyle habits and nutrition is essential. Leveraging these traits, individuals often excel in <span class='bold'>artistic</span> or <span class='bold'>creative activities</span>.",
                sidebarColor: maincolor,
            }
        },
        {
            Component: Quality,
            data: {
                description:
                    "Characteristics of the Methylation Type may include the following:",
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Frequent mood swings</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Prone to feeling low energy</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Occasionally experiences mental fog</p>`
                    }
                ],
                qualities2: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>More sensitive to tension and stress</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Poor sleep quality, often feels unrested</p>`
                    }
                ],
                sidebarColor: maincolor,
                liClassName: "whitespace-pre-wrap flex"
            }
        },
        {
            Component: PageNumber,
            data: {
                children: "20"
            }
        },
    ]);
    return (
        <>
            <PageWrapper>
                <EnhacedConcept />
            </PageWrapper>
        </>
    );
};

export default Concept;
