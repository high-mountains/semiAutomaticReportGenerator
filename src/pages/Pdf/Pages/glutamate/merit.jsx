import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import Ability from "../../../../components/Pdf/PagesComponents/Merit/Ability";
import MeritIntro from "../../../../components/Pdf/PagesComponents/Merit/MeritIntro";
import MeritDemerit from "../../../../components/Pdf/PagesComponents/Merit/MeritDemerit";

import { useState } from "react";
import { useSelector } from "react-redux";

const Merit = () => {
    const [maincolor, setMaincolor] = useState(
        useSelector((state) => state.pdfData.glutamateColor)
    );

    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "525",
                height: "300",
                imageURL: "bg/abilityGlutamate.svg",
                contentFontSize: "12rem",  
                descriptions: [
                    {
                        wrapperWidth: "240rem",  
                        heading: "GABA（γ-アミノ酪酸）代謝",
                        content:
                            "グルタミン酸を<span class='blue'>GABA</span>に変換し、<span class='blue'>神経伝達</span>の抑制を介して脳の興奮状態を調整します。 \n関連遺伝子：GAD1, GABRA1,  \nGABRA2, GABRG2, ALDH5A1",
                        contentLineHeight: 1.448333,  
                        posInfo: {
                            top: "11rem",
                            left: "0rem",
                            width: "240rem"
                        },
                        fontSize: 12,  
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "グルタミン酸の代謝",
                        content:
                            "グルタミン酸をエネルギー生産や \n神経伝達に利用するために変換・再生し、\n脳機能や細胞の代謝活動を支えます。\n関連遺伝子：GLS2, GLUL, GLUD1,SLC1A1s",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "11rem",
                            left: "0rem",
                            width: "240rem",
                        },
                        etcClassName: "",
                        fontSize: 12,
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "グルタミン酸の代謝調節",
                        content:
                            "グルタミン酸の濃度を調整し、過剰な神経興奮 \n       を防ぎ、脳内の化学バランスを維持し \n                 ます。\n                           関連遺伝子：DAO, DAOA",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "11rem",
                            right: "0rem",
                            width: "240rem"
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        wrapperWidth: "240rem",
                        heading: "                    ホモシステイン代謝",
                        content: `                        <span class='blue'>ホモシステイン</span>を他の物質に変換 \n                   し、体内の<span class='blue'>硫黄含有アミノ酸</span>のバラ  \n    ンスや<span class='blue'>メチレーションプロセス</span>をサポートします。\n 関連遺伝子：CBS, CTH`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "19rem",
                            right: "0rem",
                            width: "240rem"
                        },
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                ],
            },
        },
        {
            Component: MeritIntro,
            data: {
                maincolor: maincolor,
                content1: "グルタミン酸が脳で多いことによるメリットと",
                content2: "グルタミン酸が脳で多すぎることによるデメリット",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                merit: [
                    {
                        title: "記憶力の向上",
                        content:
                            "グルタミン酸は<span class='blue'>シナプスの可塑性</span>を高め、短期記憶と長期記憶の両方を強化します。",
                    },
                    {
                        title: "学習能力の向上",
                        content:
                            "学習の際に必要な神経ネットワークの形成と強化に貢献します。",
                    },
                    {
                        title: "集中力の向上",
                        content:
                            "グルタミン酸は注意力を高め、情報処理速度を向上させます。",
                    },
                ],
                demerit: [
                    {
                        title: "神経細胞の過剰刺激",
                        content:
                            "グルタミン酸が過剰に分泌されると、神経細胞が過剰に興奮し、最終的に細胞死（興奮毒性）を引き起こすことがあります。",
                    },
                    {
                        title: "神経変性疾患のリスク",
                        content:
                            "長期的に過剰なグルタミン酸は、アルツハイマー病やパーキンソン病などの神経変性疾患のリスクを高めることがあります。",
                    },
                    {
                        title: "精神的健康の問題",
                        content:
                            "不安、ストレス、うつ病などの精神的健康問題の悪化に寄与することがあります。",
                    },
                ],
            },
        },
    ]);

    return (
        <>
            <PageWrapper>
                <PageHeader
                    subtitle={"Glutamate Type"}
                    mainTitle={"グルタメートタイプ"}
                />
                <EnhancedMerit />
                <PageNumber>07</PageNumber>
            </PageWrapper>
        </>
    );
};

export default Merit;
