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
            firstSenctences: "感情が豊かで、喜びや興奮を強く感じやすい傾向があります。新しいことに対する興味が尽きず、常に好奇心旺盛で探求心が強い一方で、カテコラミンが過剰になると多動性や注意欠陥、衝動的な行動が見られることがあり、感情のコントロールが難しくなる場合があります。さらに、癇癪を起こしやすくなることもあります。また、周囲の環境に敏感で、過度な刺激に対して過剰に反応してしまうことがあるため、穏やかで安心できる環境を整えることが非常に重要です。", 
            secondSenctences: "思春期に入ると、カテコラミンの影響が一層強まり、特にエネルギッシュで衝動的な行動が目立つようになります。この時期は、やる気に溢れ、多くのことに挑戦しようとする意欲が高まりますが、感情の波も激しくなるため、突然怒りや不安が爆発することもあります。友人や家族との人間関係において攻撃的な言動が見られ、衝突が起こりやすくなる一方で、強い集中力と情熱を持つことで、勉強や趣味の分野では優れた成果を上げる可能性も大いにあります。", 
            thirdSenctences: "社会的なプレッシャーや責任感から、ストレスを抱えやすくなる傾向があります。職場や家庭での役割を果たす中で、長期的なストレスが蓄積しやすく、不眠や感情の起伏が激しくなることもあります。これにより、短絡的な行動を取ってしまう場面も見られるかもしれません。一方で、そのエネルギーと集中力を活かし、大きな決断を下す力やキャリアや個人的な目標を達成するために努力を続ける力強さも持っています。この時期には、ストレス管理やリラクゼーションが心身の健康を維持するための重要な鍵となります。", 
            fourthSenctences: "更年期以降になると、ホルモンバランスの変化により、カテコラミンの影響が一層顕著になることがあります。この時期には、感情の揺れや不安が増しやすくなり、特にストレスや過去の経験がトリガーとなって、心の安定を保つのが難しくなることが考えられます。特にCOMT活性が低い場合、カテコラミンやエストロゲンの代謝が遅れることで、不安感や情緒不安定、ホットフラッシュといった更年期症状が強く現れる可能性が高まります。一方で、長年の経験から培われた瞬時の決断力や行動力、そして知恵を活かして、人生の新たなフェーズに柔軟に対応する力も備わっています。この時期には、心身のケアを怠らず、リラクゼーションや趣味を通じて自分自身をリフレッシュすることが、心の安定と健康を保つために非常に重要です。"}},
        {Component: Improvement, 
        data: {
            mainColor: mainColor,
            description: "カテコラミンタイプのおすすめ生活改善", 
            qualities1:[
                "カフェインや糖分の多い食品、加工食品はカテコラミンレベルを上昇させる可能性があるため控える。", 
                "節酒（ ALDH2の活性が低下すると、アルコール摂取時にカテコラミンの代謝が競合され、カテコラミンの過剰状態が生じる、悪酔い）", 
                "オメガ-腸内フローラの影響を受けやすいため、快便が重要です。",
                "オメガ-3脂肪酸（魚類、亜麻仁油、チアシードなど）を含む食品を摂取し、脳の健康をサポートする。",
                "抗酸化物質（果物や野菜）を多く摂取し、体内の酸化ストレスを軽減する。",
                "瞑想、深呼吸、ヨガなどのリラクゼーション法を取り入れ、ストレスを軽減する。",
                "十分な休息とリラックス時間を確保して、衝動性や怒りのマネージメント方法を学ぶ。",
                "規則正しい睡眠習慣を持ち、睡眠を確保する。",
                "寝る前のリラクゼーションルーティンを設け、睡眠の質を向上させる。",
            ],
            oneColumnStatus: true,
            liStyle: {lineHeight: 1.083333, fontSize:"12rem", display:"flex", direction:"column", gap:"2rem"},
            ulStyle: "text-[12rem] flex gap-[0rem]"}},
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
