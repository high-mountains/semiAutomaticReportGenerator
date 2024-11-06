import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(useSelector((state) => state.pdfData.histamineColor))
    const EnhancedPeriodanalyze = withPeriodanalyze([
        {Component: PageHeader, 
        data: {
            subtitle: "Histamine Type", 
            mainTitle: "ヒスタミンタイプ"}},
        {Component: Fourperiod, 
        data: {
            firstSenctences: "ヒスタミンタイプの子どもは、非常に敏感で感受性が豊かだとされています。環境の変化や他人の感情に敏感に反応し、音や光、食べ物に対しても過敏になることがあるかもしれません。アレルギー症状が幼い頃から現れることが多く、特に食物アレルギーやアトピー性皮膚炎、ぜんそくなどが発症しやすい傾向があります。ヒスタミンが過剰になると、不安を感じやすく、人見知りしやすいといった特徴が見られることがあります。このような子どもは繊細であり、周囲の大人からの適切なサポートが非常に重要になるでしょう。", 
            secondSenctences: "感情の起伏が激しくなることがあり、ヒスタミンの影響で不安感やイライラが強まることが考えられます。また、集中力を維持するのが難しくなる場合もあります。さらに、アレルギー反応が悪化しやすく、特に花粉症や慢性的な鼻炎に悩まされることが多いです。この時期には、自分自身の状態を理解し、ストレス管理が非常に重要になります。特に女性の場合、初潮を迎えるとヒスタミンがH1受容体を介して子宮平滑筋を収縮させるため、生理痛がひどくなることがあり、PMS（月経前緊張症）の症状が強く現れることがあります。一方で、ヒスタミンタイプの人は記憶力を活かして成績が良く、スケジュール管理が得意であることが多いです。メモを取る習慣があるため、日常生活や学業において効率的に物事を進める力を持っていることもあります。", 
            thirdSenctences: "ヒスタミンに関連する遺伝子異常の影響がさらに身体的に現れることがあります。消化器系にトラブルを抱えやすく、胃酸過多や胃炎、胃潰瘍などが発症しやすくなります。仕事や家庭のプレッシャーがかかる中で、ストレスが過剰になると不安感や頭痛が頻発することもあります。食物に含まれるヒスタミンに敏感になった結果、感覚過敏や匂い、化学物質過敏などに悩まされることもあります。", 
            fourthSenctences: "ホルモンバランスの変化が再びヒスタミン代謝に影響を与え、アレルギー症状や消化器症状が変動することがあります。女性の場合、エストロゲンの低下がヒスタミンの影響を強め、ホットフラッシュ（火照りやのぼせ）や不眠症が現れやすくなることが考えられます。男性の場合も、同様に睡眠障害や胃腸の問題が起こりやすくなる可能性があります。この時期には、ストレス管理に加え、アレルギーや消化器系のケアが特に重要となるでしょう。また、この時期には、周囲の音や環境に対して敏感になり、イライラしやすくなる傾向が見られることがあります。化学物質に対して過敏に反応することもあり、予定が思い通りに進まない状況に苛立ちを感じることがあるかもしれません。さらに、ルールに対して強いこだわりを持つ傾向が見られることもあるため、日常生活の中でこうした感情や反応に対する配慮が求められることがあります。"}},
        {Component: Improvement, 
        data: {
            mainColor: mainColor,
            description: "ヒスタミンタイプのおすすめ生活改善", 
            qualities1:[
                "ヒスタミンを多く含む食品（熟成チーズ、加工肉、発酵食品、アルコール、特定の魚類など）の摂取を控える。", 
                "アルコールの代謝産物のアセトアルデヒドはヒスタミン分解酵素を阻害のでアルコールを控える", 
                "グルテンフリー、カゼインフリーで腸内フローラを整える。",
                "新鮮な食品を選び、保存料や添加物が少ない食品を摂取する。",
                "抗ヒスタミン作用を持つ食品（だいこん、ターメリック、ニンジンなど）を積極的に摂取する。",
                "規則正しい睡眠習慣を持ち、睡眠を確保する。",
                "寝る前のリラクゼーションルーティンを設け、睡眠の質を向上させる。",
                "寝室にスマートフォンなどを持ち込まない、機内モードにしておく。寝室とWifiルーターの距離を取る。",
                "アレルゲンを避けるための対策を講じ、アレルギー症状を軽減する。",
                "家の清掃や空気清浄機の使用などで、環境中のアレルゲンを減らす。",
                "マイコトキシン（カビ毒）の原因となるような汚染された穀類や住居、エアコンなどを避ける。",
            ],
            oneColumnStatus: true,
            liStyle: {lineHeight: 1.2, fontSize:"10rem"},
            ulStyle: "gap-[2rem] text-[10rem]"}},
        {Component: PageNumber, 
        data: {
            children: "12"}}
    ])
    
    return(<>
        
        <PageWrapper>
            <EnhancedPeriodanalyze/>
        </PageWrapper>

    </>)
}

export default Periodanalyze;
