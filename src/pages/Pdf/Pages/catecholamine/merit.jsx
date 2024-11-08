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
                imageURL: "bg/abilityGlutamate.svg",
                contentFontSize: "12rem", //The contentSize is same among a page so have to be global
                commonStyle: {},
                descriptions: [
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "177rem", //rem unit
                        heading: "ヒスタミンの合成",
                        content:
                            "アミノ酸であるヒスチジンをヒスタミンに変換することでヒスタミンを合成する。 \n 　　　関連遺伝子：HDC",
                        contentLineHeight: 1.448333, //lineheight of text
                        posInfo: {
                            top: "11rem",
                            left: "74rem",
                            width: "177rem",
                        },
                        //React DOM Styling of Wrapper paragraph of 2 sentences
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 12, // fontsize of text content(description, not header)
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "160.79rem",
                        heading: "抗炎症作用",
                        content:
                            "ステロイドの産出を行う。 \n 関連遺伝子：CYP21A2",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "11rem",
                            right: "106.12rem",
                            width: "160.79rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 12,
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "177.45rem",
                        heading: "ヒスタミンの代謝・分解",
                        content:
                            "ヒスタミンを無効化し、排出することで、体内のヒスタミンレベルが適切に調整する。 \n 関連遺伝子：HNMT, NAT2,  \n                 ALDH2, UGT1A4",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "107rem",
                            right: "0rem",
                            width: "177.45rem",
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
                        wrapperWidth: "304.54rem",
                        heading: "グルテン過敏症/乳糖不耐性/電磁波感受性",
                        content: `グルテンや乳製品に対して過敏性や不耐症をおこす。  \n 関連遺伝子：HLA-DQ2.2,  HLA-DQ2.5 , HLA-DQ8, \n 　　　　　　MCM6, CACNA1C`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "1rem",
                            right: "87.46rem",
                            width: "304.54rem",
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
                        wrapperWidth: "181.54rem",
                        heading: "ヒスタミンの作用を \n 仲介する受容体関連",
                        content: `特定の受容体に結合することで、 \n アレルギー反応などさまざまな \n 生理的反応を引き起こす。 \n 関連遺伝子：HRH1, HRH2, \n 　　　　　　HRH3, HRH4`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "75rem",
                            left: "0rem",
                            width: "181.54rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 12,
                        contentClassName: "tracking-tightest"
                    }
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
                commonStyle:{
                    // gap: "5rem"  // Here is optional instead of default value 8rem
                },
                inCommonStyle:{
                    // gap: "2rem"     // Here is optional instead of default value 3rem
                },
                titleStyle:{
                    //  HERE  WILL  BE  NO  CHANGE

                    // fontSize: "9rem", //default value is ---12rem---
                    // lineHeight:1.444444       //default value is ---1.448333---  12/17.38
                },
                contentStyle:{
                    // fontSize: "9rem", //default value is ---12rem---
                    // lineHeight:1.444444       //default value is ---1.448333---  12/17.38
                },
                merit: [
                    {
                        title: "集中力の向上",
                        content:
                            "カテコラミンは注意力と集中力を高め、認知機能を向上させます。",
                        // titleStyle:{
                        //     // fontSize: "9rem"  //fontSize could be changed
                        // },
                        //     contentStyle:{
                        //         // letterSpace: "-0.5rem" // here could be the minus letter spacing
                        // }    
                    },
                    {
                        title: "瞬発力の向上",
                        content:
                            "カテコラミンはストレス状況下での迅速な反応や瞬発力を高め、緊急時の対応能力を向上させます。",
                        // titleStyle:{
                        //     // fontSize: "9rem"  //fontSize could be changed
                        // },
                        //     contentStyle:{
                        //         // letterSpace: "-0.5rem" // here could be the minus letter spacing
                        // }
                    },
                    {
                        title: "モチベーションの向上",
                        content:
                            "ドーパミンは目標達成への意欲を高め、行動を促進します。",
                        // titleStyle:{
                        //     // fontSize: "9rem"  //fontSize could be changed
                        // },
                        //     contentStyle:{
                        //         // letterSpace: "-0.5rem" // here could be the minus letter spacing
                        // }
                    },
                ],
                demerit: [
                    {
                        title: "情緒の不安定",
                        content:
                            "ノルアドレナリンとアドレナリンが高すぎると、イライラや攻撃的な行動（「キレる」状態）を引き起こすことがあります。",
                        // titleStyle:{
                        //     // fontSize: "9rem"  //fontSize could be changed
                        // },
                        //     contentStyle:{
                        //         // letterSpace: "-0.5rem" // here could be the minus letter spacing
                        // }
                    },
                    {
                        title: "不安やストレスの増加",
                        content:
                            "高いカテコラミンレベルは慢性的な不安やストレスを引き起こし、心身の健康に悪影響を与えることがあります。",
                        // titleStyle:{
                        //     // fontSize: "9rem"  //fontSize could be changed
                        // },
                        //     contentStyle:{
                        //         // letterSpace: "-0.5rem" // here could be the minus letter spacing
                        // }
                    },
                    {
                        title: "睡眠障害",
                        content:
                            "過剰なカテコラミンは覚醒状態を維持しすぎ、睡眠の質を低下させることがあります。",
                        // titleStyle:{
                        //     // fontSize: "9rem"  //fontSize could be changed
                        // },
                        //     contentStyle:{
                        //         // letterSpace: "-0.5rem" // here could be the minus letter spacing
                        // }
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
            13
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
