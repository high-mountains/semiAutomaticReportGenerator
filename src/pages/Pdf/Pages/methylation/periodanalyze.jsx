import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(useSelector((state) => state.pdfData.methylationColor))
    const EnhancedPeriodanalyze = withPeriodanalyze([
        {Component: PageHeader, 
        data: {
            subtitle: "Methylation Type", 
            mainTitle: "メチレーションタイプ"}},
        {Component: Fourperiod, 
        data: {
            firstSenctences: "メチレーションが弱い遺伝子を持つ子どもは、感受性が強く、繊細な性格を持つことがあるとされています。新しい環境や大きな音に対して敏感に反応し、ストレスを感じやすい傾向があります。一方で、興味を持ったことには強い集中力を発揮するものの、変化に対して不安を抱くことも少なくありません。メチレーションの不足により、神経発達に関わる遺伝子の適切な発現が阻害されることで、ASD（自閉スペクトラム症）やADHD（注意欠陥・多動性障害）のリスクが高まる可能性があります。また、学習障害や言語発達の遅れ、情緒不安定といった問題が現れることも考えられます。", 
            secondSenctences: "思春期には、ホルモンバランスの変化が著しくなり、メチレーションの影響がより強く現れることがあります。この時期には感情の波が激しくなり、自己表現に対する不安が増すことがある一方で、創造的な才能が開花しやすい時期でもあります。しかし、メチレーション不足によりエストロゲンの代謝が阻害されることで、月経困難症や月経痛、月経不順などの問題が生じる可能性があります。また、ホルモン合成に関連する酵素の発現にも影響を与えるため、第二次性徴が遅れることがあるかもしれません。さらに、免疫機能の低下によって風邪を引きやすくなることも考えられます。", 
            thirdSenctences: "大人になると、自身の感受性や独自性をより深く理解し、受け入れる力が強くなることがあります。職場や家庭でのストレスがメンタルヘルスに影響を与えることもあるため、ストレス管理がこれまで以上に重要となります。その一方で、自己表現や創造的な活動において、これまでの経験を活かして力を発揮することが増える時期でもあります。 Stress）」とも呼ばれ、肝臓への負担が原因で、明け方にトイレで目が覚めたり、夜間に頻繁に目が覚めることが増えてくることがあります。さらに、毒素の代謝産物の影響により、視野がぼやけるといった症状に悩まされることもあります。", 
            fourthSenctences: "更年期以降は、再びホルモンバランスの変化が起こり、メンタル面での浮き沈みが見られることがあります。感受性が一層鋭くなり、感情の波が激しくなることがある一方、人生経験を活かして深い洞察力を持つようになる時期でもあります。しかし、メチレーション不足があると、セロトニンやドーパミンなどの神経伝達物質の合成や代謝に影響を及ぼし、うつ病や不安障害、認知症のリスクが高まる可能性があります。また、メチレーションは神経細胞の保護や修復にも関わっており、不足すると神経細胞の損傷が進みやすく、アルツハイマー病やその他の神経変性疾患のリスクが増すことが考えられます。さらに、メチレーションはDNA修復機能にも関与しているため、この機能が低下すると遺伝子変異が蓄積しやすくなり、がんのリスクも高まることがあります。"}},
        {Component: Improvement, 
        data: {
            wrapperWidth: "525rem", //default is          535
            mainColor: mainColor,
            description: "メチレーションタイプのおすすめ生活改善", 
            qualities1:[
                {
                    content:"葉酸、ビタミンB6、ビタミンB12、メチオニンなど、メチレーションに必要な栄養素を含む食品（緑黄色野菜、豆 \n     類、卵、肉類、魚など）を積極的に摂取する。",
                },
                {
                    content: "コリンを多く含む食品（メチル基の供給源となる）：卵、大豆製品、鶏肉、ブロッコリー"
                },
                {
                    content: "ベタインを多く含む食品（ホモシステインをメチオニンにするときにメチル基を供給）：ビーツ、ホウレンソウ、ほ \n     たて"
                },
                {
                    content: "グルタチオンやメチオニン、SAMeなどのメチレーションサポートサプリメントを検討する。"
                },
                {
                    content: "加工食品や添加物の摂取を控え、新鮮な食材を選ぶ。"
                },
                {
                    content: "セロトニンを増やすために、同じリズムの繰り返しの運動、ウォーキングなどを積極的に取り入れる。"
                },
                {
                    content: "ドーパミンを増やすために、フェニルアラニンを含む食品（肉類、魚、大豆製品、卵など）チロシンを含む食品 \n   （肉、魚、大豆製品、ナッツ類）を摂取する"
                }
            ],
            // qualities1:[
            //     "汗を積極的にかく", 
            //     "シャワーではなく、湯船につかる時間を", 
            //     "殺虫剤や防虫剤は自然な成分のものを",
            //     "睡眠時間を確保する",
            //     "毎日しっかりと排便を　排便、排尿、汗をかく　解毒の３つの経路を大事に！",
            //     "添加物の入った食事を避ける",
            //     "部屋の換気を",
            //     "身の回りの洗剤（洗濯洗剤、食器洗剤、風呂掃除の洗剤、床掃除）などは、クエン酸、重曹などを",
            //     "シャンプーは　パラベンフリー、合成着色料フリー",
            // ],
            oneColumnStatus: true,
            ulStyle1: {
                display: "flex",
                flexDirection: "column",
                gap: "6rem",
                lineHeight: 1.448,
                fontSize: "10rem",
                whiteSpace: "pre-wrap"
            },

            // liStyle: {lineHeight: 1.25, fontSize:"9rem"},
            // ulStyle: "gap-[3rem] text-[12rem] tracking-tightest"
        }},
        {Component: PageNumber, 
        data: {
            children: "21"}}
    ])
    
    return(<>
        
        <PageWrapper>
            <EnhancedPeriodanalyze/>
        </PageWrapper>

    </>)
}

export default Periodanalyze;
