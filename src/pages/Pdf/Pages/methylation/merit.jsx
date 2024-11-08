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
                imageURL: "bg/abilityGlutamate.svg",
                contentFontSize: "10rem", //The contentSize is same among a page so have to be global
                commonStyle: {},
                descriptions: [
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem", //rem unit
                        heading: "メチレーションサイクル",
                        content:
                            "メチレーションサイクルの中で、ホモシステインからメチオニンというアミノ酸を \n 作り出すのを助ける遺伝子です。 \n 関連遺伝子：MTHFR, MTRR, MTR,  \n 　　　　　　DHFR, SHMT1",
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
                        fontSize: 10, // fontsize of text content(description, not header)
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",
                        heading: "ホモシステイン代謝",
                        content:
                            "ホモシステインというアミノ酸を他の物質に \n 　　　　変えることで、体内のバランスを保つ \n 　　　　　のに重要な役割を果たす遺伝子 \n 　　　　　　です。\n 　　　　　　関連遺伝子：AHCY, BHMT, CBS",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            right: "0rem",
                            width: "240rem",
                       },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 10,
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",
                        heading: "硫黄アミノ酸代謝",
                        content:
                            "　　　　シスタチオンからシステインという \n 　　アミノ酸を作るのを助け、体の中の硫黄を含むアミノ酸のバランスを保つ遺伝子です。 \n 関連遺伝子：CTH, GCLC",
                        contentLineHeight: 1.448,
                        posInfo: {
                            bottom: "0rem",
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
                        heading: "葉酸の取り込み・代謝",
                        content: `葉酸というビタミンを細胞に取り込ん \n で利用するのを助ける遺伝子です。 \n 関連遺伝子：FOLR1, FOLR2, SLC19A1`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "0rem",
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
                commonStyle:{
                    gap: "5rem"
                },
                contentStyle:{
                    fontSize: "9rem", //default value is ---12rem---
                    lineHeight:1.444444,       //default value is ---1.448333---  12/17.38
                    // color: "red"
                },
                merit: [
                    {
                        title: "認知機能の向上",
                        content:
                            "メチレーションは神経伝達物質の合成に関与し、認知機能の向上に寄与します。",
                    },
                    {
                        title: "気分の安定",
                        content:
                            "適切なメチレーションは、セロトニンやドーパミンなどの神経伝達物質のバランスを保ち、気分の安定に役立ちます。",
                    },
                    {
                        title: "ストレス耐性の向上",
                        content:
                            "メチレーションが改善されると、ストレス反応を調節するホルモンのバランスも整いやすくなります。",
                    },
                    {
                        title: "免疫機能の向上",
                        content:
                            "T細胞やB細胞などの免疫細胞の発達や機能が正常化し免疫機能がUP",
                    },
                ],
                demerit: [
                    {
                        title: "神経系の機能低下",
                        content:
                            "神経伝達物質の合成が不十分になることで、認知機能や気分の不安定が生じる可能性があります。",
                    },
                    {
                        title: "ホルモン産生低下",
                        content:
                            "ホルモンバランスが崩れやすくなり、月経不順や更年期障害などの問題が発生しやすくなります。",
                    },
                    {
                        title: "解毒力低下",
                        content:
                            "メチレーションは肝臓の解毒機能にも関与しており、その力が低下すると体内に有害物質が蓄積しやすくなります。",
                    },
                    {
                        title: "感染症にかかりやすい",
                        content:
                            "免疫応答に関与する遺伝子が不適切にメチル化されると免疫系が低下し感染のリスク⇑",
                    },
                    {
                        title: "癌のリスク",
                        content:
                            "エピジェネティックな修復や調整が不完全により遺伝子の発現や抑制が適性の行われずがんのリスク⇑",
                    },
                    {
                        title: "慢性炎症",
                        content:
                            "免疫応答するサイトカインの生成に影響し炎症が遷延したり過剰に反応する。",
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
            22
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
