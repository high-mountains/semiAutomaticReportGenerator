import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(
        useSelector((state) => state.pdfData.glutamateColor)
    );

    const EnhancedPeriodanalyze = withPeriodanalyze([
        {
            Component: PageHeader,
            data: {
                subtitle: "Glutamate Type",
                mainTitle: "グルタメートタイプ",
            },
        },

        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "グルタメートタイプの子どもは、非常に好奇心旺盛で、物事を学びたいという強い欲求を持つ可能性があります。知識を吸収するスピードが速いことが多く、周囲の大人たちを驚かせることもあるかもしれません。また、集中力が高い傾向があり、一つの遊びや学びに没頭することが見られることもあります。脳の発達が著しい時期であるため、過剰なグルタミン酸は発達障害や行動障害のリスクを高める可能性が指摘されています。",
                secondSenctences:
                    "思春期に入ると、知識欲がさらに高まり、深い思索や自己探求に強い興味を持つようになる可能性があります。自分が興味を持ったことに対しては驚くほどの集中力を発揮し、まるでオタクのように没頭することが多い一方で、興味がない分野にはほとんど関心を示さないこともあります。特に、好きな学業においては高い成績を残す反面、興味がない教科には力を入れない傾向があります。博士肌のように、周囲の評価を気にせずに自分の興味に邁進することができ、時には完璧を追い求めることもあります。この時期は感情の起伏が激しく、ストレスや不安を感じやすくなることが考えられ、ホルモンバランスの変化や脳の再構築が進む中、グルタミン酸が過剰になることで情緒不安定や衝動的な行動が増す可能性があるため、注意が必要だとされています。",
                thirdSenctences:
                    "大人になると、キャリアや家庭において、自分の高い集中力と豊富な知識を活かして成功を収めやすくなる傾向があります。特に、新しいことを学ぶ意欲が非常に強く、自己成長を続けるために努力を惜しまない姿勢が見られます。しかし、一方で、仕事や家庭におけるプレッシャーが増すことで、ストレスが蓄積しやすい時期でもあります。このようなストレスや生活習慣がグルタミン酸のレベルに影響を与えることがあり、その結果、慢性的な不安やうつ症状が悪化する可能性があるため、注意が必要です。",
                fourthSenctences:
                    "更年期以降、ホルモンバランスの変化がグルタミン酸の代謝に影響を与え、集中力や記憶力が低下することがあるとされています。また、この時期は神経変性疾患のリスクも徐々に高まると考えられています。グルタミン酸が過剰になると、神経毒性が生じる可能性があり、それが認知機能の低下や気分の変動と関連することがあるため、注意が必要です。",
            },
        },

        {
            Component: Improvement,
            data: {
                wrapperWidth: "525rem", //default is          535
                mainColor: mainColor,
                description: "グルタメートタイプのおすすめ生活改善",
                gap: 10, //10  only a value     10 (only)  gap between the descriptiona and cols
                qualities1: [
                    {
                        content:
                            "食品添加物としてグルタミン酸を多く含む食品、ジャンクフードなどの摂取を控える。",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "グルテンフリーを心掛け、野菜や果物などを多く摂る。",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "オメガ-3脂肪酸（魚類、亜麻仁油、チアシードなど）を含む食品を摂取し、脳の健康をサポートする。",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "神経毒性を緩和させるためにデトックス生活を心掛ける。薬味などの食材を取り入れる。",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content: "規則正しい睡眠習慣を持ち、睡眠を確保する。",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                    {
                        content:
                            "寝る前のリラクゼーションルーティンを設け、睡眠の質を向上させる。",
                        liStyle: {
                            //liStyle is Option
                        },
                    },
                ],
                // qualities2:[           // In the case of there is two cols in container
                //     {
                //         content: "新鮮でオーガニックな食品を選び、加工食品や保存料、添加物を避ける。",
                //         liStyle:{       //liStyle is Option
                //         }
                //     },
                //     {
                //         content: "新鮮でオーガニックな食品を選び、加工食品や保存料、添加物を避ける。",
                //         liStyle:{       //liStyle is Option
                //         }
                //     },
                //     {
                //         content: "新鮮でオーガニックな食品を選び、加工食品や保存料、添加物を避ける。",
                //         liStyle:{       //liStyle is Option
                //         }
                //     }
                // ],
                oneColumnStatus: true,
                inContainerGap: 15, //default is      10    in the case of two cols
                eachUlWidth: 255, //default is      250     in the case of two cols

                ulStyle1: {
                    // display: "flex",
                    // flexDirection: "column",
                    gap: "6rem", //default is ⚠In this case flex     0rem   so it's not defined in there
                    lineHeight: 1.44833, //default is  ----1.42857---- 20/14
                    fontSize: "12rem", //default is      14rem
                    // letterSpacing: "3rem", //default is      no     so it's not defined in there
                    // marginTop: "20rem"  //default is 10rem
                },
                // liStyle1: {},
                // ulStyle2: {},
                // liStyle2: {},
            },
        },

        {
            Component: PageNumber,
            data: {
                children: "06",
            },
        },
    ]);

    return (
        <>
            <PageWrapper>
                <EnhancedPeriodanalyze />
            </PageWrapper>
        </>
    );
};

export default Periodanalyze;
