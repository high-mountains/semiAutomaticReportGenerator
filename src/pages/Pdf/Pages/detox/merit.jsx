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
                imageURL: "bg/abilityGlutamate.svg",
                contentFontSize: "10rem", //The contentSize is same among a page so have to be global
                commonStyle: {},
                descriptions: [
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "269rem", //rem unit
                        heading: "脳の解毒",
                        content:
                            "神経細胞を保護し、酸化ストレスを減らすための独自の解毒システムを持っています。 \n 関連遺伝子：SOD1, SOD2, NOX1, NOX4",
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
                            "吸入された毒素や微粒子を体外に排出するためのフィルターの役割を果たします。 \n 関連遺伝子：SOD3",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            right: "0rem",
                            width: "230rem",
                       },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 10,
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "169rem",
                        heading: "肝臓の解毒",
                        content:
                            "体内で最も主要な解毒器官であり、薬物や有害物質を代謝して無害化します。 \n 関連遺伝子: SULT1A1, UGT1A1, NAT1, 　　　　　　NAT2, CYP450",
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
                        content: `血液をろ過して尿を生成し、毒素や老廃物を体外に排出します。水溶性の物質を効果的に除去する能力が高いです。 \n 関連遺伝子: PON1, GPX3`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "3rem",
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
                        content: `食物から吸収される有害物質を排出する役割があります。また、腸内細菌も毒素の代謝に寄与します。\n 関連遺伝子: GPX2`,
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
                        heading: "皮膚の解毒",
                        content: `紫外線や汚染物質からの酸化ストレスを防ぎ、汗を通じて一部の毒素を排出します。\n 関連遺伝子：GSTA1, GSTP1, NQ01`,
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
                    }
                ],
            },
        },
        {
            Component: MeritIntro,
            data: {
                maincolor: maincolor,
                content1: "解毒力が高いことによるメリットと解毒力を低いことによるデメリット",
                // content2: "ヒスタミンが脳で増えすぎることによるデメリット",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                merit: [
                    {
                        title: "炎症の軽減",
                        content:
                            "脳内の炎症が抑えられることで、認知症の発症リスクを減らすことができます。",
                            className: "text-[9rem] leading-[1.44777]",
                            fontSize: 9
                    },
                    {
                        title: "認知症のリスク低減",
                        content:
                            "脳内の炎症が抑えられることで、認知症の発症リスクを減らすことができます。",
                            className: "text-[9rem] leading-[1.44777]",
                            fontSize: 9
                    },
                    {
                        title: "精神の安定",
                        content:
                            "毒素の蓄積が減少することで、精神的な健康が向上し、不安やうつ症状の軽減につながります。",
                            fontSize: 9
                    },
                    {
                        title: "体力UP",
                        content:
                            "解毒により酸化ストレスが軽減し、ミトコンドリアによるエネルギー産生の効率がUPし体全体のエネルギーレベルが増加。",
                            fontSize: 9
                    },
                    {
                        title: "免疫UP",
                        content:
                            "酸化ストレスの軽減により免疫系が整い、自己免疫疾患のリスク軽減や慢性炎症の軽減、さらに感染症に対する抵抗力が増加。",
                            fontSize: 9
                    },
                ],
                demerit: [
                    {
                        title: "神経炎症",
                        content:
                            "毒素の蓄積により脳内で炎症が発生し、神経細胞が損傷を受けることがあります。",
                        className: "tracking-tightest",
                        fontSize: 9
                    },
                    {
                        title: "認知機能の低下",
                        content:
                            "脳内の炎症が長期間続くと、記憶力や判断力、集中力などの認知機能が低下する可能性があります。",
                            fontSize: 9
                    },
                    {
                        title: "精神的な不調",
                        content:
                            "毒素の影響で脳内の化学物質バランスが崩れ、不安やうつ症状が現れることがあります。",
                            className: "tracking-tightest",
                            fontSize: 9
                    },
                    {
                        title: "ホルモンバランスの乱れ",
                        content:
                            "環境ホルモンからの影響で月経不順、不妊、更年期症状の悪化や発達の影響、がんのリスクが高まることも。",
                            className: "tracking-tightest",
                            fontSize: 9
                    },
                ],
            },
        },
    ]);
    return(<>
    <PageWrapper>
        <PageHeader 
            subtitle={"Detox Type"}
            mainTitle={"デトックスタイプ"}>
        </PageHeader>
        <EnhancedMerit />
        <PageNumber>
            19
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
