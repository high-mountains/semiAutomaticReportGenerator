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
            firstSenctences: "成長と発達が急速に進む時期であり、細胞のエネルギー需要が非常に高いとされています。好奇心旺盛で活発に動き回り、エネルギーを大量に消費する一方で、エネルギー代謝に不全がある場合、成長や発達に影響を及ぼし、発育障害や学習障害のリスクが高まる可能性があります。また、エネルギー代謝が十分でないと、風邪を引きやすくなり、一度風邪を引くと治るのに時間がかかることもあります。外で活発に遊ぶことよりも、家でゆっくり過ごすことを好む場合があり、争いごとを避け、穏やかな生活を求める傾向が見られることがあります。", 
            secondSenctences: "ホルモンの変化が激しく、体と心の成長が著しいこの時期は、適切な栄養管理と心の問題に対処しなければ、エネルギー消費が増加し、情緒の不安定さや疲労感、集中力の低下が顕著になる可能性があります。その結果、学業やスポーツにも影響が出ることが考えられます。この時期の子どもは、図書館で読書をするなど、穏やかな生活を好むインドア派であることが多く、ゲームなどに熱中しやすく、夜型の生活に陥りがちです。また、風邪を引くと治りにくく、学校を休みがちになることもあり、心身のケアがより重要となります。", 
            thirdSenctences: "大人になるとエネルギー代謝は安定するものの、生活習慣やストレスの影響を受けやすくなります。仕事や家庭で多くの責任を抱え、時間管理に工夫が求められる一方で、エネルギー不足が悪化しやすく、メンタルヘルスや慢性的な疲労に悩まされることがあるかもしれません。特に、疲れからくるイライラや、タスクを先送りする傾向が強まることがあり、睡眠不足が続くと脳の働きが鈍くなりがちです。また、風邪を引いた際には記憶力の低下が見られることがあり、疲労が蓄積すると長時間の睡眠を必要とすることが増えることが考えられます。", 
            fourthSenctences: "更年期に入ると、ホルモンバランスの変化により、エネルギーレベルや代謝が低下しやすくなります。この時期には、骨密度の減少や筋力の低下、体重増加が気になることが多くなるでしょう。また、ミトコンドリアの機能がさらに低下しやすく、認知機能や運動能力の低下が顕著になる可能性があります。さらに、感染症を繰り返しやすくなったり、外出するのが億劫に感じることが増えたりすることも考えられます。脱毛や爪がもろくなる、筋肉痛が起きやすい、足がつりやすいといった身体的な変化も現れることがあります。"}},
        {Component: Improvement, 
        data: {
            wrapperWidth: "525rem", //default is          535
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
                    content:"コエンザイムQ10、カルニチン、ビタミンB群など、ミトコンドリア機能をサポートする栄養素を積 \n      極的に摂取する。",
                },
                {
                    content:"Lカルニチンを含む食品（赤身の肉、牛肉、ラム肉など）を積極的に摂取する。",
                },
                {
                    content:"抗ヒスタミン作用を持つ食品（だいこん、ターメリック、ニンジンなど）を積極的に摂取する。",
                },
                {
                    content:"ポリフェノールを豊富に含む食品（ダークチョコレート、リンゴ、トマト、タマネギ、シナモン、\n      オレガノなど）を積極的に摂取する。",
                },
                {
                    content:"元気になって運動したい！と思ったら、有酸素運動や筋力トレーニングを取り入れてみましょう。\n     ミトコンドリアの機能を刺激されてさらにエネルギーを感じるようになりますが、無理は禁物です。",
                },
                {
                    content:"睡眠をしっかりとる（睡眠不足はフリーラジカルの生成を増加させ、ミトコンドリアに酸化ストレ\n     スを与え、ミトコンドリアの機能が低下するから）",
                },
            ],
            oneColumnStatus: true,
            // liStyle: {lineHeight: 1.25, fontSize:"12rem"},
            // ulStyle: "flex flex-col gap-[8rem] text-[10rem] tracking-tightest"
            ulStyle1: {
                // display: "flex",
                // flexDirection: "column",
                gap: "4rem", //default is ⚠In this case flex     0rem   so it's not defined in there
                lineHeight: 1.25, //default is  ----1.42857---- 20/14
                fontSize: "12rem", //default is      14rem
                letterSpacing: "-0.48rem", //default is      no     so it's not defined in there
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
