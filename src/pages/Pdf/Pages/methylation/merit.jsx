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
        useSelector((state) => state.pdfData.methylationColor)
    );
    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "525",
                height: "269",
                imageURL: "bg/abilityMethylation.svg",
                contentFontSize: "10rem", //The contentSize is same among a page so have to be global
                commonStyle: {},
                descriptions: [
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem", //rem unit
                        heading: "メチレーションサイクル",
                        content:
                            "メチレーションサイクルの中で、ホモシステインからメチオニンというアミノ酸を\n作り出すのを助ける遺伝子です。\n関連遺伝子：MTHFR, MTRR, MTR, \n 　　　　　　DHFR, SHMT1",
                        contentLineHeight: 1.448333, //lineheight of text
                        posInfo: {
                            top: "0rem",
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
                        heading: "ホモシステイン代謝",
                        content:
                            "ホモシステインというアミノ酸を他の物質に\n　　　　<span style='letter-spacing: -0.6rem;'>変えることで、体内のバランスを保つ\n　　　　　のに重要な役割を果たす遺伝子</span>\n　　　　　　です。\n　　　　　　関連遺伝子：AHCY, BHMT, CBS",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            right: "0rem",
                            width: "240rem",
                        },
                        //React DOM Styling
                        etcStyle: {
                            // tracking
                        },
                        //tailwind
                        etcClassName: "tracking-[-0.6rem]",
                        fontSize: 12,
                        contentClassName: "tracking-tightest leading-[1.4483]"
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "242rem",
                        heading: "　　　　硫黄アミノ酸代謝",
                        content:
                            "　　　　シスタチオンからシステインという \n　　アミノ酸を作るのを助け、体の中の硫黄を含むアミノ酸のバランスを保つ遺伝子です。\n関連遺伝子：CTH",
                        contentLineHeight: 1.448,
                        posInfo: {
                            bottom: "8rem",
                            right: "0rem",
                            width: "240rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "flex flex-col gap-[3rem]",
                        fontSize: 12,
                        contentClassName: "tracking-[-0.5rem] leading-[1.4483]"
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",
                        heading: "葉酸の取り込み・代謝",
                        content: `葉酸というビタミンを細胞に取り込ん\nで利用するのを助ける遺伝子です。\n関連遺伝子：FOLR1, FOLR2, SLC19A1`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "25rem",
                            left: "0rem",
                            width: "240rem",
                        },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "flex flex-col gap-[3rem]",
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
                content1: "メチレーション力を良くするメリットと",
                content2: "メチレーション力低下によるデメリット",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                commonStyle: {
                    gap: "5rem",
                },
                contentStyle: {
                    fontSize: "10rem", //default value is ---12rem---
                    lineHeight: 1.444444, //default value is ---1.448333---  12/17.38
                    // color: "red"
                },
                inCommonStyle: {
                    gap: "2rem", // Here is optional instead of default value 3rem
                },
                wrapperStyle: {
                    gap: "5rem",
                },
                merit: [
                    {
                        title: "認知機能の向上",
                        content:
                            "メチレーションは神経伝達物質の合成に関与し、認知機能の向上に寄与します。"
                    },
                    {
                        title: "気分の安定",
                        content:
                            "適切なメチレーションは、セロトニンやドーパミンなどの神経伝達物質のバランスを保ち、気分の安定に役立ちます。"
                    },
                    {
                        title: "ストレス耐性の向上",
                        content:
                            "メチレーションが改善されると、ストレス反応を調節するホルモンのバランスも整いやすくなります。"
                    },
                    {
                        title: "免疫機能の向上",
                        content:
                            "T細胞やB細胞などの免疫細胞の発達や機能が正常化し、免疫機能が向上します。"
                    },
                ],
                demerit: [
                    {
                        title: "神経系の機能低下",
                        content:
                            "神経伝達物質の合成が不充分になることで、認知機能や気分の不安定が生じる可能性があります。"
                    },
                    {
                        title: "ホルモン産生低下",
                        content:
                            "ホルモンバランスが崩れやすくなり、月経不順や更年期障害などの問題が発生しやすくなります。"
                    },
                    {
                        title: "解毒力低下",
                        content:
                            "メチレーションは肝臓の解毒機能にも関与しており、体内に有害物質が蓄積しやすくなります。"
                    },
                    {
                        title: "感染症抵抗力の低下",
                        content:
                            "免疫応答に関与する遺伝子が不適切にメチル化されると、免疫機能が低下し感染症のリスクが上がります。"
                    },
                    {
                        title: "慢性的な炎症",
                        content:
                            "免疫応答する<span class='blue'>サイトカイン</span>の生成に影響し、炎症が長引いたり過剰に反応することがあります。"
                    },
                ],
            },
        },
    ]);
    return (
        <>
            <PageWrapper>
                <PageHeader
                    subtitle={"Methylation Type"}
                    mainTitle={"メチレーションタイプ"}
                ></PageHeader>
                <EnhancedMerit />
                <PageNumber>22</PageNumber>
            </PageWrapper>
        </>
    );
};

export default Merit;
