import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(useSelector((state) => state.pdfData.catecholamineColor))
    const EnhancedPeriodanalyze = withPeriodanalyze([
        {Component: PageHeader, 
        data: {
            subtitle: "Catecholamine Type", 
            mainTitle: "カテコラミンタイプ"}},
        {Component: Fourperiod, 
        data: {
            firstSenctences: "感情が豊かで、喜びや興奮を強く感じやすく、新しいことへの好奇心が旺盛です。しかし、カテコラミンが過剰になると多動や注意欠陥、衝動的な行動が現れ、<span class='bold'>感情のコントロール</span>が難しくなりやすい傾向があります。また、癇癪を起こしやすく、過度な刺激に敏感に反応しがちなため、穏やかで安心できる環境を整えることが重要です。", 
            secondSenctences: "思春期にはカテコラミンの影響でエネルギッシュかつ衝動的な行動が目立ち、やる気に満ちて多くのことに挑戦しようとする意欲が高まります。しかし、感情の波が激しく、<span class='bold'>突然の怒り</span>や<span class='bold'>不安</span>が爆発しやすく、友人や家族との関係で衝突が増えることもあります。一方で、強い集中力と情熱により、勉強や趣味で<span class='bold'>優れた成果</span>を上げる可能性も高いです。", 
            thirdSenctences: "社会的なプレッシャーや責任感から、ストレスを抱えやすく、長期的に蓄積すると<span class='bold'>不眠や感情の起伏</span>が激しくなることがあります。これにより、短絡的な行動に出ることもありますが、エネルギーと集中力を活かして大きな決断を下し、目標達成に向け努力を続ける力も備えています。この時期には、<span class='bold'>ストレス管理</span>や<span class='bold'>リラクゼーション</span>が健康維持の鍵となります。", 
            fourthSenctences: "更年期以降、ホルモンバランスの変化でカテコラミンの影響が強まり、感情の揺れや不安が増えやすくなります。<span class='blue'>COMT活性</span>が低い場合、<span class='bold'>不安感</span>や<span class='blue'>ホットフラッシュ</span>などの症状が強まる可能性がありますが、経験に基づく決断力と柔軟さも備わっています。リラクゼーションや趣味で心身をリフレッシュすることが重要です。"}},
            {
                Component: Improvement,
                data: {
                    wrapperWidth: "525rem", //default is          535
                    mainColor: mainColor,
                    description: "カテコラミンタイプのおすすめ生活改善",
                    gap: 10, //10  only a value     10 (only)  gap between the descriptiona and cols
                    qualities1: [
                        
                        {
                            content:
                                "カフェインや糖分の多い食品、加工食品はカテコラミンレベルを上昇させる可能性があるため \n     控える。",
                        },
                        {
                            content:
                                "飲酒すると顔が赤くなったり頭痛や吐き気を感じやすい場合は、カテコラミンの代謝が阻害さ \n     れ、カテコラミンの過剰状態が生じているため、飲酒量や頻度に調節する。",
                        },
                        {
                            content:
                                "<span class='blue'>腸内フローラ</span>の影響を受けやすいため、便秘にならないように注意する。",
                        },
                        {
                            content:
                                "オメガ-3脂肪酸（魚類、亜麻仁油、チアシードなど）を含む食品を摂取し、脳の健康をサポー \n    トする。",
                        },
                        {
                            content: "抗酸化物質（果物や野菜）を多く摂取し、体内の<span class='blue'>酸化ストレス</span>を軽減する。",
                        },
                        {
                            content:
                                "瞑想、深呼吸、ヨガなどのリラクゼーション法を取り入れ、ストレスを軽減する。",
                        },
                        {
                            content:
                                "充分な休息とリラックス時間を確保して、衝動性や怒りのマネージメント方法を学ぶ。",
                        }
                    ],
                    
                    oneColumnStatus: true,
                    ulStyle1: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "5rem", //default is      0rem   so it's not defined in there
                        lineHeight: 1.333, //default is  ----1.42857---- 20/14
                        fontSize: "12rem", //default is      14rem
                    },
                },
            },
        {Component: PageNumber, 
        data: {
            children: "09"}}
    ])
    
    return(<>
        
        <PageWrapper>
            <EnhancedPeriodanalyze/>
        </PageWrapper>

    </>)
}

export default Periodanalyze;
