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
                    "グルタメートタイプの子どもは<span class='bold'>好奇心旺盛</span>で、<span class='bold'>学びたいという強い欲求</span>を持ち、<span class='bold'>知識吸収が速いこと</span>が多いです。集中力も高く、特定の遊びや学びに没頭する傾向があります。ただし、脳の発達が著しい時期に過剰なグルタミン酸は、<span class='bold'>脳の発達や行動への影響リスクがある</span>とされています。",
                secondSenctences:
                    "思春期に入ると、知識欲がさらに高まり、<span class='bold'>自己探求</span>に強い関心を示すようになります。興味がある分野には驚異的な集中力を発揮し、没頭する一方、興味のない分野にはほとんど関心を示さない傾向があります。好きな学業では高成績を収める反面、他の教科には力を入れないこともあります。また、周囲の評価を気にせず自分の興味に邁進し、完璧を求めることもあります。この時期は<span class='bold'>感情の起伏が激しく</span>、<span class='blue'>ホルモンバランス</span>の変化や脳の再構築の影響で、過剰なグルタミン酸が<span class='bold'>情緒不安定や衝動的な行動</span>を引き起こす可能性があるため、注意が必要です。",
                thirdSenctences:
                    "大人になると、高い集中力と知識を活かしてキャリアや家庭で成功しやすく、<span class='bold'>新しいことを学び続けよう</span>とする姿勢が強く見られます。しかし、仕事や家庭のプレッシャーから<span class='bold'>ストレス</span>が蓄積しやすくなり、それがグルタミン酸レベルに影響を与え、<span class='bold'>慢性的な不安</span>や<span class='bold'>うつ症状</span>を悪化させる可能性があるため、注意が必要です。",
                fourthSenctences:
                    "更年期以降、ホルモンバランスの変化がグルタミン酸の代謝に影響を与え、<span class='bold'>集中力</span>や<span class='bold'>記憶力</span>が低下することがあるとされています。また、この時期は<span class='bold'>神経変性疾患</span>のリスクも徐々に高まると考えられています。グルタミン酸が過剰になると、神経毒性が生じる可能性があり、それが<span class='bold'>認知機能の低下</span>や<span class='bold'>気分の変動</span>と関連することがあるため、注意が必要です。",
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
                    },
                    {
                        content:
                            "<span class='blue'>グルテンフリー</span>を心掛け、野菜や果物などを多く摂る。",
                    },
                    {
                        content:
                            "オメガ-3脂肪酸（魚類、亜麻仁油、チアシードなど）を含む食品を摂取し、脳の健康をサポー \n    トする。",
                    },
                    {
                        content:
                            "神経毒性を緩和させるためにデトックス生活を心掛ける。薬味などの食材を取り入れる。",
                    },
                    {
                        content: "規則正しい睡眠習慣を持ち、睡眠を確保する。",
                    },
                    {
                        content:
                            "寝る前のリラクゼーションルーティンを設け、睡眠の質を向上させる。",
                    },
                ],
                oneColumnStatus: true,
                inContainerGap: 15, //default is      10
                eachUlWidth: 255, //default is      250

                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "6rem", //default is      0rem   so it's not defined in there
                    lineHeight: 1.448333, //default is  ----1.42857---- 20/14
                    fontSize: "12rem", //default is      14rem
                },
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
