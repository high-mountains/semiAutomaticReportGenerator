import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Outline from "../../../../components/Pdf/PagesComponents/Concept/Outline";
import Explanation from "../../../../components/Pdf/PagesComponents/Concept/Explanation";
import Quality from "../../../../components/Pdf/PagesComponents/Concept/Quality";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";

const Concept = () => {
    const [maincolor, setMaincolor] = useState(
        useSelector((state) => state.pdfData.catecholamineColor)
    );

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    const EnhacedConcept = withPeriodanalyze([
        {
            Component: PageHeader,
            data: {
                subtitle: "Catecholamine Type",
                mainTitle: "カテコラミンタイプ"
            },
        },
        {
            Component: Outline,
            data: {
                imageURL: "./bg/catecholamine.webp",
                concept: "カテコラミンタイプは、",
                description:
                    "脳の興奮物質である、カテコラミンの代謝やその調節がスムーズに行われにくく、脳内にカテコラミンが多くなりやすい傾向があるタイプです。"
            },
        },
        {
            Component: Explanation,
            data: {
                question: "カテコラミンタイプとは",
                answer: "カテコラミンとは、<span class='blue'>アドレナリン、ノルアドレナリン、ドーパミン</span>という3つの神経伝達物質を指し、私たちが<span class='bold'>集中力</span>を高めたり、<span class='bold'>やる気</span>を出したりするときに重要な役割を果たしています。 \n しかし、カテコラミンが脳内や体内で過剰になると、<span class='bold'>イライラ</span>しやすくなったり、<span class='bold'>不安</span>感を感じたり、<span class='bold'>夜に眠れなくなること</span>があるかもしれません。そのため、カテコラミンのバランスを保つことが心と体の健康において非常に重要です。適切なレベルを維持することで、集中力やモチベーションを高めつつ、心の安定を図り、リラックスした状態で日々を過ごすことができます。心と体のバランスを意識しながら、自分の特性を理解し、カテコラミンの働きを考慮した生活を整えることが、健やかな毎日を送るための鍵となります。 将来的には、脳にかかる負荷が大きくなることで神経変性疾患のリスクが高まる可能性があるため、バランスの取れた食事や適切なストレス管理が重要です。",
                sidebarColor: maincolor
            },
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
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>集中力が高い</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>行動力がある</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>瞬発力があり決断が早い</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>目標を立てることが好き</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>リーダー気質</p>`
                    },
                ],
                qualities2: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>イライラしやすい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>気分の浮き沈みが激しい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>不眠になりやすい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>依存症になりやすい（ショッピン\nグ、ゲーム、ギャンブルなど）</p>`
                    },
                ],
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "08"
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
