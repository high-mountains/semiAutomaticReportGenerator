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

    const  [maincolor, setMaincolor] = useState(useSelector(state => state.pdfData.mitochodrialColor));
    
    const EnhacedConcept = withPeriodanalyze([
        {Component: PageHeader,
            data:{
                subtitle: "Mitochondrial Type",
                mainTitle: "ミトコンドリアタイプ"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/mitochondrial.png",
                concept: "ミトコンドリアタイプは、",
                description: "体のエネルギーを生成するミトコンドリアの機能が十分に発揮されにくく、エネルギーを作る機能が低下しやすい傾向があるタイプです。"
            }
        },
        {Component: Explanation,
            data:{
                question: "ミトコンドリアタイプとは",
                answer: "ミトコンドリアは、細胞内でエネルギーを生産する「エネルギー工場」として機能し、ATP（アデノシン三リン酸）を生成して体内の細胞活動を支えています。 \nミトコンドリアが適切に機能していると、驚くほど高いパフォーマンスを発揮することができるタイプです。 \nしかし、ミトコンドリアの機能が十分でない場合、日常的に疲れやすく、疲労からの回復が遅くなることがあり、集中力の低下や記憶力の減退、思考の鈍化といった「Brain Fog（脳の霧）」と呼ばれる症状が現れる可能性があります。また、エネルギー代謝機能の低下により、体重の増加、脂肪肝、血糖値の異常といった問題が生じやすくなるため、注意が必要です。",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                description: "ミトコンドリアタイプの特性には、以下のような可能性があります。",
                qualities1: [
                    
                    {
                        content:
                            "夕方になるといつも眠くなる",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "朝起きるのがつらかったり、 \n     体が重く感じる",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "積極的に運動をしない",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "頭がぼんやりしてしまう",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content: "体重のコントロールがしづらい",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "過食気味になりやすい",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "風邪を引きやすい",
                        liStyle: {
                            //liStyle is Option
                        },
                    }
                ], // qualities2: ["瞬発力があり決断が早い", "行動力がある", "目標を立てることが好き", "リーダー気質", "集中力が高い", "依存症になりやすい（ショッピング、ゲーム、ギャンブルなど）"],
                qualities2: [
                    
                    {
                        content:
                            "ロングスリーパー",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                ], 
                sidebarColor: maincolor,
                // className: "leading-[1.4478]"
            }
        },
        {Component: PageNumber,
            data:{
                children: "15"
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
