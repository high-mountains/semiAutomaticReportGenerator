import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Outline from "../../../../components/Pdf/PagesComponents/Concept/Outline";
import Explanation from "../../../../components/Pdf/PagesComponents/Concept/Explanation";
import Quality from "../../../../components/Pdf/PagesComponents/Concept/Quality";
import { useState } from "react";
import { useSelector } from "react-redux";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";

const Concept = () => {

    const  [maincolor, setMaincolor] = useState(useSelector(state => state.pdfData.catecholamineColor));
    
    const EnhacedConcept = withPeriodanalyze([
        {Component: PageHeader,
            data:{
                subtitle: "Catecholamine Type",
                mainTitle: "カテコラミンタイプ"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/catecholamine.png",
                concept: "カテコラミンタイプは",
                description: "脳の興奮物質である、カテコラミンの代謝やその調節がスムーズに行われにくく、脳内にカテコラミンが多くなりやすい傾向があるタイプです。"
            }
        },
        {Component: Explanation,
            data:{
                question: "カテコラミンタイプとは",
                answer: "カテコラミンとは、アドレナリン、ノルアドレナリン、ドーパミンという3つの神経伝達物質を指し、私たちが集中力を高めたり、やる気を出したりするときに重要な役割を果たしています。 \n しかし、カテコラミンが脳内や体内で過剰になると、イライラしやすくなったり、不安感を感じたり、夜に眠れなくなることがあるかもしれません。そのため、カテコラミンのバランスを保つことが心と体の健康において非常に重要です。適切なレベルを維持することで、集中力やモチベーションを高めつつ、心の安定を図り、リラックスした状態で日々を過ごすことができます。心と体のバランスを意識しながら、自分の特性を理解し、カテコラミンの働きを考慮した生活を整えることが、健やかな毎日を送るための鍵となります。 将来的には、脳にかかる負荷が大きくなることで神経変性疾患のリスクが高まる可能性があるため、バランスの取れた食事や適切なストレス管理が重要です。",
                sidebarColor: maincolor
            }
        },
        // {Component: Quality,
        //     data:{
        //         description: "カテコラミンタイプの特性には、以下のような可能性があります。",
        //         qualities1: ["瞬発力があり決断が早い", "行動力がある", "目標を立てることが好き", "リーダー気質", "集中力が高い", "依存症になりやすい（ショッピング、ゲーム、ギャンブルなど）"],
        //         qualities2: ["瞬発力があり決断が早い", "行動力がある", "目標を立てることが好き", "リーダー気質", "集中力が高い", "依存症になりやすい（ショッピング、ゲーム、ギャンブルなど）"],
        //         sidebarColor: maincolor
        //     }
        // },
        {Component: Quality,
            data:{
                wrapperWidth: "535rem",
                sidebarColor: maincolor,
                description: "カテコラミンタイプの特性には、以下のような可能性があります。",
                qualities1: [
                    
                    {
                        content:
                            "瞬発力があり決断が早い",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "行動力がある",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "目標を立てることが好き",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "リーダー気質",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content: "集中力が高い",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "依存症になりやすい（ショッピン \n     グ、ゲーム、ギャンブルなど）",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                ], // qualities2: ["瞬発力があり決断が早い", "行動力がある", "目標を立てることが好き", "リーダー気質", "集中力が高い", "依存症になりやすい（ショッピング、ゲーム、ギャンブルなど）"],
                qualities2: [
                    
                    {
                        content:
                            "瞬発力があり決断が早い",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "行動力がある",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "目標を立てることが好き",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "リーダー気質",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content: "集中力が高い",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "依存症になりやすい（ショッピン \n     グ、ゲーム、ギャンブルなど）",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                ],
                ulStyle1: {
                    // display: "flex",
                    // flexDirection: "column"
                    // lineHeight: ""
                    // paddingLeft: "21.5rem"
                }
            }
        },
        {Component: PageNumber,
            data:{
                children: "08"
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
