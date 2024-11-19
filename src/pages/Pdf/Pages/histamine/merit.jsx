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
        useSelector((state) => state.pdfData.histamineColor)
    );
    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "540.91",
                height: "345",
                imageURL: "bg/abilityHistamine.svg",
                contentFontSize: "12rem", //The contentSize is same among a page so have to be global
                descriptions: [
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "177rem", //rem unit
                        heading: "ヒスタミンの合成",
                        content:
                            "アミノ酸であるヒスチジンをヒスタミンに変換することでヒスタミンを合成する。 \n 　　　関連遺伝子：HDC",
                        contentLineHeight: 1.448333, //lineheight of text
                        posInfo: {
                            top: "13.4rem",
                            left: "76rem",
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
                            "<span class='blue'>ステロイド</span>の産出を行う。 \n 関連遺伝子：CYP21A2",
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
                        wrapperWidth: "177rem",
                        heading: "ヒスタミンの代謝・分解",
                        content:
                            "ヒスタミンを無効化し、排出することで、体内のヒスタミンレベルが適切に調整する。 \n 関連遺伝子：HNMT, NAT2, \n 　　　　　　ALDH2, UGT1A4",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "133rem",
                            right: "0rem",
                            width: "177rem",
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
                        content: `グルテンや乳製品に対して過敏性や不耐症をおこす。 \n 関連遺伝子：HLA-DQ2.2,  HLA-DQ2.5 , HLA-DQ8,  \n 　　　　　　MCM6, CACNA1C`,
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
                merit: [
                    {
                        title: "覚醒と注意力の向上",
                        content:
                            "ヒスタミンは覚醒状態を維持し、注意力や集中力を高めます。",
                    },
                    {
                        title: "記憶と学習のサポート",
                        content:
                            "ヒスタミンは脳のシナプス可塑性に影響を与え、記憶の形成と学習能力を支援します。",
                    },
                ],
                demerit: [
                    {
                        title: "神経系の影響",
                        content:
                            "ヒスタミンが過剰になると、不安症状、頭痛、睡眠障害などを引き起こすことがあります。",
                        className: "tracking-tightest",
                        contentStyle: {
                            letterSpacing: "-0.6rem"
                        }
                    },
                    {
                        title: "アレルギー反応の悪化",
                        content:
                            "ヒスタミンが多すぎると、アレルギー反応が過剰に起こり、慢性的な鼻炎、皮膚炎、喘息などの症状が悪化します。",
                    },
                    {
                        title: "消化器症状の悪化",
                        content:
                            "ヒスタミンの過剰分泌により、胃酸が増加し、胃痛や胃炎、胃潰瘍のリスクが高まります。",
                            className: "tracking-tightest",
                            contentStyle: {
                                letterSpacing: "-0.6rem"
                            }
                        },
                ],
            },
        },
    ]);
    return(<>
    <PageWrapper>
        <PageHeader 
            subtitle={"Histamine Type"}
            mainTitle={"ヒスタミンタイプ"}>
        </PageHeader>
        <EnhancedMerit />
        <PageNumber>
            13
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
