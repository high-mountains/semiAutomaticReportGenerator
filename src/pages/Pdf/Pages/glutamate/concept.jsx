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
    const  [maincolor, setMaincolor] = useState(useSelector(state => state.pdfData.glutamateColor));

    const EnhacedConcept = withPeriodanalyze([
        {Component: PageHeader,
            data:{
                subtitle: "Catecholamine Type",
                mainTitle: "カテコラミンタイプ"}},
        {Component: Outline,
            data:{
                imageURL: "./bg/Glutamate_Avatar.png",
                concept: "グルタメートタイプは、",
                description: "脳の興奮物質である、グルタミン酸の代謝やその調節がスムーズに行われにくく、脳内にグルタミン酸が多くなりやすい傾向があるタイプです。"
            }
        },
        {Component: Explanation,
            data:{
                question: "グルタメートタイプとは",
                answer: "グルタミン酸は、脳の信号伝達を促進し、学習や記憶の形成に重要な役割を果たしているとされる脳内興奮性神経伝達物質のひとつです。脳のニューロン間のコミュニケーションに深く関与していると考えられており、頭の回転が早く、記憶力の優れた人の多くがこのグルタメートタイプに該当する可能性があります。 \n ただし、グルタミン酸が脳内で過剰に増加すると、リラックスが難しくなり、疲労感を感じやすくなったり、精神的な疾患のリスクが高まることが特徴として挙げられます。 将来的には、脳にかかる負荷が大きくなることで神経変性疾患のリスクが高まる可能性があるため、バランスの取れた食事や適切なストレス管理が重要です。",
                sidebarColor: maincolor
            }
        },
        {Component: Quality,
            data:{
                description: "グルタメートタイプの特性には、以下のような可能性があります",
                qualities1: ["興味のあることに没頭する", "記憶力が良い", "学習欲・知識欲が強い", "繰り返し作業が得意", "リラックスしづらい", "不眠になりやすい", "周囲の雰囲気を気にしない"],
                // qualities2: ["瞬発力があり決断が早い", "行動力がある", "目標を立てることが好き", "リーダー気質", "集中力が高い", "依存症になりやすい（ショッピング、ゲーム、ギャンブルなど）"],
                sidebarColor: maincolor
            }
        },
        {Component: PageNumber,
            data:{
                children: "05"
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
