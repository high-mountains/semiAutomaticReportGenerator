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
                subtitle: "Histamine Type",
                mainTitle: "ヒスタミンタイプ"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/histamine.webp",
                concept: "ヒスタミンタイプは、",
                description: "アレルギー症状にも深く関わっているヒスタミンの代謝やその調節がスムーズに行われにくく、脳内にヒスタミンが多くなりやすい傾向があるタイプです。"
            }
        },
        {Component: Explanation,
            data:{
                question: "ヒスタミンタイプとは",
                answer: "ヒスタミンは、脳内で情報を伝達する神経伝達物質として働き、私たちが目を覚まし、集中力を高め、<span class='bold'>学習</span>や<span class='bold'>記憶力</span>を促進する役割を担っています。\nしかし、ヒスタミンが過剰になると、不安感や頭痛を引き起こしたり、夜眠れなくなることがあります。また、ヒスタミンは<span class='bold'>アレルギー反応</span>にも関与しており、花粉症や虫刺されの際に鼻水が出たり、かゆみが生じるのは、体内でヒスタミンが働いているためです。 \n ヒスタミンが多すぎる場合、<span class='bold'>アレルギー症状</span>が悪化し、<span class='bold'>皮膚</span>や<span class='bold'>呼吸</span>器に問題が生じやすくなることもあります。さらに、ヒスタミンは<span class='bold'>消化器</span>にも影響を与え、特に胃で胃酸を増加させることで食べ物の消化を助けます。しかし、過剰なヒスタミンが原因で胃酸が過剰分泌されると、<span class='bold'>胃痛</span>や<span class='bold'>胃炎</span>、さらには<span class='bold'>胃潰瘍</span>などの問題が発生することがあります。",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                // wrapperWidth: "535rem",   //This is blocked as 535 is default value
                sidebarColor: maincolor,
                description: "ヒスタミンタイプの特性には、以下のような可能性があります。",
                qualities1: [
                    
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>細かく正確性の求められるタスクに\n向いている</p>`
                        // content:
                        //     "細かく正確性の求められるタスクに\n     向いている"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>ルーティンワークが得意</p>`
                        // content:
                        //     "ルーティンワークが得意"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>部屋が綺麗</p>`
                        // content:
                        //     "部屋が綺麗"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>集中力や記憶力が高い</p>`
                        // content:
                        //     "集中力や記憶力が高い"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>何事にも慎重なタイプ</p>`
                        // content: 
                        //     "何事にも慎重なタイプ"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>士業に向いている</p>`
                        // content:
                        //     "士業に向いている"
                    },
                ],
                qualities2: [
                    
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>肌荒れやアレルギーに悩む</p>`
                        // content:
                        //     "肌荒れやアレルギーに悩む"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>頭痛がしやすい</p>`
                        // content:
                        //     "頭痛がしやすい"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>騒がしい場所が苦手</p>`
                        // content:
                        //     "騒がしい場所が苦手"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>胃腸が痛くなりやすい</p>`
                        // content:
                        //     "胃腸が痛くなりやすい"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>偏食になりやすい</p>`
                        // content:
                        //     "偏食になりやすい"
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>不安や感覚過敏に悩む</p>`
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
