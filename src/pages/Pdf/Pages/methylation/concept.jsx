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

    const  [maincolor, setMaincolor] = useState(useSelector(state => state.pdfData.methylationColor));
    
    const EnhacedConcept = withPeriodanalyze([
        {Component: PageHeader,
            data:{
                subtitle: "Methylation Type",
                mainTitle: "メチレーションタイプ"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/methylation.png",
                concept: "メチレーションタイプは、",
                description: "体内の必須システムであるメチレーションの機能が低下し、ホルモンのバランスが安定しにくい傾向があるタイプです。"
            }
        },
        {Component: Explanation,
            data:{
                question: "メチレーションタイプとは",
                answer: "メチレーションは、DNAの調節や神経伝達物質の生成など、体内で重要な役割を担う化学反応です。メチレーションが正常に機能していると、心身のバランスが保たれ、感情の安定や精神的な明晰さが維持されると考えられています。 \nしかし、メチレーションが弱い遺伝子を持つ人は、ホルモンバランスの乱れや感受性の強さから精神的なストレスを感じやすいことがあるかもしれません。また、心血管系やがんのリスクも存在しています。このタイプの人は、感情が揺れやすく、気分の変動が特徴的である一方で、創造的な思考や高い感受性が際立つことがあります。そのため、感情や気分の変動に対処するためには、メチレーションをサポートする生活習慣や栄養の摂取が重要です。また、これらの特徴を活かして、芸術やクリエイティブな活動において優れた才能を発揮することも少なくありません。",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                description: "メチレーションタイプの特性には、以下のような可能性があります。",
                qualities1: [
                    
                    {
                        content:
                            "気持ちのアップダウンが激しい",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "エネルギー不足を感じやすい",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "頭がぼんやりする時がある",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    
                ], // qualities2: ["瞬発力があり決断が早い", "行動力がある", "目標を立てることが好き", "リーダー気質", "集中力が高い", "依存症になりやすい（ショッピング、ゲーム、ギャンブルなど）"],
                qualities2: [
                    
                    {
                        content:
                            "ハイポメチレーション： \n     神経伝達物質の代謝が正常に行われ \n     ず、バランスが崩れる。神経伝達物 \n     質の過剰産生や不適切な代謝により \n     感情の乱れ。 \n     免疫系の機能に異常を起こし、自己 \n     免疫疾患や慢性炎症を招きやすい。",
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
                children: "20"
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
