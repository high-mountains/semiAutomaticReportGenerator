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
        useSelector((state) => state.pdfData.methylationColor)
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
                subtitle: "Methylation Type",
                mainTitle: "メチレーションタイプ"
            }
        },
        {
            Component: Outline,
            data: {
                imageURL: "./bg/methylation.webp",
                concept: "メチレーションタイプは、",
                description:
                    "体内の必須システムであるメチレーションの機能が低下し、ホルモンのバランスが安定しにくい傾向があるタイプです。"
            }
        },
        {
            Component: Explanation,
            data: {
                question: "メチレーションタイプとは",
                answer: "メチレーションは、<span class='blue'>DNAの調節</span>や<span class='bold'>神経伝達物質</span>の生成など、体内で重要な役割を担う化学反応です。メチレーションが正常に機能していると、心身のバランスが保たれ、感情の安定や精神的な明晰さが維持されると考えられています。\nしかし、メチレーションが弱い遺伝子を持つ人は、ホルモンバランスの乱れや感受性の強さから<span class='bold'>精神的なストレス</span>を感じやすいことがあるかもしれません。また、<span class='bold'>心血管系</span>や<span class='bold'>がん</span>のリスクも存在しています。このタイプの人は、感情が揺れやすく、気分の変動が特徴的である一方で、<span class='bold'>創造的な思考</span>や<span class='bold'>高い感受性</span>が際立つことがあります。そのため、感情や気分の変動に対処するためには、メチレーションをサポートする生活習慣や栄養の摂取が重要です。また、これらの特徴を活かして、<span class='bold'>芸術</span>や<span class='bold'>クリエイティブな活動</span>において優れた才能を発揮することも少なくありません。",
                sidebarColor: maincolor,
            }
        },
        {
            Component: Quality,
            data: {
                description:
                    "メチレーションタイプの特性には、以下のような可能性があります。",
                qualities1: [ //7rem is for browsing, 14rem is for pdf(true)
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>気持ちのアップダウンが激しい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>エネルギー不足を感じやすい</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>頭がぼんやりする時がある</p>`
                    }
                ],
                qualities2: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>緊張やストレスに弱い</p>`
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-top: ${ renderedPdfFlag ? '14' : '7' }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>睡眠の質が下がっていて熟睡できな\nいと感じる</p>`
                    }
                ],
                sidebarColor: maincolor,
                liClassName: "whitespace-pre-wrap flex"
            }
        },
        {
            Component: PageNumber,
            data: {
                children: "20"
            }
        },
    ]);
    return (
        <>
            <PageWrapper>
                <EnhacedConcept />
            </PageWrapper>
        </>
    );
};

export default Concept;
