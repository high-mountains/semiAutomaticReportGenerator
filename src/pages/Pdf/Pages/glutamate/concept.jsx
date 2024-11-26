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
    const [maincolor, setMaincolor] = useState(
        useSelector((state) => state.pdfData.glutamateColor)
    );

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
        console.log("pdfFlag===>", pdfFlag);
    }, [pdfFlag]);

    const EnhacedConcept = withPeriodanalyze([
        {
            Component: PageHeader,
            data: {
                subtitle: "Glutamate Type",
                mainTitle: "グルタメートタイプ"
            }
        },
        {
            Component: Outline,
            data: {
                imageURL: "./bg/Glutamate_Avatar.png",
                concept:
                    "<span style='color: #007AFF;'>グルタメート</span>タイプは、",
                description:
                    "脳の興奮物質である、<span class='blue'>グルタミン酸</span>の代謝やその調節がスムーズに行われにくく、脳内にグルタミン酸が多くなりやすい傾向があるタイプです。"
            }
        },
        {
            Component: Explanation,
            data: {
                question: "グルタメートタイプとは",
                answer: "グルタミン酸は、脳の信号伝達を促進し、学習や記憶の形成に重要な役割を果たしているとされる脳内興奮性神経伝達物質のひとつです。脳の<span style='color: #007AFF;'>ニューロン</span>間のコミュニケーションに深く関与していると考えられており、頭の回転が早く、記憶力の優れた人の多くがこのグルタメートタイプに該当する可能性があります。 \n ただし、グルタミン酸が脳内で過剰に増加すると、リラックスが難しくなり、疲労感を感じやすくなったり、精神的な疾患のリスクが高まることが特徴として挙げられます。 将来的には、脳にかかる負荷が大きくなることで<span class='blue'>神経変性疾患</span>のリスクが高まる可能性があるため、バランスの取れた食事や適切なストレス管理が重要です。",
                sidebarColor: maincolor
            }
        },
        {
            Component: Quality,
            data: {
                wrapperWidth: "535rem",
                sidebarColor: maincolor,
                description:
                    "カテコラミンタイプの特性には、以下のような可能性があります。",
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>学習欲や知識欲が強い</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>興味のあることに没頭する</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>記憶力が良い</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>頭の回転が早い天才タイプ</p>`
                    }
                ],
                qualities2: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>リラックスしづらい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>不眠になりやすい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>周囲の雰囲気を気にしない</p>`
                    }
                ],
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "05"
            }
        },
    ]);
    return (
            <PageWrapper>
                <EnhacedConcept />
            </PageWrapper>
    );
};

export default Concept;
