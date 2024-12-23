import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(
        useSelector((state) => state.pdfData.histamineColor)
    );

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    const EnhancedPeriodanalyze = withPeriodanalyze([
        {
            Component: PageHeader,
            data: {
                subtitle: "Histamine Type",
                mainTitle: "ヒスタミンタイプ",
            },
        },
        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "ヒスタミンタイプの子どもは感受性が豊かで、環境や他人の感情に敏感に反応し、音や光、食べ物にも過敏になることがあります。幼少期から<span class='bold'>アレルギー症状</span>が出やすく、食物アレルギーやアトピー、ぜんそくが発症しやすい傾向があります。ヒスタミン過剰で不安を感じやすく、人見知りしやすくなることもあり、<span class='bold'>繊細な性格</span>のため大人の適切なサポートが重要です。",
                secondSenctences:
                    "ヒスタミンの影響で感情の起伏が激しくなり、不安やイライラが強まりやすく、集中力の維持が難しいこともあります。また、花粉症や鼻炎などアレルギーが悪化しやすく、<span class='bold'>ストレス管理</span>が重要です。特に女性は初潮後、生理痛やPMSが強まることがあります。一方で、<span class='bold'>記憶力</span>や<span class='bold'>スケジュール管理</span>が得意で、メモを取る習慣から効率的に物事を進める力を持っています。",
                thirdSenctences:
                    "ヒスタミン関連の遺伝子異常により、胃酸過多や胃炎、胃潰瘍など<span class='bold'>消化器系のトラブル</span>が起こりやすくなります。仕事や家庭でのストレスが過剰になると、不安感や頭痛が頻発しやすく、食物中のヒスタミンに敏感になることで、感覚過敏や匂い・化学物質過敏にも悩まされることがあります。",
                fourthSenctences:
                    "ホルモンバランスの変化がヒスタミン代謝に影響し、アレルギーや消化器症状が変動しやすくなります。女性は<span class='blue'>エストロゲン</span>低下で<span class='bold'>ホットフラッシュ</span>や<span class='bold'>不眠</span>が増え、男性も<span class='bold'>睡眠障害</span>や<span class='bold'>胃腸の問題</span>が起こりやすくなります。この時期はストレス管理に加え、アレルギーや消化器のケアが重要です。また、環境や音に敏感になり、化学物質に過敏反応することもあります。ルールへのこだわりが強く、日常生活での配慮が求められる場合もあります。",
            },
        },
        {
            Component: Improvement,
            data: {
                wrapperWidth: "525rem",
                mainColor: mainColor,
                description: "ヒスタミンタイプのおすすめ生活改善",
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>ヒスタミンを多く含む食品（熟成チーズ、加工肉、発酵食品、アルコール、特定の魚類など\nを控える。</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>なるべく飲酒を控える</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>新鮮な食材や、保存料や添加物が少ない食品、抗ヒスタミン作用を持つ食品（だいこん、ター\nメリック、ニンジンなど）を積極的に摂取する。</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>グルテンフリー、<span class='blue'>カゼインフリー</span>を心掛け、腸内フローラを整える。</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>こまめな清掃や空気清浄機の使用により、環境中のアレルゲンを減らしてアレルギー反応を抑\nえる。</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p><span class='blue'>マイコトキシン</span>（カビ毒）の原因となるような汚染された穀類や住居、エアコンなどを避け\nる。</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>寝室にスマートフォンなどを持ち込まない、機内モードにしておく。寝室とWifiルーターの距\n離を取る。</p>`,
                    },
                ],
                oneColumnStatus: true,
                liStyle: { lineHeight: 1.083 },
                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    lineHeight: 1.2,
                    fontSize: "12rem",
                },
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "12",
            },
        },
    ]);

    return (
        <PageWrapper>
            <EnhancedPeriodanalyze />
        </PageWrapper>
    );
};

export default Periodanalyze;
