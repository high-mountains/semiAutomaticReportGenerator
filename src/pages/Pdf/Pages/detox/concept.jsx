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

    const  [maincolor, setMaincolor] = useState(useSelector(state => state.pdfData.detoxColor));
    
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    const EnhacedConcept = withPeriodanalyze([
        {Component: PageHeader,
            data:{
                // subtitle: "Detoxification Type",
                mainTitle: "Detoxification Type"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/detox.png",
                concept: "What is Detoxification Type",
                description: "This type of person has difficulty fully utilizing the detoxification function that expels toxins from the body, and toxins tend to accumulate in the body."
            }
        },
        {Component: Explanation,
            data:{
                question: "What is Detoxification Type?",
                answer: "People with detoxification may have a reduced ability to effectively excrete environmental toxins such as exhaust fumes, pesticides, and harmful heavy metals that are taken in through the mouth and nose. Supporting the weaker parts of the genes involved in detoxification can greatly improve physical and mental health. In many cases, the activity of detoxification enzymes in the liver, kidneys, and intestines is genetically reduced, making it easier for toxins to accumulate in the body, and people often suffer from health problems such as chronic fatigue, rough skin, allergies, and indigestion. In addition, people may feel anxious about changes in their environment, and even imagining themselves adapting to a new environment can cause anxiety. However, by improving your detoxification function, you may suddenly feel motivated to try new things, and when your body's detoxification ability improves, you will have more spare energy and the possibility of discovering new sides of yourself that you didn't know existed.",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                description: "Detox type characteristics may include:",
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Be tired even though I haven't done anything</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Skin condition easily deteriorates</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Have allergies</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Feeling depressed easily</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>My stomach feels heavy after eating</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>To like bathing and saunas</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Often buy organic health foods</p>`
                    }
                ],
                qualities2: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>To get tired when I'm on an airplane or bullet train.</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Be prone to getting sick when staying in a hotel.</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Eating out can make you feel sick</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Waking up during the night to go to the toilet</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Prefers food with lots of condiments</p>`
                    }
                ],
                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    fontSize: "12rem",
                    whiteSpace: "pre-wrap",
                },
                ulStyle2: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    fontSize: "12rem",
                    whiteSpace: "pre-wrap",
                },
                sidebarColor: maincolor
            }
        },
        {Component: PageNumber,
            data:{
                children: "17"
            }
        }
    ])
    return(
        <PageWrapper>
            <EnhacedConcept/>
        </PageWrapper>
    )
}

export default Concept;
