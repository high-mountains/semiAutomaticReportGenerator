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
    const  [maincolor, setMaincolor] = useState(useSelector(state => state.pdfData.mitochodrialColor));
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);
    const EnhacedConcept = withPeriodanalyze([
        {Component: PageHeader,
            data:{
                // subtitle: "Mitochondrial Type",
                mainTitle: "Mitochondrial Type"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/mitochondrial.png",
                concept: "What is Mitochondrial Type",
                description: "This type of disease is characterized by a lack of adequate mitochondrial function to generate energy for the body, and a tendency for the body's energy-producing ability to decline."
            }
        },
        {Component: Explanation,
            data:{
                question: "What is Mitochondrial Type?",
                answer: "Mitochondria function as 'energy factories' that produce energy within cells, generating ATP (adenosine triphosphate) to support cellular activity in the body. If mitochondria are functioning properly, they can perform at an amazingly high level. However, if mitochondria are not functioning properly, you may become tired easily on a daily basis, recover from fatigue more slowly, and experience symptoms called 'brain fog,' such as decreased concentration, memory loss, and slower thinking. In addition, a decrease in energy metabolism can lead to problems such as weight gain, fatty liver, and abnormal blood sugar levels, so caution is required.",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                description: "Mitochondrial type characteristics may include:",
                qualities1: [
                    
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>To have a hard time getting up in the morning and my body feels heavy.</p>`
                        // content:
                        //     "朝起きるのがつらかったり、体が重\n     く感じる",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Always get sleepy in the evening</p>`
                        // content:
                        //     "夕方になるといつも眠くなる",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Not actively exercising</p>`
                        // content:
                        //     "積極的に運動をしない",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>My head feels fuzzy</p>`
                        // content: 
                        //     "頭がぼんやりしてしまう",
                    },
                ],                    
                qualities2: [
                    
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Difficulty controlling weight</p>`
                        // content:
                        //     "体重のコントロールがしづらい",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Tendency to overeat</p>`
                        // content:
                        //     "過食気味になりやすい",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Catching colds easily</p>`
                        // content:
                        //     "風邪を引きやすい",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Long Sleeper</p>`
                        // content:
                        //     "ロングスリーパー",
                    },
                ], 
                sidebarColor: maincolor,
            }
        },
        {Component: PageNumber,
            data:{
                children: "14"
            }
        }
    ])
    return(<>
        <PageWrapper>
            <EnhacedConcept/>
        </PageWrapper>
    </>)
}

export default Concept;
