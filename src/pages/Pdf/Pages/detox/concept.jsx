import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Outline from "../../../../components/Pdf/PagesComponents/Concept/Outline";
import Explanation from "../../../../components/Pdf/PagesComponents/Concept/Explanation";
import Quality from "../../../../components/Pdf/PagesComponents/Concept/Quality";
import { useSelector } from "react-redux";
import { useState } from "react";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";

const Concept = () => {

    const  [maincolor, setMaincolor] = useState(useSelector(state => state.pdfData.detoxColor));
    
    const EnhacedConcept = withPeriodanalyze([
        {Component: PageHeader,
            data:{
                subtitle: "Detox Type",
                mainTitle: "デトックスタイプ"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/detox.png",
                concept: "デトックスタイプは、",
                description: "体内の毒素を排出する、解毒の機能が十分に発揮されにくく、体内に毒素が蓄積しやすい傾向があるタイプです。"
            }
        },
        {Component: Explanation,
            data:{
                question: "デトックスタイプとは",
                answer: "デトックスタイプの人は、解毒力が弱い遺伝子を持っているため、口や鼻から取り込む排気ガスや燃料、殺虫剤、有害重金属などの毒素を効果的に排泄する能力が低下している可能性があります。デトックスに関わる遺伝子の中で、特に弱い部分をサポートすることで、身体的にも精神的にも健康状態が大きく改善されることが期待できます。多くの場合、肝臓や腎臓、腸内での解毒酵素の働きが遺伝的に低下しているため、体内に毒素が蓄積しやすくなり、慢性疲労や肌荒れ、アレルギー、消化不良などの健康問題に悩まされることがよくあります。また、環境の変化に対して不安を感じることがあり、新しい環境に適応する自分を想像するだけで不安が生じることもあります。しかし、解毒機能が整うことで、急に新しいことに挑戦する意欲が湧くことがあり、体の解毒能力が向上すると余力が生まれ、自分でも知らなかった新たな一面に出会う可能性が広がります。",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                description: "デトックスタイプの特性には、以下のような可能性があります。",
                qualities1: [
                    
                    {
                        content:
                            "なにもしていないのに疲れている \n     ことがある",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "肌の調子が崩れやすい",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "アレルギー症状がある",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "気分が落ち込みやすい",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content: "食後にお腹が重く感じる",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "入浴やサウナが好き",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "オーガニック健康食品をよく買う",
                        liStyle: {
                            //liStyle is Option
                        },
                    }
                ], // qualities2: ["瞬発力があり決断が早い", "行動力がある", "目標を立てることが好き", "リーダー気質", "集中力が高い", "依存症になりやすい（ショッピング、ゲーム、ギャンブルなど）"],
                qualities2: [
                    
                    {
                        content:
                            "飛行機や新幹線などにのると疲れが \n     でる",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "ホテルなどに宿泊すると体調を崩し \n     やすい",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "外食すると体調を壊しやすい",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "夜間に目が覚める、トイレに行く",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "薬味がおおい食事を好む",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
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
    return(<>
        <PageWrapper>
            <EnhacedConcept/>
        </PageWrapper>
    </>)
}

export default Concept;
