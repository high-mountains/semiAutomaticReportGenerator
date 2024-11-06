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
                contentFontSize: "12rem", //The contentSize is same among a page so have to be global
                commonStyle: {},
                descriptions: [
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",//rem unit
                        heading: "GABA（γ-アミノ酪酸）代謝",
                        content:
                            "グルタミン酸をGABAに変換し、神経伝達の抑制を介して脳の興奮状態を調整します。 \n 関連遺伝子：GAD1, GABRA1,  \n GABRA2, GABRG2, ALDH5A1",
                        contentLineHeight: 1.448333, //lineheight of text
                        posInfo: {
                            top: "11rem",
                            left: "0rem",
                            width: "240rem"
                        },
                        //React DOM Styling of Wrapper paragraph of 2 sentences
                        etcStyle: {
                        },
                        //tailwind
                        etcClassName: "", 
                        fontSize: 12 // fontsize of text content(description, not header)
                    },
                    {
                        // the width and fontSize of MainHeader is fixed, so ti will be described in that component
                        wrapperWidth: "240rem",
                        heading: "グルタミン酸の代謝",
                        content:
                            "グルタミン酸をエネルギー生産や \n 神経伝達に利用するために変換・再生し、\n 脳機能や細胞の代謝活動を支えます。\n関連遺伝子：GLS2, GLUL, GLUD1,SLC1A1s",
                        contentLineHeight: 1.448333,
                        posInfo: {
                            bottom: "11rem",
                            left: "0rem",
                            width: "240rem"
                        },
                        //React DOM Styling
                        etcStyle: {
                        },
                        //tailwind
                        etcClassName: "", 
                        fontSize: 12
                    },
                ],
            },
        },
        // {
        //     Component: MeritIntro,
        //     data: {
        //         maincolor: maincolor,
        //         content: "",
        //     },
        // },
        // {
        //     Component: MeritDemerit,
        //     data: {
        //         merit: [
        //             {
        //                 title: "",
        //                 content: "",
        //             },
        //             // {
        //             //     title:"",
        //             //     content:""
        //             // },
        //             // {
        //             //     title:"",
        //             //     content:""
        //             // },
        //         ],
        //         demerit: [
        //             {
        //                 title: "",
        //                 content: "",
        //             },
        //         ],
        //     },
        // },
    ]);

    return (
        <>
            <PageWrapper>
                <PageHeader
                    subtitle={"Glutamate Type"}
                    mainTitle={"グルタメートタイプ"}
                ></PageHeader>
                <EnhancedMerit />
                {/* <Ablity/> */}
                <PageNumber>07</PageNumber>
            </PageWrapper>
        </>
    );
};

export default Merit;
