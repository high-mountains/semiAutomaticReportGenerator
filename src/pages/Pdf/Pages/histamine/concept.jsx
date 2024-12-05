import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Outline from "../../../../components/Pdf/PagesComponents/Concept/Outline";
import Explanation from "../../../../components/Pdf/PagesComponents/Concept/Explanation";
import Quality from "../../../../components/Pdf/PagesComponents/Concept/Quality";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";

const Concept = () => {

    const  [maincolor, setMaincolor] = useState(useSelector(state => state.pdfData.histamineColor));
    
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    const EnhacedConcept = withPeriodanalyze([
        {Component: PageHeader,
            data:{
                // subtitle: "Histamine Type",
                mainTitle: "Histamine Type"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/histamine.png",
                concept: "What is Histamine",
                description: "This type of person has difficulty smoothly regulating and metabolizing histamine, which is deeply involved in allergic symptoms, and tends to have a lot of histamine in the brain."
            }
        },
        {Component: Explanation,
            data:{
                question: "What is Histamine?",
                answer: "Histamine acts as a neurotransmitter in the brain, helping us wake up, improve our focus, and promote learning and memory. However, too much histamine can cause anxiety, headaches, and keep you up at night. Histamine is also involved in allergic reactions, and it's histamine in the body that causes runny noses and itching during hay fever and insect bites. Too much histamine can worsen allergy symptoms and make you more susceptible to skin and respiratory problems. Additionally, histamine also affects the <span class='bold'>digestive system</span>, especially in the stomach, where it helps digest food by increasing gastric acid. However, excess histamine can lead to overproduction of stomach acid, which can lead to problems like <span class='bold'>stomach pain</span>, <span class='bold'>gastritis</span>, and even <span class='bold'>stomach ulcers</span>.",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                // wrapperWidth: "535rem",   //This is blocked as 535 is default value
                sidebarColor: maincolor,
                description: "Histamine-type properties may include:",
                qualities1: [
                    
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Suitable for tasks that require precision and accuracy</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Good at routine work</p>`
                        // content:
                        //     "ルーティンワークが得意"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>The room was clean.</p>`
                        // content:
                        //     "部屋が綺麗"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Good concentration and memory</p>`
                        // content:
                        //     "集中力や記憶力が高い"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>The type who is cautious about everything</p>`
                        // content: 
                        //     "何事にも慎重なタイプ"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Suitable for professional</p>`
                        // content:
                        //     "士業に向いている"
                    },
                ],
                qualities2: [
                    
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Suffer from rough skin or allergies</p>`
                        // content:
                        //     "肌荒れやアレルギーに悩む"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Sudden headaches</p>`
                        // content:
                        //     "頭痛がしやすい"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Don't like noisy places</p>`
                        // content:
                        //     "騒がしい場所が苦手"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Stomach and intestines easily hurt</p>`
                        // content:
                        //     "胃腸が痛くなりやすい"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Tends to be picky eaters</p>`
                        // content:
                        //     "偏食になりやすい"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Suffer from anxiety or sensory sensitivity</p>`
                        // content:
                        //     "不安や感覚過敏に悩む"
                    },
                ], 
                sidebarColor: maincolor
            }
        },
        {Component: PageNumber,
            data:{
                children: "11"
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
