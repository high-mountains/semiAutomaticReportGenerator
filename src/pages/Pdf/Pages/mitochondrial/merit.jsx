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
        useSelector((state) => state.pdfData.mitochodrialColor)
    );
    const EnhancedMerit = withPeriodanalyze([
        {
            Component: Ability,
            data: {
                width: "525",
                height: "305",
                imageURL: "bg/abilityGlutamate.svg",
                contentFontSize: "12rem", //The contentSize is same among a page so have to be global
                commonStyle: {},
                descriptions: [
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "229rem", //rem unit
                        heading: "エネルギー代謝と生成",
                        content:
                            "ミトコンドリア内でエネルギー（ATP）を作るために必要な酵素やプロテインを作り出す遺伝子。 \n 関連遺伝子：NDUFA1, NDUFS1, \n 　　　　　　ATP5F1A",
                        contentLineHeight: 1.448333, //lineheight of text
                        posInfo: {
                            top: "0rem",
                            left: "0rem",
                            width: "229rem",
                        },
                        //React DOM Styling of Wrapper paragraph of 2 sentences
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 12, // fontsize of text content(description, not header)
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "230rem",
                        heading: "クエン酸回路（TCAサイクル）",
                        content:
                            "細胞のエネルギーを生み出すクエン酸回路に関与する遺伝子。 \n 　　　関連遺伝子：OGDH",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "0rem",
                            right: "13rem",
                            width: "230rem",
                       },
                        //React DOM Styling
                        etcStyle: {},
                        //tailwind
                        etcClassName: "",
                        fontSize: 12,
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "167rem",
                        heading: "脂肪酸と糖の代謝",
                        content:
                            "脂肪や糖を分解してエネルギー \n に変えるプロセスに関わる遺伝子。 \n 関連遺伝子：PANK2, G6PD,  \n 　　　　　　ACAT1",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "65rem",
                            right: "0rem",
                            width: "167rem",
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
                        wrapperWidth: "398rem",
                        heading: "酸化的リン酸化と電子伝達系",
                        content: `酸素を使ってエネルギーを生成する過程（電子伝達系）に関わる遺伝子。 \n 関連遺伝子：COX4I2, CYC1, SDHB`,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "1rem",
                            right: "0rem",
                            width: "398rem",
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
                        wrapperWidth: "170rem",
                        heading: "コエンザイムQの合成",
                        content: `ミトコンドリアでのエネルギー生成を助けるコエンザイムQ（ユビキノン）を作る遺伝子。 \n 関連遺伝子：COQ2, COQ7 `,
                        contentLineHeight: 1.448333,
                        posInfo: {
                            top: "130rem",
                            left: "0rem",
                            width: "170rem",
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
                content1: "ミトコンドリアによるエネルギー産生力を良くするメリット",
                content2: "ミトコンドリアによるエネルギー産生力低下によるデメリット",
            },
        },
        {
            Component: MeritDemerit,
            data: {
                merit: [
                    {
                        title: "認知機能の向上",
                        content:
                            "エネルギー供給が改善されることで、集中力や記憶力、思考力が向上します。",
                            className: "leading-[1.44777]",
                            fontSize: 9,
                            gap:1
                    },
                    {
                        title: "気分の安定",
                        content:
                            "十分なエネルギーが供給されることで、精神的な安定が保たれ、不安やうつ症状の軽減が期待されます。",
                            className: "leading-[1.44777]",
                            fontSize: 9,
                            gap:1

                    },
                    {
                        title: "疲労感の軽減",
                        content:
                            "脳のエネルギーが増えることで、慢性的な疲労感やBrain Fogの症状が緩和されます。",
                            fontSize: 9,
                            gap:1
                    },
                    {
                        title: "免疫力の向上",
                        content:
                            "免疫細胞へのエネルギーが供給され、免疫力が向上します。",
                            fontSize: 9,
                            gap:1
                    },
                    {
                        title: "代謝機能の向上",
                        content:
                            "神経伝達物質の代謝、ホルモン代謝、解毒代謝など体のメカニズムで重要となる代謝が向上し、本来の力を発揮しやすくなります。",
                            fontSize: 9,
                            gap:1
                    },
                ],
                demerit: [
                    {
                        title: "ATP不足",
                        content:
                            "身体のすべての動きや代謝活動がATPに依存しているため、エネルギー不足は身体機能全般に悪影響を与えます。",
                        className: "tracking-tightest leading-[1.44777]",
                        fontSize: 9,
                        gap:1
                    },
                    {
                        title: "筋力低下",
                        content:
                            "筋肉のエネルギー不足により、筋力が低下し、運動耐性が減少します。",
                            className: "leading-[1.44777]",
                            fontSize: 9,
                            gap:1
                    },
                    {
                        title: "免疫力低下",
                        content:
                            "エネルギー不足により、免疫細胞の働きが低下し、感染症に対する抵抗力が弱まります。",
                            className: "tracking-tightest leading-[1.44777]",
                            fontSize: 9,
                            gap:1
                    },
                    {
                        title: "認知機能の低下",
                        content:
                            "脳の神経細胞は、信号伝達、神経伝達物質の合成など、さまざまな活動に大量のATPを消費するため。",
                            className: "tracking-tightest leading-[1.44777]",
                            fontSize: 9,
                            gap:1
                    },
                    {
                        title: "解毒機能の低下",
                        content:
                            "解毒プロセスは、特に肝臓で行われる重要な生理機能で、体内の有害物質を無毒化し、排出するためにエネルギーを必要とされる。",
                            className: "tracking-tightest leading-[1.44777]",
                            fontSize: 9,
                            gap:1
                    },
                ],
            },
        },
    ]);
    return(<>
    <PageWrapper>
        <PageHeader 
            subtitle={"Mitochondrial Type"}
            mainTitle={"ミトコンドリアタイプ"}>
        </PageHeader>
        <EnhancedMerit />
        <PageNumber>
            16
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
