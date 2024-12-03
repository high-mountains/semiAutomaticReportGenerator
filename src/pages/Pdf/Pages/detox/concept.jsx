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
                subtitle: "Detoxification Type",
                mainTitle: "デトックスタイプ"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/detox.webp",
                concept: "デトックスタイプは、",
                description: "体内の毒素を排出する、解毒の機能が充分に発揮されにくく、体内に毒素が蓄積しやすい傾向があるタイプです。"
            }
        },
        {Component: Explanation,
            data:{
                question: "デトックスタイプとは",
                answer: "デトックスタイプの人は、口や鼻から取り込む排気ガス、殺虫剤、<span class='blue'>有害重金属</span>などの<span class='bold'>環境毒を効果的に排泄する能力</span>が低下している可能性があります。デトックスに関わる遺伝子の中で、特に弱い部分をサポートすることで、身体的にも精神的にも健康状態が大きく改善されることが期待できます。多くの場合、肝臓や腎臓、腸内での<span class='bold'>解毒酵素の働き</span>が遺伝的に低下しているため、体内に毒素が蓄積しやすくなり、慢性疲労や肌荒れ、アレルギー、消化不良などの健康問題に悩まされることがよくあります。また、環境の変化に対して不安を感じることがあり、新しい環境に適応する自分を想像するだけで不安が生じることもあります。しかし、解毒機能が整うことで、急に<span class='bold'>新しいことに挑戦する意欲</span>が湧くことがあり、体の解毒能力が向上すると余力が生まれ、自分でも知らなかった新たな一面に出会う可能性が広がります。",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                description: "デトックスタイプの特性には、以下のような可能性があります。",
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>なにもしていないのに疲れている</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>肌の調子が崩れやすい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>アレルギー症状がある</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>気分が落ち込みやすい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>食後にお腹が重く感じる</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>入浴やサウナが好き</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>オーガニック健康食品をよく買う</p>`
                    }
                ],
                qualities2: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>飛行機や新幹線などにのると疲れが\nでる</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>ホテルなどに宿泊すると体調を崩し\nやすい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>外食すると体調を壊しやすい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>夜間に目が覚める、トイレに行く</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>薬味がおおい食事を好む</p>`
                    }
                ],
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
