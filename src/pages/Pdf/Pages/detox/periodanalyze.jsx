import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(
        useSelector((state) => state.pdfData.detoxColor)
    );
    const EnhancedPeriodanalyze = withPeriodanalyze([
        {
            Component: PageHeader,
            data: {
                subtitle: "Detox Type",
                mainTitle: "デトックスタイプ",
            },
        },
        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "デトックスタイプの子どもは、消化器系が敏感であり、食べ物や環境の変化に対して体が過剰に反応しやすい傾向があります。解毒機能が未発達であるため、環境毒素に対する感受性が高く、これが発育や行動に影響を与える可能性があります。また、アレルギーやアトピーのリスクも高まることが考えられます。遺伝的に特定の毒素、例えば化学物質やカビ毒などに対して敏感で、そのような場所を嫌がることがあり、本人や周囲の人がその理由を理解できない場合、臆病だと思われてしまうこともあるかもしれません。",
                secondSenctences:
                    "ホルモンバランスの変化により、肌荒れやアレルギー反応が強くなる可能性があります。この時期は心の変化も激しく、ストレスを感じやすい傾向があります。ホルモンの変動によって解毒能力が変化しやすく、食生活や生活環境の影響を受けやすい時期でもあり、不安定な精神状態や肌トラブルが現れることがあるかもしれません。第二次成長期には、エストロゲン、テストステロン、成長ホルモンなどの主要なホルモンの代謝産物が体内に蓄積しやすくなり、ホルモンバランスが乱れ、それが成長や発達に影響を与える可能性があります。さらに、プラスチック製品などから取り込まれる環境ホルモンが体内に入ることで、解毒の負担が増えることが考えられます。特に徹夜や夜型の生活が続くと、肝臓の解毒能力が低下しやすくなり、思春期の夜型生活が解毒機能の悪化を引き起こす要因となることがあるため、注意が必要です。",
                thirdSenctences:
                    "ストレスや生活習慣が解毒能力に大きな影響を与える時期であり、仕事や家庭のストレスが肝臓の解毒能力を低下させ、慢性的な疲労や消化器系のトラブルを引き起こしたり、再発させる可能性があります。さらに、飲酒や喫煙、薬物の使用によって肝臓への負担が増え、代謝産物が体内に蓄積しやすくなる時期でもあります。このような状態は「リバーストレス（Liver Stress）」とも呼ばれ、肝臓への負担が原因で、明け方にトイレで目が覚めたり、夜間に頻繁に目が覚めることが増えてくることがあります。さらに、毒素の代謝産物の影響により、視野がぼやけるといった症状に悩まされることもあります。",
                fourthSenctences:
                    "更年期以降は、代謝が低下し、体内の解毒プロセスが遅くなる傾向があります。ホルモンの変化によって、気分の変動が生じやすく、また、認知機能の低下や体調不良が目立つことがあるかもしれません。さらに、酸化ストレスの増大により、肝臓や腎臓の解毒機能が低下し、慢性的な解毒機能の不全に陥りやすくなる可能性があります。しかし、解毒を意識した食事や、十分なミネラルと水分の摂取、汗をかく習慣、そして十分な睡眠を取り入れることで、年齢を重ねても元気でアクティブな生活を送ることが可能です。",
            },
        },
        {
            Component: Improvement,
            data: {
                wrapperWidth: "525rem", //default is 525
                mainColor: mainColor, //no
                description: "デトックスタイプのおすすめ生活改善",
                gap: 10,
                qualities1: [
                    {
                        content:
                            "新鮮でオーガニックな食品を選び、加工食品や保存料、添 \n     加物を避ける。",
                    },
                    {
                        content:
                            "抗酸化物質を豊富に含む食品（ベリー類、緑黄色野菜な \n     ど）を積極的に摂取する。",
                        liStyle: {
                            // letterSpacing: "-0.09rem"
                        },
                    },
                    {
                        content:
                            "水分、ミネラルをしっかり摂り、体内の毒素を排泄しやす \n     くする。",
                    },
                    {
                        content:
                            "グルテンフリー、カゼインフリーで腸内フローラを整える。",
                    },
                    {
                        content:
                            "室内の空気清浄機を使用し、環境中の毒素を減らす。",
                    },
                    {
                        content:
                            "家庭用品や化粧品の成分を見直し、化学物質を含まないも \n     のを選ぶ。",
                    },
                    {
                        content:
                            "飲み水は水道にフィルターをつかって。ペットボトル飲料 \n     をのまない",
                        liStyle: {
                            // letterSpacing: "-0.01rem"
                        },
                    },
                ],
                qualities2: [
                    { content: "汗を積極的にかく" },
                    { content: "シャワーではなく、湯船につかる時間を" },
                    { content: "殺虫剤や防虫剤は自然な成分のものを" },
                    { content: "睡眠時間を確保する" },
                    {
                        content:
                            "毎日しっかりと排便を　排便、排尿、汗をかく　解毒の３ \n     つの経路を大事に！",
                    },
                    { content: "添加物の入った食事を避ける" },
                    { content: "部屋の換気を" },
                    {
                        content:
                            "身の回りの洗剤（洗濯洗剤、食器洗剤、風呂掃除の洗剤、 \n     床掃除）などは、クエン酸、重曹などを",
                    },
                    {
                        content:
                            "シャンプーは　パラベンフリー、合成着色料フリー",
                    },
                ],
                oneColumnStatus: false, //Because there are 2 cols
                inContainerGap: 15, //default is      10    in the case of two cols
                eachUlWidth: 255, //default is     250

                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4rem", //default is ⚠In this case flex     0rem   so it's not defined in there
                    lineHeight: 1.2222, //default is  ----1.42857---- 20/14
                    fontSize: "9rem", //default is      14rem
                    whiteSpace: "pre-wrap",
                },
                ulStyle2: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4rem", //default is ⚠In this case flex     0rem   so it's not defined in there
                    lineHeight: 1.2222, //default is  ----1.42857---- 20/14
                    fontSize: "9rem", //default is      14rem
                    whiteSpace: "pre-wrap",
                },
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "18",
            },
        },
    ]);

    return (
        <>
            <PageWrapper>
                <EnhancedPeriodanalyze />
            </PageWrapper>
        </>
    );
};

export default Periodanalyze;
