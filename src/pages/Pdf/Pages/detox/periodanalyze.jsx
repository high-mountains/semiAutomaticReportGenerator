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
                subtitle: "Detoxification Type",
                mainTitle: "デトックスタイプ",
            },
        },
        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "デトックスタイプの子どもは消化器系が敏感で、<span class='bold'>食べ物</span>や<span class='bold'>環境の変化</span>に過剰に反応しやすい傾向があります。解毒機能が未発達なため、環境毒素に敏感で、発育や行動に影響が出る可能性があり、<span class='bold'>アレルギー</span>や<span class='bold'>アトピー</span>のリスクも高まります。特定の毒素、例えば化学物質やカビ毒に敏感で、そのような場所を避ける傾向があり、周囲に理解されないと臆病と思われることもあります。",
                secondSenctences:
                    "ホルモンバランスの変化で肌荒れやアレルギーが強まり、心も不安定になりやすい時期です。ホルモンの変動により解毒能力も変化し、<span class='bold'>食生活</span>や<span class='bold'>環境の影響</span>を受けやすく、不安定な精神状態や肌トラブルが起こることがあります。第二次成長期には、<span class='blue'>ホルモン代謝物</span>が体内に蓄積しやすく、<span class='bold'>プラスチック製品</span>からの環境ホルモンが解毒負担を増やします。特に夜型生活が続くと<span class='bold'>肝臓の解毒機能</span>が低下しやすく、注意が必要です。",
                thirdSenctences:
                    "この時期はストレスや生活習慣が解毒能力に大きく影響し、仕事や家庭のストレスで肝臓の解毒機能が低下し、<span class='bold'>慢性的な疲労や消化器トラブル</span>が生じやすくなります。飲酒・喫煙・薬物使用による肝臓への負担も増え、代謝産物が蓄積しやすくなる「<span class='bold'>リバーストレス</span>（<span class='bold'>Liver Stress</span>）」状態に陥ることがあります。これにより、明け方に目が覚めたり、視野のぼやけなどの症状が出ることもあります。",
                fourthSenctences:
                    "更年期以降、代謝と解毒プロセスが低下しやすく、ホルモン変化により<span class='bold'>気分の変動</span>や<span class='bold'>認知機能の低下</span>が見られることがあります。また、酸化ストレスが増えることで肝臓や腎臓の解毒機能が低下し、慢性的な解毒不全に陥りやすくなります。しかし、解毒を意識した食事、ミネラルと水分の充分な摂取、汗をかく習慣、充分な睡眠を取り入れることで、健康で活力ある生活を保つことが可能です。",
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
                            "新鮮でオーガニックな食品を選び、加工食\n     品や保存料、添加物を避ける。"
                    },
                    {
                        content:
                            "抗酸化物質を豊富に含む食品（ベリー類、\n     緑黄色野菜など）を積極的に摂取する。"
                    },
                    {
                        content:
                            "水分やミネラルをしっかり摂り、体内の毒\n     素を排泄しやすくする。"
                    },
                    {
                        content:
                            "グルテンフリー、カゼインフリーを心掛け\n     、腸内フローラを整える。"
                    },
                    {
                        content:
                            "こまめな清掃や空気清浄機の使用により、\n     環境中の毒素を減らす。"
                    },
                ],
                qualities2: [
                    {
                        content:
                            "家庭用品や化粧品の成分を見直し、なるべ\n     く化学物質が含まれないものを選ぶ。"
                    },
                    {
                        content:
                            "水道にはろ過フィルターを使い、なるべく\n     ペットボトル飲料は飲まない。"
                    },
                    { content: "運動やサウナで積極的に汗をかく。" },
                    {
                        content:
                            "シャワーではなく、湯船につかる時間を作\n     る。"
                    },
                    {
                        content:
                            "殺虫剤や防虫剤は自然な成分のものを選\n     ぶ。"
                    },
                    { content: "充分な睡眠時間を確保する。" },
                ],
                oneColumnStatus: false, //Because there are 2 cols
                inContainerGap: 15, //default is      10    in the case of two cols
                eachUlWidth: 255, //default is     250

                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "5rem", //default is ⚠In this case flex     0rem   so it's not defined in there
                    lineHeight: 1.083, //default is  ----1.42857---- 20/14
                    fontSize: "12rem", //default is      14rem
                    whiteSpace: "pre-wrap",
                },
                ulStyle2: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "5rem", //default is ⚠In this case flex     0rem   so it's not defined in there
                    lineHeight: 1.083, //default is  ----1.42857---- 20/14
                    fontSize: "12rem", //default is      14rem
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
