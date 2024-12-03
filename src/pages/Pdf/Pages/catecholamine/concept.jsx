import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Outline from "../../../../components/Pdf/PagesComponents/Concept/Outline";
import Explanation from "../../../../components/Pdf/PagesComponents/Concept/Explanation";
import Quality from "../../../../components/Pdf/PagesComponents/Concept/Quality";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";

const Concept = () => {
    const [maincolor, setMaincolor] = useState(
        useSelector((state) => state.pdfData.catecholamineColor)
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
                // subtitle: "Catecholamine Type",
                mainTitle: "Catecholamine Type"
            },
        },
        {
            Component: Outline,
            data: {
                imageURL: "./bg/catecholamine.png",
                concept: "Catecholamine Type is",
                description:
"This type of disorder is characterized by a tendency for the brain to accumulate too much catecholamine, a stimulant substance in the brain, as the metabolism and regulation of catecholamines is not carried out smoothly."
            },
        },
        {
            Component: Explanation,
            data: {
                question: "What is the catecholamine type?",
                answer: "Catecholamines are three neurotransmitters called adrenaline, noradrenaline, and dopamine, which play an important role in increasing our concentration and motivation. However, if there is an excess of catecholamines in the brain or body, you may become easily irritated, feel anxious, or have trouble sleeping at night. Therefore, maintaining a balance of catecholamines is very important for mental and physical health. By maintaining an appropriate level, you can increase your concentration and motivation, stabilize your mind, and spend your days in a relaxed state. Being aware of the balance between your mind and body, understanding your own characteristics, and adjusting your lifestyle to take into account the function of catecholamines is the key to living a healthy life. In the future, the increased strain on the brain may increase the risk of neurodegenerative diseases, so a balanced diet and proper stress management are important.",
                sidebarColor: maincolor
            },
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
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>High concentration</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Proactive</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Resilient and quick to make decisions</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>I like setting goals</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Leadership</p>`
                    },
                ],
                qualities2: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Irritability</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Mood swings</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Tend to get insomnia</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Prone to addiction (shopping, games, gambling, etc.)</p>`
                    },
                ],
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "08"
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
