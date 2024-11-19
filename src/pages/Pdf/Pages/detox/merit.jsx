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
        useSelector((state) => state.pdfData.detoxColor)
    );
    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "527",
                height: "322",
                imageURL: "bg/abilityDetox.svg",
                contentFontSize: "10rem", //The contentSize is same among a page so have to be global
                commonStyle: {},
                descriptions: [
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "269rem", //rem unit
                        heading: "<span class='blue'>細胞質</span>の解毒",
                        content:
                            "体内の酸化ストレス管理において中心的な役割を果たし、細胞や組織の健康維持に不可欠です。\n関連遺伝子：SOD1",
                        contentLineHeight: 1.448333, //lineheight of text
                        posInfo: {
                            top: "0rem",
                            left: "0rem",
                            width: "269rem",
                        },
                        //React DOM Styling of Wrapper paragraph of 2 sentences
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 10, // fontsize of text content(description, not header)
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "230rem",
                        heading: "肺の解毒",
                        content:
                            "肺において酸化ストレスの制御と組織保護に不可欠な役割を果たします。\n関連遺伝子：SOD3",
                        contentLineHeight: 1.448,
                        posInfo: {
                            top: "0rem",
                            right: "0rem",
                            width: "230rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 10
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "169rem",
                        heading: "肝臓の解毒",
                        content:
                            "体内で最も主要な解毒器官であり、薬物や有害物質を代謝して無害化します。\n関連遺伝子: SULT1A1, UGT1A1, NAT1, 　　　　　　NAT2, CYP450, PON1等",
                        contentLineHeight: 1.448,
                        posInfo: {
                            top: "99rem",
                            right: "0rem",
                            width: "169rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 10,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",
                        heading: "腎臓の解毒",
                        content: `血液をろ過して尿を生成し、毒素や老廃物を体外に排出します。水溶性の物質を効果的に除去する能力が高いです。\n関連遺伝子: GPX3,  NOX4`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "-5rem",
                            right: "0rem",
                            width: "240rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 10,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",
                        heading: "腸の解毒",
                        content: `食物から吸収される有害物質を排出する役割があります。また、腸内細菌も毒素の代謝に寄与します。\n関連遺伝子: GPX2, NOX1`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "3rem",
                            left: "0rem",
                            width: "240rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 10,
                        contentClassName: "tracking-tightest"
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "173rem",
                        heading: "ミトコンドリアの解毒",
                        content: `エネルギー代謝が活発な組織で酸化ストレスを防ぎます。\n関連遺伝子：SOD2`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "102rem",
                            left: "0rem",
                            width: "173rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 10,
                        contentClassName: "tracking-tightest"
                    },
                ],
            },
        },
        {
            Component: MeritIntro,
            data: {
                maincolor: maincolor,
                content1:
                    "解毒力が高いことによるメリットと解毒力を低いことによるデメリット",
                // content2: "ヒスタミンが脳で増えすぎることによるデメリット",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                commonStyle: {
                    gap: "5rem",
                },
                inCommonStyle: {
                    gap: "2rem", // Here is optional instead of default value 3rem
                },
                contentStyle: {
                    fontSize: "10rem", //default value is ---12rem---
                    lineHeight: 1.444444,
                },

                merit: [
                    {
                        title: "炎症の軽減",
                        content:
                            "毒素の排泄が促進されることで、脳内の炎症が軽減され、認知機能の低下や精神的な不調を予防することができます。",
                        contentStyle: {
                            // letterSpacing: "-0.09rem",
                        }
                    },
                    {
                        title: "認知症のリスク低減",
                        content:
                            "脳内の炎症が抑えられることで、認知症の発症リスクを減らすことができます。"
                    },
                    {
                        title: "精神の安定",
                        content:
                            "毒素の蓄積が減少することで、精神的な健康が向上し、不安やうつ症状の軽減につながります。",
                    }
                ],
                demerit: [
                    {
                        title: "神経炎症",
                        content:
                            "毒素の蓄積により脳内で炎症が発生し、神経細胞が損傷を受けることがあります。"
                    },
                    {
                        title: "ホルモンバランスの乱れ",
                        content:
                            "環境ホルモンからの影響で、月経不順・不妊・更年期症状の悪化・がんのリスクが高まることがあります。"
                    },
                ],
            },
        },
    ]);
    return (
        <>
            <PageWrapper>
                <PageHeader
                    subtitle={"Detoxification Type"}
                    mainTitle={"デトックスタイプ"}
                ></PageHeader>
                <EnhancedMerit />
                <PageNumber>19</PageNumber>
            </PageWrapper>
        </>
    );
};

export default Merit;
