import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(useSelector((state) => state.pdfData.mitochodrialColor))
    const EnhancedPeriodanalyze = withPeriodanalyze([
        {Component: PageHeader, 
        data: {
            subtitle: "Mitochondrial Type", 
            mainTitle: "ミトコンドリアタイプ"}},
        {Component: Fourperiod, 
        data: {
            firstSenctences: "成長と発達が急速に進む時期で、細胞のエネルギー需要が高まります。活発に動き回りエネルギーを消費する一方、代謝が不充分だと成長や学習に影響し、発育や学習障害のリスクが高まる可能性があります。エネルギー不足で風邪を引きやすく、回復も遅くなる傾向があり、活発な遊びよりも<span class='bold'>穏やかに過ごすこと</span>を好むことがあります。", 
            secondSenctences: "ホルモン変化が激しいこの時期、<span class='bold'>適切な栄養管理</span>と<span class='bold'>心のケア</span>がないと、エネルギー消費増加による情緒不安定や疲労、集中力低下が顕著になり、学業やスポーツにも影響が出やすくなります。<span class='bold'>インドア派</span>で読書やゲームに熱中しやすく、夜型生活に陥りがちな傾向があり、風邪を引くと治りにくく学校を休みがちになるため、心身のケアが重要です。", 
            thirdSenctences: "大人になるとエネルギー代謝は安定しますが、生活習慣やストレスの影響を受けやすくなります。仕事や家庭で責任が増え、エネルギー不足により慢性的な疲労やメンタルヘルスの問題が生じやすくなり、疲れから<span class='bold'>イライラ</span>や<span class='bold'>タスクの先送り</span>が増えることがあります。睡眠不足が続くと脳の働きが低下し、風邪を引くと記憶力が落ちやすく、疲労が溜まると長時間の睡眠が必要になることが多いです。", 
            fourthSenctences: "更年期に入るとホルモンバランスの変化でエネルギーや代謝が低下し、<span class='bold'>骨密度</span>や<span class='bold'>筋力の減少</span>、<span class='bold'>体重増加</span>が気になりやすくなります。ミトコンドリア機能の低下で認知や運動能力が低下し、感染症にかかりやすく外出を億劫に感じることも増えます。また、脱毛や爪の脆さ、筋肉痛、足のつりなどの身体的変化が現れることもあります。"}},
        {Component: Improvement, 
        data: {
            wrapperWidth: "535rem", //default is          535
            mainColor: mainColor,
            description: "ミトコンドリアタイプのおすすめ生活改善", 
            qualities1:[
                {
                    content:"抗酸化物質を豊富に含む食品（ベリー類、緑黄色野菜類、緑茶など）を積極的に摂取する。",
                },
                {
                    content:"オメガ-3脂肪酸（魚類、亜麻仁油、チアシードなど）を含む食品を摂取し、炎症を軽減する。",
                },
                {
                    content:"コエンザイムQ10、カルニチン、ビタミンB群など、ミトコンドリア機能をサポートする栄養\n      素を積極的に摂取する。",
                },
                {
                    content:"L-カルニチンを含む食品（赤身の肉、牛肉、ラム肉など）を積極的に摂取する。",
                },
                {
                    content:"ポリフェノールを豊富に含む食品（ダークチョコレート、リンゴ、トマト、タマネギ、シナモ\n      ン、オレガノなど）を積極的に摂取する。",
                },
                {
                    content:"元気になり「運動したい！」と思ってから、有酸素運動や筋力トレーニングに取り組む。更にエ\n     ネルギーを感じるようになりますが、過度な運動には注意してください。",
                },
                {
                    content:"睡眠不足は、ミトコンドリアの機能低下を招くため、充分な睡眠時間を確保する。",
                },
            ],
            oneColumnStatus: true,
            liStyle: {lineHeight: 1.25, fontSize:"12rem"},
            // ulStyle: "flex flex-col gap-[8rem] text-[10rem] tracking-tightest"
            ulStyle1: {
                display: "flex",
                flexDirection: "column",
                gap: "4rem", //default is ⚠In this case flex     0rem   so it's not defined in there
                // lineHeight: 1.25, //default is  ----1.42857---- 20/14
                fontSize: "12rem", //default is      14rem
                // letterSpacing: "-0.48rem", //default is      no     so it's not defined in there
                whiteSpace: "pre-wrap"
                // marginTop: "20rem"  //default is 10rem
            },
        }},
        {Component: PageNumber, 
        data: {
            children: "15"}}
    ])
    
    return(<>
        
        <PageWrapper>
            <EnhancedPeriodanalyze/>
        </PageWrapper>

    </>)
}

export default Periodanalyze;
