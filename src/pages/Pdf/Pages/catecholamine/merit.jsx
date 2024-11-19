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
        useSelector((state) => state.pdfData.catecholamineColor)
    );

    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "525",
                height: "300",
                imageURL: "bg/abilityCatecholamine.svg",
                contentFontSize: "12rem", //The contentSize is same among a page so have to be global
                commonStyle: {},
                descriptions: [
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem", //rem unit
                        heading: "カテコラミンの分解・代謝",
                        content:
                            "体が過剰なストレスや興奮状態から平常に戻るために、カテコラミンを分解・代謝\nする重要なプロセスです。\n関連遺伝子：COMT, MAOA, MAOB, \nALDH2, SULT1A3, DBH, SLC6A2",
                        contentLineHeight: 1.448333, //lineheight of text
                        posInfo: {
                            top: "11rem",
                            left: "0rem",
                            width: "240rem",
                        },
                        //React DOM Styling of Wrapper paragraph of 2 sentences
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 12, // fontsize of text content(description, not header)
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",
                        heading: "カテコラミン受容体",
                        content:
                            "カテコラミンが結合して信号を細胞に伝える\n　　ことで、体内の様々な反応を引き起こし\n　　　　ます\n　　　　　　関連遺伝子：DRD1, DRD2, \n　　　　　　　　　　　　DRD4,ADRA2A",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "11rem",
                            right: "0rem",
                            width: "240rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 12,
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",
                        heading: "　　　　一酸化窒素 (NO) 合成",
                        content:
                            "　　　　　血管の拡張や神経伝達を調整する\n　　　　働きを持ちます\n　　関連遺伝子：NOS2, NOS3",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "53rem",
                            right: "0rem",
                            width: "240rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",
                        heading: "カテコラミンの合成",
                        content: `アミノ酸から作られ、脳や副腎で\n生成されます。\n関連遺伝子：TH, GCH1, DHFR`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "51rem",
                            left: "0rem",
                            width: "240rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
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
                content1: "ヒスタミンが脳で高いことによるメリットと",
                content2: "ヒスタミンが脳で増えすぎることによるデメリット",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                merit: [
                    {
                        title: "集中力の向上",
                        content:
                            "カテコラミンは注意力と集中力を高め、認知機能を向上させます。",
                    },
                    {
                        title: "瞬発力の向上",
                        content:
                            "カテコラミンはストレス状況下での迅速な反応や瞬発力を高め、緊急時の対応能力を向上させます。",
                    },
                    {
                        title: "モチベーションの向上",
                        content:
                            "ドーパミンは目標達成への意欲を高め、行動を促進します。",
                    },
                ],
                demerit: [
                    {
                        title: "情緒の不安定",
                        content:
                            "ノルアドレナリンとアドレナリンが高すぎると、イライラや攻撃的な行動（「キレる」状態）を引き起こすことがあります。",
                    },
                    {
                        title: "不安やストレスの増加",
                        content:
                            "高いカテコラミンレベルは慢性的な不安やストレスを引き起こし、心身の健康に悪影響を与えることがあります。",
                    },
                    {
                        title: "睡眠障害",
                        content:
                            "過剰なカテコラミンは覚醒状態を維持しすぎ、睡眠の質を低下させることがあります。",
                    },
                ],
            },
        },
    ]);
    return(<>
    <PageWrapper>
        <PageHeader 
            subtitle={"Catecholamine Type"}
            mainTitle={"カテコラミンタイプ"}>
        </PageHeader>
        
        <EnhancedMerit />

        <PageNumber>
            10
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
