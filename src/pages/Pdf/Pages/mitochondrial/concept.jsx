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
                answer: "ミトコンドリアは、細胞内でエネルギーを生産する「<span class='bold'>エネルギー工場</span>」として機能し、<span class='blue'>ATP（アデノシン三リン酸）</span>を生成して体内の細胞活動を支えています。 \nミトコンドリアが適切に機能していると、驚くほど高いパフォーマンスを発揮することができるタイプです。 \nしかし、ミトコンドリアの機能が十分でない場合、<span class='bold'>日常的に疲れやすく</span>、疲労からの回復が遅くなることがあり、集中力の低下や記憶力の減退、思考の鈍化といった「Brain Fog（脳の霧）」と呼ばれる症状が現れる可能性があります。また、<span class='bold'>エネルギー代謝機能の低下</span>により、体重の増加、脂肪肝、血糖値の異常といった問題が生じやすくなるため、注意が必要です。",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                description: "ミトコンドリアタイプの特性には、以下のような可能性があります。",
                qualities1: [
                    
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>朝起きるのがつらかったり、体が重\nく感じる</p>`
                        // content:
                        //     "朝起きるのがつらかったり、体が重\n     く感じる",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>夕方になるといつも眠くなる</p>`
                        // content:
                        //     "夕方になるといつも眠くなる",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>積極的に運動をしない</p>`
                        // content:
                        //     "積極的に運動をしない",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>頭がぼんやりしてしまう</p>`
                        // content: 
                        //     "頭がぼんやりしてしまう",
                    },
                ],                    
                qualities2: [
                    
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>体重のコントロールがしづらい</p>`
                        // content:
                        //     "体重のコントロールがしづらい",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>過食気味になりやすい</p>`
                        // content:
                        //     "過食気味になりやすい",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>風邪を引きやすい</p>`
                        // content:
                        //     "風邪を引きやすい",
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>ロングスリーパー</p>`
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
